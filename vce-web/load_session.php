<?php
// Carrega o progresso salvo do simulado (sessions/session.json)
header('Content-Type: application/json');
require __DIR__ . '/lib_log.php';

$file = __DIR__ . '/sessions/session.json';

if (!file_exists($file)) {
    ve_log('access', 'GET load_session.php (sem sessao salva)');
    echo json_encode(['ok' => false, 'error' => 'Nenhuma sessão salva encontrada']);
    exit;
}

ve_log('access', 'GET load_session.php');
echo file_get_contents($file);
