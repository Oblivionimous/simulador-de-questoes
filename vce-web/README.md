# Simulado LPIC-2 - VCE Web Player

Simulador de prova estilo VCE Player (HTML + CSS + JS), com formato padronizado de
questoes em .txt e carregamento dinamico via PHP quando hospedado num site/servidor.

## Como rodar

**Modo com servidor PHP (recomendado - le os .txt direto):**
```
php -S localhost:8000
```
Acesse http://localhost:8000. O app carrega automaticamente todos os simulados
listados em `simulados/manifest.json`, lendo os .txt via `simulados.php`.

**Modo hospedado num site:** suba a pasta inteira para um servidor com PHP.
Funciona igual: o app le os .txt via simulados.php.

**Modo duplo clique (offline, sem servidor):** abra o `index.html`. Nesse modo o
app usa o `exams.js` (fallback gerado a partir dos .txt). Sempre que editar os .txt,
rode `php gerar_exams.php` para atualizar o exams.js.

## Fluxo para adicionar um novo simulado

1. Pegue o dump bruto das questoes.
2. Cole na IA junto com o texto de `FORMATO_QUESTOES.md`. A IA devolve um .txt
   padronizado (traduzido, com termos tecnicos em ingles, com explicacoes).
3. Salve esse .txt na pasta `simulados/` (ex: `simulados/lpi-202-450.txt`).
4. Adicione o nome do arquivo em `simulados/manifest.json`.
5. Se for usar no modo duplo clique, rode `php gerar_exams.php`.
   (No modo servidor/site nao precisa: ja le o .txt direto.)

Pronto - o novo simulado aparece no dropdown "Prova" da tela inicial.

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

Detalhes completos em `FORMATO_QUESTOES.md`.

## Tela inicial (Modo de Exame)

- Escolher prova, nome do candidato
- Modos: todas / faixa / N aleatorias / por topico / **por tipo de questao** / refazer
- **Embaralhar ordem das questoes**
- **Embaralhar alternativas dentro de cada questao** (o gabarito exibido se ajusta
  automaticamente a nova posicao das letras)
- Modo treino (revela acerto ao responder)
- Nota minima e timer

## Score Report e Historico

Ao finalizar: relatorio com nota 0-1000, grafico de barras (sua nota vs minima),
aprovado/reprovado, desempenho por topico, e botoes de refazer erradas/incompletas.
O botao "Historico de Notas" guarda todas as tentativas com opcao de refazer.

## Arquivos

```
vce-web/
├── index.html, style.css, script.js   -> o app
├── exams.js                            -> fallback offline (gerado dos .txt)
├── simulados/                          -> os .txt dos simulados + manifest.json
│   ├── lpi-201-450.txt
│   ├── EXEMPLO-modelo.txt
│   └── manifest.json
├── parser.php                          -> parser do formato .txt (compartilhado)
├── simulados.php                       -> carregador dinamico (usado pelo site)
├── gerar_exams.php                     -> gera o exams.js a partir dos .txt
├── save_session.php, load_session.php  -> salvar/carregar sessao em disco
├── FORMATO_QUESTOES.md                 -> instrucao para a IA padronizar questoes
└── questions.json                      -> copia de referencia (nao usada pelo app)
```
