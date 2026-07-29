# Formato padrao das questoes (para colar na IA)

Copie o texto abaixo e cole na IA junto com o dump bruto das questoes.
A IA deve devolver as questoes exatamente neste formato .txt.

---

## INSTRUCAO PARA A IA

Converta o dump de questoes abaixo para o seguinte formato de texto puro.
Regras:

1. Comece o arquivo com um cabecalho de metadados entre as linhas `===META===` e `===FIM META===`.
2. Cada questao comeca com `@@@` seguido do numero da questao.
3. Cada campo fica em sua propria linha com um rotulo em MAIUSCULAS seguido de dois pontos.
4. Traduza tudo para portugues MAS mantenha termos tecnicos em ingles (comandos,
   nomes de arquivos, caminhos, siglas como RAID/LVM/PXE, saidas de terminal).
5. Blocos de codigo/saida de terminal devem ficar entre ```  e  ``` .
6. Se a questao nao tiver explicacao, deixe o campo EXPLICACAO vazio (ou escreva uma explicacao curta e correta, de 1 a 3 frases).

### Rotulos disponiveis:

- `TOPICO:` numero do topico/secao (ex: 1)
- `TIPO:` `single` (uma resposta) | `multi` (varias respostas) | `text` (dissertativa)
- `PERGUNTA:` o enunciado (pode ter varias linhas e blocos ``` ```)
- `A:` `B:` `C:` `D:` `E:` as alternativas (apenas para single/multi; omita em text)
- `RESPOSTA:` a letra correta (ex: `B`), varias letras separadas por virgula
   para multi (ex: `B,D`), ou o texto esperado para text (ex: `/etc/inittab`).
   Para text com varias respostas aceitas, separe por virgula.
- `EXPLICACAO:` explicacao curta da resposta (opcional)

---

## EXEMPLO DE SAIDA

```
===META===
ID: lpi-201-450
TITULO: 201-450 - LPIC-2 (Exame 201)
NOTA_MINIMA: 500
===FIM META===

@@@1
TOPICO: 1
TIPO: single
PERGUNTA: Qual das opcoes a seguir e um efeito colateral do uso extensivo de espaco de swap?
A: O sistema de arquivos root pode ficar cheio porque o swap fica na particao root.
B: O desempenho geral do sistema pode degradar devido ao uso pesado do disco e reorganizacao de memoria.
C: Como os processos existem completamente na RAM ou no swap, a RAM pode ficar sem uso.
D: A memoria pode ficar fragmentada; use memfrag -d para minimizar.
E: As aplicacoes precisam reiniciar porque seus enderecos de memoria virtual mudam.
RESPOSTA: B
EXPLICACAO: O uso intenso de swap forca paging constante entre RAM e disco. Como o disco e muito mais lento, o desempenho degrada.

@@@2
TOPICO: 1
TIPO: multi
PERGUNTA: No exemplo abaixo, quais colunas mostram tempo de CPU em codigo de usuario e em codigo do kernel? (Escolha DUAS.)
```
# vmstat 1 100
r b swpd free buff cache si so bi bo in cs us sy id wa
0 0 0 282120 134108 5797012 0 0 0 2 0 0 0 0 100 0
```
A: id
B: us
C: wa
D: sy
RESPOSTA: B,D
EXPLICACAO: No vmstat, us = tempo em codigo de usuario e sy = tempo em codigo do kernel.

@@@50
TOPICO: 3
TIPO: text
PERGUNTA: Informe o caminho completo do principal arquivo de configuracao do processo init do SysV.
RESPOSTA: /etc/inittab
EXPLICACAO: O /etc/inittab define o runlevel padrao e as acoes do init no SysV-init.
```

---

Isso e tudo. A IA so precisa devolver o bloco de texto no formato acima.
Depois voce salva como um arquivo .txt na pasta `simulados/` e roda o conversor.
