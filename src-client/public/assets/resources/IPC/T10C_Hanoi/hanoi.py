from p5 import *

# definicoes globais
LARGURA = 600
ALTURA = 400
DISCOS = [120, 100, 80, 60, 40]
ESPESSURA_DISCO = 20
ALT_PINO = 150

# variáveis globais
torres = []
jogada = 0

###################
# ABSTRAÇÃO PILHA #
###################
# construtor
def cria_pilha():
    return []

# seletores
def pilha_vazia(pilha):
    if len (pilha) == 0:
        return True
    else:
        return False

def topo_da_pilha(pilha):
    if not pilha_vazia(pilha):
        return pilha[-1]
    else:
        return False

# modificadores
def poe_na_pilha(pilha, elem):
    pilha.append(elem)

def tira_da_pilha(pilha):
    if not pilha_vazia(pilha):
        return pilha.pop()
    else:
        return False
###################

# inicialização do jogo
def setup():
    global torres

    # dimensão da janela
    title("Torres de Hanoi")
    size(LARGURA, ALTURA)

    # cria as 3 torres e preenche primeira torre
    torres = [cria_pilha(), cria_pilha(), cria_pilha()]
    for disco in DISCOS:
        poe_na_pilha(torres[0], disco)

# ciclo de jogo
def draw():
    global torres, jogada

    # posiciona as torres
    ox = [0,0,0]
    ox[0] = LARGURA//4
    ox[1] = LARGURA//2
    ox[2] = 3 * LARGURA//4
    oy_base = ALTURA//2 + ALT_PINO//2

    # desenha as torres e respetivos discos
    background("gray")
    rect_mode("CENTER")
    for i in range(len(torres)):
        if jogada == i+1:
            fill("green")
        else:
            fill("white")
        rect((ox[i], oy_base-ALT_PINO//2), ESPESSURA_DISCO, -ALT_PINO)
        alt = oy_base
        for disco in torres[i]:
            fill(0, 0, disco*2)
            rect((ox[i], alt), disco, ESPESSURA_DISCO)
            alt -= ESPESSURA_DISCO

    # verifica se ganhou
    if torres[1] == DISCOS or torres[2] == DISCOS:
        fill("gold")
        if torres[2] == DISCOS:
            circle((ox[2], oy_base), ESPESSURA_DISCO*2)
        else:
            circle((ox[1], oy_base), ESPESSURA_DISCO*2)

        no_loop() # termina jogo

# controla a interação com o utilizador através do teclado
def key_pressed():
    global jogada, torres

    # converte tecla em inteiro (1 a 3)
    tecla = ord(str(key)) - ord("0")

    # verifica teclas premidas
    if jogada == 0:
        # seleciona torre
        if tecla >= 1 and tecla <=3:
            jogada = tecla
    else:
        # move disco do topo
        if tecla >= 1 and tecla <=3:
            # so pode colocar sobre discos maiores
            if not pilha_vazia(torres[jogada-1]) \
                and (topo_da_pilha(torres[tecla-1]) > topo_da_pilha(torres[jogada-1]) \
                    or pilha_vazia(torres[tecla-1])):
                poe_na_pilha(torres[tecla-1], tira_da_pilha(torres[jogada-1]))
            jogada = 0

if __name__ == '__main__':
    run()
