<?php
// ============================================================
// CONVERSOR: le todos os .txt de simulados/ e gera o exams.js
// (o fallback offline usado quando o app roda sem servidor PHP).
//
// Rode assim, dentro da pasta do projeto:
//    php gerar_exams.php
//
// Depois de adicionar ou editar qualquer .txt em simulados/,
// rode este comando para atualizar o modo "duplo clique".
// (No modo com servidor/site isso nem e necessario: o app le
//  os .txt direto via simulados.php.)
// ============================================================
require __DIR__ . '/parser.php';

$dir = __DIR__ . '/simulados';
$manifestFile = $dir . '/manifest.json';

$files = [];
if (file_exists($manifestFile)) {
    $manifest = json_decode(file_get_contents($manifestFile), true);
    if (is_array($manifest) && isset($manifest['files'])) $files = $manifest['files'];
}
if (empty($files)) {
    foreach (glob($dir . '/*.txt') as $f) $files[] = basename($f);
}

$exams = [];
foreach ($files as $fname) {
    $path = $dir . '/' . $fname;
    if (!file_exists($path)) { echo "  ! ignorado (nao existe): $fname\n"; continue; }
    $parsed = parse_simulado_txt(file_get_contents($path));
    $meta = $parsed['meta'];
    if (!$meta['id'])    $meta['id'] = pathinfo($fname, PATHINFO_FILENAME);
    if (!$meta['title']) $meta['title'] = $meta['id'];
    $exams[] = [
        'id' => $meta['id'],
        'title' => $meta['title'],
        'passingScore' => $meta['passingScore'],
        'questions' => $parsed['questions']
    ];
    echo "  OK: {$meta['title']} (" . count($parsed['questions']) . " questoes)\n";
}

$json = json_encode(['exams' => $exams], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
$header = "// ============================================================\n"
        . "// FALLBACK OFFLINE (usado quando o app roda por duplo clique, sem servidor).\n"
        . "// Gerado automaticamente a partir dos .txt em simulados/.\n"
        . "// Para regenerar: php gerar_exams.php\n"
        . "// ============================================================\n"
        . "const EXAMS_DATA_STATIC = ";
file_put_contents(__DIR__ . '/exams.js', $header . $json . ";\n");

echo "\nexams.js atualizado com " . count($exams) . " prova(s).\n";
