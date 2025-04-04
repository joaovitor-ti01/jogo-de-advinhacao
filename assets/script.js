//Gerar um número aleatório entre 1 e 100
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 10; //Limite de tentativas

//Pegando os elemenos DOM
const input = document.getElementById('guessInput');
const message = document.getElementById('message');
const attemptsLeft = document.getElementById('attemptsLeft');
const submitGuess = document.getElementById('submitGuess');
const restartGame = document.getElementById('restartGamer');

attemptsLeft.textContent = 'Tentativas restantes:${tentativas}';

// Função para verificar o palpite 
function verificarPalpite() {
    let palpite = Number(input.value);
    if (palpite < 1 || palpite > 100 || isNaN(palpite)) {
        message.textContent = 'Por favor, insira um número válido entre 01 e 100.';
        return;
    }

    tentativas--;
    attemptsLeft.textContent = 'Tentativas restantes:${tentativas}';

    if (palpite === numeroAleatorio) {
        message.textContent = 'Parabéns! Você acertou';
        fimDoJogo();
    } else if (palpite < numeroAleatorio){
        message.textContent = 'O número é maior!';
    } else {
        message.textContent = 'O número é menor';
    }

    if ( tentativas === 0) {
        message.textContent = 'Fim de jogo! O número era ${numeroAleatorio}.';
        fimDoJogo();
    }
}

//Função para encerrar o jogo
function fimDoJogo() {
    input.disabled = true;
    submitGuess.disabled = true;
    restartGame.style.display = 'block';
}

// Reniciar o jogo 
function reniciarJogo() {
    numeroAleatorio = Math.floor(Math.random() *100) +1;
    tentativa = 10;
    input.disabled = false;
    submitGuess.disabled = false;
    restartGame.style.display = "none";
    message.textContent = '';
    input.value = '';
    attemptsLeft.textContent = 'Tentativas restantes: ${tentativas}';
}

//Eventos 
submitGuess.addEventListener('click', verificarPalpite);
restartGame.addEventListener('click', reniciarJogo);