import random

def notas(valor, nota):
    n = valor // nota
    if n > 0:
        print(n, "notas de", nota)
    return n

def jogo():
    # 1. montante a calcular
    montante = 5*random.randint(20, 200)
    print("Quantas notas são necessárias para", montante, "€?")

    # 2. Ler a jogada do jogador
    notas_jogador = int(input())

    # 3. calcula o numero de notas
    notas_50 = notas(montante, 50)
    montante -= 50 * notas_50
    
    notas_20 = notas(montante, 20)
    montante -= 20 * notas_20
    
    notas_10 = notas(montante, 10)
    montante -= 10 * notas_10
    
    notas_5 = notas(montante, 5)
    montante -= 5 * notas_5
    
    # 4. verifica se acertou
    if notas_jogador == notas_50 + notas_20 + notas_10 + notas_5:
        print("Acertou")
    else:
        print("Errou, eram", notas_50 + notas_20 + notas_10 + notas_5, "notas.")
