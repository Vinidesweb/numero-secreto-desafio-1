# 🎮 Jogo do Número Secreto: Desafio ALURA

Este desafio de jogo de adivinhação de número secreto foi proposto em parceria com a ALURA na realização do Programa Santander Imersão Digital e tem como objetivo proporcionar uma prática intensiva de conceitos fundamentais de JavaScript, especialmente no que diz respeito ao uso de estruturas de controle de fluxo e integração com bibliotecas externas.

🗒️ Conceitos Praticados:

1 - Estruturas de Controle de Fluxo: Utilização de estruturas condicionais (if, else) para avaliar e controlar o fluxo do jogo, fornecendo feedbacks ao jogador com base nas interações.

2 - Manipulação da DOM: Implementação de funções para manipular elementos HTML dinamicamente, como atualizar textos, desabilitar e habilitar botões, e reiniciar o estado da aplicação. Funções e Reutilização de Código: Organização do código por meio da criação de funções para facilitar a legibilidade e promover a reutilização de código em diferentes partes do jogo.

3 - Biblioteca de Voz (ResponsiveVoice): A implementação da biblioteca ResponsiveVoice adiciona uma camada interativa ao jogo, permitindo a comunicação auditiva em tempo real. Alguns dos conceitos abordados incluem:

4 - Fala Assíncrona: Utilização de setTimeout para chamar a função de fala de maneira assíncrona, garantindo que a execução do código não seja bloqueada.

5 - Integração de Bibliotecas Externas: Incorporação de bibliotecas externas, neste caso, a ResponsiveVoice, para fornecer suporte a texto para fala em português brasileiro.

6 - Configurações da Voz: Ajuste de parâmetros, como a taxa de fala (rate), para personalizar a experiência auditiva no jogo. Este desafio não apenas oferece uma oportunidade prática para consolidar conhecimentos em JavaScript, mas também introduz a aplicação prática de bibliotecas externas, proporcionando uma experiência completa de desenvolvimento web.

📥 Versão Simplificada (Com prompt e alert) 📂Projeto na pasta 01

alert ('Bem vindo ao número secreto');

let numeroMaximo = 10;

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

console.log(numeroSecreto);

let chute;

let tentativas = 1;

while (chute != numeroSecreto) { chute = prompt (Escolha um número de 1 a ${numeroMaximo});

if (chute == numeroSecreto) {
   break;
} else {
    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que o ${chute}`);
    } else {
        alert(`O número secreto é maior que o ${chute}`);
    }
    tentativas++;
  }
}

let palavrasTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(Parabéns, você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavrasTentativas}.);

Nesta versão simplificada, o jogo é baseado em interações por meio de prompt e alert. O jogador tenta adivinhar o número secreto, recebendo feedbacks sobre se o número é maior ou menor até acertar.

Conclusão

O Desafio Jogo em parceria com a ALURA proporcionou uma imersão prática e desafiadora nos fundamentos do JavaScript, explorando desde estruturas de controle até a manipulação dinâmica da DOM. A integração da biblioteca ResponsiveVoice adicionou uma dimensão interativa ao jogo, destacando a importância da incorporação de tecnologias externas para enriquecer a experiência do usuário.

🚀 Se você deseja explorar o código-fonte e conferir os projetos, não deixe de visitar os repositórios no GitHub.

🎙️ Sinta-se à vontade para conectar-se comigo no LinkedIn e discutir mais sobre desenvolvimento web, JavaScript, e outros temas relacionados. Adoro trocar ideias e experiências com colegas da área!

Atenciosamente, Vinícius
