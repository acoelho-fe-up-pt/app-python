from p5 import *
import random

# definicoes
LARGURA = 800
ALTURA = 400
LINHAS = 10
COLUNAS = 10
FORNADA = ((1,4), (2, 3), (3,2), (4, 1)) # 1 de 4, 2 de 3, ...
MAX_TENTATIVAS = 50

# variáveis globais
agora_joga = 0

# tabuleiro, lista de tiros e queques não comidos - do jogador humano
tab_humano = None
lista_humano_tiros = []
quequesH_nao_comidos = 0

# tabuleiro, lista de tiros e queques não comidos - do computador
tab_computador = None
lista_computador_tiros = []
quequesC_nao_comidos = 0

# construtor - cria tabuleiro com dimensao lin x col
def cria_tabuleiro(lin, col, fornada):
    # cria um tabuleiro inicial como uma lista de linhas de 0s (vazio)
    tab = []
    for i in range(lin):
        tab.append((0,)*col) # coloca linha de 0s 

    # para cada tipo de navio
    for n, comp in fornada:
        # para cada tipo de queques
        for i in range(n): # lado esquerdo do par e' a quantidade
            # coloca os queques no tabuleiro
            for i in range(MAX_TENTATIVAS):
                # determina coordenadas aleatorias
                l = random.randint(0, lin-1)
                c = random.randint(0, col-comp-1)

                linha = tab[l]
                # verifica se há espaço livre na linha
                if linha[c:c+comp].count(0) == comp:
                    tab[l] = linha[:c] + (comp, )*comp + linha[c+comp:]
                    break
            else:
                # nao e' possivel criar o prato no tabuleiro
                return False

    return tuple(tab)

# determina o número de queques do FORNADA
def soma_queques(fornada):
    soma = 0
    for n, q in fornada:
        soma += n*q
    return soma

# desloca um ponto
def move_ponto(ponto, x, y):
    return (ponto[0]+x, ponto[1]+y)

# desenha interface do jogador
def desenhaUI():
    global tab_humano, lista_humano_tiros

    quadricula = min( (LARGURA-40) // COLUNAS // 2, (ALTURA -50) // LINHAS )
    ox1 = (LARGURA - 2 * COLUNAS * quadricula) // 2 -20
    ox2 = LARGURA // 2 + 20
    oy = (ALTURA - LINHAS * quadricula) // 2

    # desenha os dois tabuleiros
    fill("white")
    rect((ox1, oy), quadricula * COLUNAS, quadricula* LINHAS)
    rect((ox2, oy), quadricula * COLUNAS, quadricula* LINHAS)
    for i in range(1,LINHAS):
        line((ox1+i*quadricula, oy), \
            (ox1+i*quadricula, oy + LINHAS * quadricula))
        line((ox2+i*quadricula, oy), \
            (ox2+i*quadricula, oy + LINHAS * quadricula))
    for i in range(1,COLUNAS):
        line((ox1, oy + i * quadricula), \
            (ox1 + COLUNAS * quadricula, oy + i * quadricula))
        line((ox2, oy + i * quadricula), \
            (ox2 + COLUNAS * quadricula, oy + i * quadricula))

    # desenha os queques do jogador
    ponto = (ox1 + quadricula//2, oy + quadricula//2)
    for lin in tab_humano:
        for queque in lin:
            if queque > 0:
                fill("yellow")
                circle(ponto, quadricula//2)
            ponto = move_ponto(ponto, quadricula, 0)
        ponto = move_ponto(ponto, -COLUNAS*quadricula, quadricula)

    # desenha os tiros do jogador
    for lin, col, tiro in lista_humano_tiros:
        if tiro > 0:
            ponto = (ox2 + quadricula//2 + col*quadricula, \
                     oy + quadricula//2 + lin*quadricula)
            fill("red")
            circle(ponto, quadricula//2)
        else:
            ponto = (ox2 + col*quadricula, oy + lin*quadricula)
            stroke("red")
            line(ponto, move_ponto(ponto,quadricula, quadricula))
            line(move_ponto(ponto, 0, quadricula), \
                move_ponto(ponto,quadricula, 0))
            stroke("black")

    # desenha os tiros do computador
    for lin, col, tiro in lista_computador_tiros:
        ponto = (ox1 + lin*quadricula, oy + col*quadricula)
        stroke("red")
        line(ponto, move_ponto(ponto,quadricula, quadricula))
        line(move_ponto(ponto, 0, quadricula), move_ponto(ponto,quadricula, 0))
        stroke("black")

# determina a quadrícula, com base nas coordenadas do rato
def get_rato(x, y):
    quadricula = min( (LARGURA-40) // COLUNAS // 2, (ALTURA -50) // LINHAS )
    ox2 = LARGURA // 2 + 20
    oy = (ALTURA - LINHAS * quadricula) // 2

    c = (x-ox2) // quadricula
    l = (y-oy) // quadricula

    if l>=0 and l<LINHAS and c>=0 and c<COLUNAS:
        return (l, c)
    else:
        return False

# inicialização do jogo
def setup():
    global tab_computador, tab_humano, quequesC_nao_comidos, quequesH_nao_comidos, agora_joga

    # dimensão da janela
    size(LARGURA, ALTURA)
    title("Jogo dos queques")

    # cria os tabuleiros com os queques
    tab_humano = cria_tabuleiro(LINHAS, COLUNAS, FORNADA)
    tab_computador = cria_tabuleiro(LINHAS, COLUNAS, FORNADA)
    if not tab_computador or not tab_humano:
        print("Não foi possível criar o tabuleiro")
        exit()
    else:
        quequesH_nao_comidos = quequesC_nao_comidos = soma_queques(FORNADA)

    # determina quem joga primeiro (computador - 0 / humano - 1)
    agora_joga = random.randint(0,1)

# ciclo de jogo
def draw():
    global tab_computador, tab_humano, quequesC_nao_comidos, quequesH_nao_comidos, agora_joga, lista_humano_tiros, lista_computador_tiros

    # desenha o interface do jogador
    desenhaUI()

    # # jogada do computador
    if agora_joga == 0:
        # tiro aleatório
        l = random.randint(0, LINHAS-1)
        c = random.randint(0, COLUNAS-1)
        
        tiro = tab_humano[l][c]
        lista_computador_tiros.append((l, c, tiro))
        #print('Jogada do computador: '+ str(l) + " : " + str(c))

        # se falhou muda de jogador 
        if tiro == 0: 
            agora_joga = 1 
        else:
            quequesH_nao_comidos -= 1

    # verifica se alguem ganhou
    if quequesC_nao_comidos == 0:
        print("Parabens! É o vencedor.")
        exit()
    elif quequesH_nao_comidos == 0:
        print("Perdeu... O computador venceu.")
        exit()

# evento do rato - jogada do jogador humano
def mouse_pressed():
    global tab_computador, lista_humano_tiros, agora_joga, quequesC_nao_comidos

    if agora_joga == 1:
        tiro = get_rato(mouse_x, mouse_y)

        if tiro:
            l = tiro[0]
            c = tiro[1]
            alvo = tab_computador[l][c]
            lista_humano_tiros.append((l,c,alvo))

            # se falhou muda de jogador
            if alvo == 0: 
                agora_joga = 0
            else:
                quequesC_nao_comidos -= 1

if __name__ == '__main__':
    run()