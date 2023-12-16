let coluna0 = document.getElementById("coluna0");
let coluna1 = document.getElementById("coluna1");
let coluna2 = document.getElementById("coluna2");

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

//Função para sobrepor valores, excluir coluna inimiga.
export function sobreporDado(coluna, valor, jogador) {
    if (jogador == 2) {
        for (let i = 0; i < 3; i++) {
            if (tabuleiroBot[i][coluna] == valor) {
                tabuleiroBot[i][coluna] = 0;
            }
        }
    }
    else {
        for (let i = 0; i < 3; i++) {
            if (tabuleiroJogador[i][coluna] == valor) {
                tabuleiroJogador[i][coluna] = 0;
            }
        }
    }
}

//Funções do Jogador
//define a posição dentro da coluna escolhida.
export function verificaColunaJogador(col, dado) {

    for (let i = 0; i < 3; i++) {
        if (tabuleiroJogador[i][col] == 0) {
            tabuleiroJogador[i][col] = dado;
            i = 3;
        }
    }
}
//soma dos valores dentro das colunas para visualização dentro do jogo (jogador).
export function somaColunasJogador() {
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 3; i++) {
            let valorPosicao = tabuleiroJogador[i][j];
            let fator = 1;
            if (i == 0) {
                if (valorPosicao == tabuleiroJogador[i + 1][j] || valorPosicao == tabuleiroJogador[i + 2][j]) {
                    fator = 2;
                }
                if ((valorPosicao == tabuleiroJogador[i + 1][j]) && (valorPosicao == tabuleiroJogador[i + 2][j])) {
                    fator = 3;
                }
                pontuacaoJogador[i][j] = valorPosicao * fator;
            }
            else if (i == 1) {
                if (valorPosicao == tabuleiroJogador[i - 1][j] || valorPosicao == tabuleiroJogador[i + 1][j]) {
                    fator = 2;
                }
                if ((valorPosicao == tabuleiroJogador[i - 1][j]) && (valorPosicao == tabuleiroJogador[i + 1][j])) {
                    fator = 3;
                }
                pontuacaoJogador[i][j] = valorPosicao * fator;
            }
            else if (i == 2) {
                if (valorPosicao == tabuleiroJogador[i - 1][j] || valorPosicao == tabuleiroJogador[i - 2][j]) {
                    fator = 2;
                }
                if ((valorPosicao == tabuleiroJogador[i - 1][j]) && (valorPosicao == tabuleiroJogador[i - 2][j])) {
                    fator = 3;
                }
                pontuacaoJogador[i][j] = valorPosicao * fator;
            }
            else {
                pontuacaoJogador[i][j] = valorPosicao * fator;
            }
        }
        sj0.innerHTML = pontuacaoJogador[0][0] + pontuacaoJogador[1][0] + pontuacaoJogador[2][0];
        sj1.innerHTML = pontuacaoJogador[0][1] + pontuacaoJogador[1][1] + pontuacaoJogador[2][1];
        sj2.innerHTML = pontuacaoJogador[0][2] + pontuacaoJogador[1][2] + pontuacaoJogador[2][2];
    }
    //soma final de todos os para ser usada dentro de "verificaFimDoJogo()"
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

//Escreve Tabuleiro (vizualização).
export function escreveTabuleiro() {
    if (tabuleiroBot[0][0] != 0) { b0.innerHTML = tabuleiroBot[0][0]; } else { b0.innerHTML = ""; }
    if (tabuleiroBot[0][1] != 0) { b1.innerHTML = tabuleiroBot[0][1]; } else { b1.innerHTML = ""; }
    if (tabuleiroBot[0][2] != 0) { b2.innerHTML = tabuleiroBot[0][2]; } else { b2.innerHTML = ""; }
    if (tabuleiroBot[1][0] != 0) { b3.innerHTML = tabuleiroBot[1][0]; } else { b3.innerHTML = ""; }
    if (tabuleiroBot[1][1] != 0) { b4.innerHTML = tabuleiroBot[1][1]; } else { b4.innerHTML = ""; }
    if (tabuleiroBot[1][2] != 0) { b5.innerHTML = tabuleiroBot[1][2]; } else { b5.innerHTML = ""; }
    if (tabuleiroBot[2][0] != 0) { b6.innerHTML = tabuleiroBot[2][0]; } else { b6.innerHTML = ""; }
    if (tabuleiroBot[2][1] != 0) { b7.innerHTML = tabuleiroBot[2][1]; } else { b7.innerHTML = ""; }
    if (tabuleiroBot[2][2] != 0) { b8.innerHTML = tabuleiroBot[2][2]; } else { b8.innerHTML = ""; }

    if (tabuleiroJogador[0][0] != 0) { j0.innerHTML = tabuleiroJogador[0][0]; } else { j0.innerHTML = "" }
    if (tabuleiroJogador[0][1] != 0) { j1.innerHTML = tabuleiroJogador[0][1]; } else { j1.innerHTML = "" }
    if (tabuleiroJogador[0][2] != 0) { j2.innerHTML = tabuleiroJogador[0][2]; } else { j2.innerHTML = "" }
    if (tabuleiroJogador[1][0] != 0) { j3.innerHTML = tabuleiroJogador[1][0]; } else { j3.innerHTML = "" }
    if (tabuleiroJogador[1][1] != 0) { j4.innerHTML = tabuleiroJogador[1][1]; } else { j4.innerHTML = "" }
    if (tabuleiroJogador[1][2] != 0) { j5.innerHTML = tabuleiroJogador[1][2]; } else { j5.innerHTML = "" }
    if (tabuleiroJogador[2][0] != 0) { j6.innerHTML = tabuleiroJogador[2][0]; } else { j6.innerHTML = "" }
    if (tabuleiroJogador[2][1] != 0) { j7.innerHTML = tabuleiroJogador[2][1]; } else { j7.innerHTML = "" }
    if (tabuleiroJogador[2][2] != 0) { j8.innerHTML = tabuleiroJogador[2][2]; } else { j8.innerHTML = "" }
}
//Limpa Tabuleiro e valores das matrizes.
export function zeraMatriz() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            tabuleiroBot[i][j] = 0;
            tabuleiroJogador[i][j] = 0;
            pontuacaoBot[i][i] = 0;
            pontuacaoJogador[i][i] = 0;
        }
    }
    escreveTabuleiro();
}