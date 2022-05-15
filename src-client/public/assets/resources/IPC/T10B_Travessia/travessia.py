from p5 import *
import random

# definições globais
LARGURA = 600
ALTURA = 400
NIVEL = [0, -1, -1, 1, 1, 0, -1, -1, 1, 0, -1, 1, 0] # 0-passeio; 1-direita, -1-esquerda
DELTA = ALTURA // len (NIVEL) # dimensões da quadrícula
COMP = LARGURA // DELTA # numero de quadrículas das estradas 

# variáveis globais
jogador = []
filas = []
timer = 0

##################
# ABSTRAÇÃO FILA #
##################
# construtor
def cria_fila():
    return []

# seletores
def fila_vazia(fila):
    if len (fila) == 0:
        return True
    else:
        return False

def frente_da_fila(fila):
    if not fila_vazia(fila):
        return fila[0]
    else:
        return False

def cauda_da_fila(fila):
    if not fila_vazia(fila):
        return fila[-1]
    else:
        return False

# modificadores
def entra_na_fila(fila, elem):
    fila.append(elem)

def sai_da_fila(fila):
    if not fila_vazia(fila):
        return fila.pop(0)
    else:
        return False
##################

# desloca jogador
def desloca(p, dx, dy):
    p[0]+= dx
    p[1]+= dy

# calcula as coordenadas do ecrã
def ponto(q):
    return (q[0]*DELTA + DELTA//2, q[1]*DELTA + DELTA//2)

# verifica se um automóvel está fora
def fora (carro):
    return carro[0] < 0 or carro[0] > COMP

# atualiza filas de veículos
def trafego():
    global jogador, filas, timer

    # timer
    if second()==timer:
        return True
    else:
        timer = second()

    # gere filas
    for i in range(len(NIVEL)-1):
        if NIVEL[i] != 0:
            # move fila de automóveis
            for carro in filas[i]:
                desloca(carro, NIVEL[i], 0)
                if carro == jogador:
                    # se carro atropela jogador retorna falso
                    return False

            # insere novos carros até um máximo de 10
            if len(filas[i]) < 10:
                ultimo = cauda_da_fila(filas[i])
                if ultimo:
                    novo = ultimo[::]
                    desloca(novo, random.randint(-5, -2)*NIVEL[i], 0)
                elif NIVEL[i] > 0:
                    novo = [random.randint(-2,0), i]
                else:
                    novo = [COMP + random.randint(0, 2), i]
                entra_na_fila(filas[i], novo)

            # remove carros que saiam do ecrã
            if fora(frente_da_fila(filas[i])):
                sai_da_fila(filas[i])
                
    return True
                 

# inicialização do jogo
def setup():
    global jogador, filas, timer

    # janela
    title("Travessia da Estrada")
    size(LARGURA, ALTURA)
    no_stroke()

    # jogador
    jogador = [COMP // 2, len(NIVEL)-1]

    # filas de automóveis
    for i in range(len(NIVEL)-1):
        filas.append(cria_fila())
    
    # insere tráfego nas filas
    for i in range(10):
        timer = -1
        trafego()


# ciclo de jogo
def draw():
    global jogador

    # verifica se terminou o nível
    if jogador[1] == 0:
        background("green")
        circle(ponto(jogador), DELTA)
        no_loop()
        return

    # desenha nível - fundo verde com estradas a preto
    background("green")
    fill ("black")
    oy = 0
    for faixa in NIVEL:
        if faixa != 0:
            # rectangulo da faixa
            rect((0,oy), LARGURA, DELTA)
        oy += DELTA

    # jogador
    fill("yellow")
    circle(ponto(jogador), DELTA)

    # atualiza filas de tráfego
    if trafego():
        # desenha veículos
        fill("blue")
        for fila in filas:
            for carro in fila:
                rect(ponto(carro), DELTA, DELTA//2)
    else:
        # jogador atropelado - reinicia
        jogador = [COMP // 2, len(NIVEL)-1]

    
# controla a interação com o utilizador através do teclado
def key_pressed():
    global jogador

    # verifica teclas premidas
    if key == "UP":
        desloca(jogador, 0, -1)
    elif key == "DOWN":
        if jogador[1] < len(NIVEL)-1:
            desloca(jogador, 0, 1)
    elif key == "LEFT":
        if jogador[0] > 0:
            desloca(jogador, -1, 0)
    elif key == "RIGHT":
        if jogador[0] < COMP-1:
            desloca(jogador, 1, 0)

if __name__ == '__main__':
   run()