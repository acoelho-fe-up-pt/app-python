import random

# numero aleatorio a adivinhar e maximo de tentativeis possiveis
numero = random.randint(1,100)
tentativas = 7

# ciclo de jogo
jogada = 0 # inicializar a variável
while jogada != numero and tentativas > 0:
    jogada = int (input("Adivinhe o numero (1 a 100): "))
    tentativas = tentativas - 1

    # condição de vitória
    if numero == jogada:
        print ("Parabens!")
    # condição de derrota
    elif tentativas == 0:
        print ("Perdeu... Era o numero", numero)
    # lógica de jogo
    elif jogada > numero:
        print ("Numero muito grande...")
    else:
        print("Numero muito pequeno...")


