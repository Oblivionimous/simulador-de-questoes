<?php
// ============================================================
// Parser do formato .txt -> estrutura de questoes (PHP)
// Reutilizado tanto pelo conversor quanto pelo carregador do site.
// ============================================================

function parse_simulado_txt($text) {
    $text = str_replace(["\r\n", "\r"], "\n", $text);

    $meta = ['id' => '', 'title' => '', 'passingScore' => 500];
    $questions = [];

    // Extrai bloco META
    if (preg_match('/===META===(.*?)===FIM META===/s', $text, $m)) {
        $metaBlock = $m[1];
        foreach (explode("\n", $metaBlock) as $line) {
            $line = trim($line);
            if (stripos($line, 'ID:') === 0)          $meta['id'] = trim(substr($line, 3));
            elseif (stripos($line, 'TITULO:') === 0)   $meta['title'] = trim(substr($line, 7));
            elseif (stripos($line, 'NOTA_MINIMA:') === 0) $meta['passingScore'] = (int)trim(substr($line, 12));
        }
        // Remove o bloco META do texto
        $text = preg_replace('/===META===.*?===FIM META===/s', '', $text);
    }

    // Divide por @@@
    $parts = preg_split('/^@@@\s*(\d+)\s*$/m', $text, -1, PREG_SPLIT_DELIM_CAPTURE);
    // parts[0] = lixo antes da primeira; depois pares (numero, corpo)
    for ($i = 1; $i < count($parts); $i += 2) {
        $qid = (int)$parts[$i];
        $body = $parts[$i + 1];
        $q = parse_question_body($qid, $body);
        if ($q) $questions[] = $q;
    }

    return ['meta' => $meta, 'questions' => $questions];
}

function parse_question_body($qid, $body) {
    $q = [
        'id' => $qid, 'topic' => 0, 'type' => 'single',
        'question' => '', 'options' => new stdClass(),
        'answer' => '', 'explanation' => ''
    ];
    $options = [];

    // Protege blocos de codigo ``` ``` para nao quebrar no parse de linhas
    $codeBlocks = [];
    $body = preg_replace_callback('/```(.*?)```/s', function($m) use (&$codeBlocks) {
        $key = "\x01CODE" . count($codeBlocks) . "\x01";
        $codeBlocks[$key] = "```" . $m[1] . "```";
        return $key;
    }, $body);

    $lines = explode("\n", $body);
    $currentField = null;
    $questionLines = [];

    foreach ($lines as $line) {
        $trim = trim($line);

        if (preg_match('/^TOPICO:\s*(.*)$/i', $trim, $m)) { $q['topic'] = (int)$m[1]; $currentField = null; continue; }
        if (preg_match('/^TIPO:\s*(.*)$/i', $trim, $m)) { $q['type'] = strtolower(trim($m[1])); $currentField = null; continue; }
        if (preg_match('/^RESPOSTA:\s*(.*)$/i', $trim, $m)) { $q['answer'] = trim($m[1]); $currentField = null; continue; }
        if (preg_match('/^EXPLICACAO:\s*(.*)$/i', $trim, $m)) { $q['explanation'] = trim($m[1]); $currentField = 'explanation'; continue; }
        if (preg_match('/^([A-E]):\s*(.*)$/', $trim, $m)) { $options[$m[1]] = trim($m[2]); $currentField = null; continue; }
        if (preg_match('/^PERGUNTA:\s*(.*)$/i', $line, $m)) { $questionLines[] = $m[1]; $currentField = 'question'; continue; }

        // continuacao de campo multi-linha
        if ($currentField === 'question') $questionLines[] = $line;
        elseif ($currentField === 'explanation' && $trim !== '') $q['explanation'] .= "\n" . $line;
    }

    $q['question'] = trim(implode("\n", $questionLines));

    // Restaura blocos de codigo
    foreach ($codeBlocks as $key => $code) {
        $q['question'] = str_replace($key, $code, $q['question']);
    }

    if (!empty($options)) $q['options'] = $options;
    return $q;
}
