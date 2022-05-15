import random

BARALHO = "23456QJK7A"

# returns the serial number of the card in the deck
def valor(figure):
    return BARALHO.index(figure)

# shows the winner
def vencedor(pontosComputador, pontosHumano):
    print("")
    print("Game Over...")
    print("---- Final Result ----")
    print("Computer", pontosComputador, "vs", pontosHumano, "Human")

    if pontosHumano > pontosComputador:
        print ("You won!")
    elif pontosHumano < pontosComputador:
        print("You lost.")
    else:
        print("Tie...")

def jogo(jogadas):
    # score of both players
    pontosComputador = 0
    pontosHumano = 0
    pontos = 2

    while jogadas>0:
        print("*** Move ***")
        print("Computer", pontosComputador, "vs", pontosHumano, "Human")        

        # input - jogada do computador e do jogador humano
        cartaHumano = input("Human: ")
        cartacomputador = random.choice(BARALHO)
        print("Computer:", cartacomputador)

        # game logic
        if valor(cartacomputador) == valor(cartaHumano):
            # tie
            print("Tie... Play again...")
            pontos += 2
        elif valor(cartacomputador) > valor(cartaHumano):
            print(pontos, "points to the computer.")
            pontosComputador += pontos
            jogadas -= 1
            pontos = 2
        else:
            print(pontos, "points to the human player.")
            pontosHumano += pontos
            jogadas -= 1
            pontos = 2
 
        # end of the move
        print("You have", jogadas, "moves.")

    # end of the game
    vencedor(pontosComputador, pontosHumano)



