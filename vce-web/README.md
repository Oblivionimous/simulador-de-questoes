# Simulado LPIC-2 - VCE Web Player

Simulador de prova estilo VCE Player (HTML + CSS + JS puro, sem frameworks e
sem build), com formato padronizado de questões em `.txt` e carregamento
dinâmico via PHP quando hospedado num site/servidor. Funciona 100% offline
também, bastando dar duplo clique no `index.html`.

Atualmente vem com um banco de questões real do exame LPIC-2 (201-450, 161
questões) e um simulado de demonstração com 3 questões.

## Funcionalidades

- **Modos de seleção de questões**: todas, faixa (N a M), quantidade
  aleatória, por tópico, por tipo de questão, ou uma lista personalizada
  (usada para refazer questões erradas/incompletas).
- **Embaralhar ordem das questões** e **embaralhar alternativas** dentro de
  cada questão (o gabarito exibido se ajusta automaticamente à nova posição
  das letras).
- **Modo treino**: revela se a resposta está certa assim que você responde.
- **Nota mínima configurável** e **timer regressivo** opcional.
- Três tipos de questão: **single** (escolha única), **multi** (múltipla
  escolha) e **text** (resposta digitada, com aceitação de mais de uma
  resposta válida).
- Navegação livre entre questões, **marcar para revisão**, **mostrar/ocultar
  resposta**, e uma **calculadora** embutida.
- **Painel de revisão** filtrável (Todas / Marcadas / Incompletas / Erradas)
  para pular direto para uma questão.
- **Salvar e continuar** a prova de onde parou.
- **Relatório de nota (Score Report)** ao finalizar: nota em escala 0-1000,
  gráfico comparando sua nota com a nota mínima, aprovado/reprovado,
  desempenho por tópico, e opção de impressão.
- **Histórico de tentativas**, com botões para refazer só as questões
  erradas ou só as incompletas de uma tentativa anterior.

## Como funciona (arquitetura)

O app é uma SPA client-side sem build step: `index.html` carrega `exams.js`
e depois `script.js`, que faz todo o trabalho no navegador. PHP é opcional e
só entra em cena para ler os `.txt` dinamicamente e para persistir
sessão/histórico também no servidor (além do `localStorage`).

**1. Origem das questões**

As questões-fonte ficam em arquivos de texto simples, um por prova, dentro
de `simulados/` (veja o formato mais abaixo). O arquivo
`simulados/manifest.json` lista quais `.txt` carregar e em que ordem
(se o manifest for removido, o backend cai para pegar todos os `.txt` da
pasta em ordem alfabética).

**2. Carregamento dos dados**

Existem dois caminhos, escolhidos automaticamente por `loadExams()` em
`script.js`:

- **Modo servidor** (PHP disponível): a cada carregamento de página, o app
  faz `fetch('simulados.php')`. Esse endpoint lê o `manifest.json` e usa
  `parser.php` para converter cada `.txt` em JSON na hora — ou seja, editar
  um `.txt` já reflete no app no próximo reload, sem passo extra.
- **Modo offline/duplo clique** (sem servidor, ex. `file://`): o `fetch`
  falha silenciosamente e o app usa `EXAMS_DATA_STATIC`, um objeto já
  pronto definido em `exams.js`. Esse arquivo é gerado previamente rodando
  `php gerar_exams.php`, que lê os mesmos `.txt`/`manifest.json` e grava o
  resultado como JS estático. **Sempre que um `.txt` for editado, é preciso
  rodar esse comando de novo para o modo offline enxergar a mudança.**

Em ambos os casos o formato final é o mesmo: uma lista de provas, cada uma
com `id`, `title`, `passingScore` e a lista de `questions` (cada questão com
`id`, `topic`, `type`, `question`, `options`, `answer` e `explanation`).

O arquivo `questions.json`, na raiz de `vce-web/`, é apenas uma cópia de
referência das questões do LPIC-201 — **não é lido pelo app em tempo de
execução**, só serve de consulta/backup.

**3. Montagem e navegação da prova**

Na tela inicial, o usuário escolhe a prova, o modo de seleção de questões e
as opções (embaralhar, modo treino, nota mínima, timer). `script.js` filtra
e/ou embaralha a lista de questões da prova escolhida conforme o modo,
guarda o estado de cada questão (`userState`) e renderiza uma por vez na
tela de exame, com navegação, marcação para revisão e o painel de revisão
lateral. Quando "embaralhar alternativas" está ativo, as chaves internas
(A/B/C...) permanecem fixas — só a ordem exibida muda — para que a correção
nunca dependa da posição visual da alternativa.

**4. Correção e pontuação**

Cada questão é corrigida por `isCorrect(q)`:

- `text`: compara a resposta digitada (normalizada para minúsculas/trim)
  contra a lista de respostas aceitas em `answer` (separadas por vírgula).
- `single`/`multi`: compara o conjunto de letras selecionadas com o
  conjunto de letras corretas, ignorando ordem.

Ao finalizar, `computeResults()` percorre todas as questões e calcula:
total, corretas, erradas, incompletas, a **nota escalada de 0 a 1000**
(`correct / total * 1000`, no estilo dos relatórios de certificação real),
comparação com a nota mínima configurada (`passed`), e o desempenho
agregado por tópico.

**5. Persistência (sessão e histórico)**

- `localStorage` é sempre usado: `vce_session` guarda o progresso da prova
  em andamento (para o botão "continuar"), e `vce_history` guarda até as
  últimas 50 tentativas finalizadas (data, candidato, prova, nota,
  aprovado/reprovado, lista de questões erradas/incompletas).
- Se houver servidor PHP disponível, `saveSession()`/`continueSession()`
  também usam `save_session.php`/`load_session.php`, que gravam/leem
  `sessions/session.json` no disco do servidor (essa pasta é criada
  automaticamente na primeira gravação, não existe no repositório).

## Como rodar

**Modo com servidor PHP (recomendado — lê os .txt direto):**
```
php -S localhost:8000
```
Acesse http://localhost:8000. O app carrega automaticamente todos os simulados
listados em `simulados/manifest.json`, lendo os .txt via `simulados.php`.

**Modo hospedado num site:** suba a pasta inteira para um servidor com PHP.
Funciona igual: o app lê os .txt via `simulados.php`.

**Modo duplo clique (offline, sem servidor):** abra o `index.html`. Nesse modo o
app usa o `exams.js` (fallback gerado a partir dos .txt). Sempre que editar os .txt,
rode `php gerar_exams.php` para atualizar o `exams.js`.

## Fluxo para adicionar um novo simulado

1. Pegue o dump bruto das questões.
2. Cole na IA junto com o texto de `FORMATO_QUESTOES.md`. A IA devolve um .txt
   padronizado (traduzido, com termos técnicos em inglês, com explicações).
3. Salve esse .txt na pasta `simulados/` (ex: `simulados/lpi-202-450.txt`).
4. Adicione o nome do arquivo em `simulados/manifest.json`.
5. Se for usar no modo duplo clique, rode `php gerar_exams.php`.
   (No modo servidor/site não precisa: já lê o .txt direto.)

Pronto — o novo simulado aparece no dropdown "Prova" da tela inicial.

## Formato do arquivo .txt (resumo)

```
===META===
ID: lpi-202-450
TITULO: 202-450 - LPIC-2 (Exame 202)
NOTA_MINIMA: 500
===FIM META===

@@@1
TOPICO: 1
TIPO: single            (single | multi | text)
PERGUNTA: enunciado...
A: alternativa A
B: alternativa B
RESPOSTA: B              (ou "B,D" para multi, ou o texto para text)
EXPLICACAO: explicacao curta da resposta
```

- `TIPO` define como a questão é respondida e corrigida: `single` (radio,
  uma resposta), `multi` (checkboxes, uma ou mais respostas em `RESPOSTA`
  separadas por vírgula) ou `text` (campo livre; `RESPOSTA` pode listar mais
  de um valor aceito, separado por vírgula).
- Questões `single`/`multi` usam as chaves `A` a `E` para as alternativas;
  questões `text` não têm alternativas.
- `PERGUNTA` e `EXPLICACAO` aceitam múltiplas linhas e blocos de código
  entre crases (```) para trechos de terminal.

Detalhes completos em `FORMATO_QUESTOES.md`.

## Tela inicial (Modo de Exame)

- Escolher prova, nome do candidato
- Modos: todas / faixa / N aleatórias / por tópico / **por tipo de questão** / refazer
- **Embaralhar ordem das questões**
- **Embaralhar alternativas dentro de cada questão** (o gabarito exibido se ajusta
  automaticamente à nova posição das letras)
- Modo treino (revela acerto ao responder)
- Nota mínima e timer

## Score Report e Histórico

Ao finalizar: relatório com nota 0-1000, gráfico de barras (sua nota vs mínima),
aprovado/reprovado, desempenho por tópico, e botões de refazer erradas/incompletas.
O botão "Histórico de Notas" guarda todas as tentativas com opção de refazer.

## Arquivos

```
vce-web/
├── index.html, style.css, script.js   -> o app (UI, estilos e toda a lógica em JS)
├── exams.js                            -> fallback offline (gerado dos .txt)
├── questions.json                      -> cópia de referência (nao usada pelo app)
├── simulados/                          -> os .txt dos simulados + manifest.json
│   ├── lpi-201-450.txt
│   ├── EXEMPLO-modelo.txt
│   └── manifest.json
├── parser.php                          -> parser do formato .txt (compartilhado)
├── simulados.php                       -> carregador dinâmico (modo servidor/site)
├── gerar_exams.php                     -> gera o exams.js a partir dos .txt
├── save_session.php, load_session.php  -> salvar/carregar sessão em disco (servidor)
├── sessions/                            -> criada em runtime pelo save_session.php
└── FORMATO_QUESTOES.md                 -> instrução para a IA padronizar questões
```

## Observações

- Não há testes automatizados, linter ou pipeline de CI configurados.
- Não há dependências de terceiros nem passo de build — é só abrir/servir os
  arquivos estáticos.
- O PHP só é necessário para os recursos dinâmicos (leitura ao vivo dos
  `.txt` e persistência de sessão no servidor); toda a experiência de fazer
  uma prova funciona igual sem ele, no modo offline.
