####################
# Jogo de Aventura #
####################

def jogo_aventura(ficheiro, estado): 
    # le ficheiro JSON
    f = open(ficheiro)
    livro = json.loads(f.read()) 

    # ciclo de jogo  
    while estado != "fim":
        # le a cena atual e imprime o texto
       	texto, opcoes, prox_estado = livro[estado]
        print(texto)

        # verifica se nao e o fim do jogo e imprime as opcoes da narrativa
        if opcoes != []:
            for i in range(len(opcoes)):
                print(str(i+1) + "- " + opcoes[i])

            # le opção do jogador e valida-a com o número de opções
            opcao = 0
            while opcao<1 or opcao>len(opcoes):
                opcao = int(input("Selecione a sua opção: "))

            # determina a próxima cena de acordo com a opção do jogador
            estado = prox_estado[opcao-1]
        else:    
            print("*** Fim ***")
            estado = "fim" # fim do jogo - sai do ciclo



########################
# Narrativa interativa #
########################

livro = {};
livro["inicio"] = ("Encontras-te ao fundo de um corredor de uma gruta. \nÀ tua frente encontram-se 3 portas.\nAtrás de ti, pelo corredor aproxima-se algo aterrador. O que fazes?",\
["Abres a porta com o símbolo da água.","Abres a porta com o símbolo do ar.", "Abres a porta com o símbolo da terra."],\
["1","2","3"])
livro["1"] = ("Abres a porta e uma torrente de enorme caudal empurra-te pelo corredor...\nTudo fica escuro à tua volta no meio do turbilhão de água revolta... perdes a consciência...\nPerdeste.",\
[],\
[])
livro["2"] = ("Abres a porta e encontras-te em frente de um enorme precipício.\nUm enorme dragão aproxima-se e leva-te nas suas garras até te largar em segurança em tua casa.\nÉ o teu dragão. Estás a salvo.",\
[],\
[])
livro["3"] = ("Abres a porta e vês dois corredores. Uma leve brisa afaga a tua face direita...",\
["Vais pelo túnel da esquerda.","Vais pelo túnel da direita."],\
["4","5"])
livro["4"] = ("Encontras-te em frente a um precipício, atravessado por uma ponte de cordas em mau estado que te leva à saída da gruta.\nAtravessas a ponte em direção à liberdade...\nMas a ponte cai... Perdeste.\n",\
[],\
[])
livro["5"] = ("O túnel da direita leva-te à saída da gruta, como pressagiava a brisa proveniente de lá. Estás em liberdade!",\
[],\
[])

import json
texto_json = json.dumps(livro, indent = 4)
print(texto_json)
# escreve ficheiro JSON
ficheiro = open("livro.json", "wt")
ficheiro.write(texto_json)
ficheiro.close()

jogo_aventura("livro.json", "inicio")
