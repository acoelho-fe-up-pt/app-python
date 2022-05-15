# Jogo da sueca
import random
from p5 import *

# constantes
CARTAS = "A23456789XJQK"
NAIPES = "OPCE"
CARTA_LARGURA = 64
CARTA_ALTURA = 91

# variáveis globais
baralho_imagens = None
jogo = []
jogada = 0
a_jogar = True
trunfo = ""
cartas_equipa = []
cartas_oponente = []
cartas = []
estado = 0
teclado = -1
jogador = 0
jogador_inicial = 0
naipe_jogada = ""

##########################################
# Funções que desenham na janela gráfica #
##########################################
def desenha_mao(mao):
    # desenhar a mao do jogador
    x = 0
    y = 0
    for carta in mao:
        image(retorna_imagem(carta), (x,y))
        x += CARTA_LARGURA

def desenha_jogada(jogador, cartas):
#    print ("Jogador " + str(jogador+1) + " jogou : " + str(cartas[jogador]))
    if jogador == 0:
        posicao = (320,100)
    elif jogador == 1:
        posicao = (200, 200)
    elif jogador == 2:
        posicao = (320, 300)
    else:
        posicao = (440, 200)
    image(retorna_imagem(cartas[jogador]), posicao)

def desenha_jogada_inicio(jogada, trunfo):
    title("Jogada " + str(jogada) + " (trunfo: " + trunfo + ")")

def desenha_jogada_fim(vencedor, cartas, cartas_equipa, cartas_oponente):
    if vencedor % 2 == 0:
        cartas_equipa.extend(cartas)
        print("Jogada para a sua equipa!", pontuacao(cartas), "pontos")
    else:
        cartas_oponente.extend(cartas)
        print("Jogada para a equipa adversaria.", pontuacao(cartas), "pontos")

    # estatísticas
    print("Pontos da sua equipa:", pontuacao(cartas_equipa))
    print("Pontos dos adversários:", pontuacao(cartas_oponente))

def desenha_final(pontos):
    print("\n***************************************************************")
    if pontos > 60:
        print("Ganhou sua a equipa. " + str(pontos) + " pontos. Parabens!")
    elif pontos < 60:
        print("Ganhou a equipa adversaria. A sua equipa teve apenas " + str(pontos) + " pontos.")
    else: 
        print("Empataram com 60 pontos.")


##########################################
# Abstração carta (tuplo)

def cria_carta(figura, naipe):
    return (figura, naipe)

def figura(carta):
    return carta[0]

def naipe(carta):
    return carta[1]

def pontos(figura):
    if figura == "A":
        return 11
    elif figura == "Q":
        return 2
    elif figura == "J":
        return 3
    elif figura == "K":
        return 4
    elif figura == 7:
        return 10
    else:
        return 0

def da_figura(numero):
    if numero == 1:
        return "A"
    elif numero == 8:
        return "Q"
    elif numero == 9:
        return "J"
    elif numero == 10:
        return "K"
    else:\
        return numero

# Para conjuntos de cartas
def pontuacao(cartas):
    soma = 0
    for carta in cartas:
        soma += pontos(figura(carta))

    return soma

def carta_maior(mao, naipe_jogada):
    pontos_maximo = -1 # menor que minimo - zero valores para cartas de 2 a 6
    carta_maximo = "" 

    # percorre a mao do jogador
    for carta in mao:
        if naipe(carta) == naipe_jogada:
            if pontos(figura(carta)) > pontos_maximo:
                carta_maximo = figura(carta)
                pontos_maximo = pontos(carta_maximo)
    
    # nao tem cartas desse naipe
    if pontos_maximo >= 0:
        return carta_maximo
    else:
        return False

def cria_baralho():
    baralho = []
    for naipe in ["O", "C", "P", "E"]: # para cada um dos 4 naipes
        for c in range(1, 11): # para cada uma das 10 cartas
            baralho.append(cria_carta(da_figura(c), naipe))  # cria carta e acrescenta ao baralho
    return baralho
            
def baralha_cartas(baralho, vezes):
    for i in range(vezes):
        #troca cartas
        i = random.randint(0, len(baralho)-1)
        j = random.randint(0, len(baralho)-1)
        temp = baralho[i]
        baralho[i] = baralho[j]
        baralho[j] = temp

# cria imagens do baralho
def cria_baralho_imagens():
    baralho = {}
    for naipe in NAIPES:
        for carta in CARTAS:
            chave = carta+naipe
            imagem = load_image("baralho/" + carta + naipe + ".jpg")
            # WINDOWS "baralho\\"
            baralho[chave]=imagem
    return baralho

# (3, "O")  -> "3O"
# ("K", "E") -> "KE"
# (10, "P") -> "XP"
def retorna_imagem(carta):
    global baralho_imagens
    if carta[0] == 10:
        return baralho_imagens["X"+carta[1]]
    else:
        return baralho_imagens[str(carta[0])+carta[1]]
        
# Interacao com o jogador
def joga_jogador (mao):
    global mao_do_jogador

    mao_do_jogador = mao
    carta = mao[teclado-1]
    del mao[teclado-1]

    return carta

# IA dos NPC
def joga_NPC (cartas, mao, naipe_jogada, naipe_trunfo):
    # verifica o naipe da jogada
    if naipe_jogada == "":
        naipe_jogada = random.choice(["O", "P", "C", "E"])  # naipe 'a sorte... Desafio: Melhorar...

    # Tenta assistir 'a jogada
    figura_jogada = carta_maior(mao, naipe_jogada)
    if figura_jogada != False:
        for i in range(len(mao)):
            if figura(mao[i]) == figura_jogada and naipe(mao[i]) == naipe_jogada:
                del mao[i]
                break
        return cria_carta(figura_jogada, naipe_jogada)
    else:
        # caso nao tenha cartas do naipe da jogada
        figura_trunfo = carta_maior(mao, naipe_trunfo)
        if figura_trunfo != False:
            for i in range(len(mao)):
                if figura(mao[i]) == figura_trunfo and naipe(mao[i]) == naipe_trunfo:
                    del mao[i]
                    break
            return cria_carta(figura_trunfo, naipe_trunfo)
        else:
            # retorna a primeira carta... Desafio: Melhorar...
            carta_outro_naipe = mao[0]
            del mao[0]
            return carta_outro_naipe

# para ordenar
naipes = ["O", "C", "P", "E"]
figuras = "23456QJK7A"
def numero(t):
    return naipes.index(naipe(t))*100+figuras.index(str(figura(t)))


def setup():
    global baralho_imagens, baralho, trunfo, jogo, jogador, jogador_inicial, jogada

    # Cria janela gráfica
    size(640, 400)

    # cria baralho com imagens das cartas
    baralho_imagens = cria_baralho_imagens()

    # 1. cria baralho
    baralho = cria_baralho()

    # 2. baralha as cartas (ex. 50 vezes)
    baralha_cartas(baralho, 100)

    # escolhe o trunfo
    trunfo = naipe(baralho[0])

    # 3. cria as mãos dos 4 jogadores (o primeiro jogador e' o humano)
    jogo = [0, 0, 0, 0]
    for i in range(4):
        mao = baralho[i*10 : i*10 + 10]
        mao.sort(key=numero, reverse = True)
        jogo[i] = mao
        
    # 5. faz jogo - 10 jogadas
    jogador = 0 # comeca o jogador
    jogador_inicial = 0 # o jogador que joga primeiro em cada ronda

    jogada = 1

def draw():
    global baralho_imagens, jogo, jogada, trunfo, cartas_equipa, cartas_oponente, cartas, estado, teclado, jogador, jogador_inicial, naipe_jogada
    

    # máquina de estados
    if estado == 0: # inicio da jogada
        if jogada <= 10:
            # visualizar informação da jogada
            desenha_jogada_inicio(jogada, trunfo)
            cartas = ["", "", "", ""]
            naipe_jogada = "" # indica que o jogador que joga primeiro pode escolher o naipe
            estado = 1
        else:
            desenha_final(pontuacao(cartas_equipa))
            estado = -1

    elif estado == 1: # jogadores que jogam antes do ser humano
        # os jogadores escolhem a carta a jogar
        for j in range (4): 
            # joga até à vez do jogador humano
            if  jogador == 0:
                break; 
            else:
                cartas[jogador] = joga_NPC(cartas, jogo[jogador], naipe_jogada, trunfo)
                desenha_jogada(jogador, cartas)

            # atualiza o naipe da jogada e o proximo jogador a jogar
            if naipe_jogada == "":
                naipe_jogada = naipe(cartas[jogador])
            jogador = (jogador + 1) % 4 # jogador 'a direita

        estado = 2

    elif estado == 2 and teclado > 0: # joga o jogador humano
        cartas[jogador] = joga_jogador(jogo[jogador])
        desenha_jogada(jogador, cartas)

        # atualiza o naipe da jogada e o proximo jogador a jogar
        if naipe_jogada == "":
            naipe_jogada = naipe(cartas[jogador])
        jogador = (jogador + 1) % 4 # jogador 'a direita

        estado = 3

    elif estado == 3: # jogam os restantes jogadores
        # os restantos jogadores escolhem a carta a jogar
        for j in range (4): 
            # jogam os jogadores que ainda não jogaram
            if  cartas[j] == "":
                cartas[j] = joga_NPC(cartas, jogo[j], naipe_jogada, trunfo)
                desenha_jogada(j, cartas)

        # verifica-se quem ganha a jogada e acrescenta-se as cartas 'a equipa correspondente
        carta_naipe_trunfo = carta_maior(cartas, trunfo)
        if carta_naipe_trunfo != False:
            # ganhou quem colocou trunfo
            for j in range(len(cartas)):
                if figura(cartas[j]) == carta_naipe_trunfo and naipe(cartas[j])==trunfo:
                    jogador = j
                    break
        else:
            # maior carta do naipe jogado
            carta_jogada = carta_maior(cartas, naipe_jogada)
            for j in range(len(cartas)):
                if figura(cartas[j]) == carta_jogada and naipe(cartas[j])== naipe_jogada:
                    jogador = j
                    break
            

        if teclado == -1:
            # verifica quem ganha a jogada e acrescenta cartas para a pontuacao dessa equipa
            desenha_jogada_fim(jogador, cartas, cartas_equipa, cartas_oponente)
            estado = 0
            jogada += 1

    ###################  
    # Desenho gráfico #
    ###################

    # fundo verde
    background("green")

    # mao do jogador
    if len(jogo) > 0:
        desenha_mao(jogo[0])

    # jogadas dos jogadores
    for i in range(len(cartas)):
        if cartas[i] != "":
            desenha_jogada(i, cartas)



def key_pressed():
    global teclado 
    
    # verifica teclas premidas (retorna 1-10)
    indice = ord(str(key)[0])-ord("0")
    if indice == 0:
        indice = 10

    # verifica se é carta válida
    
    if indice >=1 and indice <=10-jogada+1:
        teclado = indice
    else:
        teclado = -1

if __name__ == '__main__':
    run()

