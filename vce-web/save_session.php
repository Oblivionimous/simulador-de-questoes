<?php
// Salva o progresso do simulado em um arquivo local (sessions/session.json)
header('Content-Type: application/json');
require __DIR__ . '/lib_log.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    ve_log('error', 'save_session.php: metodo nao permitido (' . $_SERVER['REQUEST_METHOD'] . ')');
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Metodo nao permitido']);
    exit;
}

// Uma sessao real tem poucas dezenas de KB; o limite evita que um POST
// gigante encha o disco do servidor.
$maxBytes = 2 * 1024 * 1024;
$raw = file_get_contents('php://input', false, null, 0, $maxBytes + 1);

if ($raw === false || strlen($raw) > $maxBytes) {
    ve_log('error', 'save_session.php: payload muito grande');
    http_response_code(413);
    echo json_encode(['ok' => false, 'error' => 'Payload muito grande']);
    exit;
}

$data = json_decode($raw, true);

if (!is_array($data)) {
    ve_log('error', 'save_session.php: JSON invalido');
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'JSON inválido']);
    exit;
}

$dir = __DIR__ . '/sessions';
if (!is_dir($dir)) {
    mkdir($dir, 0777, true);
}

$file = $dir . '/session.json';
file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), LOCK_EX);

echo json_encode(['ok' => true]);
