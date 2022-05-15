import random;

def cria_tabuleiro(linhas, colunas, lista_palavras):
    # criar tabuleiro vazio
    tabuleiro = []
    for i in range(linhas):
        linha = ""
        for j in range (colunas):
            linha += " "
        tabuleiro += [linha]

    # coloca palavras de forma aleatoria
    i = 0
    tentativas = 50 # pode não haver solução possível...

    # ciclo de preenchimento do tabuleiro com a lista_palavras de palavras
    while i < len(lista_palavras):
        # palavra a colocar na sopa de letras: em maiusculas e pode ser invertida
        lista_palavras[i] = lista_palavras[i].upper()
        palavra = lista_palavras[i]

        # aleatoriamente a palavra poderá ser invertida
        if random.choice([True, False]):
            palavra = palavra[::-1] # inverte palavra


        # determina localização horizontal aleatória
        l = random.randint(0, linhas-1)
        linha = tabuleiro[l] # linha aleatoria
        col = random.randint(0, colunas-len(palavra)) # o comprimento da palavra limita o início da coluna

        # verifica se tem espaço para a palavra
        if linha.count(" ", col, col+len(palavra)) == len(palavra):
            # coloca palavra
            tabuleiro[l] = linha[:col] + palavra + linha[col+len(palavra):]
            i += 1
        else:
            #procura outra posicao para a palavra
            if tentativas > 0:
                tentativas -= 1
            else:
                print("Nao foi possivel construir tabuleiro")
                return False

    # preencher o resto do tabuleiro com letras aleatorias
    for i in range(linhas):
        for j in range(colunas):
            if tabuleiro[i][j] == " ":
                tabuleiro[i] = tabuleiro[i][:j] \
                               + random.choice("ABCDEFGHIJKLMNOPQRSTUVWXYZ") \
                               + tabuleiro[i][j+1:]

    return tabuleiro

def mostra_tabuleiro(tabuleiro):
    for linha in tabuleiro:
        print(linha)


def sopa_letras(linhas, colunas, lista_palavras, tentativas):

    # criacao do tabuleiro
    tabuleiro = cria_tabuleiro(linhas, colunas, lista_palavras)
    if type(tabuleiro) != list:
        print ("Nao foi possivel construir o tabuleiro...")
        return

    # numero de palavras a adivinhar 
    palavras_adivinhar = len(lista_palavras)

    while tentativas > 0 and palavras_adivinhar > 0:
        # Jogada do jogador
        mostra_tabuleiro(tabuleiro)
        palavra = input("Palavra: ").upper()

        # verificar se a palavra esta correta
        if palavra in lista_palavras:
            # palavra certa
            palavras_adivinhar -= 1
            print("Certo! Palavras a encontrar: " + str(palavras_adivinhar))
            if palavras_adivinhar >= 0:
                #apaga palavra da lista_palavras
                for i in range (len(lista_palavras)):
                    if  palavra == lista_palavras[i]:
                        lista_palavras[i] = ""
        else:
            # palavra errada
            print("Errado!")
            tentativas -= 1

    # fim do jogo    
    if tentativas == 0 and palavras_adivinhar > 0:
        print ("Perdeu. Faltaram " + str(palavras_adivinhar) + "palavras")
    else:
        print ("Parabens! Encontrou todas as palavras.")

palavras = ["Porto", "Lisboa", "Braga", "Portimao", "Braganca", "Faro", "Coimbra"]
sopa_letras(10,30, palavras, 5)
    
