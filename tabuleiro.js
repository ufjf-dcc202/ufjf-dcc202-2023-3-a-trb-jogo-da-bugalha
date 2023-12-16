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