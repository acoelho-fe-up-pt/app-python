import random

# número de números em cada cartão
NUMEROS = 15

# preenche um cartao com números diferentes
def preenche_cartao():
    cartao = set()
    while len(cartao) < NUMEROS:
        cartao.add(random.randint(1,90))

    return cartao

# ciclo de jogo
def jogo():
    # cria o conjunto inicial de bolas a sortear
    bolas = list(range(1,91))

    # cartão de cada jogador
    cartaoHumano = preenche_cartao()
    cartaoComputador = preenche_cartao()
    numeros_ja_saidos = set()

    # versão de impressão
    bilheteHumano = list(cartaoHumano)
    bilheteHumano.sort()
    bilheteComputador = list(cartaoComputador)
    bilheteComputador.sort()

    # inicialização
    while len(bolas) > 0:
        # retira número
        if input("E roda a esfera...") == "end":
            return
        numero_sorteado = bolas.pop(random.randint(0, len(bolas)-1))
        print (numero_sorteado)
        numeros_ja_saidos.add(numero_sorteado)

        # mostra bilhete do jogador humano
        nH = NUMEROS - len(cartaoHumano.intersection(numeros_ja_saidos))
        print(bilheteHumano, "- faltam", nH)
        nC = NUMEROS - len(cartaoComputador.intersection(numeros_ja_saidos))
        print(bilheteComputador, "- faltam", nC)

        if nC == 0 and nH == 0:
            print("Empate...")
            break
        elif nC == 0:
            print("Bingo! Ganhou o computador.")
            break
        elif nH == 0:
            print("Bingo! Ganhou o jogador humano.")
            break

jogo()