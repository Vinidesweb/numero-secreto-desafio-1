alert ('Bem vindo ao número secreto');
let numeroMaximo = 6000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt (`Escolha um número de 1 a ${numeroMaximo}`);

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
alert(`Parabéns, você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavrasTentativas}.`);