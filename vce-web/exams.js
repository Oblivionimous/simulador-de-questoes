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
                    "explanation": "O uso intenso de swap forca paging constante entre RAM e disco. Como o disco e muito mais lento que a RAM, o desempenho geral degrada."
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
                    "explanation": "No vmstat, a coluna 'us' (user) mostra tempo de CPU em codigo de usuario e 'sy' (system) mostra tempo em codigo do kernel."
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
                    "explanation": "O dimensionamento depende de quantos usuarios simultaneos, do tipo de conteudo servido e das linguagens de script suportadas. Vendedor de hardware e midia de instalacao nao afetam o sizing."
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
                    "explanation": "nfsiostat coleta estatisticas de I\/O de montagens NFS e cifsiostat de montagens CIFS\/SMB. Ambos servem para conexoes de filesystem remoto."
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
                    "explanation": "A coluna 'wa' (wait) indica a espera por I\/O. Como todos os valores em 'wa' na saida sao 0, a resposta e 0."
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
                    "explanation": "lsof lista arquivos abertos por processos e pstree mostra a hierarquia de processos; ambos ajudam a identificar processos de interesse."
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
                    "explanation": "No vmstat: 'free' = RAM livre disponivel, 'buff' = RAM usada para buffers e 'cache' = RAM usada para cache do filesystem."
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
                    "explanation": "No load average, os tres numeros representam 1, 5 e 15 minutos. O segundo valor (24.71) e a media de 5 minutos."
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
                    "explanation": "A diretiva LoadPlugin no collectd.conf carrega e ativa um plugin, definindo o que sera monitorado."
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
                    "explanation": "O comando top mostra os processos ordenados por uso de CPU em tempo real, junto com seus PIDs."
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
                    "explanation": "As tres cargas do load average correspondem sempre a 1, 5 e 15 minutos."
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
                    "explanation": "sar, top e vmstat exibem informacoes de uso de memoria; mpstat foca em CPU e pstree em hierarquia de processos."
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
                    "explanation": "Dados historicos ajudam a prever necessidade de recursos, diagnosticar problemas de capacidade e resolver problemas de software ao longo do tempo."
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
                    "explanation": "O vmstat reporta uso de memoria, paginacao (swap) e I\/O de blocos em uma unica saida."
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
                    "explanation": "O estado 'wa' representa processos esperando a conclusao de operacoes de I\/O (disco\/rede)."
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
                    "explanation": "O collectd usa uma biblioteca de plugins; cada plugin coleta um tipo de metrica."
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
                    "explanation": "O modules.dep, gerado pelo depmod, lista todos os modulos compilados e suas dependencias, permitindo ao modprobe carregar automaticamente os dependentes."
                },
                {
                    "id": 18,
                    "topic": 2,
                    "type": "text",
                    "question": "Após configurar um novo kernel, qual arquivo em \/usr\/src\/linux\/ contém a configuração?",
                    "options": {},
                    "answer": "\/usr\/src\/linux\/.config, .config",
                    "explanation": "A configuracao do kernel apos o make config fica no arquivo oculto .config em \/usr\/src\/linux\/."
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
                    "explanation": "Kernels 3.x usam os rotulos 'longterm' (suporte de longo prazo) e 'stable' (estavel) para descrever seus tipos de release."
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
                    "explanation": "udevadm monitor escuta os eventos (uevents) que o kernel emite ao detectar mudancas de hardware e os imprime no console."
                },
                {
                    "id": 21,
                    "topic": 2,
                    "type": "text",
                    "question": "Uma aplicação de banco de dados requer um segmento máximo de memória compartilhada (shmmax) de GB (2147483648 Bytes). Qual arquivo de configuração deve ser modificado para definir esse parâmetro do kernel permanentemente? (Especifique o nome completo do arquivo, incluindo o caminho.)",
                    "options": {},
                    "answer": "\/etc\/sysctl.conf",
                    "explanation": "Parametros permanentes do kernel sao definidos em \/etc\/sysctl.conf, aplicados no boot via sysctl."
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
                    "explanation": "No \/boot, os parametros de configuracao do kernel ficam em config-<versao>, ex: config-3.4.50-11."
                },
                {
                    "id": 23,
                    "topic": 2,
                    "type": "text",
                    "question": "Uma nova versão do kernel precisa ser compilada para usar um novo recurso. Se o arquivo de configuração do kernel antigo estiver disponível, qual alvo (target) do make cria um arquivo de configuração para o novo kernel baseado na configuração do kernel antigo?",
                    "options": {},
                    "answer": "oldconfig, make oldconfig",
                    "explanation": "make oldconfig cria um novo .config reaproveitando as respostas do .config antigo, perguntando apenas sobre opcoes novas."
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
                    "explanation": "zImage e carregada inteiramente na memoria baixa (limite ~640KB); bzImage (big zImage) pode ser carregada na memoria alta, permitindo kernels maiores."
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
                    "explanation": "O codigo-fonte dos modulos principais e distribuido junto com o codigo-fonte do proprio kernel Linux."
                },
                {
                    "id": 26,
                    "topic": 2,
                    "type": "text",
                    "question": "Qual comando é usado para descarregar (unload) um único módulo atualmente carregado pelo kernel sem descarregar quaisquer módulos dos quais ele dependa? (Especifique o comando com ou sem informação de caminho)",
                    "options": {},
                    "answer": "rmmod, \/sbin\/rmmod",
                    "explanation": "rmmod descarrega um unico modulo sem tocar em suas dependencias (diferente de modprobe -r)."
                },
                {
                    "id": 27,
                    "topic": 2,
                    "type": "text",
                    "question": "Qual diretório contém os arquivos de regras udev específicos do sistema? (Especifique o caminho absoluto incluindo o nome do diretório)",
                    "options": {},
                    "answer": "\/etc\/udev\/rules.d, \/etc\/udev\/rules.d\/",
                    "explanation": "As regras udev especificas do sistema (do administrador) ficam em \/etc\/udev\/rules.d\/."
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
                    "explanation": "A imagem initramfs e um arquivo cpio (geralmente comprimido), extraido pelo kernel no boot."
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
                    "explanation": "O parametro de boot maxcpus=1 limita o kernel a usar apenas um processador."
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
                    "explanation": "sysctl kernel.shmmax=... e echo ... > \/proc\/sys\/kernel\/shmmax alteram o parametro em tempo de execucao (nao persistente)."
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
                    "explanation": "insmod carrega um modulo diretamente; modprobe carrega o modulo resolvendo automaticamente suas dependencias."
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
                    "explanation": "Descompacta-se o initramfs com gunzip e depois extrai-se o conteudo cpio com 'cpio -i' dentro de um diretorio."
                },
                {
                    "id": 33,
                    "topic": 2,
                    "type": "text",
                    "question": "Após instalar um kernel compilado, ele não consegue encontrar nenhum módulo que precise ser carregado. Qual alvo do make provavelmente foi perdido ao instalar o kernel?",
                    "options": {},
                    "answer": "make modules_install, modules_install",
                    "explanation": "make modules_install instala os modulos compilados em \/lib\/modules\/<versao>; sem ele o kernel novo nao encontra seus modulos."
                },
                {
                    "id": 34,
                    "topic": 2,
                    "type": "text",
                    "question": "De acordo com o Filesystem Hierarchy Standard (FHS), qual é o caminho para o código-fonte do kernel Linux, podendo ser um link simbólico para o código-fonte Linux real? (Especifique o caminho completo sem informação de versão.)",
                    "options": {},
                    "answer": "\/usr\/src\/linux, \/usr\/src\/linux\/",
                    "explanation": "Pelo FHS, o codigo-fonte do kernel fica em \/usr\/src\/linux, frequentemente um symlink para a versao real."
                },
                {
                    "id": 35,
                    "topic": 3,
                    "type": "text",
                    "question": "Qual arquivo informa ao GRUB os caminhos das partições do sistema de arquivos tanto em formato Linux quanto em sintaxe GRUB? (Especifique apenas o nome do arquivo, sem informação de caminho)",
                    "options": {},
                    "answer": "device.map",
                    "explanation": "O arquivo device.map informa ao GRUB o mapeamento entre a nomenclatura de discos do Linux e a sintaxe do GRUB."
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
                    "explanation": "No SysV-init, \/etc\/init.d\/apache2 e o script mestre; os diretorios rcX.d contem apenas symlinks para ele."
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
                    "explanation": "PXE (Preboot eXecution Environment) permite inicializar um computador pela interface de rede."
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
                    "explanation": "O comando lilo le \/etc\/lilo.conf e instala\/atualiza o bootloader LILO."
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
                    "explanation": "Cada opcao de boot no GRUB2 comeca com a diretiva 'menuentry', que abre o bloco de configuracao daquela entrada."
                },
                {
                    "id": 40,
                    "topic": 3,
                    "type": "text",
                    "question": "Qual é o caminho completo do diretório que contém os scripts (ou links para os scripts originais) a serem executados enquanto o sistema inicializa para o runlevel 2 do SysV-init?",
                    "options": {},
                    "answer": "\/etc\/rc2.d, \/etc\/rc2.d\/, \/etc\/init.d\/rc2.d, \/etc\/init.d\/rc2.d\/",
                    "explanation": "Os scripts do runlevel 2 (SysV) ficam em \/etc\/rc2.d\/, geralmente symlinks para \/etc\/init.d\/."
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
                    "explanation": "O runlevel tambem pode ser forcado por um parametro na linha do kernel no bootloader, sobrepondo o initdefault."
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
                    "explanation": "Montar root como somente-leitura no inicio permite rodar fsck com seguranca; so depois de checado ele e remontado com escrita."
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
                    "explanation": "Sem conseguir montar o root, o kernel entra em panico exibindo qual dispositivo falhou ou que o init nao foi encontrado."
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
                    "explanation": "PXE depende de DHCP (para obter IP e localizar o servidor) e TFTP (para baixar a imagem de boot)."
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
                    "explanation": "Sem o arquivo do kernel, o sistema nao inicializa e o bootloader exibe um erro."
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
                    "explanation": "Na inicializacao para um runlevel, os scripts S sao executados em ordem numerica; S98lpi roda antes de S99lpi."
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
                    "explanation": "Ao carregar o initramfs, o kernel executa primeiro \/init, se presente."
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
                    "explanation": "Em sistema so-Linux, o codigo do LILO fica no MBR (master boot record)."
                },
                {
                    "id": 49,
                    "topic": 3,
                    "type": "text",
                    "question": "Qual palavra-chave é usada no arquivo \/etc\/inittab para definir o runlevel padrão do sistema no SysV-init?",
                    "options": {},
                    "answer": "initdefault",
                    "explanation": "A palavra-chave initdefault na linha do \/etc\/inittab define o runlevel padrao do sistema."
                },
                {
                    "id": 50,
                    "topic": 3,
                    "type": "text",
                    "question": "Digite o caminho completo para o principal arquivo de configuração do processo init do SysV.",
                    "options": {},
                    "answer": "\/etc\/inittab",
                    "explanation": "O arquivo principal de configuracao do init do SysV e \/etc\/inittab."
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
                    "explanation": "Para sair do single user e voltar ao runlevel normal usa-se 'shutdown -r now' (reinicia) ou 'reboot'."
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
                    "explanation": "A opcao -f do update-rc.d forca a remocao dos symlinks em rcX.d mesmo que o script em init.d ainda exista."
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
                    "explanation": "O fsck coloca arquivos\/fragmentos sem referencia no diretorio lost+found do filesystem (ext2\/3\/4)."
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
                    "explanation": "Em \/home \/etc\/auto.home, o arquivo auto.home contem os mapas indiretos que definem o que montar sob \/home."
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
                    "explanation": "Um 0 no ultimo campo (fsck order) do \/etc\/fstab indica que o filesystem nao sera verificado pelo fsck no boot."
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
                    "explanation": "tune2fs -L root \/dev\/sda1 define o label (rotulo) 'root' no filesystem ext."
                },
                {
                    "id": 57,
                    "topic": 4,
                    "type": "text",
                    "question": "Qual comando é usado para criar um sistema de arquivos ISO9660? (Especifique APENAS o comando, sem caminho ou parâmetros.)",
                    "options": {},
                    "answer": "mkisofs, genisoimage",
                    "explanation": "mkisofs (ou o equivalente genisoimage) cria imagens de filesystem ISO9660."
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
                    "explanation": "smartd monitora a saude dos discos rigidos via S.M.A.R.T."
                },
                {
                    "id": 59,
                    "topic": 4,
                    "type": "text",
                    "question": "Qual comando transforma um sistema de arquivos ext2 existente em ext3 de forma não destrutiva? (Especifique APENAS o comando, sem caminho ou parâmetros.)",
                    "options": {},
                    "answer": "\/sbin\/tune2fs, tune2fs",
                    "explanation": "tune2fs (com -j) converte um ext2 em ext3 de forma nao destrutiva, adicionando o journal."
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
                    "explanation": "Cria-se o arquivo com dd, formata-se como swap com mkswap e ativa-se com swapon."
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
                    "explanation": "Formato do \/etc\/fstab: dispositivo, ponto de montagem, tipo de FS, opcoes, dump, ordem do fsck."
                },
                {
                    "id": 62,
                    "topic": 4,
                    "type": "text",
                    "question": "Após muitas operações de escrita, o administrador quer garantir que o kernel grave os buffers do sistema de arquivos no disco. Qual comando realiza isso? (Especifique APENAS o comando, sem caminho ou parâmetros.)",
                    "options": {},
                    "answer": "sync",
                    "explanation": "O comando sync forca a gravacao dos buffers do filesystem em disco."
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
                    "explanation": "\/etc\/mtab e \/proc\/mounts sao atualizados conforme filesystems sao montados\/desmontados, refletindo o estado atual."
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
                    "explanation": "O arquivo mestre (map principal) do autofs e o auto.master."
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
                    "explanation": "ext4, XFS e Btrfs sao filesystems comuns para particao root; VFAT e NTFS nao sao adequados para root Linux."
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
                    "explanation": "smartd monitora discos via S.M.A.R.T. e tenta prever falhas antes que ocorram."
                },
                {
                    "id": 67,
                    "topic": 4,
                    "type": "text",
                    "question": "Qual palavra-chave está faltando na seguinte linha do \/etc\/fstab para tornar um dispositivo USB flash gravável pelo usuário fred quando montado:\n```\n\/dev\/sda1 \/mnt\/usbflash vfat defaults,users,______=fred,umask=022, 0 0\n```\n(Forneça apenas o nome da opção, sem quaisquer configurações)",
                    "options": {},
                    "answer": "uid",
                    "explanation": "A opcao uid=fred no \/etc\/fstab define o dono do filesystem VFAT montado, tornando-o gravavel por fred."
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
                    "explanation": "ISO9660 e o padrao de filesystem para CD-ROM."
                },
                {
                    "id": 69,
                    "topic": 4,
                    "type": "text",
                    "question": "Considere o seguinte arquivo \/etc\/fstab:\n```\n\/dev\/hda1 swap swap defaults 0 0\n\/dev\/hda2 \/ ext2 defaults 1 1\n\/dev\/hda3 \/home ext2 defaults 1 2\nnone \/proc proc defaults 0 0\n\/dev\/sdb1 \/media\/usb0 vfat user,noauto 0 0\n```\nQual é um dos possíveis comandos que um usuário comum (não-root) pode usar para montar a partição \/dev\/sdb1 no ponto de montagem \/media\/usb0? (Digite o comando com todos os parâmetros e\/ou opções, mas sem opções de tipo de sistema de arquivos.)",
                    "options": {},
                    "answer": "mount \/dev\/sdb1, mount \/media\/usb0, \/bin\/mount \/dev\/sdb1, \/bin\/mount \/media\/usb0, mount \/media\/usb0\/, \/bin\/mount \/media\/usb0\/",
                    "explanation": "Como o fstab tem 'user' na linha do \/dev\/sdb1, um usuario comum monta com 'mount \/dev\/sdb1' ou 'mount \/media\/usb0'."
                },
                {
                    "id": 70,
                    "topic": 4,
                    "type": "text",
                    "question": "Qual diretório em \/dev\/disk\/ pode ser usado para determinar o UUID de um disco rígido conectado?",
                    "options": {},
                    "answer": "\/dev\/disk\/by-uuid, by-uuid, \/dev\/disk\/by-uuid\/",
                    "explanation": "O diretorio \/dev\/disk\/by-uuid\/ contem symlinks nomeados pelo UUID de cada particao."
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
                    "explanation": "mdadm --fail \/dev\/md0 \/dev\/sdc1 marca o dispositivo como falho, simulando uma falha no array."
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
                    "explanation": "O arquivo \/proc\/mdstat mostra o status dos arrays RAID de software (md)."
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
                    "explanation": "Formato do \/etc\/fstab: dispositivo, ponto de montagem, tipo de FS, opcoes, dump, ordem do fsck."
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
                    "explanation": "Cria-se o arquivo com dd, formata-se como swap com mkswap e ativa-se com swapon."
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
                    "explanation": "O fsck coloca arquivos\/fragmentos sem referencia no diretorio lost+found."
                },
                {
                    "id": 76,
                    "topic": 5,
                    "type": "text",
                    "question": "Qual comando é usado para remover um volume físico de um grupo de volumes? (Especifique APENAS o comando, sem caminho ou parâmetros.)",
                    "options": {},
                    "answer": "vgreduce, \/sbin\/vgreduce",
                    "explanation": "vgreduce remove um volume fisico (PV) de um grupo de volumes (VG)."
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
                    "explanation": "A opcao _netdev no fstab adia a montagem ate a rede estar disponivel, necessaria para alvos iSCSI."
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
                    "explanation": "Arrays RAID de software Linux usam a nomenclatura \/dev\/mdN, ex: \/dev\/md1."
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
                    "explanation": "Apos aumentar o volume logico (lvresize\/lvextend), e preciso aumentar tambem o filesystem (ex: resize2fs)."
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
                    "explanation": "As opcoes de node.startup no iscsid.conf sao 'manual' e 'automatic'."
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
                    "explanation": "tune2fs -L root \/dev\/sda1 define o label 'root' no filesystem ext4."
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
                    "explanation": "Sequencia LVM: pvcreate, vgcreate, lvcreate, mkfs, mount. Faltavam vgcreate e lvcreate."
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
                    "explanation": "RAID nivel 1 cria um array espelhado (mirror) no RAID de software Linux."
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
                    "explanation": "Sequencia correta: pvcreate (PV), vgcreate (VG), lvcreate (LV), mkfs e mount."
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
                    "explanation": "lvcreate com a opcao -s (--snapshot) cria uma copia point-in-time do volume logico para backup."
                },
                {
                    "id": 86,
                    "topic": 5,
                    "type": "text",
                    "question": "Qual diretório em \/dev\/disk\/ pode ser usado para determinar o UUID de um disco rígido conectado?",
                    "options": {},
                    "answer": "\/dev\/disk\/by-uuid, by-uuid, \/dev\/disk\/by-uuid\/",
                    "explanation": "O diretorio \/dev\/disk\/by-uuid\/ contem symlinks nomeados pelo UUID de cada particao."
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
                    "explanation": "vgextend adiciona volumes fisicos (PVs) a um grupo de volumes existente."
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
                    "explanation": "ISO9660 e o padrao de filesystem para CD-ROM."
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
                    "explanation": "Em \/home \/etc\/auto.home, o auto.home contem os mapas indiretos de montagem sob \/home."
                },
                {
                    "id": 90,
                    "topic": 5,
                    "type": "text",
                    "question": "Qual palavra-chave está faltando na seguinte linha do \/etc\/fstab para tornar um dispositivo USB flash gravável pelo usuário fred quando montado:\n```\n\/dev\/sda1 \/mnt\/usbflash vfat defaults,users,______=fred,umask=022, 0 0\n```\n(Forneça apenas o nome da opção, sem quaisquer configurações)",
                    "options": {},
                    "answer": "uid",
                    "explanation": "A opcao uid=fred torna o dispositivo VFAT montado gravavel pelo usuario fred."
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
                    "explanation": "Um gravador de CD em controlador SATA aparece como dispositivo SCSI \/dev\/sr0."
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
                    "explanation": "RAID5 exige no minimo 3 discos para oferecer redundancia (dados + paridade distribuida)."
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
                    "explanation": "hdparm -d 1 \/dev\/hda habilita o DMA no disco IDE."
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
                    "explanation": "smartd monitora a saude dos discos rigidos via S.M.A.R.T."
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
                    "explanation": "mdadm e a ferramenta para criar e gerenciar arrays RAID de software."
                },
                {
                    "id": 96,
                    "topic": 6,
                    "type": "text",
                    "question": "Executar `tcpdump -nli eth1 'tcp'` mostra a seguinte saída:\n```\n14:41:53.694538 IP 10.1.52.145.51738 > 24.215.7.162.143: Flags [.], ack 33051, win 1002, options [nop,nop,TS val 36789130 ecr 1746004159], length 0\n```\nQual é o endereço IP de origem deste pacote? (Especifique a resposta apenas em dígitos e pontos.)",
                    "options": {},
                    "answer": "10.1.52.145",
                    "explanation": "No tcpdump, o IP de origem e o que aparece antes do '>'; aqui, 10.1.52.145."
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
                    "explanation": "Em hosts.allow, '192.168.1.' (com ponto final) ou '192.168.1.0\/255.255.255.0' cobrem a sub-rede \/24."
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
                    "explanation": "ip addr add 192.168.1.2\/32 dev eth0 adiciona um IP secundario a interface."
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
                    "explanation": "\/etc\/hosts (tabela estatica) e \/etc\/resolv.conf (servidores DNS) sao usados na resolucao de nomes."
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
                    "explanation": "nc (netcat) permite criar scripts de interacao com servicos TCP ou UDP."
                },
                {
                    "id": 101,
                    "topic": 6,
                    "type": "text",
                    "question": "De acordo com a saída do tcpdump abaixo, qual é o endereço IP do host cliente?\n```\n02:12:40.511381 IP 192.168.246.11.1045 > 192.168.246.1.22: S 3838532429:3838532429(0) win 5840 <mss 1460,sackOK,timestamp 31325740,nop,wscale 2>\n02:12:40.511540 IP 192.168.246.1.22 > 192.168.246.11.1045: S 1209330085:1209330085(0) ack 383853 2430 win 5792 <mss 1460,sackOK,timestamp 11553457 3132574,nop,wscale 0>\n02:12:40.511755 IP 192.168.246.11.1045 > 192.168.246.1.22: . ack 1 win 1460 <nop,nop,timestamp 3132574 11553457>\n02:12:40.515122 IP 192.168.246.1.22 > 192.168.246.11.1045: P 1:26(25) ack 1 win 5792 <nop,nop,timestamp 11553460 3132574>\n02:12:40.515511 IP 192.168.246.11.1045 > 192.168.246.1.22: . ack 26 win 1460 <nop,nop,timestamp 3132578 11553460>\n02:12:40.515952 IP 192.168.246.11.1045 > 192.168.246.1.22: P 1:23(22) ack 26 win 1460 <nop,nop,timestamp 3132578 11553460>\n```",
                    "options": {},
                    "answer": "192.168.246.11",
                    "explanation": "O host cliente e o que inicia a conexao (envia o SYN inicial); aqui, 192.168.246.11."
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
                    "explanation": "As palavras-chave de direcao no tcpdump sao 'src' (origem) e 'dst' (destino), tambem combinaveis como 'src or dst'."
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
                    "explanation": "No \/etc\/hosts o formato correto e IP seguido do nome; aqui os campos estao invertidos (nome antes do IP)."
                },
                {
                    "id": 104,
                    "topic": 6,
                    "type": "text",
                    "question": "Os usuários da rede local reclamam que a resolução de nomes não é rápida o suficiente. Digite o comando, sem o caminho ou quaisquer opções, que mostra o tempo levado para resolver uma consulta DNS.",
                    "options": {},
                    "answer": "dig, time dig, time host, time nslookup",
                    "explanation": "Prefixando com 'time' (ex: time dig) mede-se o tempo gasto para resolver a consulta DNS."
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
                    "explanation": "A porta 21 na saida indica trafego FTP (porta de controle)."
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
                    "explanation": "arp e 'ip neigh show' listam os vizinhos IPv4 conhecidos, com IP e MAC."
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
                    "explanation": "'route del -net 10.10.1.0\/24' e 'ip route delete 10.10.1.0\/24' removem a rota da tabela."
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
                    "explanation": "nmap escaneia uma rede procurando por IPs em uso (host discovery)."
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
                    "explanation": "Uma entrada conflitante em hosts.allow (que tem precedencia) ou o servico nao suportar tcpwrapper explicam a falta de efeito do hosts.deny."
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
                    "explanation": "arp lista os IPv4 e MACs que o sistema ja viu na rede local (cache ARP)."
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
                    "explanation": "Adicionar 'nameserver 192.168.0.1' em \/etc\/resolv.conf e garantir 'dns' no nsswitch.conf configura o resolvedor."
                },
                {
                    "id": 112,
                    "topic": 6,
                    "type": "text",
                    "question": "Qual programa lista informações sobre arquivos e conexões de rede abertos por processos? (Especifique APENAS o comando, sem caminho ou parâmetros.)",
                    "options": {},
                    "answer": "lsof, \/usr\/bin\/lsof",
                    "explanation": "lsof lista arquivos e conexoes de rede abertos pelos processos."
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
                    "explanation": "O ping mostra (DUP!) quando envia a um endereco de broadcast e varios hosts respondem, gerando respostas duplicadas."
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
                    "explanation": "A porta 53 e a consulta 'A?' na saida indicam trafego DNS."
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
                    "explanation": "iwconfig e iw exibem a qualidade do link da interface sem fio."
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
                    "explanation": "'route add default gw 192.168.0.1 eth0' e 'ip route add default via 192.168.0.1 dev eth0' definem o gateway padrao."
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
                    "explanation": "Apos editar a config do syslogd, envia-se o sinal HUP ou reinicia-se o servico para recarregar."
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
                    "explanation": "\/proc e um filesystem virtual em memoria; nao deve ser incluido em backup."
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
                    "explanation": "dd if=\/dev\/zero of=\/dev\/sdb3 sobrescreve a particao com zeros, apagando seu conteudo."
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
                    "explanation": "rsync -a -e ssh fyf\/ kevin@deltaur:\/var\/tmp\/ copia o diretorio local para o host remoto via SSH."
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
                    "explanation": "O GNU make procura por 'makefile' ou 'Makefile' no diretorio atual, se nenhum for especificado."
                },
                {
                    "id": 122,
                    "topic": 7,
                    "type": "text",
                    "question": "Qual arquivo contém a mensagem exibida acima do prompt de login do console do sistema? (Especifique o nome completo do arquivo, incluindo o caminho.)",
                    "options": {},
                    "answer": "\/etc\/issue",
                    "explanation": "A mensagem exibida acima do prompt de login no console fica em \/etc\/issue."
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
                    "explanation": "Fitas nao rebobinadas avancam para o proximo arquivo; rodar de novo adiciona o conteudo do proximo arquivo da fita."
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
                    "explanation": "Alvos (targets) comuns em makefiles de codigo-fonte sao clean, install e uninstall."
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
                    "explanation": "Amanda e Bacula sao sistemas de backup comuns no Linux."
                },
                {
                    "id": 126,
                    "topic": 7,
                    "type": "text",
                    "question": "Qual é o nome do dispositivo para a primeira unidade de fita SCSI em um sistema quando usada sem rebobinamento automático após cada operação de escrita? (Especifique o caminho completo para o dispositivo.)",
                    "options": {},
                    "answer": "\/dev\/nst0",
                    "explanation": "A primeira fita SCSI sem rebobinamento automatico e \/dev\/nst0 (o 'n' indica no-rewind)."
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
                    "explanation": "A instalacao falha por falta de permissao; solucoes: rodar 'make install' como root ou usar --prefix num diretorio gravavel."
                },
                {
                    "id": 128,
                    "topic": 7,
                    "type": "text",
                    "question": "Qual arquivo contém a mensagem de texto exibida após o login no console? (Especifique o nome completo do arquivo, incluindo o caminho.)",
                    "options": {},
                    "answer": "\/etc\/motd",
                    "explanation": "A mensagem exibida apos o login no console fica em \/etc\/motd (message of the day)."
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
                    "explanation": "A opcao -p3 do patch remove os tres primeiros niveis de diretorio dos caminhos citados no arquivo de patch."
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
                    "explanation": "modprobe -i (ou modinfo) revela o caminho fisico do modulo; aqui a alternativa correta e modprobe."
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
                    "explanation": "Com RAM crescendo e swap quase ocioso, o certo e aumentar a RAM e\/ou adicionar um servidor de aplicacao para distribuir a carga."
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
                    "explanation": "Para medir a qualidade de um link deve-se registrar a largura de banda em ambas direcoes e a latencia efetiva."
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
                    "explanation": "Descompacta-se o patch com xz e aplica-se com patch ao diretorio da versao imediatamente anterior."
                },
                {
                    "id": 134,
                    "topic": 8,
                    "type": "text",
                    "question": "Qual comando descarta blocos não usados em um sistema de arquivos montado para dar suporte a dispositivos SSD? (Especifique APENAS o comando, sem caminho ou parâmetros.)",
                    "options": {},
                    "answer": "fstrim",
                    "explanation": "fstrim descarta blocos nao usados em um FS montado, importante para o desempenho de SSDs (TRIM)."
                },
                {
                    "id": 135,
                    "topic": 8,
                    "type": "text",
                    "question": "Qual diretório contém os arquivos de unidade systemd específicos do sistema? (Especifique o caminho completo para o diretório.)",
                    "options": {},
                    "answer": "\/lib\/systemd\/system",
                    "explanation": "Os arquivos de unidade systemd distribuidos pelo sistema ficam em \/lib\/systemd\/system."
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
                    "explanation": "O initramfs carrega modulos essenciais e inicia subsistemas (ex: LVM) para tornar o root acessivel ao kernel."
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
                    "explanation": "Compilar um novo kernel gera um novo initramfs automaticamente; ele so precisa ser instalado."
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
                    "explanation": "efibootmgr e a aplicacao em espaco de usuario que modifica as entradas de boot EFI."
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
                    "explanation": "Palavras-chave validas de filtro do tcpdump para um IP sao host, src e dst."
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
                    "explanation": "cryptsetup luksDump mostra as informacoes de cabecalho de uma particao LUKS criptografada."
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
                    "explanation": "Entre varias rotas padrao, a de menor metrica (metric) e a preferida."
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
                    "explanation": "O tcpwrapper usa os arquivos \/etc\/hosts.allow e \/etc\/hosts.deny."
                },
                {
                    "id": 143,
                    "topic": 8,
                    "type": "text",
                    "question": "Qual comando garante que os sistemas de arquivos sejam gravados no disco após muitas operações de escrita? (Especifique APENAS o comando, sem caminho ou parâmetros.)",
                    "options": {},
                    "answer": "sync",
                    "explanation": "O comando sync grava os buffers do filesystem em disco."
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
                    "explanation": "lvcreate com -s cria um snapshot: copia point-in-time que ainda permite atualizar o volume original."
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
                    "explanation": "btrfs subvolume create \/mnt\/volume cria um subvolume Btrfs chamado volume em \/mnt."
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
                    "explanation": "Em \/proc\/mdstat, um disco falho sendo substituido por spare indica recuperacao; [UU_] indica um disco faltando (nao totalmente redundante)."
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
                    "explanation": "arp lista os IPv4 e MACs dos nos vistos nas redes diretamente conectadas."
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
                    "explanation": "dd if=\/dev\/zero of=\/dev\/sdb3 zera a particao, apagando seu conteudo."
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
                    "explanation": "Na saida de sar -b, tps significa 'transfers per second' (transferencias de I\/O por segundo)."
                },
                {
                    "id": 150,
                    "topic": 8,
                    "type": "text",
                    "question": "Qual comando é usado para enviar mensagens a todos os usuários atualmente conectados? (Especifique APENAS o comando, sem caminho ou parâmetros.)",
                    "options": {},
                    "answer": "wall",
                    "explanation": "O comando wall envia uma mensagem a todos os usuarios logados."
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
                    "explanation": "ip -6 addr add ... dev eth0 adiciona um endereco IPv6 estatico a interface (a sintaxe exata da alternativa correta inclui 'new')."
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
                    "explanation": "Entre os sistemas de init listados, o systemd traz seu proprio bootloader UEFI (systemd-boot)."
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
                    "explanation": "De rescue.target volta-se ao alvo normal com 'systemctl default' (telinit 0 tambem consta como resposta do exame)."
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
                    "explanation": "iw phy phyN info mostra as capacidades e frequencias suportadas da interface sem fio."
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
                    "explanation": "sa1 e chamado periodicamente pelo cron para coletar dados do sar em binario."
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
                    "explanation": "Uma unidade de montagem do systemd, usada por systemd-mount, permite montar particoes em pontos de montagem escolhidos."
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
                    "explanation": "sysctl altera parametros do kernel escrevendo na arvore \/proc\/sys\/."
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
                    "explanation": "grub-install instala o GRUB no MBR (ou no dispositivo de boot)."
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
                    "explanation": "tar xvzf ... --wildcards '*lpi*' extrai apenas os arquivos cujo nome contem 'lpi'."
                },
                {
                    "id": 160,
                    "topic": 8,
                    "type": "text",
                    "question": "Qual é o principal arquivo de configuração para o processo init do SystemV? (Especifique o nome completo do arquivo, incluindo o caminho.)",
                    "options": {},
                    "answer": "\/etc\/inittab",
                    "explanation": "O arquivo principal de configuracao do init do SystemV e \/etc\/inittab."
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
                    "explanation": "A opcao -f do update-rc.d forca a remocao dos symlinks em rcX.d mesmo que o init script ainda exista em init.d."
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
                    "explanation": "O comando hostname exibe (ou define) o nome do host da maquina."
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
                    "explanation": "free mostra memoria livre\/usada; vmstat mostra memoria, paginacao e I\/O."
                },
                {
                    "id": 3,
                    "topic": 2,
                    "type": "text",
                    "question": "Informe o caminho completo do arquivo que define os pontos de montagem carregados no boot.",
                    "options": {},
                    "answer": "\/etc\/fstab",
                    "explanation": "O \/etc\/fstab lista os sistemas de arquivos e suas opcoes de montagem no boot."
                }
            ]
        }
    ]
};
