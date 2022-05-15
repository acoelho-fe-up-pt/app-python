/* eslint-disable */
// definicoes
LARGURA = 800;
ALTURA = 400;
LINHAS = 10;
COLUNAS = 10;
FORNADA = [[1,4], [2, 3], [3,2], [4, 1]] // 1 de 4, 2 de 3, ...
MAX_TENTATIVAS = 50;

// variáveis globais
var agora_joga = 0;

// tabuleiro, lista de tiros e queques não comidos - do jogador humano
var tab_humano = null;
var lista_humano_tiros = [];
var quequesH_nao_comidos = 0;

// tabuleiro, lista de tiros e queques não comidos - do computador
var tab_computador = null;
var lista_computador_tiros = [];
var quequesC_nao_comidos = 0;

// construtor - cria tabuleiro com dimensao lin x col
function cria_tabuleiro(lin, col, fornada){
    // cria um tabuleiro inicial como uma lista de linhas de 0s (vazio)
    var tab = [];
    for (var i=0; i<lin; i++)
        tab.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); // coloca linha de 0s 

    // para cada tipo de navio
    for (queque of fornada){
        // para cada tipo de queques
        var n = queque[0];
        var comp = queque[1];

        for (var x=0; x<n; x++){ 
            // coloca os queques no tabuleiro
            var colocado = false;
            for (i=0; !colocado && i<MAX_TENTATIVAS; i++){
                // determina coordenadas aleatorias
                var l = (int)(Math.random()*lin);
                var c = (int)(Math.random()*(col-comp-1));

                var linha = tab[l];

                // verifica se há espaço livre na linha
                colocado = true;
                for (var j=0; j<comp; ++j){
                    if (linha[c+j]==0){
                        linha[c+j] = comp;   
                    }else{
                        colocado = false;
                        break;  
                    }
                }
            }
            if (!colocado)
                // nao e' possivel criar o prato no tabuleiro
                return false;
        }
    }
    return tab;
}

// determina o número de queques da FORNADA
function soma_queques(fornada){
    var soma = 0;
    for (queque of fornada){
        // para cada tipo de queques
        var n = queque[0];
        var q = queque[1];
        soma += n*q;
    }
    return soma;
}

// desloca um ponto
function move_ponto(ponto, x, y){
    return [ponto[0]+x, ponto[1]+y];
}

// desenha interface do jogador
function desenhaUI(){
    var quadricula = Math.min( (LARGURA-40) / COLUNAS / 2, (ALTURA -50) / LINHAS );
    var ox1 = (LARGURA - 2 * COLUNAS * quadricula) / 2 -20;
    var ox2 = LARGURA / 2 + 20;
    var oy = (ALTURA - LINHAS * quadricula) / 2;

    // desenha os dois tabuleiros
    fill("white");
    rect(ox1, oy, quadricula * COLUNAS, quadricula* LINHAS);
    rect(ox2, oy, quadricula * COLUNAS, quadricula* LINHAS);
    for (var i=1; i<=LINHAS; ++i){
        line(ox1+i*quadricula, oy, ox1+i*quadricula, oy + LINHAS * quadricula);
        line(ox2+i*quadricula, oy, ox2+i*quadricula, oy + LINHAS * quadricula);
    }
    for (var i=1; i<=COLUNAS; ++i){
        line(ox1, oy + i * quadricula, ox1 + COLUNAS * quadricula, oy + i * quadricula);
        line(ox2, oy + i * quadricula, ox2 + COLUNAS * quadricula, oy + i * quadricula);
    }
    // desenha os queques do jogador
    var ponto = [ox1 + quadricula/2, oy + quadricula/2];
    for (lin of tab_humano){
        for (queque of lin){
            if (queque > 0){
                fill("yellow");
                circle(ponto[0], ponto[1], quadricula/2);
            }
            ponto = move_ponto(ponto, quadricula, 0);
        }
        ponto = move_ponto(ponto, -COLUNAS*quadricula, quadricula);
    }
    // desenha os tiros do jogador
    for (htiros of lista_humano_tiros){
        var lin = htiros[0];
        var col = htiros[1];
        var tiro = htiros[2];
        if (tiro > 0){
            ponto = [ox2 + quadricula/2 + col*quadricula,
                     oy + quadricula/2 + lin*quadricula];
            fill("red");
            circle(ponto[0], ponto[1], quadricula/2);
        }else{
            ponto = [ox2 + col*quadricula, oy + lin*quadricula];
            var novo_ponto = move_ponto(ponto,quadricula, quadricula);
            stroke("red");
            novo_ponto = move_ponto(ponto,quadricula, quadricula);
            line(ponto[0], ponto[1], novo_ponto[0], novo_ponto[1]);
            novo_ponto = move_ponto(ponto, 0, quadricula);
            var novo_ponto2 = move_ponto(ponto,quadricula, 0);
            line(novo_ponto[0], novo_ponto[1],novo_ponto2[0], novo_ponto2[1]);
            stroke("black");
        }
    }

    // desenha os tiros do computador
    for (htiros of lista_computador_tiros){
        var lin = htiros[0];
        var col = htiros[1];
        var tiro = htiros[2];
        ponto = [ox1 + lin*quadricula, oy + col*quadricula];
        stroke("red");
        var novo_ponto = move_ponto(ponto,quadricula, quadricula);
        line(ponto[0], ponto[1], novo_ponto[0], novo_ponto[1]);
        novo_ponto = move_ponto(ponto,0, quadricula);
        var novo_ponto2 = move_ponto(ponto,quadricula, 0);
        line(novo_ponto[0], novo_ponto[1],novo_ponto2[0], novo_ponto2[1]);
        stroke("black");
    }
}

// determina a quadrícula, com base nas coordenadas do rato
function get_rato(x, y){
    var quadricula = Math.floor(Math.min( (LARGURA-40) / COLUNAS / 2, (ALTURA -50) / LINHAS ))
    var ox2 = LARGURA / 2 + 20;
    var oy = (ALTURA - LINHAS * quadricula) / 2;

    var c = Math.floor((x-ox2) / quadricula);
    var l = Math.floor((y-oy) / quadricula);

    if (l>=0 && l<LINHAS && c>=0 && c<COLUNAS)
        return [l, c];
    else
        return false;
}
// inicialização do jogo
function setup(){
    // cria janela
    createCanvas(LARGURA, ALTURA)
    
    // cria os tabuleiros com os queques
    tab_humano = cria_tabuleiro(LINHAS, COLUNAS, FORNADA)
    tab_computador = cria_tabuleiro(LINHAS, COLUNAS, FORNADA)
    if (!tab_computador || !tab_humano){
        window.alert("Não foi possível criar o tabuleiro");
        noLoop();
        return;
    }else
        quequesH_nao_comidos = soma_queques(FORNADA);
        quequesC_nao_comidos = quequesH_nao_comidos;

    // determina quem joga primeiro (computador - 0 / humano - 1)
    agora_joga = (int)(Math.random()+0.5);
}

function existe(lista, l, c){
    for (var queque of lista)
        if (queque[0] == l && queque[1] == c)
            return true;
    return false;
}

// ciclo de jogo
function draw(){
    // desenha o interface do jogador
    desenhaUI();

    // jogada do computador
    if (agora_joga == 0){
        // tiro aleatório
        var l = (int)(Math.random()*LINHAS);
        var c = (int)(Math.random()*COLUNAS);
        
        var tiro = tab_humano[l][c];
        // print('Jogada do computador: '+ str(l) + " : " + str(c))

        // se é tiro repetido, volta a jogar
        if (existe(lista_computador_tiros, l, c))
            return;

        // se falhou muda de jogador
        if (tiro == 0)
            agora_joga = 1;
        else
            quequesH_nao_comidos -= 1;

        lista_computador_tiros.push([l, c, tiro]);
    }
    // verifica se alguem ganhou
    if (quequesC_nao_comidos == 0){
        window.alert("Parabens! É o vencedor.");
        desenhaUI();
        noLoop();
        return;
    }else if (quequesH_nao_comidos == 0){
        window.alert("Perdeu... O computador venceu.");
        desenhaUI();
        noLoop();
        return;
    }
}

// evento do rato - jogada do jogador humano
function mousePressed(){
    if (agora_joga == 1){
        var tiro = get_rato(mouseX, mouseY);

        if (Array.isArray(tiro)){
            l = tiro[0];
            c = tiro[1];
            alvo = tab_computador[l][c];

            // se falhou muda de jogador
            if (alvo == 0){
                agora_joga = 0;
            }else{
                for (var queque of lista_humano_tiros){
                    if (queque[0] == l && queque[1] == c){
                        return;
                    }
                }
                quequesC_nao_comidos -= 1;
            }
            lista_humano_tiros.push([l,c,alvo]);
        }
    }
}