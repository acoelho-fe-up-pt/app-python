import random

# 1. selecionar "cara" ou "coroa" (jogada do computador)
moeda = random.choice(["cara", "coroa"])

# 2. Ler jogada do jogador 
jogada = input("Cara ou coroa? ")

# 3. Mostrar a jogada do computador 
print ("Eu joguei", moeda, ". E você?")

# 4. Verificar quem venceu
if moeda == jogada:
    print ("ganhou! ")
else:
    print ("perdeu...")