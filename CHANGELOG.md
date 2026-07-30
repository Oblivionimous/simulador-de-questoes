# Changelog

Histórico de mudanças do projeto, em ordem cronológica. Cada entrada resume
o que foi alterado e por quê. Novas entradas são adicionadas no topo a cada
mudança feita no projeto.

## [Não lançado]

### Adicionado
- Este arquivo (`CHANGELOG.md`), para manter o controle das mudanças
  registrado no git, além de serem informadas na conversa.

## 2026-07-30 — Explicações das questões expandidas

**Motivação:** as explicações mostradas na caixa de resposta eram curtas
(1-2 linhas); o objetivo é torná-las mais didáticas, com até 5 linhas cada.

### Alterado
- Campo `EXPLICACAO:` de todas as 161 questões de
  `vce-web/simulados/lpi-201-450.txt` e das 3 questões de
  `vce-web/simulados/EXEMPLO-modelo.txt` reescrito: cada explicação agora
  tem 2-5 linhas com contexto técnico, o porquê da resposta correta e,
  quando relevante, por que as alternativas erradas mais plausíveis não
  servem. Usa o formato multi-linha já suportado pelo parser (linhas de
  continuação após `EXPLICACAO:`), renderizado com quebras reais na caixa
  de resposta (`white-space: pre-wrap`).
- `vce-web/exams.js` regenerado via `php gerar_exams.php` para refletir as
  novas explicações no modo offline.

### Observação
- A questão `@@@130` (comando que exibe o caminho físico de um módulo do
  kernel) mantém o gabarito original `A` (modprobe -i), mas a explicação
  registra a ressalva de que o comando classicamente documentado para isso
  é `modinfo -n` (alternativa B) — gabarito a conferir.

### Testes realizados
- Contagens estruturais preservadas: 161 blocos `@@@`/`RESPOSTA` no
  lpi-201-450 e 3 no EXEMPLO (nenhuma questão perdida/duplicada).
- Diff confirmando que apenas linhas de explicação mudaram (perguntas,
  alternativas e gabaritos intactos).
- `php gerar_exams.php` reproduzível (regenerar não gera diferença).
- Verificação visual no navegador (Playwright): explicação multi-linha da
  questão 1 renderizada corretamente na caixa de resposta.

## 2026-07-30 — Modo escuro

**Motivação:** oferecer uma opção de tema escuro para quem usa o simulador
à noite ou prefere interfaces escuras.

### Adicionado
- Botão "Modo escuro"/"Modo claro" fixo no canto superior direito
  (`#themeToggle`), visível em todas as telas (setup, exame e overlays).
  A escolha é salva em `localStorage` (`vce_theme`) e restaurada a cada
  carregamento; sem escolha salva, o app segue o tema do sistema
  operacional (`prefers-color-scheme`).
- Script inline no `<head>` de `index.html` que aplica o tema salvo antes
  da página renderizar, evitando o "flash" de tela clara antes de trocar
  para escuro.

### Alterado
- `vce-web/style.css` reescrito para usar variáveis CSS (`--bg`, `--text`,
  `--border`, `--pass`, `--fail` etc.) em vez de cores fixas, com um bloco
  `:root[data-theme="dark"]` sobrescrevendo essas variáveis. Isso evitou
  duplicar todas as regras existentes para o tema escuro.
- `vce-web/script.js`: cores que eram geradas via HTML inline em
  JavaScript (nota aprovado/reprovado no relatório e no histórico) agora
  usam `var(--pass)`/`var(--fail)` em vez de códigos hexadecimais fixos,
  para também respeitar o tema escuro.
- Regra `@media print` ajustada para sempre imprimir em cores claras,
  mesmo com o modo escuro ativado (evita gastar tinta imprimindo fundo
  escuro).

### Testes realizados
- Teste end-to-end com Playwright: alternância clara→escura→clara,
  persistência do tema após reload sem flash visível, e captura de tela
  das telas de setup, exame, caixa de resposta e relatório de pontuação
  em modo escuro para conferência visual de contraste.

## 2026-07-30 — Importar prova, auto-save e opções lembradas (PR #2)

**Motivação:** eliminar passos manuais para adicionar uma prova nova e
evitar perder progresso/configuração ao atualizar a página.

### Adicionado
- **Importar prova `.txt` pelo navegador**: novo card na tela inicial
  (`vce-web/index.html`) com upload de arquivo, habilitado só quando o app
  roda com servidor PHP.
  - Novo endpoint `vce-web/import_simulado.php`: valida o arquivo (extensão,
    parse bem-sucedido), sanitiza o nome, trata reenvio do mesmo arquivo
    (atualiza) e conflito de ID com outro arquivo (pede confirmação via
    HTTP 409 + reenvio com `overwrite=1`), atualiza `manifest.json` e
    regenera `exams.js`.
  - Novo `vce-web/lib_exams.php`: funções compartilhadas
    (`ve_load_manifest`, `ve_save_manifest`, `ve_build_exams_array`,
    `ve_write_exams_js`, `ve_regenerate_exams_js`) extraídas da lógica
    duplicada que existia em `simulados.php` e `gerar_exams.php`.
- **Auto-save + auto-restore de sessão** (`vce-web/script.js`): o progresso
  é salvo sozinho a cada resposta/navegação/marcação (local imediato +
  envio ao servidor com debounce de ~4s, mais um envio garantido via
  `navigator.sendBeacon` ao trocar de aba/fechar). Ao recarregar a página
  no meio de uma prova, ela é retomada automaticamente, sem precisar clicar
  em "Continuar". O payload de sessão ganhou um campo `active`, zerado ao
  finalizar a prova para não reabrir uma prova já concluída.
- **Opções da tela inicial lembradas**: prova, nome do candidato, modo,
  embaralhar questões/alternativas, modo treino, nota mínima e timer agora
  são salvos no `localStorage` e restaurados automaticamente no próximo
  carregamento.

### Corrigido
- Bug encontrado durante os testes (Playwright): depois de finalizar uma
  prova, o hook de auto-save disparado por `visibilitychange` reativava a
  sessão já encerrada (porque `config` continuava preenchido). Corrigido
  com uma flag dedicada `sessionActive`, que só fica `true` enquanto há
  mesmo uma prova em andamento.

### Alterado
- `vce-web/simulados.php` e `vce-web/gerar_exams.php` passaram a usar as
  funções de `lib_exams.php` em vez de duplicar a lógica de leitura do
  manifest e parse dos `.txt` (comportamento idêntico, verificado
  comparando a saída antes/depois).
- `vce-web/README.md` atualizado com a documentação das três
  funcionalidades novas (importar, auto-save/restore, opções lembradas).

### Testes realizados
- `php -l` em todos os arquivos PHP alterados/criados.
- Comparação do `exams.js` gerado antes/depois da refatoração de
  `lib_exams.php` (sem diferença).
- Testes via `curl` no `import_simulado.php`: import de arquivo novo,
  reenvio do mesmo arquivo, conflito de ID (com e sem `overwrite`),
  arquivo inválido (sem questões) e extensão errada.
- Teste end-to-end com Playwright no navegador: opções da tela inicial
  restauradas após reload, sessão em andamento restaurada automaticamente
  no meio da prova, sessão finalizada **não** restaurada após reload, e
  fluxo completo de importação pela UI.

## 2026-07-30 — Documentação completa do simulador (PR #1)

**Motivação:** o `README.md` da raiz só tinha o título do projeto; faltava
explicar como o simulador funciona por dentro, não só como rodá-lo.

### Adicionado
- Seção "Como funciona (arquitetura)" em `vce-web/README.md`: fluxo de
  dados de ponta a ponta — origem das questões (`simulados/*.txt`),
  carregamento (modo servidor via `simulados.php`/`parser.php` vs. modo
  offline via `exams.js` gerado por `gerar_exams.php`), montagem e
  navegação da prova, correção/pontuação (`isCorrect`, `computeResults`,
  nota escalada 0-1000) e persistência de sessão/histórico.
- Seção de observações/limitações (sem testes automatizados, sem build,
  dependência de PHP só para os recursos dinâmicos).

### Alterado
- `README.md` da raiz: trocado o placeholder (`# Simulador-de-quest-es`)
  por uma introdução curta com link para a documentação completa em
  `vce-web/README.md`.
- `vce-web/README.md`: reorganizado (funcionalidades, arquitetura, como
  rodar, fluxo para adicionar simulado, formato do `.txt`, estrutura de
  arquivos) a partir do conteúdo que já existia.
