/* eslint-disable */
// functioninicoes
const LARGURA = 600;
const ALTURA = 400;
const NIVEL = [0, -1, -1, 1, 1, 0, -1, -1, 1, 0, -1, 1, 0]; // 0-passeio; 1-direita, -1-esquerda
const DELTA = Math.floor(ALTURA / NIVEL.length); // dimensões da quadrícula
const COMP = Math.floor(LARGURA / DELTA); // numero de quadrículas das estradas 

// variáveis globais
var jogador = [];
var filas = [];
var timer = null;

////////////////////
// ABSTRAÇÃO FILA //
////////////////////
// construtor
function cria_fila(){
    return [];
}

// seletores
function fila_vazia(fila){
    if (fila.length == 0){
        return true;
    }else{
        return false;
    }
}
function frente_da_fila(fila){
    if (!fila_vazia(fila)){
        return fila[0];
    }else{
        return false;
    }
}

function cauda_da_fila(fila){
    if (!fila_vazia(fila)){
        return fila[fila.length - 1];
    }else{
        return false;
    }
}

// modificadores
function entra_na_fila(fila, elem){
    fila.push(elem);
}

function sai_da_fila(fila){
    if (!fila_vazia(fila)){
        return fila.pop(0);
    }else{
        return false;
    }
}
////////////////////////////////////

// desloca jogador
function desloca(p, dx, dy){
    p[0]+= dx;
    p[1]+= dy;
}

// calcula as coordenadas do ecrã
function ponto(q){
    return [q[0]*DELTA + Math.floor(DELTA/2), q[1]*DELTA + Math.floor(DELTA/2)];
}

// verifica se um automóvel está fora
function fora (carro, direcao){
    return carro[0] < 0  && direcao <0 || carro[0] > COMP && direcao > 0;
}

// atualiza filas de veículos
function trafego(){
    for (i=0; i<NIVEL.length; i++){
        if (NIVEL[i] != 0){
            // move fila de automóveis
            for (carro of filas[i]){
                desloca(carro, NIVEL[i], 0);
                if (carro[0] == jogador[0] && carro[1] == jogador[1]){
                    // se carro atropela jogador...
                    jogador = [Math.floor(COMP/2), NIVEL.length-1];
                    document.getElementById("mensagem").innerHTML = "Atropelado... Tente outra vez.";
                    return false;
                }
            }

            // insere novos carros até um máximo de 10
            //if (filas[i].length < 10){
                console.log(filas[i].length);
                ultimo = cauda_da_fila(filas[i]);
                if (ultimo){
                    novo = [...ultimo];
                    desloca(novo, (Math.floor(Math.random()*4)-5)*NIVEL[i], 0);
                }else if (NIVEL[i] > 0){
                    novo = [(Math.floor(Math.random()*3)-2), i]
                }else{
                    novo = [COMP + Math.floor(Math.random()*3), i];
                }
                entra_na_fila(filas[i], novo);
            //}

            // remove carros que saiam do ecrã
            if (fora(frente_da_fila(filas[i], NIVEL[i]))){
                sai_da_fila(filas[i]);
            }
        }
    }
                
    return true;
}      


// inicialização do jogo
function setup(){
    // cria janela
    createCanvas(LARGURA, ALTURA);
    noStroke();

    // jogador
    jogador = [Math.floor(COMP/2), NIVEL.length-1];

    // filas de automóveis
    for (i=0; i< NIVEL.length-1; i++){
        filas.push(cria_fila())
    }

    // insere tráfego nas filas
    for (i=0; i<10; i++){
        trafego();
    }

    // inicia timer
    setInterval(trafego, 250);
}

// ciclo de jogo
function draw(){
    // verifica se terminou o nível
    if (jogador[1] == 0){
        background("green");
        circle(ponto(jogador)[0], ponto(jogador)[1], DELTA);
        document.getElementById("mensagem").innerHTML = "Parabéns! Game Over";
        noLoop();
        clearInterval();

        return;
    }

    // desenha nível - fundo verde com estradas a preto
    background("green");
    fill ("black");
    oy = 0;
    for (faixa of NIVEL){
        if (faixa != 0){
            // rectangulo da faixa
            rect(0, oy, LARGURA, DELTA);
        }
        oy += DELTA;
    }

    // jogador
    fill("yellow");
    circle(ponto(jogador)[0], ponto(jogador)[1], DELTA);

    // desenha veículos
    fill("blue");
    for (fila of filas){
        for (carro of fila){
            rect(ponto(carro)[0], ponto(carro)[1],  DELTA, Math.floor(DELTA/2));
        }
    }
}

// controla a interação com o utilizador através do teclado
function keyPressed(){
    // verifica teclas premidas
    if (keyCode == UP_ARROW){
        desloca(jogador, 0, -1);
    }else if (keyCode == DOWN_ARROW){
        if (jogador[1] < NIVEL.length-1){
            desloca(jogador, 0, 1);
        }
    }else if (keyCode == LEFT_ARROW){
        if (jogador[0] > 0){
            desloca(jogador, -1, 0);
        }
    }else if (keyCode == RIGHT_ARROW){
        if (jogador[0] < COMP-1){
            desloca(jogador, 1, 0);
        }
    }
}