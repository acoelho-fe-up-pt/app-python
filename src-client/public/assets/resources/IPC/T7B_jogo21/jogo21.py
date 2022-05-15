import random

def jogo21():
    print ("Vamos jogar o jogo do 21: ")

    # pontuacao da casa e do jogador
    casa = 0
    jogador = 0

    jogar = "sim"
    while jogar == "sim":
        print ("Pontuacao do jogador: " + str(jogador))
        print ("Pontuacao da casa: " + str(casa))

        jogar = input("Pretende uma carta? ")
        if jogar == "sim":
            # retirar cartas do baralho
            carta_jogador = random.randint(1,10)
            carta_casa = random.randint(1,10)            

            # mostrar jogada
            print ("Tirou uma carta que vale", carta_jogador, "pontos.")
            print ("A casa tirou uma carta que vale", carta_casa, "pontos.")

            # calcular pontuacao
            casa += carta_casa
            jogador += carta_jogador

            # verificar se terminou o jogo
            if jogador == 21:
                print ("21! Ganhou. Parabéns!")
                return
            elif casa == 21:
                print ("21... Ganhou a casa...")
                return
            elif casa > 21:
                print ("Ganhou! A casa passou os 21.")
                return
            elif jogador > 21:
                print ("Perdeu... Passou os 21.")
                return
    
    if jogador >= casa:
        print ("Ganhou com", jogador, "contra", casa, "pontos da casa.")
    else:
        print ("Perdeu com", jogador), "contra", casa, "pontos da casa.")


jogo21()
                

                
        
