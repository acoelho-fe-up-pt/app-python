import random


def jogo(palavras, tentativas):
    # seleção da chave da lista de palavras
    chave = random.choice(palavras)

    # palavra escondida
    palavra = ""
    for c in chave:
        palavra = palavra + "*"

    # inicialização das variaveis
    jogada = 1
    letras_erradas = ""

    # ciclo de jogo
    while chave != palavra and tentativas > 0:
        print ("Jogada", jogada, ":", palavra)
        print ("letras erradas: ", letras_erradas)
        letra = input ("Adivinhe a letra: ")

        # desvendar a palavra
        npalavra = ""
        for i in range(len(chave)):
            if chave[i].casefold() == letra.casefold():
                npalavra += chave[i]
            else:
                npalavra += palavra[i]
        
        if palavra == npalavra:
            letras_erradas += letra
            tentativas -= 1

        jogada += 1
        palavra = npalavra
                
    if tentativas == 0:
        print ("Perdeu. Já não tem mais tentativas... Era a palavra:", chave)
    elif chave == palavra:
        print ("Parabéns!")
        
# teste
cidades = ["Porto", "Lisboa", "Braga", "Faro", "Bragança"]
jogo(cidades,5)

