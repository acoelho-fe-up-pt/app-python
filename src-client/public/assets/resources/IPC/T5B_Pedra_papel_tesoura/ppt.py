import random

# 1. escolhe objeto a sorte
escolha = random.choice(["pedra", "papel", "tesoura"])

# 2. le jogada do jogador e mostra a do computador
jogada = input("pedra, papel ou tesoura? ")
print ("Eu joguei " + escolha)

# 3. verifica se ganhou ou perdeu
if escolha == "pedra" and jogada == "tesoura":
    print ("perdeu! ")
elif escolha == "tesoura" and jogada == "papel":
    print ("perdeu! ")
elif escolha == "papel" and jogada == "pedra":
    print ("perdeu! ")
elif escolha == "tesoura" and jogada == "pedra":
    print ("Ganhou! ")
elif escolha == "papel" and jogada == "tesoura":
    print ("Ganhou! ")
elif escolha == "pedra" and jogada == "papel":
    print ("Ganhou! ")
else:
    print ("Empate!")
