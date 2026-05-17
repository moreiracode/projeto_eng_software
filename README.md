# BUSAMC

Aplicativo de Transporte Universitário inteligente integrado ao desempenho acadêmico.

## 🚀 Propósito do Documento de Software

Esse documento tem o objetivo de detalhar os requisitos dos usuários que deverão ser atendidos pelo sistema a ser construído nesse projeto. Ele servirá como base para a construção do sistema por parte dos programadores.
Aqui estará presente uma descrição detalhada das funções do produto, de suas interfaces e do comportamento esperado do sistema.

### 📋 Estudo

#### Qual problema o sistema resolve

O sistema mitiga o desperdício de recursos financeiros da instituição com transporte público fraudado por terceiros não matriculados. Simultaneamente, ele combate a evasão e o desinteresse escolar, resolvendo a falta de previsibilidade e atrasos dos alunos, causados pela ausência de informação em tempo real sobre os horários dos ônibus.

#### Justificativa do Projeto

A mobilidade urbana é um dos fatores cruciais para a permanência do estudante no ensino superior. Ao vincular o uso do benefício gratuito do transporte a um indicador de desempenho acadêmico (Média >= 7), o projeto cria um mecanismo de incentivo meritocrático (recompensa por engajamento), gerando valor direto tanto para o setor administrativo da ESAMC quanto para o aproveitamento pedagógico das turmas.

#### Benefícios do Sistema

Para o Aluno: Maior segurança e controle do tempo na rotina diária de deslocamento, evitando esperas desnecessárias em pontos de ônibus isolados.
Para a ESAMC: Divulgação dos universitários a se ingressarem na faculdade pelos benefícios, indicadores de estimulo para o aumento da média geral acadêmica da faculdade. 

### 🔧 Requisitos do Sistema

### Requisitos de Usuário

- O estudante deve ser capaz de visualizar a localização exata e o tempo estimado de chegada do ônibus universitário.
- O estudante deve conseguir gerar um QR Code de acesso rápido para validação na catraca física do veículo.
- O estudante deve poder cadastrar e gerenciar suas linhas de ônibus de uso recorrente.
- O estudante deve ser notificado caso seu acesso seja suspenso devido ao rendimento acadêmico.


### Requisitos de Sistema

- O sistema deve realizar chamadas de API externas ao banco de dados da ESAMC para verificar a matricula, o status ativo e o rendimento (média) do aluno.
- O sistema deve processar coordenadas geográficas enviadas pelos dispositivos GPS instalados na frota de ônibus a cada 15 segundos.
- O sistema deve invalidar automaticamente os QR Code gerados após 30 segundos de emissão por motivos de segurança contra fraudes de compartilhamento.
- O sistema deve invalidar caso o aluno(a) já tenha efetuado o uso da catraca, liberando o seu uso novamente após 30 minutos.


### Requisitos Funcionais

- Autenticação Integrada: O aplicativo deve permitir o login do usuário utilizando estritamente a matricula acadêmica (RA) e senha unificada da instituição (Plataforma A).
- Verificação de Elegibilidade (Regra de Negócio): O sistema deve analisar a média global do aluno. Se a nota for maior ou igual a 7.0, o acesso é liberado. Se for inferior a 7.0, o sistema deve bloquear a geração do QR Code de embarque.
  - Exceção: Alunos integrantes (primeiro período) possuem benefício garantido sem restrição de nota até o fechamento do primeiro ciclo de avaliações.

- Painel de Monitoramento: O aplicativo deve renderizar um mapa interativo exibindo a rota física do ônibus e o marcador com a posição em tempo real do veículo.
- Módulo de Emissão de QR Code: O sistema deve disponibilizar um botão de acesso rápido para gerar o código para liberação na catraca, condicionado ao status ativo e regular do aluno.


### Requisitos Não Funcionais

- Desempenho e Latência: A validação e renderização do QR Code na tela do aluno não deve ultrapassar 1,5 segundos após a requisição para evitar gargalos físicos no embarque.
- Segurança da Informação: Todos os dados de autenticação (matricula e senha) trafegados entre o aplicativo e os servidores da ESAMC devem ser criptografados via protocolo HTTPS.
- Portabilidade: A interface mobile do aplicativo deve ser responsiva e adaptável a telas de diferentes tamanhos e resoluções (Android e iOS), sendo parecido com o padrão de cores da ESAMC.


## 🛠️ Construído com

* [FIGMA] - [http://www.figma.com.br](https://www.figma.com/proto/wzKVPRa2xFglXgE4pTuI2K/APP-BUSAMC?node-id=1-31&p=f&t=omEnbiU3DFWmSQoZ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A31) - O layout do Protótipo.

## ✒️ Autores

* **Um desenvolvedor** - *Trabalho Inicial* - [Mycael Moreira](https://github.com/moreiracode)
