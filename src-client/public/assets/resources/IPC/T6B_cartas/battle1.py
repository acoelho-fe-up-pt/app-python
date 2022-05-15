import random

BARALHO = "23456QJK7A"

# score for the two players
scoreComputer = 0
scoreHuman = 0

# maximum number of moves
moves = 10

# conta as cartas em caso de empate
tie = 0

def jogada(cardHuman):    
    print("*** Move of the game ***")

    # 1. The computer takes out a card
    cardComputer = random.choice(BARALHO)
                
    # 2. The cards of both players are presented
    print("Computer:", cardComputer)
    print("Human:", cardHuman)

    # 3. Sub-problem logic of the game
    logica_jogo(cardComputer, cardHuman)

    # 4. If game is over
    if moves == 0:
        print("O jogo terminou...")
        # Subproblem presenting the winner
        vencedor()
    else:
        print("You have ", moves, "moves.")

# returns the value of the figure
def valor(figure):
    return BARALHO.index(figure)

def logica_jogo(comp, hum):
    global scoreComputer, scoreHuman, tie, moves
   
    if valor(comp) > valor(hum):
        print(2 + tie * 2, "points for the computer.")
        scoreComputer += 2 + tie * 2
        moves -= 1
        tie = 0
    elif valor(comp) < valor(hum):
        scoreHuman += 2 + tie * 2
        print(2 + tie * 2, "points to the human player.")
        moves -= 1
        tie = 0
    else:
        tie += 1
        print("Tie... Play again...")

    # score 
    print("Computer", scoreComputer, "vs", scoreHuman, "Human")

jogada('7')