<?php
// ============================================================
// Carregador de simulados (para uso com servidor PHP / site).
// Le todos os .txt listados em simulados/manifest.json,
// faz o parse e devolve tudo em JSON no formato do app.
// ============================================================
header('Content-Type: application/json; charset=utf-8');
require __DIR__ . '/lib_exams.php';

$dir = __DIR__ . '/simulados';
$files = ve_load_manifest($dir);
$exams = ve_build_exams_array($dir, $files);

echo json_encode(['exams' => $exams], JSON_UNESCAPED_UNICODE);
