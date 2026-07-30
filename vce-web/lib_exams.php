<?php
// ============================================================
// Funcoes compartilhadas de manifest/parse/exams.js, usadas por
// simulados.php, gerar_exams.php e import_simulado.php.
// ============================================================
require_once __DIR__ . '/parser.php';

function ve_load_manifest($dir) {
    $manifestFile = $dir . '/manifest.json';
    $files = [];
    if (file_exists($manifestFile)) {
        $manifest = json_decode(file_get_contents($manifestFile), true);
        if (is_array($manifest) && isset($manifest['files'])) {
            $files = $manifest['files'];
        }
    }
    if (empty($files)) {
        foreach (glob($dir . '/*.txt') as $f) {
            $files[] = basename($f);
        }
    }
    return $files;
}

function ve_save_manifest($dir, array $files) {
    $manifestFile = $dir . '/manifest.json';
    $manifest = ['files' => array_values($files)];
    if (file_exists($manifestFile)) {
        $existing = json_decode(file_get_contents($manifestFile), true);
        if (is_array($existing) && isset($existing['_comentario'])) {
            $manifest = ['_comentario' => $existing['_comentario'], 'files' => array_values($files)];
        }
    }
    file_put_contents($manifestFile, json_encode($manifest, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), LOCK_EX);
}

function ve_build_exams_array($dir, array $files) {
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
    return $exams;
}

function ve_write_exams_js(array $exams, $outFile) {
    $json = json_encode(['exams' => $exams], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    $header = "// ============================================================\n"
            . "// FALLBACK OFFLINE (usado quando o app roda por duplo clique, sem servidor).\n"
            . "// Gerado automaticamente a partir dos .txt em simulados/.\n"
            . "// Para regenerar: php gerar_exams.php\n"
            . "// ============================================================\n"
            . "const EXAMS_DATA_STATIC = ";
    file_put_contents($outFile, $header . $json . ";\n");
}

// Le o manifest, monta o array de exams e regenera o exams.js. Retorna o array de exams.
function ve_regenerate_exams_js($dir, $outFile) {
    $files = ve_load_manifest($dir);
    $exams = ve_build_exams_array($dir, $files);
    ve_write_exams_js($exams, $outFile);
    return $exams;
}
