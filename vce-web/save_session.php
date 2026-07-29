<?php
// Salva o progresso do simulado em um arquivo local (sessions/session.json)
header('Content-Type: application/json');

$dir = __DIR__ . '/sessions';
if (!is_dir($dir)) {
    mkdir($dir, 0777, true);
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if ($data === null) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'JSON inválido']);
    exit;
}

$file = $dir . '/session.json';
file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

echo json_encode(['ok' => true]);
