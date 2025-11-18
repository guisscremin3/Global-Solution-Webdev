# Global-Solution-Webdev

Global Solution FIAP 2025 – O Futuro do Trabalho
Web Development - Turma: 1ESPR

Trabalho realizado por:

Guilherme de Oliveira Scremin - RM:564788
Igor Gadote - RM:567747

1. Detalhes do Projeto e Ideia Central
Tema Central (Global Solution 2025)
O projeto está alinhado ao tema "O Futuro do Trabalho" e foca na Inclusão Produtiva e no Bem-Estar em ambientes digitais e automatizados.

A Solução "WorkSense"
O WorkSense é uma proposta de Dispositivo IoT para Previsibilidade e Conforto Sensorial no trabalho, com foco em soluções acessíveis. Este formulário web atua como a porta de entrada do sistema, permitindo que novos usuários registrem suas preferências e habilidades.

Função: Coletar e validar os dados de identificação, área de interesse e um vetor de habilidades do usuário. Essas informações seriam, em um ambiente real, enviadas ao dispositivo IoT (ESP32/Arduino) para personalizar seu ambiente de trabalho (controle de ruído, luz, rotina, etc.).

2. Instruções de Uso e Dependências
Instruções de Uso
Clone o Repositório: Obtenha os arquivos index.html e script.js.

Execução: Abra o arquivo index.html em qualquer navegador (Chrome, Firefox, Edge, etc.).

Interação:
Preencha os campos obrigatórios (Nome, CPF, E-mail).
Selecione e adicione pelo menos 3 habilidades usando o botão "Adicionar Habilidade".
Clique em "Registrar Preferências" para iniciar a validação.
O resultado (erros ou sucesso) será exibido na Área de Feedback.

Dependências
O projeto não possui dependências externas, utilizando apenas HTML5 e JavaScript Vanilla.

3. Informações Relevantes (Contexto Interdisciplinar)
O projeto Web Development complementa a entrega de Edge Computing e Computer Systems.

Conexão IoT: O dado do CPF limpo e a lista de habilidades seriam as informações base para a criação de um perfil de usuário no backend, que por sua vez, enviaria tópicos MQTT e/ou faria chamadas a endpoints HTTP para a configuração remota do dispositivo WorkSense (o qual demonstrou a leitura de sensores e acionamento de atuadores na simulação Wokwi).
