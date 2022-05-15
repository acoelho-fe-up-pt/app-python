import random;

def coloca_letra(tabuleiro, lin, col, letra):
    tabuleiro[lin] = tabuleiro[lin][:col] + letra + tabuleiro[lin][col+1:]

def coloca_palavra(tabuleiro, linhas, colunas, palavra):

    # palavra invertida?
    if random.choice([True, False]):
        palavra = palavra[::-1] # inverte palavra

    # determina se sera vertical ou horizontal
    horizontal = random.choice([True, False])

    tentativas = 50 # pode não haver solução possível...
    while tentativas > 0:
        if horizontal:
            # palavra na horizontal
            lin = random.randint(0, linhas-1)
            col = random.randint(0, colunas-len(palavra)) # o comprimento da palavra limita o início da coluna

            # verifica se a palavra pode ser colocada nessa posicao
            livre = True
            for i in range(len(palavra)):
                if tabuleiro[lin][col+i] != " " and tabuleiro[lin][col+i] != palavra[i]:
                    livre = False
                    break
            if livre:
                # coloca a palavra
                for i in range(len(palavra)):
                    coloca_letra(tabuleiro, lin, col + i, palavra[i])
                return True

            tentativas -= 1
        else:
            # palavra na vertical
            lin = random.randint(0, linhas-len(palavra)) # o comprimento da palavra limita o início da linha
            col = random.randint(0, colunas-1) 

            # verifica se a palavra pode ser colocada nessa posicao
            livre = True
            for i in range(len(palavra)):
                if tabuleiro[lin+i][col] != " " and tabuleiro[lin+i][col] != palavra[i]:
                    livre = False
                    break
            if livre:
                # coloca a palavra
                for i in range(len(palavra)):
                    coloca_letra(tabuleiro, lin+i, col, palavra[i])
                return True

            tentativas -= 1

    return False
   
def cria_tabuleiro(linhas, colunas, lista):
    # criar tabuleiro vazio
    tabuleiro = []
    for i in range(linhas):
        linha = ""
        for j in range (colunas):
            linha += " "
        tabuleiro += [linha]

    # preenche o tabuleiro com a lista de palavras
    for palavra in lista:
        if not coloca_palavra(tabuleiro, linhas, colunas, palavra.upper()):
            return False


    # preencher o resto do tabuleiro com letras aleatorias
    for i in range(linhas):
        for j in range(colunas):
            if tabuleiro[i][j] == " ":
                tabuleiro[i] = tabuleiro[i][:j] + random.choice("ABCDEFGHIJKLMNOPQRSTUVWXYZ") + tabuleiro[i][j+1:]

    return tabuleiro

def mostra_tabuleiro(tabuleiro):
    for linha in tabuleiro:
        print(linha)


def sopa_letras(linhas, colunas, lista, tentativas):

    # criacao do tabuleiro
    tabuleiro = cria_tabuleiro(linhas, colunas, lista)
    if type(tabuleiro) != list:
        print ("Nao foi possivel construir o tabuleiro...")
        return

    # numero de palavras a adivinhar 
    palavras_adivinhar = len(lista)

    while tentativas > 0 and palavras_adivinhar > 0:
        # Jogada do jogador
        mostra_tabuleiro(tabuleiro)
        palavra = input("Palavra: ").upper()

        # verificar se a palavra esta correta
        if palavra in lista:
            # palavra certa
            palavras_adivinhar -= 1
            print("Certo! Palavras a encontrar: " + str(palavras_adivinhar))
            if palavras_adivinhar >= 0:
                #apaga palavra da lista
                for i in range (len(lista)):
                    if  palavra == lista[i]:
                        lista[i] = ""
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



