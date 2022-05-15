import random

BARALHO = "23456QJK7A"

# retorna numero de ordem da carta no baralho
def valor(carta):
    return BARALHO.index(carta)

# mostra o vencedor
def vencedor(pontosComputador, pontosHumano):
    print("")
    print("O jogo terminou...")
    print("---- Resultado final ----")
    print("Computador", pontosComputador, "vs", pontosHumano, "Humano")

    if pontosHumano > pontosComputador:
        print ("Voce ganhou!")
    elif pontosHumano < pontosComputador:
        print("Voce perdeu")
    else:
        print("Empatamos...")

def jogo(jogadas):
    # pontuacao dos dois jogadores
    pontosComputador = 0
    pontosHumano = 0
    pontos = 2

    while jogadas>0:
        print("*** Jogada ***")
        print("Computador", pontosComputador, "vs", pontosHumano, "Humano")        

        # input - jogada do computador e do jogador humano
        cartaHumano = input("Humano: ")
        cartacomputador = random.choice(BARALHO)
        print("Computador:", cartacomputador)

        # logica de jogo
        if valor(cartacomputador) == valor(cartaHumano):
            # empate
            print("Empate... Jogue novamente...")
            pontos += 2
        elif valor(cartacomputador) > valor(cartaHumano):
            print(pontos, "pontos para o computador.")
            pontosComputador += pontos
            jogadas -= 1
            pontos = 2
        else:
            print(pontos, "pontos para o jogador humano.")
            pontosHumano += pontos
            jogadas -= 1
            pontos = 2
 
        # final da jogada
        print("Tem", jogadas, "jogadas.")

    vencedor(pontosComputador, pontosHumano)



