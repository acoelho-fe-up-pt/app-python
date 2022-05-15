# Jogo da sueca
import random

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

def da_carta(valor):
    if valor == 1:
        return "A"
    elif valor == 8:
        return "Q"
    elif valor == 9:
        return "J"
    elif valor == 10:
        return "K"
    else:
        return valor

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
    # cria uma lista de 40 valores
    baralho = list(range(40))

    # define os 4 naipes
    naipes = ["O", "C", "P", "E"]

    # constroi o baralho
    i = 0
    for naipe in naipes: # para cada um dos 4 naipes
        for c in range(10): # para cada uma das 4 cartas
            baralho[i] = cria_carta(da_carta(c+1), naipe)  # cria carta
            i += 1
    
    return baralho
            
def baralha_cartas(baralho, vezes):
    for i in range(vezes):
        #troca cartas
        i = random.randint(0, len(baralho)-1)
        j = random.randint(0, len(baralho)-1)
        temp = baralho[i]
        baralho[i] = baralho[j]
        baralho[j] = temp

# Interacao com o jogador
def joga_jogador (cartas, mao):
    mostra_mao(mao)
    n=0
    while not (n > 0 and n <= len(mao)):
        resp = input ("Qual a carta que pretende jogar? (1 a " + str(len(mao)) + "): ")
        if len (resp) > 0 and resp[0] in ["1", "2", "3", "4", "5", "6", "7", "8", "9"]:
            n = int(resp)
        else:
            n = 0

    carta = mao[n-1]
    del mao[n-1]

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

# mostra cartas
naipes = ["O", "C", "P", "E"]
figuras = "23456QJK7A"
def compara(t):
    
    return naipes.index(naipe(t))*100+figuras.index(str(figura(t)))

def mostra_mao(mao):
    print ("A sua mao:")

    # ordena a mao
    mao.sort(key=compara, reverse = True)

    # numeracao
    txt = ""
    for i in range (len(mao)):
        txt += " " + str(i+1) + "   "
    print (txt)

    # bordo superior
    txt = ""
    for i in range (len(mao)):
        txt += "+--+ "
    print (txt)

    # naipe
    txt = ""
    for carta in mao:
        txt += "| "+ naipe(carta).lower() + "| "
    print (txt)
 
    # naipe
    txt = ""
    for carta in mao:
        txt += "|"+ str(figura(carta)) + " | "
    print (txt)
 
    # bordo inferior
    txt = ""
    for i in range (len(mao)):
        txt += "+--+ "
    print (txt)



def sueca():
    # 1. cria baralho
    baralho = cria_baralho()

    # 2. baralha as cartas (ex. 50 vezes)
    baralha_cartas(baralho, 100)

    # escolhe o trunfo
    trunfo = naipe(baralho[0])

    # 3. cria as mãos dos 4 jogadores (o primeiro jogador e' o humano)
    jogo = [0, 0, 0, 0]
    for i in range(4):
        jogo[i] = baralho[i*10 : i*10 + 10]
    
    cartas_equipa = []
    cartas_oponente = []
    
    # 4. faz jogo - 10 jogadas
    jogador = 0 # comeca o jogador
    jogador_inicial = 0 # o jogador que joga primeiro em cada ronda
    for i in range(10):
        # visualizar informação da jogada
        print("\n** Jogada " + str(i+1) + " (o trunfo e' " + trunfo + ") ** ")

        # os 4 jogadores escolhem a carta a jogar
        cartas = ["", "", "", ""]
        naipe_jogada = "" # indica que o jogador que joga primeiro pode escolher o naipe
        for j in range (4): 
            # joga humano ou computador?
            if  jogador == 0:
                cartas[jogador] = joga_jogador(cartas, jogo[jogador])
            else:
                cartas[jogador] = joga_NPC(cartas, jogo[jogador], naipe_jogada, trunfo)

            print ("Jogador " + str(jogador+1) + " jogou : " + str(cartas[jogador]))

            # atualiza o naipe da jogada e o proximo jogador a jogar
            if naipe_jogada == "":
                naipe_jogada = naipe(cartas[jogador])
            jogador = (jogador + 1) % 4 # jogador 'a direita

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
        
        # verifica quem ganha a jogada e acrescenta cartas para a pontuacao dessa equipa
        if jogador % 2 == 0:
            cartas_equipa.extend(cartas)
            print("Jogada para a sua equipa!")
        else:
            cartas_oponente.extend(cartas)
            print("Jogada para a equipa adversaria.")

    if pontuacao(cartas_equipa) > 60:
        print("Ganhou sua a equipa. " + str(pontuacao(cartas_equipa)) + " pontos. Parabens!")
    elif pontuacao(cartas_oponente) > 60:
        print("Ganhou a equipa adversaria com " + str(pontuacao(cartas_oponente)) + " pontos.")
    else: 
        print("Empataram com 60 pontos.")

#jogar
sueca()
