/* eslint-disable */
// constantes globais
const LARGURA = 600;
const ALTURA = 400;
const DISCOS = [120, 100, 80, 60, 40];
const ESPESSURA_DISCO = 20;
const ALT_PINO = 150;

// variáveis globais
var torres = [];
var jogada = 0;

/////////////////////
// ABSTRAÇÃO PILHA //
/////////////////////
// construtor
function cria_pilha(){
    return [];
}

// seletores
function pilha_vazia(pilha){
    if (pilha.length == 0){
        return true;
    }else{
        return false;
    }
}

function topo_da_pilha(pilha){
    if (!pilha_vazia(pilha)){
        return pilha[pilha.length-1];
    }else{
        return false;
    }
}

// modificadores
function poe_na_pilha(pilha, elem){
    pilha.push(elem);
}

function tira_da_pilha(pilha){
    if (!pilha_vazia(pilha)){
        return pilha.pop();
    }else{
        return false;
    }
}

////////////////////////////////////

// inicialização do jogo
function setup(){
    // cria janela
    createCanvas(LARGURA, ALTURA);

    // cria as 3 torres e preenche primeira torre
    torres = [cria_pilha(), cria_pilha(), cria_pilha()]
    for (disco of DISCOS)
        poe_na_pilha(torres[0], disco);
}

// ciclo de jogo
function draw(){
    // posiciona as torres
    ox = [0,0,0];
    ox[0] = LARGURA/4;
    ox[1] = LARGURA/2;
    ox[2] = 3 * LARGURA/4;
    oy_base = ALTURA/2 + ALT_PINO/2;

    // desenha as torres e respetivos discos
    background("gray");
    rectMode(CENTER);
    for (i=0; i<torres.length; i++){
        if (jogada == i+1){
            fill("green");
        }else{
            fill("white");
        }
        rect(ox[i], Math.floor(oy_base-ALT_PINO/2), ESPESSURA_DISCO, -ALT_PINO);
        alt = oy_base;
        for (disco of torres[i]){
            fill(0, 0, disco*2)
            rect(ox[i], alt, disco, ESPESSURA_DISCO)
            alt -= ESPESSURA_DISCO
        }
    }

    // verifica se ganhou
    if (torres[1] == DISCOS || torres[2] == DISCOS){
        fill("gold");
        if (torres[2] == DISCOS){
            circle(ox[2], oy_base, ESPESSURA_DISCO*2);
        }else{
            circle(ox[1], oy_base, ESPESSURA_DISCO*2);
        }

        noLoop(); // termina jogo
    }
}

// controla a interação com o utilizador através do teclado
function keyPressed(){
    // converte tecla em inteiro (1 a 3)
    tecla = keyCode-48;

    // verifica teclas premidas
    if (jogada == 0){
        // seleciona torre
        if (tecla >= 1 && tecla <=3){
            jogada = tecla;
        }
    }else{
        // move disco do topo
        if (tecla >= 1 && tecla <=3){
            // so pode colocar sobre discos maiores
            if (!pilha_vazia(torres[jogada-1]) && (topo_da_pilha(torres[tecla-1]) > topo_da_pilha(torres[jogada-1]) || pilha_vazia(torres[tecla-1])))
                poe_na_pilha(torres[tecla-1], tira_da_pilha(torres[jogada-1]));
            jogada = 0;
        }
    }
}