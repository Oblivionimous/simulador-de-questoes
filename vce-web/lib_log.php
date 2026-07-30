<?php
// ============================================================
// Log simples em arquivo, usado pelos endpoints PHP.
// Grava em logs/<canal>-YYYY-MM-DD.log (a pasta e criada em runtime
// e nao vai para o git). Canais usados: access, error, client.
// ============================================================

function ve_log($channel, $message, array $context = []) {
    $dir = __DIR__ . '/logs';
    if (!is_dir($dir)) {
        if (!@mkdir($dir, 0775, true)) return;
        // Bloqueia leitura dos logs pela web em servidores Apache
        // (contem IPs e mensagens de erro internas).
        @file_put_contents($dir . '/.htaccess', "Require all denied\n");
        @file_put_contents($dir . '/index.html', '');
    }

    $channel = preg_replace('/[^a-z]/', '', strtolower($channel)) ?: 'error';
    $file = $dir . '/' . $channel . '-' . date('Y-m-d') . '.log';

    $ip = $_SERVER['REMOTE_ADDR'] ?? 'cli';
    $line = '[' . date('Y-m-d H:i:s') . '] ' . $ip . ' ' . $message;
    if ($context) {
        $line .= ' ' . json_encode($context, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }
    @file_put_contents($file, $line . "\n", FILE_APPEND | LOCK_EX);
}
