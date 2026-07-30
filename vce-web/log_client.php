<?php
// Recebe erros de JavaScript do navegador e grava em logs/client-*.log.
header('Content-Type: application/json');
require __DIR__ . '/lib_log.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false]);
    exit;
}

$maxBytes = 4096;
$raw = file_get_contents('php://input', false, null, 0, $maxBytes + 1);
if ($raw === false || strlen($raw) > $maxBytes) {
    http_response_code(413);
    echo json_encode(['ok' => false]);
    exit;
}

$data = json_decode($raw, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false]);
    exit;
}

$type = preg_replace('/[^a-z_]/', '', strtolower((string)($data['type'] ?? 'error'))) ?: 'error';
$msg = mb_substr((string)($data['message'] ?? ''), 0, 500);
$ctx = [
    'source' => mb_substr((string)($data['source'] ?? ''), 0, 200),
    'line' => (int)($data['line'] ?? 0),
    'col' => (int)($data['col'] ?? 0),
];

ve_log('client', "[$type] $msg", $ctx);
echo json_encode(['ok' => true]);
