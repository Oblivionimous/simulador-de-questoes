<?php
// Carrega o progresso salvo do simulado (sessions/session.json)
header('Content-Type: application/json');

$file = __DIR__ . '/sessions/session.json';

if (!file_exists($file)) {
    echo json_encode(['ok' => false, 'error' => 'Nenhuma sessão salva encontrada']);
    exit;
}

echo file_get_contents($file);
