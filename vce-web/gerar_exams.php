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
if (php_sapi_name() !== 'cli') {
    http_response_code(403);
    exit("Este script so pode ser executado pela linha de comando (php gerar_exams.php).\n");
}

require __DIR__ . '/lib_exams.php';

$dir = __DIR__ . '/simulados';
$files = ve_load_manifest($dir);

foreach ($files as $fname) {
    $path = $dir . '/' . $fname;
    if (!file_exists($path)) { echo "  ! ignorado (nao existe): $fname\n"; continue; }
    $parsed = parse_simulado_txt(file_get_contents($path));
    $meta = $parsed['meta'];
    $title = $meta['title'] ?: ($meta['id'] ?: pathinfo($fname, PATHINFO_FILENAME));
    echo "  OK: $title (" . count($parsed['questions']) . " questoes)\n";
}

$exams = ve_regenerate_exams_js($dir, __DIR__ . '/exams.js');

echo "\nexams.js atualizado com " . count($exams) . " prova(s).\n";
