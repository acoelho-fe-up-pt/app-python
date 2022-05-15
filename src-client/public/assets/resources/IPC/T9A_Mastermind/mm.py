from p5 import *
import random

# definições
CORES = ("red", "green", "blue", "cyan", "yellow", "magenta")
DIM_CHAVE = 4
DIAMETRO = 50
MAX_JOGADAS = 10

# variáveis globais
chave = None
jogada = [0]
tabuleiro = []
tentativas = MAX_JOGADAS
terminou = False
jogou = False

def pinos(chave, jogada):
    # cor certa mas na posicao errada
    pinosB = 0
    for i in range(len(CORES)):
        pinosB += min(chave.count(i), jogada.count(i))

    # Cor certa no sitio certo
    pinosP = 0
        # 2.1. verifica se jogo terminou
    for i in range(4):
        if chave[i] == jogada[i]:
            pinosP += 1
    
    return (pinosP, pinosB-pinosP)

# retorna ponto deslocado
def move_ponto(ponto, dx, dy):
    x = ponto[0]
    y = ponto[1]
    return (x+dx, y+dy)

# inicialização p5
def setup():
    global chave

    # chave
    chave = (random.randint(0,len(CORES)-1), )
    for i in range(DIM_CHAVE-1):
        chave = chave + (random.randint(0,len(CORES)-1), )
    #print(chave) # para testar

    # janela
    size(DIAMETRO*(DIM_CHAVE+2), DIAMETRO*(MAX_JOGADAS+1))
    title("Mastermind")

    # texto
    f = create_font("Arial.ttf", 42)
    text_font(f)
    text_align("LEFT", "CENTER")

# ciclo de jogo
def draw():
    global tabuleiro, chave, jogada, tentativas, terminou, jogou

    # 2.2. logica de jogo
    # 2.2.1. verifica se jogo terminou
    if len(tabuleiro)>0: 
        ult_jogada = tabuleiro[-1]
        if ult_jogada[0:DIM_CHAVE] == chave or tentativas == 0:
            terminou = True

    # 2.2.2 verifica se a jogada já foi concluída pelo jogador
    if jogou:
        # acrescenta jogada ao tabuleiro com a respetiva pontuação
        tabuleiro.append(tuple(jogada) + pinos(chave, jogada))
        tentativas -= 1
        jogada = [0]
        jogou = False

    # 2.3. Output
    # 2.3.1. Limpa o ecrã de jogo
    background(200)

    # 2.3.2. desenha chave escondida
    fill(200)
    rect((0,0), DIAMETRO*(DIM_CHAVE), DIAMETRO)
    ponto = (DIAMETRO//2, DIAMETRO//2)
    # mostra chave no final do jogo
    for i in range (DIM_CHAVE):
        if terminou:
            # mostra chave no final do jogo
            fill(CORES[chave[i]])
        circle(move_ponto(ponto, i*DIAMETRO, 0), DIAMETRO//2)


    # 2.3.3. legenda para os pinos
    fill(0)
    circle(((DIM_CHAVE+0.5)*DIAMETRO, DIAMETRO//2), DIAMETRO//3)
    fill(255)
    circle(((DIM_CHAVE+1.5)*DIAMETRO, DIAMETRO//2), DIAMETRO//3)

    # 2.3.4. desenha jogadas anteriores
    for linha in tabuleiro:
        ponto = (DIAMETRO//2, ponto[1]+DIAMETRO)
        for i in range(DIM_CHAVE):
            fill(CORES[linha[i]])
            circle(ponto, DIAMETRO//2)
            ponto = move_ponto(ponto, DIAMETRO, 0)
        
        # pinos P&B
        fill(0)
        text(str(linha[-2])+" "+str(linha[-1]), ponto)

    # 2.3.5. desenha jogada atual
    if not terminou:
        ponto = (DIAMETRO//2, ponto[1]+DIAMETRO)
        for pino in jogada:
            fill(CORES[pino])
            circle(ponto, DIAMETRO//2)
            ponto = move_ponto(ponto, DIAMETRO, 0)

# controla a interação com o utilizador através do teclado
def key_pressed():
    global jogada, terminou, jogou

    # se jogo terminou não permite jogar
    if terminou or jogou:
        return
    
    # verifica teclas premidas
    if key == "UP":
        jogada[-1] = (jogada[-1] + 1) % len(CORES)
    elif key == "DOWN":
        jogada[-1] = (jogada[-1] - 1) % len(CORES)
    elif key == "LEFT":
        if len(jogada)>1:
            jogada.pop()
    elif key == "RIGHT":
        if len(jogada) < DIM_CHAVE:
            # acrescenta pino
            jogada.append(0)
        else:
            # ou termina jogada
            jogou = True


if __name__ == '__main__':
    run()
