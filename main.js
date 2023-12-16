import { sobreporDado, jogaDado, defineColuna, verificaColunaBot, somaColunasBot, verificaColunaJogador, somaColunasJogador, escreveTabuleiro, zeraMatriz, tabuleiroBot, tabuleiroJogador } from "./tabuleiro.js";

//Define botões para a coluna do Jogador.
let coluna0 = document.getElementById("coluna0");
let coluna1 = document.getElementById("coluna1");
let coluna2 = document.getElementById("coluna2");
//Define botões para visualização dos dados.
let dadoBot = document.querySelector("#dBot");
let dadoJogador = document.querySelector("#dJogador");
//Define botão que inicia e reinicia o jogo.
let botao = document.querySelector("#botao")
//Define caixa de texto que irá mostrar o vencedor
let vencedor = document.querySelector("#vencedor");

botao.addEventListener('click', newGame);
function newGame() {
    zeraMatriz();
    estadoDoJogo(1);
}
function estadoDoJogo(idJogador) {
    if (idJogador == 1) {
        turnoBot();
    }
    else {
        turnoJogador();
    }
}

//Turno do Bot
function turnoBot() {
    let vlDado = jogaDado();
    dadoBot.innerHTML = vlDado;
    let vlColuna = defineColuna();
    //define variaveis da posicao
    verificaColunaBot(vlColuna, vlDado);
    somaColunasBot();
    somaColunasJogador();
    sobreporDado(vlColuna, vlDado, 1);
    escreveTabuleiro();
    let pontos = somaColunasBot();
    verificaFimDoJogo(2, pontos[0], pontos[1]);
}

let valorDadoJogador;
function turnoJogador() { 

}

function verificaFimDoJogo() {
    let contBot = 0;
    let contJogador = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tabuleiroBot[i][j] != 0) {
                contBot++;
            }
            if (tabuleiroJogador[i][j] != 0) {
                contJogador++;
            }
        }
    }
    if (contBot == 9 || contJogador == 9) {
        if (pontosBot > pontosJogador) {
            vencedor.innerHTML = "Você perdeu...";
        } else if (pontosJogador > pontosBot) {
            vencedor.innerHTML = "Parabéns, você venceu!";
        }
    }
    else {
        estadoDoJogo(proximoTurno);
    }
}