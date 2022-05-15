/* eslint-disable */
// definições
CORES = ["red", "green", "blue", "cyan", "yellow", "magenta"];
DIM_CHAVE = 4;
DIAMETRO = 50;
MAX_JOGADAS = 10;

// variáveis globais
var chave = [0, 0, 0, 0];
var jogada = [0, 0, 0, 0];
var njogada = 0;
var tabuleiro = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];
var tentativas = 0;
var terminou = false;
var jogou = false;

function conta(lista, valor){
    contador = 0;

    for (var i=0; i<lista.length; i++)
        if (lista[i]== valor)
            contador++;

    return contador;
}

function pinos(chave, jogada){
    // cor certa mas na posicao errada
    var pinosB = 0; 
    for (var i=0; i < CORES.length; i++){
        var c = conta(chave, i);
        var j = conta(jogada, i);
        if (c > j)
            pinosB += j;
        else
            pinosB += c;
    }

    // Cor certa no sitio certo
    pinosP = 0
    // 2.1. verifica se jogo terminou
    for (var i=0; i<4; ++i)
        if (chave[i] == jogada[i])
            pinosP += 1;
    
    return [pinosP, pinosB-pinosP];
}

// retorna ponto deslocado
function move_ponto(ponto, dx, dy){
    x = ponto[0];
    y = ponto[1];
    return [x+dx, y+dy];
}

// inicialização p5
function setup(){
    // chave
    for (var i=0; i<DIM_CHAVE; ++i){
        chave[i] = (int)(Math.random()*CORES.length);
    }
    // janela
    createCanvas(DIAMETRO*(DIM_CHAVE+2), DIAMETRO*(MAX_JOGADAS+1));
}

// ciclo de jogo
function draw(){
    // 2.2. logica de jogo
    // 2.2.1. verifica se jogo terminou
    if (tentativas > 0){
        var ult_jogada = tabuleiro[tentativas];
        if (ult_jogada == chave || tentativas == MAX_JOGADAS)
            terminou = true;
    }
    if (terminou)
        return;

    // 2.2.2 verifica se a jogada já foi concluída pelo jogador
    if (jogou){
        // acrescenta jogada ao tabuleiro com a respetiva pontuação
        for (i=0; i<DIM_CHAVE; ++i)
            tabuleiro[tentativas][i]=jogada[i];

        // pinos
        os_pinos = pinos(chave, jogada);
        tabuleiro[tentativas][DIM_CHAVE] = os_pinos[0];
        tabuleiro[tentativas][DIM_CHAVE+1] = os_pinos[1];

        tentativas++;
        njogada = 0;
        jogada[0] = 0;
        jogou = false;

        if (os_pinos[0] == DIM_CHAVE)
            terminou = true;
    }

    // 2.3. Output
    // 2.3.1. Limpa o ecrã de jogo
    background(200);

    // 2.3.2. desenha chave escondida
    fill(200);
    rect(0,0, DIAMETRO*(DIM_CHAVE), DIAMETRO);
    ponto = [DIAMETRO/2, DIAMETRO/2];
    // mostra chave no final do jogo
    for (i=0; i<DIM_CHAVE; ++i){
        if (terminou){
            // mostra chave no final do jogo
            fill(CORES[chave[i]]);
        }
        circle(ponto[0]+ i*DIAMETRO, ponto[1], DIAMETRO/2);
    }


    // 2.3.3. legenda para os pinos
    fill(0);
    circle((DIM_CHAVE+0.5)*DIAMETRO, DIAMETRO/2, DIAMETRO/3);
    fill(255);
    circle((DIM_CHAVE+1.5)*DIAMETRO, DIAMETRO/2, DIAMETRO/3);

    // 2.3.4. desenha jogadas anteriores
    for (var l=0; l<tentativas; l++){
        ponto = [DIAMETRO/2, ponto[1]+DIAMETRO];
        for (var i=0; i<DIM_CHAVE; ++i){
            fill(CORES[tabuleiro[l][i]]);
            circle(ponto[0],ponto[1], DIAMETRO/2);
            ponto = move_ponto(ponto, DIAMETRO, 0);
        }
        
        // pinos P&B
        fill(0);
        textSize(32);
        text(tabuleiro[l][DIM_CHAVE].toString()+" "+tabuleiro[l][DIM_CHAVE+1].toString(), ponto[0], ponto[1]);
    }

    // 2.3.5. desenha jogada atual
    if (!terminou){
        ponto = [DIAMETRO/2, ponto[1]+DIAMETRO];
        for (var pino=0; pino<=njogada; ++pino){
            fill(CORES[jogada[pino]]);
            circle(ponto[0], ponto[1], DIAMETRO/2);
            ponto = move_ponto(ponto, DIAMETRO, 0);
        }
    }
}

// controla a interação com o utilizador através do teclado
function keyPressed(){
    // se jogo terminou não permite jogar
    if (terminou || jogou)
        return false;
    
    // verifica teclas premidas
    if (keyCode == UP_ARROW){
        jogada[njogada] = (jogada[njogada] + 1) % CORES.length;
    }else if (keyCode == DOWN_ARROW){
        jogada[njogada] = (jogada[njogada] - 1);
        if (jogada[njogada]<0)
            jogada[njogada] += CORES.length;
    }else if (keyCode == LEFT_ARROW){
        if (njogada>0)
            njogada--;
    }else if (keyCode == RIGHT_ARROW){
        if (njogada < DIM_CHAVE-1){
            // acrescenta pino
            njogada++;
            jogada[njogada]=0;
        }else{
            // ou termina jogada
            jogou = true;
        }
    }

    return false;
}
