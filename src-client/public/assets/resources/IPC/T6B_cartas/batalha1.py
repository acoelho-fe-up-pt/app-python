import random

BARALHO = "23456QJK7A"

# pontuacao dos dois jogadores
pontosComputador = 0
pontosHumano = 0

# numero maximo de jogadas
jogadas = 10

# conta as cartas em caso de empate
empate = 0

def jogada(cartaHumano):    
    print("*** Jogada ***")


    # 1. jogada do computador
    cartacomputador = random.choice(BARALHO)
                
    # 2. apresenta ambas as cartas
    print("Computador:", cartacomputador)
    print("Humano:", cartaHumano)

    # 3. subproblema logica de jogo
    logica_jogo(cartacomputador, cartaHumano)

    # 4. verifica se já terminaram as jogadas
    if jogadas == 0:
        print("O jogo terminou...")
        # subproblema vencedor
        vencedor()
    else:
        print("Tem", jogadas, "jogadas.")

def vencedor():
    global pontosComputador, pontosHumano
    
    if pontosHumano > pontosComputador:
        print ("Voce ganhou!")
    elif pontosHumano < pontosComputador:
        print("Voce perdeu")
    else:
        print("Empatamos...")

# retorna numero de ordem da carta no baralho
def valor(carta):
    return BARALHO.index(carta)

def logica_jogo(comp, hum):
    global pontosComputador, pontosHumano, empate, jogadas
   
    if valor(comp) > valor(hum):
        print(2 + empate * 2, "pontos para o computador.")
        pontosComputador += 2 + empate * 2
        jogadas -= 1
        empate = 0
    elif valor(comp) < valor(hum):
        pontosHumano += 2 + empate * 2
        print(2 + empate * 2, "pontos para o jogador humano.")
        jogadas -= 1
        empate = 0
    else:
        empate += 1
        print("Empate... Jogue novamente...")
 
    # pontuação 
    print("Computador", pontosComputador, "vs", pontosHumano, "Humano")


