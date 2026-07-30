<?php
// ============================================================
// Importa um novo simulado (.txt) enviado pelo navegador:
// valida, salva em simulados/, atualiza manifest.json e
// regenera exams.js. So funciona no modo servidor PHP.
// ============================================================
header('Content-Type: application/json; charset=utf-8');
require __DIR__ . '/lib_exams.php';

function respond($status, $data) {
    http_response_code($status);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Metodo nao permitido.']);
}

if (!isset($_FILES['simuladoFile']) || $_FILES['simuladoFile']['error'] !== UPLOAD_ERR_OK) {
    respond(400, ['ok' => false, 'error' => 'Nenhum arquivo enviado ou erro no upload.']);
}

$upload = $_FILES['simuladoFile'];
$origName = $upload['name'];

$maxBytes = 3 * 1024 * 1024; // 3MB e mais que suficiente para um banco de questoes em texto
if ($upload['size'] > $maxBytes) {
    respond(400, ['ok' => false, 'error' => 'Arquivo muito grande (limite: 3MB).']);
}

$ext = strtolower(pathinfo($origName, PATHINFO_EXTENSION));
if ($ext !== 'txt') {
    respond(400, ['ok' => false, 'error' => 'O arquivo precisa ter extensao .txt']);
}

$content = file_get_contents($upload['tmp_name']);
if ($content === false || trim($content) === '') {
    respond(400, ['ok' => false, 'error' => 'Arquivo vazio ou ilegivel.']);
}

$parsed = parse_simulado_txt($content);
if (empty($parsed['questions'])) {
    respond(422, ['ok' => false, 'error' => 'Nao foi possivel extrair nenhuma questao do arquivo. Confira o formato em FORMATO_QUESTOES.md']);
}

$dir = __DIR__ . '/simulados';
$overwrite = isset($_POST['overwrite']) && $_POST['overwrite'] === '1';

// Nome de arquivo seguro (nunca usar o nome original diretamente).
$base = preg_replace('/[^a-zA-Z0-9_\-]/', '_', pathinfo($origName, PATHINFO_FILENAME));
if ($base === '') $base = 'simulado_' . time();
$fname = $base . '.txt';

$meta = $parsed['meta'];
$newId = $meta['id'] ?: $base;

$files = ve_load_manifest($dir);
$isNewFile = !in_array($fname, $files, true);

if ($isNewFile) {
    // Verifica se o ID do simulado ja existe em outro arquivo.
    $existingExams = ve_build_exams_array($dir, $files);
    foreach ($existingExams as $idx => $ex) {
        if ($ex['id'] === $newId) {
            if (!$overwrite) {
                respond(409, ['ok' => false, 'error' => "Ja existe uma prova com ID '$newId'. Confirme para sobrescrever.", 'conflictId' => $newId]);
            }
            // Remove a entrada antiga do manifest (mantem o .txt antigo no disco).
            $oldFname = $files[$idx];
            $files = array_values(array_filter($files, function($f) use ($oldFname) { return $f !== $oldFname; }));
            break;
        }
    }
}

file_put_contents($dir . '/' . $fname, $content, LOCK_EX);

if ($isNewFile) {
    $files[] = $fname;
    ve_save_manifest($dir, $files);
}

$exams = ve_regenerate_exams_js($dir, __DIR__ . '/exams.js');

respond(200, [
    'ok' => true,
    'id' => $newId,
    'title' => $meta['title'] ?: $newId,
    'filename' => $fname,
    'questionCount' => count($parsed['questions']),
    'totalExams' => count($exams)
]);
