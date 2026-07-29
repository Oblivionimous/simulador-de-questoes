<?php
// ============================================================
// Carregador de simulados (para uso com servidor PHP / site).
// Le todos os .txt listados em simulados/manifest.json,
// faz o parse e devolve tudo em JSON no formato do app.
// ============================================================
header('Content-Type: application/json; charset=utf-8');
require __DIR__ . '/parser.php';

$dir = __DIR__ . '/simulados';
$manifestFile = $dir . '/manifest.json';

$files = [];
if (file_exists($manifestFile)) {
    $manifest = json_decode(file_get_contents($manifestFile), true);
    if (is_array($manifest) && isset($manifest['files'])) {
        $files = $manifest['files'];
    }
} else {
    // Sem manifesto: pega automaticamente todos os .txt da pasta
    foreach (glob($dir . '/*.txt') as $f) {
        $files[] = basename($f);
    }
}

$exams = [];
foreach ($files as $fname) {
    $path = $dir . '/' . $fname;
    if (!file_exists($path)) continue;
    $parsed = parse_simulado_txt(file_get_contents($path));
    $meta = $parsed['meta'];
    if (!$meta['id']) $meta['id'] = pathinfo($fname, PATHINFO_FILENAME);
    if (!$meta['title']) $meta['title'] = $meta['id'];
    $exams[] = [
        'id' => $meta['id'],
        'title' => $meta['title'],
        'passingScore' => $meta['passingScore'],
        'questions' => $parsed['questions']
    ];
}

echo json_encode(['exams' => $exams], JSON_UNESCAPED_UNICODE);
