//Define variaveis que representam cada posição do tabuleiro.
let b0 = document.querySelector("#b0");
let b1 = document.querySelector("#b1");
let b2 = document.querySelector("#b2");
let b3 = document.querySelector("#b3");
let b4 = document.querySelector("#b4");
let b5 = document.querySelector("#b5");
let b6 = document.querySelector("#b6");
let b7 = document.querySelector("#b7");
let b8 = document.querySelector("#b8");
//-------------------------------------
let j0 = document.querySelector("#j0");
let j1 = document.querySelector("#j1");
let j2 = document.querySelector("#j2");
let j3 = document.querySelector("#j3");
let j4 = document.querySelector("#j4");
let j5 = document.querySelector("#j5");
let j6 = document.querySelector("#j6");
let j7 = document.querySelector("#j7");
let j8 = document.querySelector("#j8");

//Define variaveis que representam a soma dos valores.
let sb0 = document.querySelector("#sb0");
let sb1 = document.querySelector("#sb1");
let sb2 = document.querySelector("#sb2");
//---------------------------------------
let sj0 = document.querySelector("#sj0");
let sj1 = document.querySelector("#sj1");
let sj2 = document.querySelector("#sj2");

//definindo matrizes que representam os tabuleiros.
export let tabuleiroBot = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
export let tabuleiroJogador = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
//definindo matrizes que representam os valores do tabuleiro espelhados e calculados segundo as regras.
let pontuacaoBot = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let pontuacaoJogador = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

//Funções do Bot
//função para randomizar o valor dado a ser utilizado pelos jogadores.
export function jogaDado() {
    let n = Math.floor(Math.random() * 6) + 1;
    return n;
}
//escolhe aleatoriamente a coluna na qual o bot vai jogar o dado.
export function defineColuna() {
    const conjuntoC = [0, 1, 2];
    let coluna = conjuntoC[Math.floor(Math.random() * conjuntoC.length)];
    return [coluna];
}
//define a posição dentro da coluna escolhida.
export function verificaColunaBot(col, dado) {

    for (let i = 2; i > -1; i--) {
        if (tabuleiroBot[i][col] == 0) {
            tabuleiroBot[i][col] = dado;
            i = -1;
        }
    }

}

//soma dos valores dentro das colunas para visualização dentro do jogo (bot).
export function somaColunasBot() {
    //calcula e imprime a soma das colunas
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 3; i++) {
            let valorPosicao = tabuleiroBot[i][j];
            let fator = 1;
            if (i == 0) {
                if (valorPosicao == tabuleiroBot[i + 1][j] || valorPosicao == tabuleiroBot[i + 2][j]) {
                    fator = 2;
                }
                if ((valorPosicao == tabuleiroBot[i + 1][j]) && (valorPosicao == tabuleiroBot[i + 2][j])) {
                    fator = 3;
                }
                pontuacaoBot[i][j] = valorPosicao * fator;
            }
            else if (i == 1) {
                if (valorPosicao == tabuleiroBot[i - 1][j] || valorPosicao == tabuleiroBot[i + 1][j]) {
                    fator = 2;
                }
                if ((valorPosicao == tabuleiroBot[i - 1][j]) && (valorPosicao == tabuleiroBot[i + 1][j])) {
                    fator = 3;
                }
                pontuacaoBot[i][j] = valorPosicao * fator;
            }
            else if (i == 2) {
                if (valorPosicao == tabuleiroBot[i - 1][j] || valorPosicao == tabuleiroBot[i - 2][j]) {
                    fator = 2;
                }
                if ((valorPosicao == tabuleiroBot[i - 1][j]) && (valorPosicao == tabuleiroBot[i - 2][j])) {
                    fator = 3;
                }
                pontuacaoBot[i][j] = valorPosicao * fator;
            }
            else {
                pontuacaoBot[i][j] = valorPosicao * fator;
            }
        }
        sb0.innerHTML = pontuacaoBot[0][0] + pontuacaoBot[1][0] + pontuacaoBot[2][0];
        sb1.innerHTML = pontuacaoBot[0][1] + pontuacaoBot[1][1] + pontuacaoBot[2][1];
        sb2.innerHTML = pontuacaoBot[0][2] + pontuacaoBot[1][2] + pontuacaoBot[2][2];
    }
    //soma final de todos os jogadores para ser usada dentro de "verificaFimDoJogo()"
    let somaBot = 0;
    let somaJogador = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            somaBot += pontuacaoBot[i][j];
            somaJogador += pontuacaoJogador[i][j];
        }
    }
    return [somaBot, somaJogador];
}