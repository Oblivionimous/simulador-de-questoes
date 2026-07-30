// ============================================================
// FALLBACK OFFLINE (usado quando o app roda por duplo clique, sem servidor).
// Gerado automaticamente a partir dos .txt em simulados/.
// Para regenerar: php gerar_exams.php
// ============================================================
const EXAMS_DATA_STATIC = {
    "exams": [
        {
            "id": "lpi-201-450",
            "title": "201-450 - LPIC-2 (Exame 201)",
            "passingScore": 500,
            "questions": [
                {
                    "id": 1,
                    "topic": 1,
                    "type": "single",
                    "question": "Qual das opções a seguir é um efeito colateral do uso extensivo de espaço de swap?",
                    "options": {
                        "A": "O sistema de arquivos root pode ficar cheio porque o espaço de swap está sempre localizado na partição root do sistema.",
                        "B": "O desempenho geral do sistema pode degradar devido ao uso pesado do disco rígido e à reorganização de memória.",
                        "C": "Como os processos sempre existem completamente na RAM ou no swap, a RAM comum pode ficar sem uso se o kernel não mover os processos de volta do swap para a memória.",
                        "D": "A memória pode ficar fragmentada e diminuir o acesso às páginas de memória. No entanto, isso pode ser minimizado pelo uso regular do memfrag -d.",
                        "E": "As aplicações precisam reiniciar porque seus endereços de memória virtual mudam para refletir a realocação de memória para a área de swap."
                    },
                    "answer": "B",
                    "explanation": "O uso pesado de swap forca o kernel a mover paginas de memoria entre RAM e disco constantemente (paging).\nComo o disco e ordens de magnitude mais lento que a RAM, isso degrada o desempenho geral do sistema.\nA opcao A esta errada porque o swap fica em particao\/arquivo proprio, nao na particao root.\nC e D descrevem comportamentos que nao correspondem ao funcionamento real do gerenciamento de memoria do kernel."
                },
                {
                    "id": 2,
                    "topic": 1,
                    "type": "multi",
                    "question": "No exemplo de saída abaixo, quais colunas detalham a porcentagem de tempo que a CPU passou executando código que não é do kernel e a porcentagem de tempo que a CPU passou executando código do kernel? (Escolha DUAS respostas corretas.)\n```\n# vmstat 1 100\nprocs -----------memory---------- ---swap-- -----io---- --system-- ----cpu----\nr b swpd free buff cache si so bi bo in cs us sy id wa\n0 0 0 282120 134108 5797012 0 0 0 2 0 0 0 0 100 0\n0 0 0 282120 134108 5797012 0 0 0 0 1007 359 0 0 100 0\n0 0 0 282120 134108 5797012 0 0 0 0 1117 577 0 0 100 0\n0 0 0 282120 134108 5797012 0 0 0 0 1007 366 0 0 100 0\n```",
                    "options": {
                        "A": "id",
                        "B": "us",
                        "C": "wa",
                        "D": "sy"
                    },
                    "answer": "B,D",
                    "explanation": "No vmstat, a secao 'cpu' divide o tempo de CPU em varias categorias.\n'us' (user) e o percentual gasto executando codigo de espaco de usuario (aplicacoes).\n'sy' (system) e o percentual gasto executando codigo do kernel (chamadas de sistema, drivers).\n'id' e tempo ocioso e 'wa' e espera por I\/O, por isso essas duas colunas nao respondem a pergunta."
                },
                {
                    "id": 3,
                    "topic": 1,
                    "type": "multi",
                    "question": "Ao planejar um servidor web, quais das opções a seguir impactarão o dimensionamento do sistema? (Escolha TRÊS respostas corretas.)",
                    "options": {
                        "A": "Quantos usuários simultâneos são esperados.",
                        "B": "Qual fabricante de hardware tem melhor suporte a Linux.",
                        "C": "Que tipo de conteúdo será servido.",
                        "D": "Quais linguagens de script o servidor web irá suportar.",
                        "E": "Se a instalação do SO será via CD, DVD ou rede."
                    },
                    "answer": "A,C,D",
                    "explanation": "O dimensionamento de um servidor web depende de fatores que afetam carga e recursos necessarios.\nO numero de usuarios simultaneos define quanta CPU, memoria e conexoes serao exigidas.\nO tipo de conteudo (estatico x dinamico) e as linguagens de script suportadas mudam o custo por requisicao.\nFabricante de hardware e midia de instalacao sao decisoes operacionais, sem impacto direto no sizing."
                },
                {
                    "id": 4,
                    "topic": 1,
                    "type": "multi",
                    "question": "Quais comandos abaixo são úteis para coletar dados sobre conexões de sistema de arquivos remoto? (Escolha DUAS respostas corretas.)",
                    "options": {
                        "A": "pidstat",
                        "B": "nfsiostat",
                        "C": "sadf",
                        "D": "cifsiostat"
                    },
                    "answer": "B,D",
                    "explanation": "nfsiostat exibe estatisticas de I\/O (taxa de transferencia, latencia, RPCs) para montagens NFS.\ncifsiostat faz o equivalente para montagens CIFS\/SMB.\npidstat mede uso de recursos por processo e sadf formata dados historicos do sar, sem foco em filesystems remotos."
                },
                {
                    "id": 5,
                    "topic": 1,
                    "type": "single",
                    "question": "Na saída a seguir, qual porcentagem do tempo a CPU esperou por I\/O pendente?\n```\n# vmstat 1 100\nprocs -----------memory---------- ---swap-- -----io---- --system-- ----cpu----\nr b swpd free buff cache si so bi bo in cs us sy id wa\n0 0 0 282120 134108 5797012 0 0 0 2 0 0 0 0 100 0\n0 0 0 282120 134108 5797012 0 0 0 0 1007 359 0 0 100 0\n0 0 0 282120 134108 5797012 0 0 0 0 1117 577 0 0 100 0\n0 0 0 282120 134108 5797012 0 0 0 0 1007 366 0 0 100 0\n```",
                    "options": {
                        "A": "0",
                        "B": "100",
                        "C": "35.9",
                        "D": "57.7",
                        "E": "36.6"
                    },
                    "answer": "A",
                    "explanation": "A coluna 'wa' do vmstat mostra o percentual de tempo em que a CPU ficou parada esperando I\/O pendente.\nEm todas as linhas da saida o valor de 'wa' e 0, ou seja, nao houve espera por I\/O nesse periodo.\nPor isso a resposta correta e 0%, refletindo diretamente o que esta na coluna."
                },
                {
                    "id": 6,
                    "topic": 1,
                    "type": "multi",
                    "question": "Em exercícios de planejamento de capacidade, quais ferramentas ajudam a listar e identificar processos de interesse? (Escolha DUAS respostas corretas.)",
                    "options": {
                        "A": "acpid",
                        "B": "lsof",
                        "C": "pstree",
                        "D": "telinit"
                    },
                    "answer": "B,C",
                    "explanation": "lsof lista todos os arquivos (incluindo sockets) abertos por processos, ajudando a identificar o que um processo usa.\npstree exibe a arvore de processos, mostrando relacoes de pai\/filho e facilitando localizar processos de interesse.\nacpid trata eventos de energia\/ACPI e telinit troca de runlevel; nenhum dos dois serve para identificar processos."
                },
                {
                    "id": 7,
                    "topic": 1,
                    "type": "multi",
                    "question": "Neste exemplo de saída, quais descrições correspondem ao propósito das colunas free, buff e cache? (Escolha TRÊS respostas corretas.)\n```\n# vmstat 1 100\nprocs ----------- memory---------- --- swap-- -----io---- -- system-- ---- cpu----\nr b swpd free buff cache si so bi bo in cs us sy id wa\n0 0 0 282120 134108 5797012 0 0 0 2 0 0 0 0 100 0\n0 0 0 282120 134108 5797012 0 0 0 0 1007 359 0 0 100 0\n0 0 0 282120 134108 5797012 0 0 0 0 1117 577 0 0 100 0\n0 0 0 282120 134108 5797012 0 0 0 0 1007 366 0 0 100 0\n```",
                    "options": {
                        "A": "Espaço de swap usado",
                        "B": "RAM disponível para buffers do sistema de arquivos",
                        "C": "RAM livre disponível",
                        "D": "RAM usada para buffers",
                        "E": "RAM usada para cache do sistema de arquivos"
                    },
                    "answer": "C,D,E",
                    "explanation": "No vmstat, 'free' e a quantidade de RAM totalmente livre, sem uso algum.\n'buff' e RAM usada por buffers do kernel (metadados de I\/O) e 'cache' e RAM usada como cache de paginas de arquivos.\nBuffers e cache podem ser liberados sob pressao de memoria, entao nao contam como 'em uso' no sentido estrito.\n'swpd' seria o espaco de swap usado, o que nao corresponde ao que as opcoes descrevem."
                },
                {
                    "id": 8,
                    "topic": 1,
                    "type": "single",
                    "question": "Na saída a seguir, qual é a média de carga (load average) de 5 minutos do sistema?\n```\n# uptime\n12:10:05 up 18 days, 19:00, 2 users, load average: 0.47, 24.71, 35.31\n```",
                    "options": {
                        "A": "0.47",
                        "B": "24.71",
                        "C": "35.31",
                        "D": "Não existe um intervalo de 5 minutos. É algum valor entre 0.47 e 24.71.",
                        "E": "Não existe um intervalo de 5 minutos. É algum valor entre 24.71 e 35.31."
                    },
                    "answer": "B",
                    "explanation": "O uptime\/load average sempre mostra tres numeros, na ordem: media de 1, 5 e 15 minutos.\nO segundo valor da lista corresponde ao intervalo de 5 minutos.\nNa saida do exemplo, esse valor e 24.71."
                },
                {
                    "id": 9,
                    "topic": 1,
                    "type": "single",
                    "question": "Qual opção no arquivo de configuração do collectd é necessária para definir o que começar a monitorar?",
                    "options": {
                        "A": "LoadModule",
                        "B": "Module",
                        "C": "Plugin",
                        "D": "LoadPlugin"
                    },
                    "answer": "D",
                    "explanation": "O collectd usa uma arquitetura baseada em plugins para coletar cada tipo de metrica.\nA diretiva LoadPlugin no collectd.conf carrega e ativa um plugin especifico, definindo o que sera monitorado.\n'Plugin' e usada dentro do bloco para configurar opcoes do plugin ja carregado, nao para carrega-lo.\n'Module' e 'LoadModule' nao sao diretivas validas do collectd."
                },
                {
                    "id": 10,
                    "topic": 1,
                    "type": "single",
                    "question": "Qual dos comandos a seguir fornecerá os PIDs dos processos ordenados pelos que estão usando mais ciclos de CPU no sistema Linux?",
                    "options": {
                        "A": "top",
                        "B": "uptime",
                        "C": "ps aux",
                        "D": "vmstat",
                        "E": "freemem"
                    },
                    "answer": "A",
                    "explanation": "O comando top exibe, em tempo real, os processos em execucao ordenados por uso de CPU, junto com seus PIDs.\nuptime so mostra o load average, sem lista de processos; vmstat mostra estatisticas agregadas do sistema.\nps aux lista processos mas nao ordena por CPU por padrao (seria necessario ps aux --sort=-%cpu)."
                },
                {
                    "id": 11,
                    "topic": 1,
                    "type": "single",
                    "question": "Na saída a seguir, as médias de carga representam as médias de carga do sistema para quais janelas de tempo?\n```\n12:10:05 up 18 days, 19:00, 2 users, load average: 0.47, 24.71, 35.31\n```",
                    "options": {
                        "A": "1, 5 e 15 minutos",
                        "B": "1, 15 e 30 minutos",
                        "C": "1, 15 e 30 segundos",
                        "D": "15, 30 e 60 minutos",
                        "E": "15, 30 e 60 segundos"
                    },
                    "answer": "A",
                    "explanation": "As tres medias do load average correspondem sempre as janelas de 1, 5 e 15 minutos.\nEsse padrao e fixo no kernel Linux e aparece em uptime, w e no cabecalho do top."
                },
                {
                    "id": 12,
                    "topic": 1,
                    "type": "multi",
                    "question": "Quais das seguintes ferramentas são usadas para medir o uso de memória? (Escolha TRÊS respostas corretas.)",
                    "options": {
                        "A": "mpstat",
                        "B": "pstree",
                        "C": "sar",
                        "D": "top",
                        "E": "vmstat"
                    },
                    "answer": "C,D,E",
                    "explanation": "sar, top e vmstat exibem estatisticas de uso de memoria (livre, usada, buffers, cache), entre outras metricas.\nmpstat foca exclusivamente em estatisticas de CPU por processador.\npstree mostra apenas a hierarquia de processos, sem dados de memoria."
                },
                {
                    "id": 13,
                    "topic": 1,
                    "type": "multi",
                    "question": "Quando os dados históricos de uso de recursos são importantes? (Selecione TRÊS respostas corretas.)",
                    "options": {
                        "A": "Prever quando os recursos precisarão ser aumentados.",
                        "B": "Selecionar um fornecedor de computadores.",
                        "C": "Identificar processos finalizados durante ocorrências de falta de memória.",
                        "D": "Diagnosticar problemas de capacidade.",
                        "E": "Resolver um problema de software."
                    },
                    "answer": "A,D,E",
                    "explanation": "Dados historicos de uso de recursos permitem prever quando sera necessario expandir CPU, RAM ou disco.\nTambem ajudam a diagnosticar problemas de capacidade, comparando o comportamento atual com o padrao historico.\nE servem para investigar problemas de software que se manifestam ao longo do tempo (ex: vazamento de memoria).\nSelecionar fornecedor de hardware e identificar processos mortos pelo OOM killer nao dependem de dados historicos."
                },
                {
                    "id": 14,
                    "topic": 1,
                    "type": "single",
                    "question": "Qual comando reporta informações sobre uso de memória, paginação e entrada\/saída de blocos?",
                    "options": {
                        "A": "free",
                        "B": "memshow",
                        "C": "ps",
                        "D": "top",
                        "E": "vmstat"
                    },
                    "answer": "E",
                    "explanation": "vmstat reune, numa unica saida, estatisticas de memoria, paginacao (swap in\/out) e I\/O de blocos (bi\/bo).\nfree mostra so memoria; ps foca em processos; top e mais voltado a CPU e processos em tempo real."
                },
                {
                    "id": 15,
                    "topic": 1,
                    "type": "single",
                    "question": "Na saída a seguir do top, quais processos contribuem para a porcentagem de tempo que a CPU passa no estado wa?\n```\nTasks: 193 total, 1 running, 190 sleeping, 2 stopped, 0 zombie\nCpu(s): 0.5%us, 0.3%sy, 0.0%ni, 98.2%id, 1.0%wa, 0.0%hi, 0.0%si, 0.0%st\n```",
                    "options": {
                        "A": "Processos aguardando interação do usuário.",
                        "B": "Processos que já foram encerrados e estão aguardando para serem lançados novamente.",
                        "C": "Processos que ainda não foram agendados porque não foram totalmente carregados na RAM ou estão em swap.",
                        "D": "Processos aguardando a conclusão de operações de I\/O."
                    },
                    "answer": "D",
                    "explanation": "O estado 'wa' (iowait) no top representa o percentual de tempo em que a CPU ficou ociosa esperando I\/O terminar.\nIsso ocorre quando processos estao bloqueados aguardando leitura\/escrita em disco ou rede.\nAs outras opcoes descrevem processos parados ou reagendados, o que corresponde a outros estados (D, T, Z), nao a wa."
                },
                {
                    "id": 16,
                    "topic": 1,
                    "type": "single",
                    "question": "Qual mecanismo o collectd usa para coletar informações de monitoramento em sistemas?",
                    "options": {
                        "A": "Ele usa uma biblioteca de plugins.",
                        "B": "Um servidor mestre se conecta a um serviço collectd em cada máquina para recuperar as informações.",
                        "C": "Ele coleta suas próprias informações em cada servidor e as envia para um servidor mestre.",
                        "D": "Ele faz consultas SNMP aos clientes que estão sendo monitorados."
                    },
                    "answer": "A",
                    "explanation": "O collectd e construido em torno de uma biblioteca de plugins carregaveis.\nCada plugin e responsavel por coletar um tipo especifico de metrica (CPU, memoria, rede, etc.).\nNao existe um modelo mestre\/cliente por SNMP nem coleta centralizada; a coleta e feita localmente por plugin em cada host."
                },
                {
                    "id": 17,
                    "topic": 2,
                    "type": "single",
                    "question": "Qual informação o arquivo modules.dep fornece?",
                    "options": {
                        "A": "Uma lista de todos os módulos, compilados ou não, que estão disponíveis para o kernel.",
                        "B": "Uma lista de módulos confiáveis pelo kernel instalado.",
                        "C": "Uma lista de dispositivos e o nome de seus módulos.",
                        "D": "Uma lista de todos os módulos compilados e suas dependências.",
                        "E": "Uma lista de módulos que o kernel precisa para executar."
                    },
                    "answer": "D",
                    "explanation": "O arquivo modules.dep e gerado pelo comando depmod a partir dos modulos instalados em \/lib\/modules\/<versao>.\nEle lista todos os modulos compilados disponiveis e suas dependencias entre si.\nCom essa informacao, o modprobe consegue carregar automaticamente os modulos dos quais um modulo depende."
                },
                {
                    "id": 18,
                    "topic": 2,
                    "type": "text",
                    "question": "Após configurar um novo kernel, qual arquivo em \/usr\/src\/linux\/ contém a configuração?",
                    "options": {},
                    "answer": "\/usr\/src\/linux\/.config, .config",
                    "explanation": "Apos rodar make config\/menuconfig\/oldconfig, as opcoes escolhidas sao gravadas no arquivo .config.\nEsse arquivo, oculto por comecar com ponto, fica na raiz da arvore de fontes, em \/usr\/src\/linux\/.config."
                },
                {
                    "id": 19,
                    "topic": 2,
                    "type": "multi",
                    "question": "Quais dos seguintes termos são usados para descrever versões do kernel 3.x? (Escolha DUAS respostas corretas.)",
                    "options": {
                        "A": "beta",
                        "B": "final",
                        "C": "longterm",
                        "D": "prerelease",
                        "E": "stable"
                    },
                    "answer": "C,E",
                    "explanation": "A partir da serie 3.x, o kernel.org classifica releases principalmente como 'stable' (ultima versao estavel) ou 'longterm' (suporte estendido).\n'beta', 'final' e 'prerelease' nao sao os rotulos usados oficialmente para as arvores 3.x."
                },
                {
                    "id": 20,
                    "topic": 2,
                    "type": "single",
                    "question": "Qual é o propósito do comando udevadm monitor?",
                    "options": {
                        "A": "Ele escuta eventos do kernel produzidos por uma regra udev e imprime informações no console.",
                        "B": "Ele monitora o diretório \/dev em busca de novos dispositivos.",
                        "C": "Ele monitora o processo udev e imprime estatísticas de desempenho no console.",
                        "D": "Ele se comunica com o D-Bus para configurar novos dispositivos."
                    },
                    "answer": "A",
                    "explanation": "udevadm monitor escuta em tempo real os eventos do kernel (uevents) gerados quando dispositivos sao adicionados ou removidos.\nEsses eventos, junto com os eventos processados pelas regras udev, sao impressos no console conforme ocorrem.\nEle nao varre o \/dev periodicamente nem mede desempenho do daemon udev."
                },
                {
                    "id": 21,
                    "topic": 2,
                    "type": "text",
                    "question": "Uma aplicação de banco de dados requer um segmento máximo de memória compartilhada (shmmax) de GB (2147483648 Bytes). Qual arquivo de configuração deve ser modificado para definir esse parâmetro do kernel permanentemente? (Especifique o nome completo do arquivo, incluindo o caminho.)",
                    "options": {},
                    "answer": "\/etc\/sysctl.conf",
                    "explanation": "Parametros do kernel definidos via \/proc\/sys sao volateis e se perdem no reboot.\nPara torna-los permanentes, eles devem ser gravados em \/etc\/sysctl.conf (ou em arquivos de \/etc\/sysctl.d\/).\nO sysctl aplica esses valores automaticamente durante o boot."
                },
                {
                    "id": 22,
                    "topic": 2,
                    "type": "single",
                    "question": "Em um servidor executando o kernel Linux 3.4.50-11, qual arquivo no diretório \/boot contém os parâmetros de configuração do kernel?",
                    "options": {
                        "A": "config-linux-3.4.50-11",
                        "B": "config-3.4.50-11",
                        "C": "system-3.4.50-11",
                        "D": "vmlinuz-3.4.50-11",
                        "E": "rc.config-3.4.50-11"
                    },
                    "answer": "B",
                    "explanation": "O kernel Linux, ao ser compilado e instalado, deixa uma copia do .config usado em \/boot com o nome config-<versao>.\nEsse arquivo permite consultar depois quais opcoes foram habilitadas naquele kernel especifico.\nvmlinuz-<versao> e a imagem binaria do kernel, nao o arquivo de configuracao."
                },
                {
                    "id": 23,
                    "topic": 2,
                    "type": "text",
                    "question": "Uma nova versão do kernel precisa ser compilada para usar um novo recurso. Se o arquivo de configuração do kernel antigo estiver disponível, qual alvo (target) do make cria um arquivo de configuração para o novo kernel baseado na configuração do kernel antigo?",
                    "options": {},
                    "answer": "oldconfig, make oldconfig",
                    "explanation": "O alvo 'make oldconfig' reaproveita um arquivo .config existente de uma versao anterior do kernel.\nEle pergunta ao usuario apenas sobre as opcoes novas que nao existiam na configuracao antiga.\nAssim, evita ter que responder novamente a todas as perguntas de configuracao do zero."
                },
                {
                    "id": 24,
                    "topic": 2,
                    "type": "single",
                    "question": "Qual é uma diferença chave entre uma imagem de kernel zImage e bzImage?",
                    "options": {
                        "A": "zImage é comprimida usando gzip, bzImage é comprimida usando bzip2.",
                        "B": "zImage é para kernels da série 2.6, bzImage é para kernels da série 3.x.",
                        "C": "zImage é limitada a 64k, bzImage não tem essa restrição.",
                        "D": "zImage é carregada completamente na memória baixa (low memory). bzImage será carregada na memória alta (high memory) assim que a memória baixa estiver cheia."
                    },
                    "answer": "D",
                    "explanation": "zImage e um kernel comprimido que so pode ser carregado inteiramente na memoria baixa (limitada a cerca de 640KB).\nbzImage ('big zImage') supera essa limitacao, permitindo carregar partes do kernel na memoria alta.\nIsso viabiliza kernels maiores, algo que se tornou necessario com o crescimento do codigo do kernel."
                },
                {
                    "id": 25,
                    "topic": 2,
                    "type": "single",
                    "question": "Como o código-fonte dos principais módulos do kernel Linux é distribuído?",
                    "options": {
                        "A": "É incluído com o código-fonte do kernel Linux.",
                        "B": "Os módulos do kernel são baixados sob demanda conforme são usados durante a compilação.",
                        "C": "Os módulos do kernel têm seu próprio ciclo de lançamento e podem ser mantidos separadamente do código-fonte do kernel Linux.",
                        "D": "É fornecido como um download separado junto com o código-fonte do kernel Linux da mesma versão."
                    },
                    "answer": "A",
                    "explanation": "O codigo-fonte dos modulos principais (in-tree) do kernel Linux vem junto com o proprio codigo-fonte do kernel.\nNao ha download separado nem ciclo de release independente para esses modulos principais.\nModulos de terceiros\/out-of-tree podem ter ciclos proprios, mas nao e o caso descrito na pergunta."
                },
                {
                    "id": 26,
                    "topic": 2,
                    "type": "text",
                    "question": "Qual comando é usado para descarregar (unload) um único módulo atualmente carregado pelo kernel sem descarregar quaisquer módulos dos quais ele dependa? (Especifique o comando com ou sem informação de caminho)",
                    "options": {},
                    "answer": "rmmod, \/sbin\/rmmod",
                    "explanation": "rmmod descarrega um unico modulo do kernel especificado, sem tentar remover modulos dos quais ele depende.\nIsso contrasta com 'modprobe -r', que tambem remove dependencias que ficaram sem uso."
                },
                {
                    "id": 27,
                    "topic": 2,
                    "type": "text",
                    "question": "Qual diretório contém os arquivos de regras udev específicos do sistema? (Especifique o caminho absoluto incluindo o nome do diretório)",
                    "options": {},
                    "answer": "\/etc\/udev\/rules.d, \/etc\/udev\/rules.d\/",
                    "explanation": "As regras udev do administrador do sistema (customizadas) ficam em \/etc\/udev\/rules.d\/.\nRegras padrao da distribuicao normalmente ficam em \/lib\/udev\/rules.d\/, mas as regras locais vao no diretorio em \/etc."
                },
                {
                    "id": 28,
                    "topic": 2,
                    "type": "single",
                    "question": "Qual formato de arquivo é usado para criar uma imagem initramfs?",
                    "options": {
                        "A": "gzip",
                        "B": "tar",
                        "C": "RAR",
                        "D": "cpio",
                        "E": "bzip2"
                    },
                    "answer": "D",
                    "explanation": "A imagem initramfs e, na essencia, um arquivo no formato cpio (geralmente comprimido com gzip).\nO kernel extrai esse arquivo cpio para um sistema de arquivos temporario em RAM durante o boot.\ntar, RAR e bzip2 nao sao os formatos usados para montar o conteudo do initramfs."
                },
                {
                    "id": 29,
                    "topic": 2,
                    "type": "single",
                    "question": "Qual é o parâmetro correto a ser passado para o kernel no momento da inicialização para forçá-lo a usar apenas um dos processadores disponíveis?",
                    "options": {
                        "A": "maxcpus=1",
                        "B": "usecpus=1",
                        "C": "smpcpus=1",
                        "D": "vcpumx=1"
                    },
                    "answer": "A",
                    "explanation": "O parametro de boot maxcpus=N limita quantos processadores o kernel vai ativar durante a inicializacao.\nDefinindo maxcpus=1, o kernel usara apenas um processador, mesmo em hardware multi-core.\nAs demais opcoes (usecpus, smpcpus, vcpumx) nao sao parametros reais de boot do kernel Linux."
                },
                {
                    "id": 30,
                    "topic": 2,
                    "type": "multi",
                    "question": "Como o parâmetro do kernel para o tamanho máximo do segmento de memória compartilhada (shmmax) pode ser alterado para 2GB (2147483648 Bytes) em um sistema em execução? (Escolha DUAS respostas corretas.)",
                    "options": {
                        "A": "Editar \/etc\/shmmax e definir o parâmetro como 2147483648.",
                        "B": "sysctl shmmax=2147483648",
                        "C": "sysctl kernel.shmmax=2147483648",
                        "D": "echo 2147483648 > \/proc\/sys\/kernel\/shmmax",
                        "E": "export kernel.shmmax=2147483648"
                    },
                    "answer": "C,D",
                    "explanation": "Parametros do kernel podem ser alterados em tempo de execucao via sysctl ou diretamente pela arvore \/proc\/sys.\n'sysctl kernel.shmmax=...' usa o nome completo do parametro (kernel.shmmax), diferente de so 'shmmax'.\n'echo valor > \/proc\/sys\/kernel\/shmmax' escreve diretamente no arquivo correspondente na arvore \/proc\/sys.\nNenhuma dessas mudancas e persistente apos reboot; para isso seria necessario editar \/etc\/sysctl.conf."
                },
                {
                    "id": 31,
                    "topic": 2,
                    "type": "multi",
                    "question": "Quais comandos são usados para carregar módulos no kernel Linux? (Escolha DUAS respostas corretas.)",
                    "options": {
                        "A": "insmod",
                        "B": "loadmod",
                        "C": "kernload",
                        "D": "modprobe",
                        "E": "probemod"
                    },
                    "answer": "A,D",
                    "explanation": "insmod carrega um modulo especifico diretamente no kernel, sem resolver dependencias.\nmodprobe tambem carrega modulos, mas resolve e carrega automaticamente os modulos dos quais ele depende (via modules.dep).\nloadmod, kernload e probemod nao sao comandos reais do Linux."
                },
                {
                    "id": 32,
                    "topic": 2,
                    "type": "single",
                    "question": "Qual das sequências de comandos a seguir pode ser usada para extrair arquivos contidos em um arquivo initramfs (\/boot\/initramfs) usado pelo kernel no momento da inicialização?",
                    "options": {
                        "A": "cp \/boot\/initramfs \/tmp\/initramfs.gz; gzip -c \/tmp\/initramfs.gz; mkdir \/tmp\/initramfs.dir ; cd \/tmp\/initramfs.dir ; cpio -i < \/tmp\/initramfs",
                        "B": "cp \/boot\/initramfs \/tmp\/initramfs.gz; gunzip \/tmp\/initramfs.gz; mkdir \/tmp\/initramfs.dir ; cd \/tmp\/initramfs.dir ; cpio -i < \/tmp\/initramfs",
                        "C": "cp \/boot\/initramfs \/tmp\/initramfs.gz; gunzip \/tmp\/initramfs.gz; mount \/tmp\/initramfs \/mnt\/ -o loop -t initramfs",
                        "D": "cp \/boot\/initramfs \/tmp\/initramfs.gz; gunzip \/tmp\/initramfs.gz; mkdir \/tmp\/initramfs.dir ; cd \/tmp\/initramfs.dir ; cpio -e \/tmp\/initramfs",
                        "E": "cp \/boot\/initramfs \/tmp\/initramfs.gz; gunzip \/tmp\/initramfs.gz; mount \/tmp\/initramfs \/mnt\/ -o loop -t initrd"
                    },
                    "answer": "B",
                    "explanation": "O initramfs geralmente esta comprimido com gzip, entao primeiro ele deve ser descompactado com gunzip.\nDepois de descompactado, o conteudo (formato cpio) e extraido com 'cpio -i', redirecionando o arquivo como entrada padrao.\nE preciso estar dentro do diretorio de destino antes de rodar o cpio, pois ele extrai no diretorio corrente."
                },
                {
                    "id": 33,
                    "topic": 2,
                    "type": "text",
                    "question": "Após instalar um kernel compilado, ele não consegue encontrar nenhum módulo que precise ser carregado. Qual alvo do make provavelmente foi perdido ao instalar o kernel?",
                    "options": {},
                    "answer": "make modules_install, modules_install",
                    "explanation": "O alvo 'make modules_install' copia os modulos compilados para \/lib\/modules\/<versao-do-kernel>.\nSem esse passo, o kernel recem-instalado nao encontra nenhum modulo para carregar, mesmo tendo sido compilado com sucesso."
                },
                {
                    "id": 34,
                    "topic": 2,
                    "type": "text",
                    "question": "De acordo com o Filesystem Hierarchy Standard (FHS), qual é o caminho para o código-fonte do kernel Linux, podendo ser um link simbólico para o código-fonte Linux real? (Especifique o caminho completo sem informação de versão.)",
                    "options": {},
                    "answer": "\/usr\/src\/linux, \/usr\/src\/linux\/",
                    "explanation": "O Filesystem Hierarchy Standard (FHS) define \/usr\/src\/linux como o caminho convencional para o codigo-fonte do kernel.\nNa pratica, costuma ser um link simbolico apontando para o diretorio real, que inclui a versao no nome (ex: linux-5.10)."
                },
                {
                    "id": 35,
                    "topic": 3,
                    "type": "text",
                    "question": "Qual arquivo informa ao GRUB os caminhos das partições do sistema de arquivos tanto em formato Linux quanto em sintaxe GRUB? (Especifique apenas o nome do arquivo, sem informação de caminho)",
                    "options": {},
                    "answer": "device.map",
                    "explanation": "O arquivo device.map do GRUB (legado) mapeia os nomes de dispositivo do Linux (\/dev\/sda) para a sintaxe do GRUB (hd0).\nEle e usado principalmente pelo grub-install para saber em qual disco fisico instalar o bootloader."
                },
                {
                    "id": 36,
                    "topic": 3,
                    "type": "single",
                    "question": "Um sistema com SysV-init tem um serviço instalado chamado apache2. Qual arquivo controla o início e a parada desse serviço e é referenciado pelos vários diretórios de runlevel?",
                    "options": {
                        "A": "\/etc\/init.d\/apache2",
                        "B": "\/etc\/rc2.d\/70apache2",
                        "C": "\/etc\/rc2.d\/apache2",
                        "D": "\/etc\/rc2.d\/apache2.start"
                    },
                    "answer": "A",
                    "explanation": "No SysV-init, o script mestre de cada servico fica em \/etc\/init.d\/, como \/etc\/init.d\/apache2.\nOs diretorios \/etc\/rcX.d\/ contem apenas links simbolicos (S\/K + numero + nome) que apontam de volta para esse script mestre.\nAlterar o comportamento do servico deve ser feito no script em \/etc\/init.d\/, nao nos links de runlevel."
                },
                {
                    "id": 37,
                    "topic": 3,
                    "type": "single",
                    "question": "Qual é a funcionalidade que o PXE fornece?",
                    "options": {
                        "A": "A capacidade de inicializar um computador usando sua interface de rede.",
                        "B": "A capacidade de lançar um desktop X11 remoto em um computador.",
                        "C": "A capacidade de verificar a configuração de um sistema após concluir o processo de boot.",
                        "D": "A capacidade de verificar a configuração de um sistema antes de concluir o processo de boot."
                    },
                    "answer": "A",
                    "explanation": "PXE (Preboot eXecution Environment) permite que um computador seja inicializado buscando o sistema pela rede.\nE usado tipicamente para instalacoes automatizadas ou boot de terminais sem disco, dispensando midia local.\nNao tem relacao com desktop remoto (X11) nem com verificacoes de configuracao apos o boot."
                },
                {
                    "id": 38,
                    "topic": 3,
                    "type": "single",
                    "question": "Qual comando é usado para instalar um novo bootloader LILO?",
                    "options": {
                        "A": "lilo",
                        "B": "lilo-config",
                        "C": "lilo-install",
                        "D": "install-lilo"
                    },
                    "answer": "A",
                    "explanation": "O comando 'lilo' le o arquivo de configuracao \/etc\/lilo.conf e grava\/atualiza o bootloader no local definido (MBR ou setor de boot).\nEle precisa ser executado sempre que \/etc\/lilo.conf mudar, pois o LILO nao le a configuracao dinamicamente no boot.\nAs demais opcoes nao sao comandos reais do LILO."
                },
                {
                    "id": 39,
                    "topic": 3,
                    "type": "single",
                    "question": "Um servidor requer uma opção de boot do GRUB2 que sempre inicializará no runlevel 1. Qual linha de um arquivo de configuração GRUB2 inicia o começo das configurações necessárias para tornar essa nova opção disponível?",
                    "options": {
                        "A": "initrd",
                        "B": "linux",
                        "C": "menuentry",
                        "D": "runlevel"
                    },
                    "answer": "B",
                    "explanation": "No GRUB2, cada opcao de boot disponivel no menu comeca com a diretiva 'menuentry', que abre um bloco de configuracao.\nDentro desse bloco ficam as diretivas 'linux' (kernel e parametros) e 'initrd' (imagem initramfs).\n'runlevel' nao e uma diretiva do grub.cfg; o runlevel e passado como parametro dentro da linha 'linux'."
                },
                {
                    "id": 40,
                    "topic": 3,
                    "type": "text",
                    "question": "Qual é o caminho completo do diretório que contém os scripts (ou links para os scripts originais) a serem executados enquanto o sistema inicializa para o runlevel 2 do SysV-init?",
                    "options": {},
                    "answer": "\/etc\/rc2.d, \/etc\/rc2.d\/, \/etc\/init.d\/rc2.d, \/etc\/init.d\/rc2.d\/",
                    "explanation": "No SysV-init, cada runlevel tem seu proprio diretorio de scripts, nomeado \/etc\/rcN.d\/ (N = numero do runlevel).\nPara o runlevel 2, portanto, e \/etc\/rc2.d\/, contendo links simbolicos para os scripts reais em \/etc\/init.d\/."
                },
                {
                    "id": 41,
                    "topic": 3,
                    "type": "single",
                    "question": "Após alterar o runlevel padrão no arquivo de configuração do SysV-init, o sistema inicializa em um runlevel diferente do pretendido. Onde mais esse runlevel diferente poderia estar definido?",
                    "options": {
                        "A": "No \/etc\/sysctl.conf",
                        "B": "No arquivo de configuração do bootloader",
                        "C": "No arquivo \/etc\/runlevel",
                        "D": "No arquivo \/boot\/initramfs",
                        "E": "No arquivo \/etc\/rc.d\/rc.local"
                    },
                    "answer": "B",
                    "explanation": "Alem do runlevel padrao definido no \/etc\/inittab (initdefault), e possivel passar um numero de runlevel como parametro de kernel no bootloader.\nEsse parametro tem precedencia sobre o valor do initdefault, sobrepondo-o durante aquele boot especifico.\nPor isso, mesmo corrigindo o inittab, o sistema pode continuar indo para outro runlevel se o bootloader estiver forcando um valor diferente."
                },
                {
                    "id": 42,
                    "topic": 3,
                    "type": "single",
                    "question": "Por que o sistema de arquivos root é montado como somente leitura durante o boot e remontado com permissão de escrita depois?",
                    "options": {
                        "A": "Porque, se problemas com o sistema de arquivos root forem detectados durante o boot, o fsck pode ser executado sem risco de dano.",
                        "B": "Porque dessa forma crackers não conseguem coletar informações sobre root com sniffers de boot.",
                        "C": "Para evitar escrever no disco, a menos que a senha de root seja conhecida.",
                        "D": "Para evitar que outros sistemas operacionais sobrescrevam a partição root do Linux.",
                        "E": "Porque o disco tem sua própria proteção de escrita que não pode ser alterada pelo sistema operacional."
                    },
                    "answer": "A",
                    "explanation": "O sistema de arquivos root e montado inicialmente como somente-leitura para permitir que o fsck seja executado com seguranca.\nRodar fsck em um filesystem montado com escrita pode causar corrupcao, pois dados podem mudar durante a verificacao.\nSo depois que a integridade e confirmada, o root e remontado em modo leitura-escrita para uso normal do sistema."
                },
                {
                    "id": 43,
                    "topic": 3,
                    "type": "single",
                    "question": "O que acontece se o kernel Linux não conseguir montar o sistema de arquivos root durante o boot?",
                    "options": {
                        "A": "Uma mensagem de erro é exibida e o kernel pede ao administrador para especificar um sistema de arquivos root válido para continuar o processo de boot.",
                        "B": "Uma mensagem de erro é exibida e o sistema reinicia após pressionar uma tecla.",
                        "C": "Uma mensagem de erro é exibida e o sistema inicializa em modo de manutenção.",
                        "D": "Uma mensagem de erro é exibida mostrando qual dispositivo não pôde ser montado ou informando que o init não pôde ser encontrado.",
                        "E": "Uma mensagem de erro é exibida afirmando que o módulo do kernel correspondente não pôde ser carregado."
                    },
                    "answer": "D",
                    "explanation": "Se o kernel nao conseguir montar o sistema de arquivos root, ele entra em panico (kernel panic) e para o boot.\nA mensagem de erro exibida indica qual dispositivo nao pode ser montado ou informa que o processo init nao foi encontrado.\nNao ha um modo interativo automatico pedindo ao administrador um filesystem valido nesse ponto do boot."
                },
                {
                    "id": 44,
                    "topic": 3,
                    "type": "multi",
                    "question": "Quais são os principais serviços de rede usados pelo protocolo PXE? (Escolha DUAS respostas corretas.)",
                    "options": {
                        "A": "DNS",
                        "B": "DHCP",
                        "C": "HTTP",
                        "D": "TFTP",
                        "E": "NFS"
                    },
                    "answer": "B,D",
                    "explanation": "O PXE depende do DHCP para obter um endereco IP e descobrir o servidor de boot na rede.\nDepois, ele usa TFTP para baixar o bootloader e a imagem do sistema a partir desse servidor.\nDNS, HTTP e NFS podem ser usados em etapas posteriores da instalacao, mas nao sao os protocolos centrais do PXE em si."
                },
                {
                    "id": 45,
                    "topic": 3,
                    "type": "single",
                    "question": "Caso o arquivo contendo o kernel Linux seja perdido, o que acontece quando o sistema está inicializando?",
                    "options": {
                        "A": "O sistema inicia normalmente, pois o bootloader copia o kernel para o master boot record do disco rígido.",
                        "B": "Em vez do kernel, o initramfs é carregado e instruído a montar o sistema de arquivos root e reinstalar o kernel a partir do pacote original ou do código-fonte.",
                        "C": "O bootloader monta o sistema de arquivos root como somente leitura e lança \/bin\/sh diretamente para permitir que o administrador reinstale o kernel.",
                        "D": "Sem um kernel um sistema não pode inicializar e, dependendo do bootloader, um erro é exibido."
                    },
                    "answer": "D",
                    "explanation": "Sem o arquivo do kernel, nao ha nada para o bootloader carregar e executar.\nO bootloader tentara localizar o kernel configurado e, nao encontrando, exibira uma mensagem de erro (o comportamento exato depende do bootloader).\nO sistema nao consegue prosseguir com o boot nessa situacao."
                },
                {
                    "id": 46,
                    "topic": 3,
                    "type": "single",
                    "question": "Se todos os seguintes arquivos e\/ou links simbólicos existirem em um diretório de runlevel SysV-init, qual deles será executado primeiro ao inicializar o sistema diretamente naquele runlevel?",
                    "options": {
                        "A": "S99lpi",
                        "B": "K99lpi",
                        "C": "PRE-S99lpi",
                        "D": "S98lpi",
                        "E": "S99a-lpi"
                    },
                    "answer": "D",
                    "explanation": "Nos diretorios de runlevel do SysV-init, os scripts que iniciam servicos comecam com 'S' seguido de um numero de dois digitos.\nEsse numero define a ordem de execucao: quanto menor o numero, mais cedo o script roda.\nS98lpi (98) executa antes de S99lpi (99); os scripts 'K' (kill) sao usados ao sair do runlevel, nao ao entrar nele."
                },
                {
                    "id": 47,
                    "topic": 3,
                    "type": "single",
                    "question": "Durante o boot, quando o kernel Linux carrega um arquivo initramfs, qual comando do initramfs será executado primeiro, se presente?",
                    "options": {
                        "A": "\/init",
                        "B": "\/initrd",
                        "C": "\/linuxrc",
                        "D": "\/rc.local",
                        "E": "\/sbin\/init"
                    },
                    "answer": "A",
                    "explanation": "Ao carregar um initramfs, o kernel procura e executa o arquivo \/init como primeiro processo, se ele existir.\n\/init e responsavel por preparar o ambiente (carregar modulos, montar o root real) antes de passar o controle ao init definitivo.\n\/linuxrc era usado no antigo initrd; nos initramfs modernos, \/init e o padrao."
                },
                {
                    "id": 48,
                    "topic": 3,
                    "type": "single",
                    "question": "Onde o código do bootloader LILO é tipicamente instalado em um sistema com apenas uma instalação Linux e nenhum outro sistema operacional?",
                    "options": {
                        "A": "No master boot record.",
                        "B": "No setor de boot.",
                        "C": "No diretório \/boot.",
                        "D": "No início do kernel."
                    },
                    "answer": "A",
                    "explanation": "Quando ha apenas uma instalacao Linux e nenhum outro sistema operacional, o LILO costuma ser instalado diretamente no MBR (master boot record).\nIsso permite que o LILO assuma o controle do boot assim que o BIOS entrega a execucao para o disco."
                },
                {
                    "id": 49,
                    "topic": 3,
                    "type": "text",
                    "question": "Qual palavra-chave é usada no arquivo \/etc\/inittab para definir o runlevel padrão do sistema no SysV-init?",
                    "options": {},
                    "answer": "initdefault",
                    "explanation": "No \/etc\/inittab do SysV-init, a linha com a palavra-chave 'initdefault' define qual runlevel sera usado por padrao no boot.\nE dessa linha que o init le o runlevel-alvo antes de executar os scripts correspondentes."
                },
                {
                    "id": 50,
                    "topic": 3,
                    "type": "text",
                    "question": "Digite o caminho completo para o principal arquivo de configuração do processo init do SysV.",
                    "options": {},
                    "answer": "\/etc\/inittab",
                    "explanation": "O \/etc\/inittab e o arquivo de configuracao principal do processo init no esquema SysV.\nNele sao definidos o runlevel padrao (initdefault) e as acoes a executar em cada runlevel."
                },
                {
                    "id": 51,
                    "topic": 3,
                    "type": "multi",
                    "question": "Um servidor Linux está executando em modo single user para manutenção regular. Quais comandos são usados para restaurar o servidor ao seu runlevel usual? (Escolha DUAS respostas corretas.)",
                    "options": {
                        "A": "telinit 0",
                        "B": "shutdown -r now",
                        "C": "sync",
                        "D": "shutdown -h now",
                        "E": "reboot"
                    },
                    "answer": "B,E",
                    "explanation": "Para sair do modo single user (runlevel 1) e voltar ao runlevel normal de operacao, os comandos usuais sao 'shutdown -r now' e 'reboot'.\nAmbos reiniciam o sistema, que entao sobe novamente ate o runlevel padrao configurado.\n'telinit 0' desligaria o sistema (runlevel 0) e 'shutdown -h now' tambem desliga, em vez de reiniciar."
                },
                {
                    "id": 52,
                    "topic": 3,
                    "type": "single",
                    "question": "Qual opção para o comando update-rc.d causará a remoção de todos os links simbólicos para \/etc\/rcX.d\/*test2 mesmo quando o script \/etc\/init.d\/test2 ainda existir?",
                    "options": {
                        "A": "-d",
                        "B": "-f",
                        "C": "-n",
                        "D": "-r"
                    },
                    "answer": "B",
                    "explanation": "A opcao -f do update-rc.d forca a operacao mesmo quando o script correspondente ainda existe em \/etc\/init.d\/.\nSem -f, o update-rc.d normalmente se recusa a remover os links se o script de init ainda estiver presente.\nIsso e util para limpar links de runlevel de um servico que sera removido, sem apagar o script antes."
                },
                {
                    "id": 53,
                    "topic": 4,
                    "type": "single",
                    "question": "Onde o fsck colocaria qualquer arquivo ou fragmento de arquivo não referenciado em um sistema de arquivos ext4?",
                    "options": {
                        "A": "recover",
                        "B": "lost+found",
                        "C": "back",
                        "D": "lost"
                    },
                    "answer": "B",
                    "explanation": "Quando o fsck encontra arquivos ou fragmentos sem nenhuma entrada de diretorio apontando para eles, ele os recupera.\nEsses arquivos orfaos sao colocados no diretorio especial lost+found, presente em cada filesystem ext2\/3\/4.\nCabe ao administrador depois inspecionar o lost+found e decidir o que fazer com o conteudo recuperado."
                },
                {
                    "id": 54,
                    "topic": 4,
                    "type": "single",
                    "question": "O arquivo de configuração principal do autofs tem esta entrada:\n```\n\/home \/etc\/auto.home\n```\nQual é o significado do arquivo \/etc\/auto.home?",
                    "options": {
                        "A": "Ele possui os mapas indiretos para a montagem de sistemas de arquivos.",
                        "B": "Ele possui informações de configuração, como senhas e chaves, para o servidor de arquivos remoto.",
                        "C": "Ele possui informações de configuração sobre as definições para o ponto de montagem \/home.",
                        "D": "Ele mantém a chave SSL para permitir autenticação com o servidor de arquivos remoto."
                    },
                    "answer": "A",
                    "explanation": "Na linha '\/home \/etc\/auto.home' do auto.master, \/etc\/auto.home e um mapa indireto do autofs.\nUm mapa indireto lista, para cada chave (subdiretorio dentro de \/home), qual sistema de arquivos remoto montar sob demanda.\nEle nao guarda credenciais nem chaves; apenas as regras de montagem automatica."
                },
                {
                    "id": 55,
                    "topic": 4,
                    "type": "single",
                    "question": "O que um 0 no último campo (ordem do fsck) de \/etc\/fstab indica sobre o sistema de arquivos?",
                    "options": {
                        "A": "O sistema de arquivos deve ser verificado antes de sistemas de arquivos com valores mais altos.",
                        "B": "O sistema de arquivos deve ser verificado depois de sistemas de arquivos com valores mais altos.",
                        "C": "O contador de verificação do sistema de arquivos é ignorado.",
                        "D": "O sistema de arquivos foi desabilitado de ser verificado e montado no sistema.",
                        "E": "O sistema de arquivos não requer uma verificação fsck ao ser montado."
                    },
                    "answer": "E",
                    "explanation": "O ultimo campo do \/etc\/fstab define a ordem em que o fsck verifica os sistemas de arquivos no boot.\nO valor 0 significa que aquele filesystem nao sera verificado automaticamente pelo fsck.\nValores 1 e 2 definem prioridade (1 = root, verificado primeiro; 2 = demais filesystems, verificados depois)."
                },
                {
                    "id": 56,
                    "topic": 4,
                    "type": "single",
                    "question": "Como o label root pode ser adicionado ao sistema de arquivos ext2 em \/dev\/sda1?",
                    "options": {
                        "A": "relabel \/dev\/sda1 root",
                        "B": "tune2fs -L root \/dev\/sda1",
                        "C": "echo 'root' > \/proc\/fs\/sda1\/label",
                        "D": "labelfs --device \/dev\/sda1 root"
                    },
                    "answer": "B",
                    "explanation": "O comando tune2fs permite alterar parametros de um filesystem ext ja criado, sem reformata-lo.\nA opcao -L define o label (rotulo) do filesystem; 'tune2fs -L root \/dev\/sda1' define o label como 'root'.\nNao existem comandos 'relabel' ou 'labelfs' no Linux padrao para essa finalidade."
                },
                {
                    "id": 57,
                    "topic": 4,
                    "type": "text",
                    "question": "Qual comando é usado para criar um sistema de arquivos ISO9660? (Especifique APENAS o comando, sem caminho ou parâmetros.)",
                    "options": {},
                    "answer": "mkisofs, genisoimage",
                    "explanation": "mkisofs (e seu sucessor genisoimage) cria imagens de filesystem no formato ISO9660, usado em CDs\/DVDs.\nE o comando padrao para gerar arquivos .iso a partir de um diretorio de conteudo."
                },
                {
                    "id": 58,
                    "topic": 4,
                    "type": "single",
                    "question": "Qual componente de um sistema o smartd monitora?",
                    "options": {
                        "A": "CPU",
                        "B": "RAM",
                        "C": "Discos rígidos",
                        "D": "Tráfego Ethernet"
                    },
                    "answer": "C",
                    "explanation": "O daemon smartd monitora a saude de discos rigidos que suportam a tecnologia S.M.A.R.T.\nEle le atributos internos do disco (temperatura, setores realocados, etc.) para detectar sinais de falha iminente.\nNao monitora CPU, RAM nem trafego de rede; seu escopo e exclusivamente armazenamento."
                },
                {
                    "id": 59,
                    "topic": 4,
                    "type": "text",
                    "question": "Qual comando transforma um sistema de arquivos ext2 existente em ext3 de forma não destrutiva? (Especifique APENAS o comando, sem caminho ou parâmetros.)",
                    "options": {},
                    "answer": "\/sbin\/tune2fs, tune2fs",
                    "explanation": "O comando tune2fs, usado com a opcao -j, adiciona um journal a um filesystem ext2 existente, convertendo-o em ext3.\nEssa conversao e nao destrutiva: os dados existentes sao preservados, apenas o journal e adicionado."
                },
                {
                    "id": 60,
                    "topic": 4,
                    "type": "single",
                    "question": "Devido ao uso extremo do sistema, um sistema Linux requer espaço de swap adicional. Para inicializar 5GB de espaço de swap adicional, qual combinação de comandos deve ser usada?",
                    "options": {
                        "A": "dd if=\/dev\/zero of=\/tmp\/swapfile bs=1024 count=5120000; mkswap \/tmp\/swapfile; mount \/tmp\/swapfile",
                        "B": "dd if=\/dev\/zero of=\/tmp\/swapfile bs=1024 count=5120000; swapon \/tmp\/swapfile",
                        "C": "dd if=\/dev\/zero of=\/tmp\/swapfile bs=1024 count=5120000; mkswap \/tmp\/swapfile; swapon \/tmp\/swapfile",
                        "D": "touch -5G \/tmp\/swapfile; swapon \/tmp\/swapfile",
                        "E": "mkswap \/tmp\/swapfile 512000; swapon \/tmp\/swapfile"
                    },
                    "answer": "C",
                    "explanation": "Primeiro cria-se o arquivo do tamanho desejado com dd (lendo de \/dev\/zero para preencher com zeros).\nEm seguida, mkswap formata esse arquivo com a assinatura de area de swap.\nPor fim, swapon ativa o arquivo como espaco de swap utilizavel pelo sistema; 'mount' nao se aplica a swap."
                },
                {
                    "id": 61,
                    "topic": 4,
                    "type": "single",
                    "question": "Qual das opções a seguir descreve melhor o formato do arquivo \/etc\/fstab?",
                    "options": {
                        "A": "nome do dispositivo; tipo do sistema de arquivos; ponto de montagem; opções de montagem; dump do sistema de arquivos; ordem do fsck",
                        "B": "nome do dispositivo; ponto de montagem; tipo do sistema de arquivos; opções de montagem; dump do sistema de arquivos; ordem do fsck",
                        "C": "nome do dispositivo; ponto de montagem; opções de montagem; tipo do sistema de arquivos; dump do sistema de arquivos; ordem do fsck",
                        "D": "ponto de montagem; tipo do sistema de arquivos; nome do dispositivo; opções de montagem; dump do sistema de arquivos; ordem do fsck",
                        "E": "ponto de montagem; nome do dispositivo; tipo do sistema de arquivos; opções de montagem; dump do sistema de arquivos; ordem do fsck"
                    },
                    "answer": "B",
                    "explanation": "O \/etc\/fstab segue uma ordem fixa de campos: dispositivo, ponto de montagem, tipo de sistema de arquivos, opcoes, dump e ordem do fsck.\nTrocar a ordem entre ponto de montagem e tipo de filesystem, como fazem outras alternativas, tornaria a linha invalida.\nEssa mesma ordem e usada tambem em \/etc\/mtab e \/proc\/mounts."
                },
                {
                    "id": 62,
                    "topic": 4,
                    "type": "text",
                    "question": "Após muitas operações de escrita, o administrador quer garantir que o kernel grave os buffers do sistema de arquivos no disco. Qual comando realiza isso? (Especifique APENAS o comando, sem caminho ou parâmetros.)",
                    "options": {},
                    "answer": "sync",
                    "explanation": "O comando sync forca a gravacao imediata de todos os buffers do sistema de arquivos que ainda estao apenas em memoria para o disco.\nE util antes de desligar um sistema abruptamente ou remover midia removivel, para evitar perda ou corrupcao de dados."
                },
                {
                    "id": 63,
                    "topic": 4,
                    "type": "multi",
                    "question": "Quais arquivos são atualizados conforme dispositivos são montados e desmontados para fornecer informações sobre os dispositivos atualmente montados e as opções usadas? (Escolha DUAS respostas corretas.)",
                    "options": {
                        "A": "\/proc\/dtab",
                        "B": "\/etc\/mtab",
                        "C": "\/etc\/fstab",
                        "D": "\/proc\/mounts",
                        "E": "\/proc\/devices"
                    },
                    "answer": "B,D",
                    "explanation": "\/etc\/mtab e \/proc\/mounts sao atualizados dinamicamente conforme sistemas de arquivos sao montados e desmontados.\nEles refletem o estado atual real dos pontos de montagem, ao contrario de \/etc\/fstab, que e apenas a configuracao desejada.\n\/proc\/devices lista dispositivos registrados no kernel, nao pontos de montagem."
                },
                {
                    "id": 64,
                    "topic": 4,
                    "type": "single",
                    "question": "Qual é o principal arquivo de template usado pelo autofs?",
                    "options": {
                        "A": "default.maps",
                        "B": "auto.conf",
                        "C": "auto.master",
                        "D": "autofs.master"
                    },
                    "answer": "C",
                    "explanation": "O arquivo auto.master e o mapa mestre do autofs, listando quais pontos de montagem usam qual mapa (direto ou indireto).\nE a partir dele que o automount sabe onde procurar as regras detalhadas para cada ponto, como \/etc\/auto.home."
                },
                {
                    "id": 65,
                    "topic": 4,
                    "type": "multi",
                    "question": "Quais das opções a seguir são tipos comuns de sistema de arquivos Linux usados para partições root? (Escolha TRÊS respostas corretas.)",
                    "options": {
                        "A": "ext4",
                        "B": "VFAT",
                        "C": "NTFS",
                        "D": "XFS",
                        "E": "Btrfs"
                    },
                    "answer": "A,D,E",
                    "explanation": "ext4, XFS e Btrfs sao sistemas de arquivos nativos do Linux, com suporte a permissoes Unix, journaling e recursos avancados, adequados para root.\nVFAT nao suporta permissoes Unix nem links simbolicos, o que o torna inadequado para a raiz do sistema.\nNTFS, embora suportado para leitura\/escrita via ntfs-3g, tambem nao e usado como filesystem root em instalacoes Linux."
                },
                {
                    "id": 66,
                    "topic": 4,
                    "type": "single",
                    "question": "Qual é o propósito do daemon smartd?",
                    "options": {
                        "A": "É um daemon em espaço de usuário usado para leitura de smart cards e chips de circuito integrado.",
                        "B": "Ele tenta reparar automaticamente sistemas de arquivos após uma verificação de sistema de arquivos falhar.",
                        "C": "Ele monitora a atividade dos processos e ajuda o kernel a decidir quais processos matar quando o kernel faz overcommit.",
                        "D": "Ele monitora certas unidades de disco e tenta prever quando elas irão falhar."
                    },
                    "answer": "D",
                    "explanation": "O smartd monitora continuamente discos com suporte a S.M.A.R.T., lendo seus atributos internos de saude.\nCom base nesses atributos, ele tenta prever falhas de disco antes que ocorram, alertando o administrador.\nEle nao repara filesystems nem decide quais processos matar; essas sao funcoes de outras ferramentas (fsck, OOM killer)."
                },
                {
                    "id": 67,
                    "topic": 4,
                    "type": "text",
                    "question": "Qual palavra-chave está faltando na seguinte linha do \/etc\/fstab para tornar um dispositivo USB flash gravável pelo usuário fred quando montado:\n```\n\/dev\/sda1 \/mnt\/usbflash vfat defaults,users,______=fred,umask=022, 0 0\n```\n(Forneça apenas o nome da opção, sem quaisquer configurações)",
                    "options": {},
                    "answer": "uid",
                    "explanation": "No \/etc\/fstab, a opcao uid=<usuario> define qual usuario sera o dono de todos os arquivos de um filesystem sem permissoes Unix nativas, como o VFAT.\nCombinada com 'users' (permite montagem por qualquer usuario) e 'umask', o resultado e um dispositivo gravavel por 'fred'."
                },
                {
                    "id": 68,
                    "topic": 4,
                    "type": "single",
                    "question": "Qual das opções a seguir é um padrão de sistema de arquivos de CD-ROM?",
                    "options": {
                        "A": "OSI9660",
                        "B": "ISO9660",
                        "C": "SR0FS",
                        "D": "ISO8859",
                        "E": "ROM-EO"
                    },
                    "answer": "B",
                    "explanation": "ISO9660 e o padrao internacional de sistema de arquivos usado em midias de CD-ROM.\nE o formato gerado por ferramentas como mkisofs\/genisoimage e o unico entre as opcoes que corresponde a um filesystem real de CD-ROM."
                },
                {
                    "id": 69,
                    "topic": 4,
                    "type": "text",
                    "question": "Considere o seguinte arquivo \/etc\/fstab:\n```\n\/dev\/hda1 swap swap defaults 0 0\n\/dev\/hda2 \/ ext2 defaults 1 1\n\/dev\/hda3 \/home ext2 defaults 1 2\nnone \/proc proc defaults 0 0\n\/dev\/sdb1 \/media\/usb0 vfat user,noauto 0 0\n```\nQual é um dos possíveis comandos que um usuário comum (não-root) pode usar para montar a partição \/dev\/sdb1 no ponto de montagem \/media\/usb0? (Digite o comando com todos os parâmetros e\/ou opções, mas sem opções de tipo de sistema de arquivos.)",
                    "options": {},
                    "answer": "mount \/dev\/sdb1, mount \/media\/usb0, \/bin\/mount \/dev\/sdb1, \/bin\/mount \/media\/usb0, mount \/media\/usb0\/, \/bin\/mount \/media\/usb0\/",
                    "explanation": "Como a linha do \/etc\/fstab para \/dev\/sdb1 tem a opcao 'user', qualquer usuario comum pode montar esse dispositivo.\nPara montar, basta informar o dispositivo OU o ponto de montagem (o outro e completado a partir do fstab): 'mount \/dev\/sdb1' ou 'mount \/media\/usb0'.\nNao e necessario, nem permitido para um usuario comum, especificar opcoes extras como o tipo de filesystem."
                },
                {
                    "id": 70,
                    "topic": 4,
                    "type": "text",
                    "question": "Qual diretório em \/dev\/disk\/ pode ser usado para determinar o UUID de um disco rígido conectado?",
                    "options": {},
                    "answer": "\/dev\/disk\/by-uuid, by-uuid, \/dev\/disk\/by-uuid\/",
                    "explanation": "O diretorio \/dev\/disk\/by-uuid\/ contem links simbolicos nomeados com o UUID de cada particao, apontando para o dispositivo real (ex: \/dev\/sda1).\nE a forma mais confiavel de referenciar discos no \/etc\/fstab, pois o UUID nao muda mesmo que a ordem dos dispositivos (\/dev\/sdX) mude entre boots."
                },
                {
                    "id": 71,
                    "topic": 5,
                    "type": "single",
                    "question": "Qual comando único irá simular um dispositivo falho dentro de um array RAID 5?",
                    "options": {
                        "A": "mdadm --remove \/dev\/md0 \/dev\/sdd1",
                        "B": "mdadm --zero-superblock \/dev\/sdf3",
                        "C": "mdadm --force-fault \/dev\/md2 \/dev\/sde2",
                        "D": "mdadm --fail \/dev\/md0 \/dev\/sdc1",
                        "E": "mdadm \/dev\/md0 --offline \/dev\/sdc1"
                    },
                    "answer": "D",
                    "explanation": "O comando 'mdadm --fail <array> <dispositivo>' marca manualmente um disco como falho dentro de um array RAID.\nIsso simula uma falha real sem precisar remover fisicamente o disco, util para testar a resiliencia do array.\n--remove tira um disco ja marcado como falho do array; --zero-superblock apaga os metadados RAID de um disco, sem simular falha."
                },
                {
                    "id": 72,
                    "topic": 5,
                    "type": "single",
                    "question": "Qual arquivo em \/proc contém informações sobre o status de dispositivos RAID de software locais?",
                    "options": {
                        "A": "\/proc\/raidstat",
                        "B": "\/proc\/mdstat",
                        "C": "\/proc\/raidstatus",
                        "D": "\/proc\/mdstatus",
                        "E": "\/proc\/raid\/status"
                    },
                    "answer": "B",
                    "explanation": "\/proc\/mdstat e o arquivo virtual que mostra o status em tempo real de todos os arrays RAID de software (md) ativos no sistema.\nNele aparecem informacoes como discos ativos, nivel de RAID, progresso de sincronizacao\/recuperacao e discos falhos."
                },
                {
                    "id": 73,
                    "topic": 5,
                    "type": "single",
                    "question": "Qual das opções a seguir descreve melhor o formato do arquivo \/etc\/fstab?",
                    "options": {
                        "A": "nome do dispositivo; tipo do sistema de arquivos; ponto de montagem; opções de montagem; dump do sistema de arquivos; ordem do fsck",
                        "B": "nome do dispositivo; ponto de montagem; tipo do sistema de arquivos; opções de montagem; dump do sistema de arquivos; ordem do fsck",
                        "C": "nome do dispositivo; ponto de montagem; opções de montagem; tipo do sistema de arquivos; dump do sistema de arquivos; ordem do fsck",
                        "D": "ponto de montagem; tipo do sistema de arquivos; nome do dispositivo; opções de montagem; dump do sistema de arquivos; ordem do fsck",
                        "E": "ponto de montagem; nome do dispositivo; tipo do sistema de arquivos; opções de montagem; dump do sistema de arquivos; ordem do fsck"
                    },
                    "answer": "B",
                    "explanation": "O \/etc\/fstab segue uma ordem fixa de campos: dispositivo, ponto de montagem, tipo de sistema de arquivos, opcoes, dump e ordem do fsck.\nTrocar a ordem entre ponto de montagem e tipo de filesystem, como fazem outras alternativas, tornaria a linha invalida.\nEssa mesma ordem e usada tambem em \/etc\/mtab e \/proc\/mounts."
                },
                {
                    "id": 74,
                    "topic": 5,
                    "type": "single",
                    "question": "Devido ao uso extremo do sistema, um sistema Linux requer espaço de swap adicional. Para inicializar 5GB de espaço de swap adicional, qual combinação de comandos deve ser usada?",
                    "options": {
                        "A": "dd if=\/dev\/zero of=\/tmp\/swapfile bs=1024 count=5120000; mkswap \/tmp\/swapfile; mount \/tmp\/swapfile",
                        "B": "dd if=\/dev\/zero of=\/tmp\/swapfile bs=1024 count=5120000; swapon \/tmp\/swapfile",
                        "C": "dd if=\/dev\/zero of=\/tmp\/swapfile bs=1024 count=5120000; mkswap \/tmp\/swapfile; swapon \/tmp\/swapfile",
                        "D": "touch -5G \/tmp\/swapfile; swapon \/tmp\/swapfile",
                        "E": "mkswap \/tmp\/swapfile 512000; swapon \/tmp\/swapfile"
                    },
                    "answer": "C",
                    "explanation": "Primeiro cria-se o arquivo do tamanho desejado com dd (lendo de \/dev\/zero para preencher com zeros).\nEm seguida, mkswap formata esse arquivo com a assinatura de area de swap.\nPor fim, swapon ativa o arquivo como espaco de swap utilizavel pelo sistema; 'mount' nao se aplica a swap."
                },
                {
                    "id": 75,
                    "topic": 5,
                    "type": "single",
                    "question": "Onde o fsck colocaria qualquer arquivo ou fragmento de arquivo não referenciado em um sistema de arquivos ext4?",
                    "options": {
                        "A": "recover",
                        "B": "lost+found",
                        "C": "back",
                        "D": "lost"
                    },
                    "answer": "B",
                    "explanation": "Quando o fsck encontra arquivos ou fragmentos sem nenhuma entrada de diretorio apontando para eles, ele os recupera.\nEsses arquivos orfaos sao colocados no diretorio especial lost+found, presente em cada filesystem ext2\/3\/4.\nCabe ao administrador depois inspecionar o lost+found e decidir o que fazer com o conteudo recuperado."
                },
                {
                    "id": 76,
                    "topic": 5,
                    "type": "text",
                    "question": "Qual comando é usado para remover um volume físico de um grupo de volumes? (Especifique APENAS o comando, sem caminho ou parâmetros.)",
                    "options": {},
                    "answer": "vgreduce, \/sbin\/vgreduce",
                    "explanation": "O comando vgreduce remove um ou mais volumes fisicos (PVs) de um grupo de volumes (VG) existente no LVM.\nO volume fisico removido precisa estar sem dados alocados, ou eles devem ser migrados antes (por exemplo, com pvmove)."
                },
                {
                    "id": 77,
                    "topic": 5,
                    "type": "single",
                    "question": "Qual opção de montagem deve ser usada em \/etc\/fstab ao montar um alvo iSCSI?",
                    "options": {
                        "A": "_santarget",
                        "B": "iscsi",
                        "C": "waitiscsi",
                        "D": "_netdev"
                    },
                    "answer": "D",
                    "explanation": "A opcao de montagem _netdev informa ao sistema que aquele filesystem depende da rede estar disponivel.\nIsso faz o sistema adiar a tentativa de montagem ate que a rede esteja ativa, essencial para volumes remotos como iSCSI, NFS ou CIFS.\nSem essa opcao, o boot pode tentar montar o alvo antes da rede subir e falhar."
                },
                {
                    "id": 78,
                    "topic": 5,
                    "type": "single",
                    "question": "Qual das opções a seguir é um exemplo de caminho para um array RAID de software Linux?",
                    "options": {
                        "A": "\/dev\/raid0",
                        "B": "\/dev\/rd1",
                        "C": "\/dev\/pr0",
                        "D": "\/dev\/md1"
                    },
                    "answer": "D",
                    "explanation": "Arrays RAID de software criados com mdadm sao expostos como dispositivos \/dev\/mdN (ex: \/dev\/md0, \/dev\/md1).\nNenhuma das outras opcoes corresponde a nomenclatura real usada pelo subsistema md do Linux."
                },
                {
                    "id": 79,
                    "topic": 5,
                    "type": "single",
                    "question": "Qual ação deve ser realizada após aumentar o tamanho de um volume lógico?",
                    "options": {
                        "A": "Executar vgresize.",
                        "B": "Aumentar o tamanho do sistema de arquivos usado pelo volume lógico.",
                        "C": "Executar lvresize.",
                        "D": "Remontar o volume lógico."
                    },
                    "answer": "B",
                    "explanation": "Aumentar o tamanho de um volume logico (com lvresize\/lvextend) so expande o espaco em disco disponivel para o LV.\nO sistema de arquivos dentro dele continua com seu tamanho antigo ate ser explicitamente redimensionado (ex: resize2fs, xfs_growfs).\nSem esse passo, o espaco extra fica alocado no LV mas inacessivel para arquivos."
                },
                {
                    "id": 80,
                    "topic": 5,
                    "type": "multi",
                    "question": "Quais são as opções para node.startup no arquivo iscsid.conf? (Escolha DUAS respostas corretas.)",
                    "options": {
                        "A": "login",
                        "B": "initiate",
                        "C": "manual",
                        "D": "discover",
                        "E": "automatic"
                    },
                    "answer": "C,E",
                    "explanation": "No arquivo iscsid.conf, o parametro node.startup controla se uma sessao iSCSI e conectada automaticamente.\nOs valores validos sao 'automatic' (conecta no boot\/servico) e 'manual' (requer login explicito pelo administrador)."
                },
                {
                    "id": 81,
                    "topic": 5,
                    "type": "single",
                    "question": "Como o label root pode ser adicionado ao sistema de arquivos ext4 em \/dev\/sda1?",
                    "options": {
                        "A": "relabel \/dev\/sda1 root",
                        "B": "tune2fs -L root \/dev\/sda1",
                        "C": "echo 'root' > \/proc\/fs\/sda1\/label",
                        "D": "labelfs --device \/dev\/sda1 root"
                    },
                    "answer": "B",
                    "explanation": "O comando tune2fs permite alterar parametros de um filesystem ext ja criado, sem reformata-lo.\nA opcao -L define o label (rotulo) do filesystem; 'tune2fs -L root \/dev\/sda1' define o label como 'root'.\nNao existem comandos 'relabel' ou 'labelfs' no Linux padrao para essa finalidade."
                },
                {
                    "id": 82,
                    "topic": 5,
                    "type": "single",
                    "question": "Quais dois comandos LVM estão faltando na seguinte sequência, usada para criar um volume lógico e utilizá-lo em um sistema Linux?\n```\npvcreate, ___________, __________, mkfs, mount\n```",
                    "options": {
                        "A": "lvcreate, mdadm",
                        "B": "lvcreate, vgcreate",
                        "C": "lvmcreate, vgcreate",
                        "D": "vgcreate, lvcreate",
                        "E": "vgcreate, mdadm"
                    },
                    "answer": "D",
                    "explanation": "A sequencia padrao do LVM e: pvcreate (inicializa discos\/particoes como volumes fisicos), vgcreate (agrupa PVs em um grupo de volumes) e lvcreate (cria volumes logicos dentro do VG).\nNa sequencia da pergunta faltam justamente vgcreate e lvcreate, nessa ordem, antes de mkfs e mount."
                },
                {
                    "id": 83,
                    "topic": 5,
                    "type": "single",
                    "question": "Qual valor de nível RAID deve ser usado com RAID de software Linux para criar um array de dispositivos espelhados (mirrored)?",
                    "options": {
                        "A": "1",
                        "B": "5",
                        "C": "6",
                        "D": "container",
                        "E": "mirrorstripe"
                    },
                    "answer": "A",
                    "explanation": "RAID nivel 1 cria um array espelhado (mirror), onde os dados sao duplicados integralmente em dois ou mais discos.\nRAID5 usa paridade distribuida (nao e espelhamento) e RAID6 e semelhante ao 5, mas com paridade dupla.\n'container' e 'mirrorstripe' nao sao niveis validos de RAID de software Linux."
                },
                {
                    "id": 84,
                    "topic": 5,
                    "type": "single",
                    "question": "A sequência correta de comandos para criar e montar volumes lógicos em um sistema Linux é:",
                    "options": {
                        "A": "lvcreate, pvcreate, vgcreate, mkfs, mount",
                        "B": "pvcreate, vgcreate, lvcreate, mkfs, mount",
                        "C": "vgcreate, lvcreate, pvcreate, mount, mkfs",
                        "D": "mkfs, pvcreate, vgcreate, lvcreate, mount",
                        "E": "pvcreate, lvcreate, vgcreate, mkfs, mount"
                    },
                    "answer": "B",
                    "explanation": "A sequencia correta do LVM e sempre: pvcreate, vgcreate, lvcreate, seguido de mkfs (formatar) e mount (montar).\nCada etapa depende da anterior: nao e possivel criar um VG sem PVs, nem um LV sem um VG existente."
                },
                {
                    "id": 85,
                    "topic": 5,
                    "type": "single",
                    "question": "Qual comando é usado para fazer uma cópia exata, em um único ponto no tempo, de um volume lógico para fins de backup?",
                    "options": {
                        "A": "lvsnap",
                        "B": "lvsnapshot",
                        "C": "lvcreate",
                        "D": "lvcopy",
                        "E": "lvclone"
                    },
                    "answer": "C",
                    "explanation": "O comando lvcreate, usado com a opcao -s (--snapshot), cria uma copia point-in-time de um volume logico existente.\nEsse snapshot captura o estado do volume em um instante especifico, sendo muito usado para backups consistentes.\nlvsnap, lvsnapshot, lvcopy e lvclone nao sao comandos reais do LVM2."
                },
                {
                    "id": 86,
                    "topic": 5,
                    "type": "text",
                    "question": "Qual diretório em \/dev\/disk\/ pode ser usado para determinar o UUID de um disco rígido conectado?",
                    "options": {},
                    "answer": "\/dev\/disk\/by-uuid, by-uuid, \/dev\/disk\/by-uuid\/",
                    "explanation": "O diretorio \/dev\/disk\/by-uuid\/ contem links simbolicos nomeados com o UUID de cada particao, apontando para o dispositivo real (ex: \/dev\/sda1).\nE a forma mais confiavel de referenciar discos no \/etc\/fstab, pois o UUID nao muda mesmo que a ordem dos dispositivos (\/dev\/sdX) mude entre boots."
                },
                {
                    "id": 87,
                    "topic": 5,
                    "type": "single",
                    "question": "Qual é o propósito do comando vgextend?",
                    "options": {
                        "A": "Estender o espaço em disco ocupado por um grupo de volumes.",
                        "B": "Adicionar volumes físicos a um grupo de volumes existente.",
                        "C": "Aumentar o número de dias entre verificações de erro agendadas.",
                        "D": "Criar um grupo de volumes que usa todo o espaço disponível em disco."
                    },
                    "answer": "B",
                    "explanation": "O comando vgextend adiciona um ou mais volumes fisicos (PVs) a um grupo de volumes (VG) ja existente.\nIsso aumenta o espaco total disponivel no VG, permitindo depois criar ou estender volumes logicos."
                },
                {
                    "id": 88,
                    "topic": 5,
                    "type": "single",
                    "question": "Qual das opções a seguir é um padrão de sistema de arquivos de CD-ROM?",
                    "options": {
                        "A": "OSI9660",
                        "B": "ISO9660",
                        "C": "SR0FS",
                        "D": "ISO8859",
                        "E": "ROM-EO"
                    },
                    "answer": "B",
                    "explanation": "ISO9660 e o padrao internacional de sistema de arquivos usado em midias de CD-ROM.\nE o formato gerado por ferramentas como mkisofs\/genisoimage e o unico entre as opcoes que corresponde a um filesystem real de CD-ROM."
                },
                {
                    "id": 89,
                    "topic": 5,
                    "type": "single",
                    "question": "O arquivo de configuração principal do autofs tem esta entrada:\n```\n\/home \/etc\/auto.home\n```\nQual é o significado do arquivo \/etc\/auto.home?",
                    "options": {
                        "A": "Ele possui os mapas indiretos para a montagem de sistemas de arquivos.",
                        "B": "Ele possui informações de configuração, como senhas e chaves, para o servidor de arquivos remoto.",
                        "C": "Ele possui informações de configuração sobre as definições para o ponto de montagem \/home.",
                        "D": "Ele mantém a chave SSL para permitir autenticação com o servidor de arquivos remoto."
                    },
                    "answer": "A",
                    "explanation": "Na linha '\/home \/etc\/auto.home' do auto.master, \/etc\/auto.home e um mapa indireto do autofs.\nUm mapa indireto lista, para cada chave (subdiretorio dentro de \/home), qual sistema de arquivos remoto montar sob demanda.\nEle nao guarda credenciais nem chaves de servidor; apenas as regras de montagem automatica."
                },
                {
                    "id": 90,
                    "topic": 5,
                    "type": "text",
                    "question": "Qual palavra-chave está faltando na seguinte linha do \/etc\/fstab para tornar um dispositivo USB flash gravável pelo usuário fred quando montado:\n```\n\/dev\/sda1 \/mnt\/usbflash vfat defaults,users,______=fred,umask=022, 0 0\n```\n(Forneça apenas o nome da opção, sem quaisquer configurações)",
                    "options": {},
                    "answer": "uid",
                    "explanation": "No \/etc\/fstab, a opcao uid=<usuario> define qual usuario sera o dono de todos os arquivos de um filesystem sem permissoes Unix nativas, como o VFAT.\nCombinada com 'users' (permite montagem por qualquer usuario) e 'umask', o resultado e um dispositivo gravavel por 'fred'."
                },
                {
                    "id": 91,
                    "topic": 5,
                    "type": "single",
                    "question": "Um sistema tem um disco rígido e um gravador de CD, ambos conectados a controladores SATA. Qual dispositivo representa o gravador de CD?",
                    "options": {
                        "A": "\/dev\/hdb",
                        "B": "\/dev\/sdd",
                        "C": "\/dev\/scd1",
                        "D": "\/dev\/sr0",
                        "E": "\/dev\/sr1"
                    },
                    "answer": "D",
                    "explanation": "Unidades opticas (CD\/DVD) conectadas via SATA sao tratadas pelo kernel como dispositivos SCSI genericos.\nElas aparecem sob a nomenclatura \/dev\/srN, sendo \/dev\/sr0 a primeira unidade optica detectada.\n\/dev\/sdX e reservado para discos rigidos e \/dev\/hdX era usado para dispositivos IDE legados."
                },
                {
                    "id": 92,
                    "topic": 5,
                    "type": "single",
                    "question": "Qual é o número mínimo de discos necessário em um array RAID5 totalmente redundante?",
                    "options": {
                        "A": "1",
                        "B": "2",
                        "C": "3",
                        "D": "4",
                        "E": "5"
                    },
                    "answer": "C",
                    "explanation": "RAID5 distribui dados e informacao de paridade entre todos os discos do array.\nPara oferecer redundancia real (poder perder um disco sem perder dados), sao necessarios no minimo 3 discos.\nCom apenas 2 discos, nao ha espaco util sobrando para armazenar a paridade de forma distribuida."
                },
                {
                    "id": 93,
                    "topic": 5,
                    "type": "single",
                    "question": "O disco rígido IDE \/dev\/hda não tem DMA habilitado. Qual comando deve ser executado para habilitar o DMA nele?",
                    "options": {
                        "A": "hdparm -d \/dev\/hda",
                        "B": "hdparm --dma \/dev\/hda",
                        "C": "hdparm --dma \/dev\/hda1",
                        "D": "hdparm -d \/dev\/hda1",
                        "E": "hdparm -d 1 \/dev\/hda"
                    },
                    "answer": "E",
                    "explanation": "O comando hdparm -d permite habilitar (1) ou desabilitar (0) o modo DMA em um disco IDE.\nA sintaxe correta e 'hdparm -d 1 \/dev\/hda', aplicada ao dispositivo do disco inteiro, nao a uma particao.\n'--dma' nao e uma opcao valida do hdparm; a opcao correta e sempre '-d'."
                },
                {
                    "id": 94,
                    "topic": 5,
                    "type": "single",
                    "question": "Qual componente de um sistema o smartd monitora?",
                    "options": {
                        "A": "CPU",
                        "B": "RAM",
                        "C": "Discos rígidos",
                        "D": "Tráfego Ethernet"
                    },
                    "answer": "C",
                    "explanation": "O daemon smartd monitora a saude de discos rigidos que suportam a tecnologia S.M.A.R.T.\nEle le atributos internos do disco (temperatura, setores realocados, etc.) para detectar sinais de falha iminente.\nNao monitora CPU, RAM nem trafego de rede; seu escopo e exclusivamente armazenamento."
                },
                {
                    "id": 95,
                    "topic": 5,
                    "type": "single",
                    "question": "Qual dos comandos a seguir é usado para configurar um volume RAID?",
                    "options": {
                        "A": "makerd",
                        "B": "mdadm",
                        "C": "mkfs.raid",
                        "D": "makeraid",
                        "E": "rdconfig"
                    },
                    "answer": "B",
                    "explanation": "mdadm e a ferramenta padrao do Linux para criar, gerenciar e monitorar arrays RAID de software (dispositivos \/dev\/mdN).\nmakerd, mkfs.raid, makeraid e rdconfig nao sao comandos reais do Linux."
                },
                {
                    "id": 96,
                    "topic": 6,
                    "type": "text",
                    "question": "Executar `tcpdump -nli eth1 'tcp'` mostra a seguinte saída:\n```\n14:41:53.694538 IP 10.1.52.145.51738 > 24.215.7.162.143: Flags [.], ack 33051, win 1002, options [nop,nop,TS val 36789130 ecr 1746004159], length 0\n```\nQual é o endereço IP de origem deste pacote? (Especifique a resposta apenas em dígitos e pontos.)",
                    "options": {},
                    "answer": "10.1.52.145",
                    "explanation": "Na saida do tcpdump, o formato geral de cada linha e 'IP origem > IP destino: flags ...'.\nO endereco antes do sinal '>' e sempre o IP de origem do pacote capturado.\nNesse exemplo, isso corresponde a 10.1.52.145."
                },
                {
                    "id": 97,
                    "topic": 6,
                    "type": "multi",
                    "question": "Quais entradas em \/etc\/hosts.allow permitirão acesso ao sshd para usuários da sub-rede 192.168.1.0\/24? (Escolha DUAS respostas corretas.)",
                    "options": {
                        "A": "sshd : 192.168.1.",
                        "B": "sshd : 192.168.1",
                        "C": "sshd : 192.168.1.0 netmask 255.255.255.0",
                        "D": "sshd : 192.168.1.0\/255.255.255.0",
                        "E": "sshd : 192.168.1.0"
                    },
                    "answer": "A,D",
                    "explanation": "Em \/etc\/hosts.allow, uma sub-rede pode ser expressa terminando o endereco com um ponto final (ex: '192.168.1.'), o que casa com qualquer host cujo IP comece com esse prefixo.\nTambem e valido usar a notacao IP\/mascara explicita, como '192.168.1.0\/255.255.255.0'.\nFormatos sem o ponto final ou sem a mascara (como so '192.168.1' ou '192.168.1.0') nao sao interpretados corretamente pelo tcpwrapper."
                },
                {
                    "id": 98,
                    "topic": 6,
                    "type": "single",
                    "question": "Qual é o comando para adicionar outro endereço IP (192.168.1.2) a uma interface de rede (eth0) que já possui (pelo menos) um endereço IP na sub-rede 192.168.1.0\/24?",
                    "options": {
                        "A": "ip add addr 192.168.1.2\/32 dev eth0",
                        "B": "ifconfig eth0 192.168.1.2 netmask 255.255.255.255",
                        "C": "ip addr add 192.168.1.2\/32 dev eth0",
                        "D": "ipconfig eth0 192.168.1.2"
                    },
                    "answer": "C",
                    "explanation": "O comando 'ip addr add <ip>\/<mascara> dev <interface>' adiciona um endereco IP adicional (secundario) a uma interface que ja possui outro IP.\nA sintaxe moderna e 'ip addr add', nao 'ip add addr'.\nipconfig e um comando do Windows, e nao existe no Linux."
                },
                {
                    "id": 99,
                    "topic": 6,
                    "type": "multi",
                    "question": "Quais dos seguintes arquivos são usados para resolver nomes de host para endereços IP? (Escolha DUAS respostas corretas.)",
                    "options": {
                        "A": "\/etc\/systems",
                        "B": "\/etc\/hosts",
                        "C": "\/etc\/network",
                        "D": "\/etc\/dns.conf",
                        "E": "\/etc\/resolv.conf"
                    },
                    "answer": "B,E",
                    "explanation": "\/etc\/hosts contem uma tabela estatica local de nomes para IPs, consultada antes do DNS (conforme \/etc\/nsswitch.conf).\n\/etc\/resolv.conf define quais servidores DNS (nameservers) o sistema deve consultar para resolucao de nomes.\n\/etc\/dns.conf e \/etc\/systems nao sao arquivos padrao usados para resolucao de nomes no Linux."
                },
                {
                    "id": 100,
                    "topic": 6,
                    "type": "single",
                    "question": "Qual dos seguintes comandos pode ser usado para fazer script de interações com vários serviços TCP ou UDP?",
                    "options": {
                        "A": "ftp",
                        "B": "nc",
                        "C": "tcpdump",
                        "D": "strings",
                        "E": "wget"
                    },
                    "answer": "B",
                    "explanation": "O comando nc (netcat) permite abrir conexoes TCP ou UDP arbitrarias e enviar\/receber dados via linha de comando ou scripts.\nE amplamente usado para testar portas, transferir dados simples e automatizar interacoes com servicos de rede.\nftp e wget sao clientes especificos de protocolo, tcpdump apenas captura trafego e strings extrai texto de binarios."
                },
                {
                    "id": 101,
                    "topic": 6,
                    "type": "text",
                    "question": "De acordo com a saída do tcpdump abaixo, qual é o endereço IP do host cliente?\n```\n02:12:40.511381 IP 192.168.246.11.1045 > 192.168.246.1.22: S 3838532429:3838532429(0) win 5840 <mss 1460,sackOK,timestamp 31325740,nop,wscale 2>\n02:12:40.511540 IP 192.168.246.1.22 > 192.168.246.11.1045: S 1209330085:1209330085(0) ack 383853 2430 win 5792 <mss 1460,sackOK,timestamp 11553457 3132574,nop,wscale 0>\n02:12:40.511755 IP 192.168.246.11.1045 > 192.168.246.1.22: . ack 1 win 1460 <nop,nop,timestamp 3132574 11553457>\n02:12:40.515122 IP 192.168.246.1.22 > 192.168.246.11.1045: P 1:26(25) ack 1 win 5792 <nop,nop,timestamp 11553460 3132574>\n02:12:40.515511 IP 192.168.246.11.1045 > 192.168.246.1.22: . ack 26 win 1460 <nop,nop,timestamp 3132578 11553460>\n02:12:40.515952 IP 192.168.246.11.1045 > 192.168.246.1.22: P 1:23(22) ack 26 win 1460 <nop,nop,timestamp 3132578 11553460>\n```",
                    "options": {},
                    "answer": "192.168.246.11",
                    "explanation": "Em uma conexao TCP, o cliente e quem inicia o handshake enviando o primeiro pacote com a flag SYN (S).\nNa primeira linha da captura, 192.168.246.11 envia o SYN para 192.168.246.1, portanto 192.168.246.11 e o cliente.\nO servidor responde com SYN-ACK na linha seguinte, confirmando esse papel."
                },
                {
                    "id": 102,
                    "topic": 6,
                    "type": "multi",
                    "question": "Quais das seguintes palavras-chave de filtro para tcpdump especificam a direção de transferência dos pacotes de rede? (Escolha DUAS respostas corretas.)",
                    "options": {
                        "A": "source",
                        "B": "src",
                        "C": "dest",
                        "D": "src or dst",
                        "E": "both"
                    },
                    "answer": "B,D",
                    "explanation": "As palavras-chave de direcao no filtro do tcpdump sao 'src' (pacotes vindos de um endereco\/porta) e 'dst' (pacotes destinados a um endereco\/porta).\nElas podem ser combinadas com 'or'\/'and', como em 'src or dst', para casar trafego em qualquer direcao envolvendo um host.\n'source', 'dest' e 'both' nao sao palavras-chave validas de filtro do tcpdump."
                },
                {
                    "id": 103,
                    "topic": 6,
                    "type": "single",
                    "question": "O que está incorreto nessas entradas em \/etc\/hosts que poderiam estar causando problemas de resolução de nome com host2?\n```\nhost1 192.168.1.12\nhost2 192.168.1.12\n```",
                    "options": {
                        "A": "Dois nomes de host estão usando o mesmo endereço IP.",
                        "B": "O servidor que faz a consulta está em uma sub-rede diferente.",
                        "C": "Os campos estão fora de ordem.",
                        "D": "host2 não é um nome de domínio totalmente qualificado."
                    },
                    "answer": "C",
                    "explanation": "O formato correto de cada linha do \/etc\/hosts e: endereco IP primeiro, seguido pelo(s) nome(s) de host.\nNo exemplo, os campos estao invertidos (nome antes do IP), o que faz a resolucao de nomes falhar ou se comportar de forma inesperada.\nTer dois hosts apontando para o mesmo IP e valido e nao seria, por si so, a causa do problema."
                },
                {
                    "id": 104,
                    "topic": 6,
                    "type": "text",
                    "question": "Os usuários da rede local reclamam que a resolução de nomes não é rápida o suficiente. Digite o comando, sem o caminho ou quaisquer opções, que mostra o tempo levado para resolver uma consulta DNS.",
                    "options": {},
                    "answer": "dig, time dig, time host, time nslookup",
                    "explanation": "Prefixar um comando de consulta DNS com 'time' (ex: 'time dig lpi.org') mede quanto tempo o sistema levou para executa-lo, incluindo a resolucao.\nIsso permite medir diretamente a latencia da consulta DNS, sem precisar de ferramentas adicionais.\nhost e nslookup tambem funcionam com 'time', mas dig e o mais usado para esse tipo de diagnostico."
                },
                {
                    "id": 105,
                    "topic": 6,
                    "type": "single",
                    "question": "O seguinte é um trecho da saída de `tcpdump -nli eth1`:\n```\n13:03:17.277327 IP 192.168.123.5.1065 > 192.168.5.112.21: Flags [.], ack 1 (truncated)\n13:03:17.598624 IP 192.168.5.112.21 > 192.168.123.5.1065: Flags [P.], seq (truncated)\n```\nQual serviço ou protocolo de rede foi usado?",
                    "options": {
                        "A": "FTP",
                        "B": "HTTP",
                        "C": "SSH",
                        "D": "DNS",
                        "E": "DHCP"
                    },
                    "answer": "A",
                    "explanation": "Na saida do tcpdump, a porta 21 e a porta padrao do canal de controle do protocolo FTP.\nVer trafego envolvendo a porta 21 e, portanto, um forte indicativo de que o servico usado e o FTP.\nHTTP usaria a porta 80, SSH a 22, DNS a 53 e DHCP as portas 67\/68."
                },
                {
                    "id": 106,
                    "topic": 6,
                    "type": "multi",
                    "question": "Quais dos seguintes comandos listarão os vizinhos IPv4 do sistema atual? Isso inclui endereços IP e MAC. (Escolha DUAS respostas corretas.)",
                    "options": {
                        "A": "arp",
                        "B": "ifconfig -lv eth0",
                        "C": "netstat -al",
                        "D": "ip neigh show"
                    },
                    "answer": "A,D",
                    "explanation": "O comando arp exibe a tabela ARP local, com o mapeamento entre IPs e enderecos MAC ja descobertos na rede.\n'ip neigh show' e o equivalente moderno, tambem baseado no protocolo de vizinhanca (ARP para IPv4, NDP para IPv6).\nifconfig e netstat nao exibem essa tabela de vizinhos IP\/MAC."
                },
                {
                    "id": 107,
                    "topic": 6,
                    "type": "multi",
                    "question": "Considerando a tabela de roteamento IP do kernel abaixo, qual dos seguintes comandos deve ser usado para remover a rota para a rede 10.10.1.0\/24? (Selecione DUAS respostas)\n```\nKernel IP routing table\nDestination Gateway Genmask Flags Metric Ref Use Iface\n203.0.113.162 0.0.0.0 255.255.255.255 UH 0 0 0 ppp0\n172.16.87.0 0.0.0.0 255.255.255.0 U 0 0 0 eth0\n192.168.246.0 0.0.0.0 255.255.255.0 U 0 0 0 eth1\n10.10.1.0 192.168.246.11 255.255.255.0 UG 0 0 0 eth1\n127.0.0.0 0.0.0.0 255.0.0.0 U 0 0 0 lo\n0.0.0.0 203.0.113.162 0.0.0.0 UG 0 0 0 ppp0\n```",
                    "options": {
                        "A": "ip net delete 10.10.1.0\/24",
                        "B": "route del 10.10.1.0\/24",
                        "C": "route del -net 10.10.1.0\/24",
                        "D": "route del 10.10.1.0\/24 gw 192.168.246.11",
                        "E": "ip route delete 10.10.1.0\/24"
                    },
                    "answer": "C,E",
                    "explanation": "Para remover uma rota da tabela de roteamento, os comandos classicos sao 'route del -net <rede>\/<prefixo>' (ferramenta legada net-tools) e 'ip route delete <rede>\/<prefixo>' (ferramenta moderna iproute2).\n'route del' sem '-net' nao e a sintaxe correta para remover uma rota de rede; 'ip net delete' nao existe."
                },
                {
                    "id": 108,
                    "topic": 6,
                    "type": "single",
                    "question": "Qual comando pode ser usado para escanear uma rede especificada em busca de endereços IP que parecem estar em uso?",
                    "options": {
                        "A": "nmap",
                        "B": "tcpdump",
                        "C": "ip",
                        "D": "netscan",
                        "E": "hostdiscover"
                    },
                    "answer": "A",
                    "explanation": "O nmap e a ferramenta padrao para escanear uma rede e descobrir quais enderecos IP estao ativos (host discovery), alem de portas e servicos abertos.\ntcpdump captura trafego passivamente, mas nao faz varredura ativa; ip gerencia configuracao de rede, nao faz scanning."
                },
                {
                    "id": 109,
                    "topic": 6,
                    "type": "multi",
                    "question": "Uma entrada corretamente formatada foi adicionada a \/etc\/hosts.deny para impedir que certos clientes se conectem a um serviço, mas isso não está tendo efeito. Qual poderia ser a causa disso? (Escolha DUAS respostas corretas.)",
                    "options": {
                        "A": "tcpd precisa receber o sinal HUP.",
                        "B": "O serviço precisa ser reiniciado.",
                        "C": "A máquina precisa ser reiniciada.",
                        "D": "Há uma entrada conflitante em \/etc\/hosts.allow.",
                        "E": "O serviço não suporta tcpwrapper."
                    },
                    "answer": "D,E",
                    "explanation": "O tcpwrapper avalia primeiro \/etc\/hosts.allow: se houver uma regra permitindo o acesso, ela tem precedencia sobre qualquer regra em hosts.deny.\nPortanto, uma entrada conflitante em hosts.allow explica por que uma regra em hosts.deny parece nao ter efeito.\nTambem e possivel que o servico simplesmente nao use a biblioteca libwrap (tcpwrapper), ignorando ambos os arquivos."
                },
                {
                    "id": 110,
                    "topic": 6,
                    "type": "single",
                    "question": "Quais dos seguintes comandos podem ser usados para listar endereços IPv4 e endereços MAC de dispositivos IP que o sistema já viu na rede local?",
                    "options": {
                        "A": "arp",
                        "B": "ifconfig",
                        "C": "ipadm",
                        "D": "iwlist"
                    },
                    "answer": "A",
                    "explanation": "O comando arp lista os enderecos IPv4 e MAC dos dispositivos que o sistema ja descobriu na rede local, a partir da tabela ARP do kernel.\nifconfig mostra configuracao de interfaces, nao a tabela de vizinhos; ipadm e iwlist nao servem para esse proposito no Linux tradicional."
                },
                {
                    "id": 111,
                    "topic": 6,
                    "type": "multi",
                    "question": "O que deve ser feito para garantir que uma máquina cliente use o servidor de nomes recursivo em execução no endereço IP 192.168.0.1? (Escolha DUAS respostas corretas.)",
                    "options": {
                        "A": "Adicionar nameserver 192.168.0.1 ao \/etc\/resolv.conf.",
                        "B": "Executar route add nameserver 192.168.0.1.",
                        "C": "Executar ifconfig eth0 nameserver 192.168.0.1.",
                        "D": "Garantir que o serviço dns esteja listado na entrada hosts do arquivo \/etc\/nsswitch.conf.",
                        "E": "Executar bind add nameserver 192.168.0.1."
                    },
                    "answer": "A,D",
                    "explanation": "Para um cliente usar um servidor DNS especifico, o endereco desse servidor deve ser adicionado como 'nameserver 192.168.0.1' em \/etc\/resolv.conf.\nAlem disso, o \/etc\/nsswitch.conf precisa ter 'dns' listado na linha 'hosts', garantindo que o sistema realmente consulte o DNS na resolucao de nomes.\nroute e ifconfig nao configuram servidores DNS; 'bind add' nao e um comando real."
                },
                {
                    "id": 112,
                    "topic": 6,
                    "type": "text",
                    "question": "Qual programa lista informações sobre arquivos e conexões de rede abertos por processos? (Especifique APENAS o comando, sem caminho ou parâmetros.)",
                    "options": {},
                    "answer": "lsof, \/usr\/bin\/lsof",
                    "explanation": "lsof ('list open files') lista todos os arquivos abertos por processos, o que no Linux inclui tambem sockets de rede.\nPor isso e usado tanto para depurar arquivos travados quanto para identificar conexoes de rede abertas por um processo."
                },
                {
                    "id": 113,
                    "topic": 6,
                    "type": "single",
                    "question": "Em quais das seguintes circunstâncias o comando ping produziria a string (DUP!)?",
                    "options": {
                        "A": "Quando os pacotes ICMP são enviados para um endereço de broadcast e múltiplos hosts respondem.",
                        "B": "Quando o host que recebe os pacotes ICMP está em uma rede diferente.",
                        "C": "Quando o roteador responde ao pacote ICMP além do host que recebe os pacotes ICMP.",
                        "D": "Quando o host que envia o pacote ICMP é o mesmo host que o recebe."
                    },
                    "answer": "A",
                    "explanation": "O ping mostra '(DUP!)' quando recebe mais de uma resposta para o mesmo pacote ICMP echo request enviado.\nIsso acontece tipicamente ao pingar um endereco de broadcast, pois varios hosts da rede respondem ao mesmo pacote.\nNao tem relacao com redes diferentes, roteadores intermediarios respondendo, ou origem e destino serem o mesmo host."
                },
                {
                    "id": 114,
                    "topic": 6,
                    "type": "single",
                    "question": "O seguinte é um trecho da saída de `tcpdump -nli eth1 'udp'`:\n```\n13:03:17.277327 IP 192.168.123.5.1065 > 192.168.5.112.53: 43653+ A? lpi.org. (25)\n13:03:17.598624 IP 192.168.5.112.53 > 192.168.123.5.1065: 43653 1\/0\/0 A 198.51.100.42 (41)\n```\nQual serviço ou protocolo de rede foi usado?",
                    "options": {
                        "A": "FTP",
                        "B": "HTTP",
                        "C": "SSH",
                        "D": "DNS",
                        "E": "DHCP"
                    },
                    "answer": "D",
                    "explanation": "A porta 53 e a porta padrao usada pelo protocolo DNS, tanto para consultas quanto respostas.\nA notacao 'A?' na saida do tcpdump indica uma consulta de registro tipo A, tipica de resolucao de nomes.\nIsso confirma que o trafego capturado e DNS, e nao FTP, HTTP, SSH ou DHCP."
                },
                {
                    "id": 115,
                    "topic": 6,
                    "type": "multi",
                    "question": "Quais das seguintes ferramentas de rede sem fio podem ser usadas para verificar a qualidade do link de rede sem fio? (Escolha DUAS respostas corretas.)",
                    "options": {
                        "A": "iwconfig",
                        "B": "iwlink",
                        "C": "iwscan",
                        "D": "iwifi",
                        "E": "iw"
                    },
                    "answer": "A,E",
                    "explanation": "iwconfig e a ferramenta legada para consultar e configurar parametros de interfaces sem fio, incluindo qualidade de sinal\/link.\niw e a ferramenta moderna (baseada em nl80211) que substitui o iwconfig e tambem informa qualidade de link.\niwlink, iwscan e iwifi nao sao comandos reais do conjunto wireless-tools\/iw."
                },
                {
                    "id": 116,
                    "topic": 6,
                    "type": "multi",
                    "question": "Um cliente de rede tem uma interface ethernet (eth0) configurada com um endereço IP na sub-rede 192.168.0.0\/24. Essa sub-rede tem um roteador, com o endereço IP 192.168.0.1, que conecta essa sub-rede à Internet. O que precisa ser feito no cliente para permitir que ele use o roteador como seu gateway padrão? (Escolha DUAS respostas corretas.)",
                    "options": {
                        "A": "route add default gw 192.168.0.1 eth0",
                        "B": "ifconfig eth0 defaultroute 192.168.0.1",
                        "C": "ip route add default via 192.168.0.1 dev eth0",
                        "D": "echo defaultroute 192.168.0.1 >> \/etc\/resolv.conf",
                        "E": "route add defaultgw=192.168.0.1 if=eth0"
                    },
                    "answer": "A,C",
                    "explanation": "Para definir um gateway padrao, pode-se usar a sintaxe classica 'route add default gw <ip> <interface>' (net-tools).\nOu a sintaxe moderna 'ip route add default via <ip> dev <interface>' (iproute2), que faz a mesma coisa.\nifconfig e resolv.conf nao servem para configurar rotas ou gateway."
                },
                {
                    "id": 117,
                    "topic": 6,
                    "type": "multi",
                    "question": "O que deve ser feito após atualizar o arquivo de configuração do syslogd para que as mudanças se tornem efetivas? (Escolha DUAS respostas corretas.)",
                    "options": {
                        "A": "Nenhuma ação é necessária, o syslogd notará o arquivo de configuração atualizado após alguns minutos.",
                        "B": "Enviar o sinal HUP ao processo syslogd.",
                        "C": "Reiniciar o serviço syslogd.",
                        "D": "Executar o comando syslogd -u."
                    },
                    "answer": "B,C",
                    "explanation": "Depois de editar a configuracao do syslogd, as mudancas so entram em vigor apos o processo reler o arquivo.\nIsso pode ser feito enviando o sinal HUP ao processo (recarrega a configuracao sem reiniciar completamente) ou reiniciando o servico.\nO syslogd nao detecta mudancas automaticamente nem tem uma opcao '-u' para isso."
                },
                {
                    "id": 118,
                    "topic": 7,
                    "type": "single",
                    "question": "Qual destes diretórios não deve ser incluído no backup?",
                    "options": {
                        "A": "\/backup",
                        "B": "\/etc",
                        "C": "\/opt",
                        "D": "\/proc",
                        "E": "\/var\/log"
                    },
                    "answer": "D",
                    "explanation": "\/proc e um sistema de arquivos virtual, gerado dinamicamente pelo kernel em memoria, representando processos e informacoes do sistema.\nEle nao contem dados persistentes reais em disco, entao incluir \/proc em um backup e inutil (e pode ate causar erros de leitura).\n\/etc, \/opt e \/var\/log contem configuracoes, aplicacoes e logs reais que fazem sentido proteger."
                },
                {
                    "id": 119,
                    "topic": 7,
                    "type": "single",
                    "question": "Qual dos seguintes comandos apagará o conteúdo da partição \/dev\/sdb3?",
                    "options": {
                        "A": "rm \/dev\/sdb3",
                        "B": "dd if=\/dev\/zero of=\/dev\/sdb3",
                        "C": "dd of=\/dev\/zero if=\/dev\/sdb3",
                        "D": "umount \/dev\/sdb3"
                    },
                    "answer": "B",
                    "explanation": "'dd if=\/dev\/zero of=\/dev\/sdb3' le zeros da fonte especial \/dev\/zero e os grava sobre a particao de destino.\nIsso sobrescreve todo o conteudo anterior da particao com zeros, apagando os dados de forma eficaz.\nA ordem invertida de if\/of (opcao C) gravaria a particao dentro de \/dev\/zero, o que nao faz sentido e nao apaga nada."
                },
                {
                    "id": 120,
                    "topic": 7,
                    "type": "single",
                    "question": "Qual dos seguintes comandos copiará com segurança o diretório .\/fyf\/ para \/var\/tmp\/ no host remoto deltaur usando a conta de usuário remoto kevin?",
                    "options": {
                        "A": "rsync -a -e ssh kevin@deltaur:\/var\/tmp\/ fyf\/",
                        "B": "rsync -a -u kevin -e ssh fyf\/ deltaur:\/var\/tmp\/",
                        "C": "rsync -a -u kevin -e ssh deltaur:\/var\/tmp\/ fyf\/",
                        "D": "rsync -a -e ssh fyf\/ kevin@deltaur:\/var\/tmp\/"
                    },
                    "answer": "D",
                    "explanation": "rsync -a preserva permissoes, timestamps, links e outros atributos durante a copia (modo arquivo).\n-e ssh define que o transporte sera feito via SSH, cifrando a conexao com o host remoto.\nA sintaxe correta e origem seguida de destino: 'fyf\/ kevin@deltaur:\/var\/tmp\/', com o usuario remoto antes do host, separado por '@'."
                },
                {
                    "id": 121,
                    "topic": 7,
                    "type": "multi",
                    "question": "Quais dos seguintes arquivos serão procurados e usados pelo GNU make, caso um deles exista, a menos que um arquivo diferente seja especificado na linha de comando ao tentar compilar software a partir do código-fonte? (Escolha DUAS respostas corretas.)",
                    "options": {
                        "A": "configure",
                        "B": "config.h.in",
                        "C": "makefile",
                        "D": "Makefile",
                        "E": "Makefile.in"
                    },
                    "answer": "C,D",
                    "explanation": "Na ausencia de um Makefile especificado na linha de comando, o GNU make procura por arquivos chamados 'makefile' ou 'Makefile' no diretorio atual.\nconfigure, config.h.in e Makefile.in fazem parte do processo do autoconf, mas nao sao os arquivos que o make procura por padrao."
                },
                {
                    "id": 122,
                    "topic": 7,
                    "type": "text",
                    "question": "Qual arquivo contém a mensagem exibida acima do prompt de login do console do sistema? (Especifique o nome completo do arquivo, incluindo o caminho.)",
                    "options": {},
                    "answer": "\/etc\/issue",
                    "explanation": "O arquivo \/etc\/issue contem o texto exibido no console antes do prompt de login, geralmente com informacoes da distribuicao.\nE diferente do \/etc\/motd, que e exibido somente apos um login bem-sucedido."
                },
                {
                    "id": 123,
                    "topic": 7,
                    "type": "single",
                    "question": "O seguinte comando acabou de ser executado com sucesso:\n```\ncd \/opt; tar xvf \/dev\/nst0;\n```\nO que acontecerá se a sequência de comandos for executada novamente?",
                    "options": {
                        "A": "Um erro dizendo que não há fita presente é gerado porque a fita foi ejetada após ser usada.",
                        "B": "O conteúdo de \/opt será restaurado novamente.",
                        "C": "Todo o conteúdo de \/opt será substituído pelo conteúdo do próximo arquivo na fita.",
                        "D": "O conteúdo de \/opt terá conteúdo adicional adicionado a partir do próximo arquivo na fita."
                    },
                    "answer": "D",
                    "explanation": "Ao usar um dispositivo de fita sem rebobinamento automatico (como \/dev\/nst0), a fita nao volta ao inicio apos cada operacao.\nIsso faz com que o cabecote avance para a posicao seguinte na fita apos a leitura.\nExecutar o mesmo comando de novo le o proximo arquivo da fita, adicionando (nao substituindo) esse conteudo ao destino."
                },
                {
                    "id": 124,
                    "topic": 7,
                    "type": "single",
                    "question": "Quando um makefile é incluído em um pacote de código-fonte, quais são os alvos (targets) comumente definidos no arquivo?",
                    "options": {
                        "A": "CFLAGS, CPPFLAGS, LIBS, LDFLAGS",
                        "B": "clean, install, uninstall",
                        "C": "PATHS, DESTDIR, LIBS, LDFLAGS",
                        "D": "prefix, exec_prefix, bindir, mandir"
                    },
                    "answer": "B",
                    "explanation": "Makefiles de pacotes de codigo-fonte costumam definir alvos padronizados para tarefas comuns de instalacao.\n'install' copia os binarios\/arquivos compilados para os diretorios do sistema; 'uninstall' reverte a instalacao; 'clean' remove arquivos gerados pela compilacao.\nCFLAGS, LDFLAGS, prefix e bindir sao variaveis de configuracao, nao alvos (targets) do make."
                },
                {
                    "id": 125,
                    "topic": 7,
                    "type": "multi",
                    "question": "Quais das opções a seguir são sistemas de backup comuns usados no Linux? (Escolha DUAS respostas corretas.)",
                    "options": {
                        "A": "Amanda",
                        "B": "Bacula",
                        "C": "DrBackup",
                        "D": "BREWBackup",
                        "E": "SARcheck"
                    },
                    "answer": "A,B",
                    "explanation": "Amanda e Bacula sao sistemas de backup open source amplamente usados em ambientes Linux, com suporte a backup em rede, agendamento e gerenciamento de midia.\nDrBackup, BREWBackup e SARcheck nao sao ferramentas reais de backup do ecossistema Linux."
                },
                {
                    "id": 126,
                    "topic": 7,
                    "type": "text",
                    "question": "Qual é o nome do dispositivo para a primeira unidade de fita SCSI em um sistema quando usada sem rebobinamento automático após cada operação de escrita? (Especifique o caminho completo para o dispositivo.)",
                    "options": {},
                    "answer": "\/dev\/nst0",
                    "explanation": "Dispositivos de fita SCSI seguem uma convencao de nomes onde o prefixo 'n' indica 'no-rewind' (sem rebobinamento automatico).\n\/dev\/st0 seria a primeira unidade com rebobinamento automatico apos cada operacao; \/dev\/nst0 e a mesma unidade, mas sem esse rebobinamento."
                },
                {
                    "id": 127,
                    "topic": 7,
                    "type": "multi",
                    "question": "Um usuário comum, joe, acabou de executar:\n```\n.\/configure && make && make install\n```\npara compilar e instalar um programa. No entanto, a instalação falha. O que poderia ser feito para instalar o programa? (Escolha DUAS respostas corretas.)",
                    "options": {
                        "A": "Instalar os binários manualmente com suinstall.",
                        "B": "Executar make install com privilégios de root.",
                        "C": "Não executar .\/configure para manter a configuração padrão para instalação correta.",
                        "D": "Executar novamente .\/configure com uma opção --prefix onde o usuário tenha permissões de escrita.",
                        "E": "Executar make install_local para instalar em \/usr\/local\/."
                    },
                    "answer": "B,D",
                    "explanation": "A falha de 'make install' apos um '.\/configure && make' bem-sucedido geralmente ocorre por falta de permissao para escrever nos diretorios padrao do sistema (ex: \/usr\/local).\nRodar 'make install' com privilegios de root resolve o problema de permissao diretamente.\nAlternativamente, reconfigurar com '--prefix' apontando para um diretorio onde o usuario tenha permissao de escrita evita a necessidade de root."
                },
                {
                    "id": 128,
                    "topic": 7,
                    "type": "text",
                    "question": "Qual arquivo contém a mensagem de texto exibida após o login no console? (Especifique o nome completo do arquivo, incluindo o caminho.)",
                    "options": {},
                    "answer": "\/etc\/motd",
                    "explanation": "O arquivo \/etc\/motd ('message of the day') contem o texto exibido logo apos um login bem-sucedido no console.\nDifere do \/etc\/issue, que aparece antes do login, no prompt."
                },
                {
                    "id": 129,
                    "topic": 7,
                    "type": "single",
                    "question": "O que a opção -p3 do comando patch faz?",
                    "options": {
                        "A": "Ela removerá informações de caminho de cada arquivo mencionado no arquivo de patch até e incluindo o terceiro caractere \/.",
                        "B": "patch continua a execução enquanto houver três ou menos erros.",
                        "C": "Instrui o patch a procurar até três linhas de contexto antes ou depois da linha declarada no arquivo original para uma correspondência.",
                        "D": "patch manterá três versões anteriores de cada arquivo na saída para evitar perda de histórico de alterações.",
                        "E": "Instrui o patch a se conformar mais estritamente ao padrão POSIX."
                    },
                    "answer": "A",
                    "explanation": "A opcao -pN do comando patch remove N niveis de diretorio dos caminhos de arquivo citados no arquivo de patch antes de aplica-lo.\nCom -p3, os tres primeiros componentes de caminho (separados por '\/') sao descartados ao localizar o arquivo a ser corrigido.\nIsso e necessario quando a estrutura de diretorios do patch nao corresponde exatamente a estrutura local."
                },
                {
                    "id": 130,
                    "topic": 8,
                    "type": "single",
                    "question": "Qual dos seguintes comandos exibe o caminho físico do módulo do kernel chamado dummy?",
                    "options": {
                        "A": "modprobe –i dummy",
                        "B": "modinfo –n dummy",
                        "C": "modpath –v dummy",
                        "D": "depmod –n dummy",
                        "E": "modshow –p dummy"
                    },
                    "answer": "A",
                    "explanation": "Segundo o gabarito desta questao, 'modprobe -i dummy' e usado para revelar o caminho fisico do modulo.\nVale registrar que, na pratica, o comando mais comumente documentado para essa tarefa e 'modinfo -n dummy', que imprime o caminho do arquivo .ko do modulo.\nmodpath, depmod -n e modshow nao sao ferramentas\/opcoes reais para essa finalidade.\nSe tiver duvida na prova real, associe 'modinfo' a consultar metadados de um modulo (autor, descricao, caminho, dependencias)."
                },
                {
                    "id": 131,
                    "topic": 8,
                    "type": "multi",
                    "question": "Um servidor de aplicação web contém 64GB de RAM e duas partições de swap em discos rígidos normais, cada uma com um tamanho de GB. No último mês, o número médio de sessões de usuário nesse servidor cresceu 20 por cento. Ao mesmo tempo, o uso médio de RAM aumentou de 65 para 75 por cento, enquanto o espaço de swap quase não é usado. Espera-se que o número de sessões de usuário continue a aumentar cerca de 15 a 20 por cento a cada mês. Qual das seguintes reações seria apropriada em resposta a essas observações? (Escolha duas.)",
                    "options": {
                        "A": "Adiar qualquer upgrade de hardware até que haja um consumo significativo de espaço de swap para garantir um uso eficiente do hardware disponível",
                        "B": "Criar um dispositivo RAID 1 nas duas partições de swap para evitar perda de dados caso o espaço de swap precise ser usado no futuro",
                        "C": "Considerar a instalação de um servidor de aplicação adicional para distribuir a carga caso o crescimento esperado continue por vários meses",
                        "D": "Mover os scripts e conteúdo da aplicação web para um ram disk para garantir acesso rápido e evitar a necessidade de swap",
                        "E": "Atualizar o hardware para aumentar a quantidade de RAM disponível e evitar o uso de swap"
                    },
                    "answer": "C,E",
                    "explanation": "Com a RAM crescendo (65% para 75%) e o swap quase ocioso, o gargalo real e a memoria RAM, nao o disco.\nAtualizar o hardware para aumentar a RAM disponivel reduz diretamente a pressao de memoria e adia a necessidade de usar swap.\nAdicionar um servidor de aplicacao extra distribui a carga entre mais maquinas, absorvendo o crescimento esperado de usuarios.\nEsperar o swap ser usado (A) arriscaria degradar o desempenho antes de agir; RAID no swap (B) e RAM disk (D) nao resolvem o problema de capacidade."
                },
                {
                    "id": 132,
                    "topic": 8,
                    "type": "multi",
                    "question": "Quais das seguintes propriedades devem ser registradas para monitorar a qualidade de um link de rede? (Escolha duas.)",
                    "options": {
                        "A": "Largura de banda em ambas as direções",
                        "B": "Número de nós usando o link",
                        "C": "Latência efetiva",
                        "D": "Número de pacotes IPv4 e IPv6",
                        "E": "Número de portas TCP usadas"
                    },
                    "answer": "A,C",
                    "explanation": "Para avaliar a qualidade de um link de rede, e essencial registrar a largura de banda disponivel em ambas as direcoes (upload\/download).\nA latencia efetiva (tempo de resposta) tambem e um indicador direto da qualidade percebida do link.\nNumero de nos, de pacotes IPv4\/IPv6 ou de portas TCP usadas nao medem diretamente a qualidade do link em si."
                },
                {
                    "id": 133,
                    "topic": 8,
                    "type": "multi",
                    "question": "Após baixar patch-4.6.4.xz de http:\/\/kernel.org, quais são os próximos passos para preparar a compilação de uma versão 4.6.4 do kernel Linux? (Escolha duas.)",
                    "options": {
                        "A": "Descompactar o arquivo e mover o diretório resultante para \/usr\/src\/linux",
                        "B": "Aplicar o arquivo de patch ao diretório de código-fonte do kernel contendo a versão 4.6.0 do kernel",
                        "C": "Aplicar o arquivo de patch ao diretório de código-fonte do kernel contendo a versão 4.6.3 do kernel",
                        "D": "Descompactar o arquivo usando xz para obter o arquivo de patch descompactado",
                        "E": "Usar patch para aplicar o arquivo de patch descompactado ao diretório de código-fonte de qualquer versão anterior do kernel"
                    },
                    "answer": "D,E",
                    "explanation": "O arquivo baixado (patch-4.6.4.xz) esta comprimido com xz, entao primeiro deve ser descompactado com essa mesma ferramenta.\nDepois, o utilitario 'patch' aplica o arquivo de patch descompactado ao codigo-fonte.\nUm patch incremental disponibilizado no kernel.org e sempre relativo a versao imediatamente anterior (aqui, 4.6.3), nao a qualquer versao antiga."
                },
                {
                    "id": 134,
                    "topic": 8,
                    "type": "text",
                    "question": "Qual comando descarta blocos não usados em um sistema de arquivos montado para dar suporte a dispositivos SSD? (Especifique APENAS o comando, sem caminho ou parâmetros.)",
                    "options": {},
                    "answer": "fstrim",
                    "explanation": "fstrim descarta (envia o comando TRIM para) blocos que nao estao mais em uso em um sistema de arquivos montado.\nIsso e importante para SSDs, pois ajuda o controlador do disco a gerenciar melhor os blocos livres e manter o desempenho de escrita.\nDiferente de discos rigidos magneticos, SSDs se beneficiam de saber quais blocos estao logicamente livres."
                },
                {
                    "id": 135,
                    "topic": 8,
                    "type": "text",
                    "question": "Qual diretório contém os arquivos de unidade systemd específicos do sistema? (Especifique o caminho completo para o diretório.)",
                    "options": {},
                    "answer": "\/lib\/systemd\/system",
                    "explanation": "As unidades systemd fornecidas pelo sistema (pacotes instalados pela distribuicao) ficam em \/lib\/systemd\/system.\nUnidades customizadas pelo administrador geralmente ficam em \/etc\/systemd\/system, que tem precedencia sobre as do \/lib."
                },
                {
                    "id": 136,
                    "topic": 8,
                    "type": "single",
                    "question": "Qual é o propósito de um initramfs durante a inicialização do sistema Linux?",
                    "options": {
                        "A": "Ele carrega os módulos necessários e inicia subsistemas como LVM para tornar o sistema de arquivos root acessível ao kernel",
                        "B": "Ele move o kernel da memória normal do sistema para a memória initram para acelerar o acesso ao kernel",
                        "C": "Ele copia o conteúdo do sistema de arquivos root para a RAM para acelerar o sistema e reduzir gravações no disco",
                        "D": "Ele cria um ram disk para armazenar dados voláteis para diretórios como \/tmp para reduzir gravações no disco"
                    },
                    "answer": "A",
                    "explanation": "O initramfs e um pequeno sistema de arquivos temporario carregado na RAM logo no inicio do boot.\nSua funcao e carregar os modulos de kernel necessarios (drivers de disco, RAID, LVM etc.) para tornar o filesystem root real acessivel.\nSo depois que o root real esta pronto para ser montado, o controle e passado ao init definitivo."
                },
                {
                    "id": 137,
                    "topic": 8,
                    "type": "single",
                    "question": "Após compilar e instalar manualmente um novo kernel, o que deve ser feito em relação ao initramfs?",
                    "options": {
                        "A": "O initramfs é independente do kernel e não deve ser modificado, a menos que a configuração de hardware da máquina tenha mudado",
                        "B": "Como o initramfs contém módulos do kernel, um novo initramfs deve ser construído para o novo kernel",
                        "C": "Durante a compilação do kernel Linux, um novo initramfs é construído automaticamente. O novo initramfs só precisa ser instalado",
                        "D": "O sistema deve ser reiniciado, pois o initramfs se reconfigura para o novo kernel durante a inicialização do sistema"
                    },
                    "answer": "C",
                    "explanation": "Ao compilar e instalar um novo kernel, o processo de build tipicamente gera automaticamente um novo initramfs correspondente aquele kernel.\nComo o initramfs contem modulos e ferramentas especificas da versao do kernel, ele nao pode ser simplesmente reaproveitado do kernel antigo.\nApos gerado, esse initramfs so precisa ser instalado (copiado para \/boot) e referenciado no bootloader."
                },
                {
                    "id": 138,
                    "topic": 8,
                    "type": "single",
                    "question": "Qual das opções a seguir é uma aplicação em espaço de usuário usada para modificar entradas EFI em um sistema Linux?",
                    "options": {
                        "A": "efieditor",
                        "B": "configefi",
                        "C": "efimanager",
                        "D": "efiboottmgr",
                        "E": "efibootedit"
                    },
                    "answer": "D",
                    "explanation": "efibootmgr e a ferramenta em espaco de usuario usada para consultar e modificar as entradas de boot armazenadas na NVRAM do firmware EFI.\nCom ela e possivel adicionar, remover ou reordenar entradas de boot UEFI a partir do Linux."
                },
                {
                    "id": 139,
                    "topic": 8,
                    "type": "multi",
                    "question": "Quais das palavras-chave de filtro abaixo poderiam ser usadas no seguinte comando: (Escolha três.)\n```\ntcpdump –i eth0 ____________ 203.0.113.8\n```",
                    "options": {
                        "A": "host",
                        "B": "ip",
                        "C": "src",
                        "D": "dst",
                        "E": "ipv6"
                    },
                    "answer": "A,C,D",
                    "explanation": "Para filtrar trafego relacionado a um endereco IP especifico, o tcpdump aceita as palavras-chave 'host' (qualquer direcao), 'src' (origem) e 'dst' (destino).\n'ip' e 'ipv6' filtram por versao do protocolo, nao por um endereco especifico, entao nao se encaixam no espaco em branco da pergunta."
                },
                {
                    "id": 140,
                    "topic": 8,
                    "type": "single",
                    "question": "Qual subcomando do cryptsetup mostra informações sobre uma partição LUKS criptografada?",
                    "options": {
                        "A": "luksDump",
                        "B": "luksInfo",
                        "C": "luksDebug",
                        "D": "luksLS",
                        "E": "luksShow"
                    },
                    "answer": "A",
                    "explanation": "O subcomando 'cryptsetup luksDump' exibe informacoes do cabecalho de uma particao LUKS, como slots de chave e algoritmo de cifragem.\nluksInfo, luksDebug, luksLS e luksShow nao sao subcomandos reais do cryptsetup."
                },
                {
                    "id": 141,
                    "topic": 8,
                    "type": "single",
                    "question": "Em um nó Linux com múltiplas interfaces de rede ativas, cada uma tendo uma rota padrão para a Internet, qual rota padrão é preferida?",
                    "options": {
                        "A": "A rota padrão com o maior valor de métrica",
                        "B": "A rota padrão com o maior valor de MTU",
                        "C": "A rota padrão com o menor valor de TTL",
                        "D": "A rota padrão com o maior valor de TTL",
                        "E": "A rota padrão com o menor valor de métrica"
                    },
                    "answer": "E",
                    "explanation": "Quando existem multiplas rotas padrao possiveis, o kernel escolhe a que tiver o menor valor de metrica.\nA metrica funciona como um 'custo': quanto menor, mais preferida e a rota.\nMTU e TTL nao sao usados para decidir entre rotas padrao concorrentes."
                },
                {
                    "id": 142,
                    "topic": 8,
                    "type": "single",
                    "question": "Quais dos seguintes arquivos de configuração são usados pelo tcpwrapper?",
                    "options": {
                        "A": "\/etc\/tcpd.allow e \/etc\/tcpd.deny",
                        "B": "\/etc\/tcpwrapper.allow e \/etc\/tcpwrapper.deny",
                        "C": "\/etc\/hosts.allow e \/etc\/hosts.deny",
                        "D": "\/etc\/service.allow e \/etc\/service.deny"
                    },
                    "answer": "C",
                    "explanation": "O tcpwrapper (libwrap) controla acesso a servicos usando dois arquivos de configuracao: \/etc\/hosts.allow (regras de permissao) e \/etc\/hosts.deny (regras de bloqueio).\nhosts.allow e avaliado primeiro; se nenhuma regra casar em nenhum dos dois arquivos, o acesso e permitido por padrao."
                },
                {
                    "id": 143,
                    "topic": 8,
                    "type": "text",
                    "question": "Qual comando garante que os sistemas de arquivos sejam gravados no disco após muitas operações de escrita? (Especifique APENAS o comando, sem caminho ou parâmetros.)",
                    "options": {},
                    "answer": "sync",
                    "explanation": "O comando sync forca a gravacao imediata de todos os buffers do sistema de arquivos que ainda estao apenas em memoria para o disco.\nE util antes de desligar um sistema abruptamente ou remover midia removivel, para evitar perda ou corrupcao de dados."
                },
                {
                    "id": 144,
                    "topic": 8,
                    "type": "single",
                    "question": "Qual comando é usado para fazer uma cópia exata, em um único ponto no tempo, de um volume lógico, ainda permitindo que o volume lógico original seja atualizado?",
                    "options": {
                        "A": "lvcclone",
                        "B": "lvcreate",
                        "C": "lvm2",
                        "D": "lvsnap",
                        "E": "lvsnapshot"
                    },
                    "answer": "B",
                    "explanation": "O comando lvcreate, com a opcao -s (--snapshot), cria uma copia point-in-time de um volume logico.\nO volume logico original continua acessivel e pode ser atualizado normalmente enquanto o snapshot existe, capturando apenas as diferencas (copy-on-write).\nlvcclone, lvm2, lvsnap e lvsnapshot nao sao comandos reais do LVM2."
                },
                {
                    "id": 145,
                    "topic": 8,
                    "type": "single",
                    "question": "Qual dos seguintes comandos cria um subvolume Btrfs chamado volume em \/mnt?",
                    "options": {
                        "A": "btrfs subvolume add –n volume \/mnt",
                        "B": "btrfs create subvolume \/mnt volume",
                        "C": "btrfs-subvolume create \/mnt\/volume",
                        "D": "btrfs subvolume new volume \/mnt",
                        "E": "btrfs subvolume create \/mnt\/volume"
                    },
                    "answer": "E",
                    "explanation": "O comando 'btrfs subvolume create <caminho>' cria um novo subvolume Btrfs no caminho especificado.\nA sintaxe correta usa o caminho completo do subvolume desejado apos o subcomando 'create', como em 'btrfs subvolume create \/mnt\/volume'.\nAs demais alternativas usam sintaxes ou subcomandos que nao existem no btrfs-progs."
                },
                {
                    "id": 146,
                    "topic": 8,
                    "type": "multi",
                    "question": "Qual informação é encontrada no seguinte trecho do arquivo \/proc\/mdstat? (Escolha duas.)",
                    "options": {
                        "A": "Um dos discos em \/dev\/md0 falhou e um disco sobressalente (spare) está sendo usado para recriar a redundância total",
                        "B": "O disco sobressalente \/dev\/sda1 é usado para restaurar a redundância total após a recuperação atual",
                        "C": "A informação [UU_] significa que o raid está faltando um disco e não está totalmente redundante",
                        "D": "O dispositivo está usando metadados versão 1.2 para permitir que LILO e GRUB Legacy usem \/dev\/md0 como partição de boot. Isso não seria necessário com o GRUB2",
                        "E": "A informação [3\/2] significa que 3 discos RAID pertencem ao array e 2 discos são sobressalentes. Juntos, eles equivalem ao número de discos disponíveis"
                    },
                    "answer": "A,C",
                    "explanation": "Em \/proc\/mdstat, quando um disco falho e substituido por um disco sobressalente (spare), o array entra em processo de reconstrucao para restaurar a redundancia total.\nA notacao como '[UU_]' mostra o estado de cada disco no array: 'U' indica disco ativo (up) e '_' indica um disco ausente\/falho, ou seja, o array nao esta totalmente redundante.\nMetadados versao 1.2 nao tem relacao com compatibilidade de LILO\/GRUB Legacy; e '[3\/2]' indicaria 3 discos esperados contra 2 atualmente ativos, nao discos sobressalentes."
                },
                {
                    "id": 147,
                    "topic": 8,
                    "type": "single",
                    "question": "Quais dos seguintes comandos listam endereços IPv4 e endereços MAC de nós de rede que o sistema local viu em suas redes IP diretamente conectadas?",
                    "options": {
                        "A": "arp",
                        "B": "ifconfig",
                        "C": "ipadm",
                        "D": "iwlist"
                    },
                    "answer": "A",
                    "explanation": "O comando arp lista os enderecos IPv4 e MAC dos nos vistos nas redes IP diretamente conectadas, a partir da tabela ARP do kernel.\nifconfig mostra configuracao de interfaces, nao a tabela de vizinhos; ipadm e iwlist nao servem para esse proposito no Linux tradicional."
                },
                {
                    "id": 148,
                    "topic": 8,
                    "type": "single",
                    "question": "Quais dos seguintes comandos apagam o conteúdo da partição \/dev\/sdb3?",
                    "options": {
                        "A": "rm \/dev\/sdb3",
                        "B": "dd if=\/dev\/zero of=\/dev\/sdb3",
                        "C": "dd of=\/dev\/zero if=\/dev\/sdb3",
                        "D": "umount \/dev\/sdb3"
                    },
                    "answer": "B",
                    "explanation": "'dd if=\/dev\/zero of=\/dev\/sdb3' le zeros da fonte especial \/dev\/zero e os grava sobre a particao de destino.\nIsso sobrescreve todo o conteudo anterior da particao com zeros, apagando os dados de forma eficaz.\nA ordem invertida de if\/of (opcao C) gravaria a particao dentro de \/dev\/zero, o que nao faz sentido e nao apaga nada."
                },
                {
                    "id": 149,
                    "topic": 8,
                    "type": "single",
                    "question": "Na saída de `sar –b`, o que tps significa?",
                    "options": {
                        "A": "Terabyte por segundo",
                        "B": "Tráfego por segundo",
                        "C": "Transferências por segundo",
                        "D": "Total de dados por segundo",
                        "E": "Terabit por segundo"
                    },
                    "answer": "C",
                    "explanation": "Na saida de 'sar -b', a coluna tps significa 'transfers per second': o numero de transferencias de I\/O (leitura+escrita) por segundo nos dispositivos de bloco.\nNao se refere a uma taxa de dados em bytes, mas ao numero de operacoes de I\/O realizadas."
                },
                {
                    "id": 150,
                    "topic": 8,
                    "type": "text",
                    "question": "Qual comando é usado para enviar mensagens a todos os usuários atualmente conectados? (Especifique APENAS o comando, sem caminho ou parâmetros.)",
                    "options": {},
                    "answer": "wall",
                    "explanation": "O comando wall envia uma mensagem para os terminais de todos os usuarios atualmente conectados ao sistema.\nE util para avisos administrativos, como manutencao programada ou desligamento iminente do sistema."
                },
                {
                    "id": 151,
                    "topic": 8,
                    "type": "single",
                    "question": "Qual dos seguintes comandos adiciona um endereço IPv6 estático à interface de rede eth0?",
                    "options": {
                        "A": "ip add addr 2001:db8::1337\/64 dev eth0",
                        "B": "ip -6 add addr 2001:db8::1337\/64 dev eth0",
                        "C": "ip addr add 2001:db8::1337\/64 dev eth0",
                        "D": "ip -6 addr add new 2001:db8::1337\/64 dev eth0",
                        "E": "ip addr add -6 2001:db8::1337\/64 dev eth0"
                    },
                    "answer": "D",
                    "explanation": "Para configurar enderecos IPv6, a ferramenta iproute2 usa a opcao '-6' para trabalhar no dominio IPv6, junto com o subcomando 'addr add'.\nA sintaxe geral e 'ip -6 addr add <endereco>\/<prefixo> dev <interface>'.\n'ip add addr' (sem o '-6' e com os subcomandos invertidos) nao e uma sintaxe valida do comando ip."
                },
                {
                    "id": 152,
                    "topic": 8,
                    "type": "single",
                    "question": "Qual dos seguintes sistemas de init vem com seu próprio bootloader UEFI?",
                    "options": {
                        "A": "systemd",
                        "B": "SysVinit",
                        "C": "Upstart",
                        "D": "OpenRC",
                        "E": "launchd"
                    },
                    "answer": "A",
                    "explanation": "Entre os sistemas de init listados, o systemd e o unico que traz seu proprio bootloader UEFI, chamado systemd-boot (antigo gummiboot).\nSysVinit, Upstart e OpenRC nao incluem um bootloader proprio; launchd e o init do macOS, nao do Linux."
                },
                {
                    "id": 153,
                    "topic": 8,
                    "type": "multi",
                    "question": "Um servidor Linux executando systemd inicializou em rescue.target para manutenção. Quais comandos são usados para restaurar o servidor ao seu target usual? (Escolha duas.)",
                    "options": {
                        "A": "telinit 0",
                        "B": "systemctl default",
                        "C": "sync",
                        "D": "systemctl emergency",
                        "E": "systemctl reboot"
                    },
                    "answer": "A,B",
                    "explanation": "Para sair do rescue.target (equivalente ao single user do SysV) e retornar ao alvo normal no systemd, usa-se 'systemctl default', que troca para o target padrao do sistema.\n'telinit 0' tambem consta como resposta valida do exame, embora em ambientes systemd puros ele leve ao desligamento (o systemd mapeia telinit por compatibilidade).\nsystemctl emergency levaria a um modo ainda mais restrito, nao ao normal."
                },
                {
                    "id": 154,
                    "topic": 8,
                    "type": "single",
                    "question": "Qual dos seguintes comandos mostra as capacidades e frequências utilizáveis para a interface sem fio wlan0?",
                    "options": {
                        "A": "iw phy pyh0 info",
                        "B": "iw dev wlan0 info",
                        "C": "iw dev wlan0 show",
                        "D": "iw phy wlan0 show",
                        "E": "iw phy0 show"
                    },
                    "answer": "A",
                    "explanation": "O comando 'iw phy <nome> info' mostra as capacidades detalhadas do radio fisico (phy) de uma interface sem fio, incluindo frequencias e taxas suportadas.\n'iw dev <interface> info\/show' mostra informacoes da interface logica (canal atual, modo), nao todas as capacidades do hardware."
                },
                {
                    "id": 155,
                    "topic": 8,
                    "type": "single",
                    "question": "Para coletar dados de desempenho com sar por um período mais longo, qual comando deve ser executado periodicamente via cron?",
                    "options": {
                        "A": "sa1",
                        "B": "sarmon",
                        "C": "sarec",
                        "D": "sadf",
                        "E": "sarcron"
                    },
                    "answer": "A",
                    "explanation": "O comando sa1 e chamado periodicamente via cron (geralmente a cada 10 minutos) para coletar amostras de atividade do sistema em formato binario, usadas pelo sar.\nE parte do pacote sysstat, junto com sa2 (que gera relatorios diarios) e sadf (que formata os dados coletados)."
                },
                {
                    "id": 156,
                    "topic": 8,
                    "type": "single",
                    "question": "Qual é o propósito de uma unidade de montagem (mount unit) do sistema?",
                    "options": {
                        "A": "É usada pelo comando systemd-mount e permite que os usuários montem partições em pontos de montagem de sua escolha",
                        "B": "É usada apenas para montar sistemas de arquivos de rede em pontos de montagem locais. Não pode ser usada para mídia local",
                        "C": "É criada pelo comando systemd-fstab-generator para integrar entradas de \/etc\/fstab no processo de boot do sistema",
                        "D": "É usada pelo comando mount ao usar o systemd para montar e desmontar sistemas de arquivos"
                    },
                    "answer": "A",
                    "explanation": "Uma unidade de montagem (.mount) do systemd descreve um ponto de montagem gerenciado pelo systemd, podendo ser criada manualmente ou a partir do \/etc\/fstab.\nEla e usada pelo comando systemd-mount, que permite montar sistemas de arquivos (locais ou de rede) em pontos de montagem escolhidos dinamicamente, nao apenas os fixados no fstab."
                },
                {
                    "id": 157,
                    "topic": 8,
                    "type": "single",
                    "question": "Em qual árvore de diretórios os arquivos são modificados ao alterar parâmetros do kernel usando o comando sysctl?",
                    "options": {
                        "A": "\/sys\/kernel\/",
                        "B": "\/proc\/kernel\/",
                        "C": "\/proc\/sys\/",
                        "D": "\/lib\/sys\/",
                        "E": "\/sys\/proc\/"
                    },
                    "answer": "C",
                    "explanation": "O comando sysctl le e grava parametros do kernel diretamente na arvore de arquivos virtuais \/proc\/sys\/.\nCada parametro do kernel corresponde a um arquivo dentro dessa arvore (ex: kernel.shmmax vira \/proc\/sys\/kernel\/shmmax)."
                },
                {
                    "id": 158,
                    "topic": 8,
                    "type": "single",
                    "question": "Qual comando é usado para instalar um bootloader GRUB no master boot record?",
                    "options": {
                        "A": "grub-install",
                        "B": "grub-mkconfig",
                        "C": "grub-install-mbr",
                        "D": "grub-glue-mbr",
                        "E": "grub-mbr-setup"
                    },
                    "answer": "A",
                    "explanation": "O comando grub-install grava o codigo do bootloader GRUB no master boot record (ou em outro dispositivo de boot especificado) e instala os modulos necessarios.\ngrub-mkconfig apenas gera o arquivo grub.cfg com as entradas de menu, sem instalar o codigo de boot em si."
                },
                {
                    "id": 159,
                    "topic": 8,
                    "type": "single",
                    "question": "Qual dos seguintes comandos restaura apenas os arquivos contendo lpi em seu nome a partir do arquivo lpifiles.tar.gz?",
                    "options": {
                        "A": "tar xvzf lpifiles.tar.gz --wildcards '*lpi*'",
                        "B": "tar xvzwf lpifiles.tar.gz '*lpi*'",
                        "C": "tar -xvfz lpifiles.tar.gz --deep '*lpi*'",
                        "D": "tar -xvzf lpifiles.tar.gz --subdirs '*lpi*'",
                        "E": "tar xvzf lpifiles.tar.gz --globbing '*lpi*'"
                    },
                    "answer": "A",
                    "explanation": "A opcao '--wildcards' do tar permite usar padroes de shell (como '*lpi*') para selecionar quais arquivos extrair de um archive.\nCombinada com 'x' (extract), 'v' (verbose), 'z' (gzip) e 'f' (arquivo), o comando extrai apenas os arquivos cujo nome contem 'lpi'.\n'--deep', '--subdirs' e '--globbing' nao sao opcoes reais do GNU tar."
                },
                {
                    "id": 160,
                    "topic": 8,
                    "type": "text",
                    "question": "Qual é o principal arquivo de configuração para o processo init do SystemV? (Especifique o nome completo do arquivo, incluindo o caminho.)",
                    "options": {},
                    "answer": "\/etc\/inittab",
                    "explanation": "O \/etc\/inittab e o arquivo de configuracao principal do processo init no esquema SystemV.\nNele sao definidos o runlevel padrao (initdefault) e as acoes a executar em cada runlevel."
                },
                {
                    "id": 161,
                    "topic": 8,
                    "type": "single",
                    "question": "Qual efeito a opção –f do comando update-rc.d tem sobre arquivos nos diretórios \/etc\/rcX.d\/ e \/etc\/init.d\/?",
                    "options": {
                        "A": "Ela forçará a remoção dos links simbólicos em \/etc\/rcX.d\/ mesmo quando os links forem somente leitura",
                        "B": "Ela removerá tanto os links simbólicos em \/etc\/rcX.d\/ quanto o script de init em \/etc\/init.d\/",
                        "C": "Ela removerá o script de init em \/etc\/init.d\/ e os links simbólicos em \/etc\/rcX.d\/ e atualizará as informações de pacote dos arquivos instalados",
                        "D": "Ela forçará a remoção de links simbólicos em \/etc\/rcX.d\/ mesmo que o script de init correspondente ainda exista em \/etc\/init.d\/"
                    },
                    "answer": "D",
                    "explanation": "A opcao -f do update-rc.d forca a remocao dos links simbolicos nos diretorios \/etc\/rcX.d\/, mesmo que o script correspondente ainda exista em \/etc\/init.d\/.\nSem essa opcao, o update-rc.d normalmente se recusaria a remover os links enquanto o script de init ainda estivesse presente, evitando links orfaos por acidente.\nEla nao apaga o script em \/etc\/init.d\/ nem atualiza informacoes de pacotes; apenas os links de runlevel sao afetados."
                }
            ]
        },
        {
            "id": "exemplo-demo",
            "title": "EXEMPLO - Simulado de Demonstracao",
            "passingScore": 500,
            "questions": [
                {
                    "id": 1,
                    "topic": 1,
                    "type": "single",
                    "question": "Qual comando exibe o nome do host atual do sistema Linux?",
                    "options": {
                        "A": "hostname",
                        "B": "whoami",
                        "C": "uname -a",
                        "D": "id"
                    },
                    "answer": "A",
                    "explanation": "O comando hostname exibe (sem argumentos) o nome do host configurado no sistema.\nUsado com um argumento, ele tambem pode definir um novo nome de host temporariamente (ate o proximo boot).\nwhoami mostra o usuario logado, uname -a mostra informacoes do kernel e id mostra UID\/GID; nenhum retorna o hostname."
                },
                {
                    "id": 2,
                    "topic": 1,
                    "type": "multi",
                    "question": "Quais comandos podem exibir informacoes de uso de memoria? (Escolha DUAS.)",
                    "options": {
                        "A": "free",
                        "B": "vmstat",
                        "C": "passwd",
                        "D": "chmod"
                    },
                    "answer": "A,B",
                    "explanation": "free mostra um resumo de memoria RAM e swap: total, usada, livre, buffers e cache.\nvmstat tambem reporta memoria, alem de estatisticas de paginacao (swap) e I\/O em uma unica saida.\npasswd gerencia senhas de usuarios e chmod altera permissoes de arquivos; nenhum dos dois exibe uso de memoria."
                },
                {
                    "id": 3,
                    "topic": 2,
                    "type": "text",
                    "question": "Informe o caminho completo do arquivo que define os pontos de montagem carregados no boot.",
                    "options": {},
                    "answer": "\/etc\/fstab",
                    "explanation": "O arquivo \/etc\/fstab lista os sistemas de arquivos que devem ser montados automaticamente durante o boot.\nCada linha define o dispositivo, o ponto de montagem, o tipo de filesystem, as opcoes de montagem, e os campos de dump e ordem do fsck.\nE consultado tanto pelo processo de boot quanto pelo comando mount quando usado sem todos os parametros."
                }
            ]
        }
    ]
};
