# Changelog

Histórico de mudanças do projeto, em ordem cronológica. Cada entrada resume
o que foi alterado e por quê. Novas entradas são adicionadas no topo a cada
mudança feita no projeto.

## [Não lançado]

### Adicionado
- Este arquivo (`CHANGELOG.md`), para manter o controle das mudanças
  registrado no git, além de serem informadas na conversa.

## 2026-07-30 — Treino das questões deixadas em branco

**Motivação:** as estatísticas mostravam e treinavam as questões mais
erradas, mas não havia opção equivalente para as deixadas em branco.

### Adicionado
- Nova seção "Questoes deixadas em branco" no overlay de Estatísticas,
  com barras âmbar mostrando quantas vezes cada questão ficou sem
  resposta.
- Botão **"Treinar as N questoes deixadas em branco"** (âmbar), que abre
  na hora uma prova personalizada só com elas, igual ao treino das mais
  erradas.

### Testes realizados
- Playwright: prova com 1 errada e 2 em branco → seção listou Q2/Q3 com
  100% em branco e o botão abriu treino com exatamente essas 2 questões;
  sem erros de console.

## 2026-07-30 — Estatísticas de estudo e polimento visual

**Motivação:** dar visibilidade de onde reforçar os estudos — percentuais,
questões mais erradas/acertadas e estatística geral por prova — além de
deixar o layout mais bonito.

### Adicionado
- **Estatísticas de estudo** (novo botão "Estatisticas" na tela inicial,
  overlay próprio): para cada prova já utilizada mostra —
  - resumo em chips: tentativas, nota média, melhor nota, última nota e
    total de aprovações;
  - **gráfico de rosca** (CSS `conic-gradient`, sem bibliotecas) com o
    percentual de acertos, erros e respostas em branco acumulados;
  - **gráfico de barras com a evolução das últimas 12 notas** (verde/
    vermelho conforme aprovado ou não);
  - **desempenho por tópico** com barras de percentual;
  - ranking das **questões que você mais erra** e das **que mais acerta**
    (percentual, contagem e trecho do enunciado);
  - botão **"Treinar as questões que você mais erra"**, que abre na hora
    uma prova personalizada só com elas (reusa o modo refazer existente);
  - seletor para alternar entre as provas com dados e botão para limpar as
    estatísticas da prova exibida.
- Coleta automática: ao finalizar qualquer prova, `recordStats()` acumula
  por questão (vista/acertada/errada/em branco) e a série de notas na
  chave `vce_stats` do `localStorage` — funciona também no modo offline.

### Alterado (polimento visual)
- Transições suaves em todos os botões + efeito de "pressionar";
  contorno visível de foco para navegação por teclado (`:focus-visible`).
- Cards com cantos mais arredondados e sombras mais suaves; título dos
  cards sublinhado com a cor de destaque (verde).
- Alternativas das questões com área de clique maior e borda no hover;
  caixa de resposta com barra lateral de destaque.
- Barra de título com sombra sutil; chips de estatísticas em negrito;
  overlays maiores e com sombra mais profunda.

### Testes realizados
- Playwright: 3 tentativas com resultados diferentes na prova de exemplo →
  estatísticas conferidas número a número (média 444 para notas 333/333/667,
  rosca 44% = 4 acertos em 9 respostas, tópico 1 em 67%, Q1 com 67% de
  erro, Q2 com 100% de acerto); botão de treino abriu prova personalizada
  contendo exatamente a questão errada; visual verificado em modo claro e
  escuro por screenshot; sem erros de console.

## 2026-07-30 — Acessibilidade, página de ajuda do formato, logs e ajustes de UI

**Motivação:** pedido do usuário — página explicando como montar o `.txt`
(e que uma IA pode fazer a conversão), renomear o botão de importar,
corrigir o botão de tema que cobria o timer, opção de aumentar a fonte
para quem tem dificuldade de enxergar, barra de título maior, e um
diretório de logs de acessos/erros/problemas.

### Adicionado
- **Página de ajuda `ajuda-formato.html`**: explica o formato do `.txt`
  (bloco META, campos de cada questão, regras) com exemplos, e orienta a
  pedir a conversão das questões para uma IA (ChatGPT/Claude/Gemini) usando
  o `FORMATO_QUESTOES.md`. Linkada no painel de importação da tela inicial;
  respeita o tema e o tamanho de fonte escolhidos no app.
- **Controle de tamanho de fonte (acessibilidade)**: botões A-/A+ na barra
  de título (tela inicial, tela da prova e página de ajuda) escalam toda a
  interface de 14px a 26px. A escolha é salva (`vce_font_size`) e aplicada
  antes da renderização (sem "pulo" visual). Implementado convertendo os
  tamanhos de fonte do CSS de `px` para `rem`.
- **Diretório de logs (`vce-web/logs/`, criado em runtime)** via novo
  `lib_log.php`, com arquivos diários por canal: `access-*.log` (carga de
  provas, importações, leitura de sessão, com IP/horário), `error-*.log`
  (falhas dos endpoints) e `client-*.log` (erros de JavaScript do navegador,
  enviados pelo novo endpoint `log_client.php` com limite de 4KB por
  mensagem). Em Apache, a pasta recebe `.htaccess` bloqueando acesso web.
- `.gitignore` na raiz, excluindo `vce-web/sessions/` e `vce-web/logs/`.

### Corrigido
- **Botão de tema sobrepondo o timer**: o botão "Modo escuro/claro" era
  fixo (position: fixed) e cobria o "Tempo restante" e outras informações
  da barra. Agora ele (e os novos A-/A+) fazem parte da própria barra de
  título como itens flex, sem sobrepor nada (verificado por teste de
  colisão de bounding boxes no Playwright).

### Alterado
- Botão de importação renomeado de "Importar .txt" para **"Importar
  Simulado"**.
- **Barra de título maior e mais legível**: padding aumentado e fonte de
  0,81rem para 1,1rem.
- Textos do painel de importação ajustados (dica curta + link de ajuda).

### Testes realizados
- Playwright: A+/A- escalam a página e persistem após reload; timer não é
  mais sobreposto (teste de interseção de retângulos); página de ajuda
  abre com tema/fonte corretos; erro de JS proposital aparece em
  `logs/client-*.log`; acessos registrados em `logs/access-*.log`.
- `php -l` e `node --check` em todos os arquivos alterados.

## 2026-07-30 — Revisão de segurança/robustez e reposicionamento do import

**Motivação:** análise geral do sistema em busca de falhas de segurança e
robustez (sem tocar nas questões, que são fiéis ao PDF original), além de
melhorar a posição da área de importação de provas `.txt` na tela inicial.

### Segurança (corrigido)
- **XSS**: nome do candidato, título/ID da prova e trechos de enunciado
  eram injetados via `innerHTML` sem escape no Score Report, no Histórico
  e no painel de Revisão — um `.txt` importado ou um nome malicioso podia
  executar script. Adicionado `escapeHtml()` em `script.js`, aplicado em
  todos esses pontos (verificado com payload real de XSS no navegador:
  não dispara mais, texto aparece literal).
- `import_simulado.php`: passa a rejeitar uploads acima de 3MB.
- `save_session.php`: passa a aceitar só POST (405 para outros métodos),
  rejeitar payloads acima de 2MB (413) e gravar com `LOCK_EX`.
- `gerar_exams.php`: só executa via linha de comando; acessado por URL em
  um site hospedado, retorna 403.

### Robustez (corrigido)
- Tela inicial não quebra mais se nenhuma prova estiver carregada (ex.:
  `exams.js` ausente no modo offline): mostra aviso e desabilita "Iniciar".
- O tempo restante do timer agora é salvo na sessão e restaurado — antes,
  retomar uma prova com timer reiniciava a contagem do zero.

### Alterado (posicionamento do import)
- A área "Importar Nova Prova (.txt)" saiu do card separado no fim da
  página e virou um botão "Importar .txt" ao lado do seletor de prova,
  que expande um painel compacto logo abaixo — importar acontece no mesmo
  lugar onde se escolhe a prova, sem rolar a tela.

### Testes realizados
- `curl`: gerar_exams via HTTP → 403; save_session GET → 405; payload
  gigante → 413; upload gigante → rejeitado.
- Playwright: painel de import fecha/abre pelo toggle, import funciona no
  novo local, prova com HTML malicioso no título/enunciado + candidato
  malicioso não disparam XSS no report/histórico/revisão.
- `php -l` em todos os PHPs, `node --check` no script.js e
  `php gerar_exams.php` reproduzível.

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
