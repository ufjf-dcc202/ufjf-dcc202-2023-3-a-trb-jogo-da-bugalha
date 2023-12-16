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
function turnoBot() {}

let valorDadoJogador;
function turnoJogador() { 

}