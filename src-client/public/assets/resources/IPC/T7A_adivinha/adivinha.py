import random

# numero aleatorio a adivinhar
numero = random.randint(1,100)

# ler numero do jogador humano
jogada = int (input("Adivinhe o numero (1 a 100): "))

# verifica se venceu
if numero == jogada:
    print ("Parabens!")
else:
    print ("Perdeu... Era o numero ", numero)
