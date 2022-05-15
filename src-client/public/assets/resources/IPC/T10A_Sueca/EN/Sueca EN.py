# Sueca card game
import random

# Card abstraction(tuple)
def create_card(rank, suite):
    # returns a tuple with both values
    return (rank, suite)

def rank(card):
    return card[0]

def suit(card):
    return card[1]

def points(rank):
    if rank == "A":
        return 11
    elif rank == "Q":
        return 2
    elif rank == "J":
        return 3
    elif rank == "K":
        return 4
    elif rank == 7:
        return 10
    else:
        return 0

def draw_card(value):
    if value == 1:
        return "A"
    elif value == 8:
        return "Q"
    elif value == 9:
        return "J"
    elif value == 10:
        return "K"
    else:
        return value

# score of a set of cards
def score(cards):
    score = 0
    for card in cards:
        score += points(rank(card))

    return score

def highest_card(hand, suit_played):
    max_points = -1 # less than the minimum - cards 2 to 6 have 0 points
    max_card = "" 

    # the hand of the player
    for card in hand:
        if suit(card) == suit_played:
            if points(rank(card)) > max_points:
                max_card = rank(card)
                max_points = points(card)
    
    # if the player has no cards of that suit...
    if max_points >= 0:
        return max_card
    else:
        return False

def create_deck():
    # create a list of 40 values (a deck of cards)
    deck = list(range(40))

    # define the 4 suits
    suits = ["D", "H", "S", "C"]

    # creates the deck of cards
    i = 0
    for suit in suits: # for each of the 4 suites
        for c in range(10): # for each of the 10 cards of each suit
            deck[i] = create_card(draw_card(c+1), suit)  # creates the card
            i += 1
    
    return deck
            
def shuffle_cards(deck, times):
    for i in range(times):
        # randomly select the cards to change positions
        i = random.randint(0, len(deck)-1)
        j = random.randint(0, len(deck)-1)

        # change card position
        temp = deck[i]
        deck[i] = deck[j]
        deck[j] = temp

# User interaction
def play_player (cards, hand):
    show_hand(hand)
    n=0
    while not (n > 0 and n <= len(hand)):
        ans = input ("Which card do you want to play? (1 to " + str(len(hand)) + "): ")
        if len (ans) > 0 and ans[0] in ["1", "2", "3", "4", "5", "6", "7", "8", "9"]:
            n = int(ans)
        else:
            n = 0

    card = hand[n-1]
    del hand[n-1]

    return card

# AI of the NPC
def play_NPC (cards, hand, suit_played, trump_suit):
    # verifies the trump suit
    if trump_suit == "":
        trump_suit = random.choice(["D", "H", "S", "C"])  # random suit... Challenge: Improve...

    # Has to assist the suit
    rank_to_play = highest_card(hand, suit_played)
    if rank_to_play != False:
        for i in range(len(hand)):
            if rank(hand[i]) == rank_to_play and suit(hand[i]) == suit_played:
                del hand[i]
                break
        return create_card(rank_to_play, suit_played)
    else:
        # if this player does not have cards of that suit
        play_trump = highest_card(hand, trump_suit)
        if play_trump != False:
            for i in range(len(hand)):
                if rank(hand[i]) == play_trump and suit(hand[i]) == trump_suit:
                    del hand[i]
                    break
            return create_card(play_trump, trump_suit)
        else:
            # returns the first card of the hand... Challenge: Improve...
            card = hand[0]
            del hand[0]
            return card

# show the player's hand
def show_hand(hand):
    # Challenge: Improve interaction
    print ("Your hand:")
    for i in range (len(hand)):
        print(str(i+1) + " - " + str(hand[i]))

def sueca():
    # 1. creates the deck of cards
    deck = create_deck()

    # 2. shuffles the cards (ex. 100 times)
    shuffle_cards(deck, 100)

    # shose the trump suit
    trump_suit = suit(deck[0])

    # 3. creates the hands of the 4 players (the first player is the human)
    game = [0, 0, 0, 0]
    for i in range(4):
        game[i] = deck[i*10 : i*10 + 10]
    
    cards_player_team = []
    cards_opponents = []
    
    # 4. Play the game - 10 rounds
    player = 0 # the player
    inicial_player = 0 # the player that starts each round
    for i in range(10):
        # show the game
        print("\n** Play " + str(i+1) + " (the trump suit is " + trump_suit + ") ** ")

        # the 4 players choose the card to play
        cards = ["", "", "", ""]
        suit_played = "" # indicates that the first player to start chooses the suit
        for j in range (4): 
            # human or computer?
            if  player == 0: # human player
                cards[player] = play_player(cards, game[player])
            else:
                cards[player] = play_NPC(cards, game[player], suit_played, trump_suit)

            print ("Player " + str(player+1) + " played : " + str(cards[player]))

            # updates the suit to play and the player to play next
            if suit_played == "":
                suit_played = suit(cards[player])
            player = (player + 1) % 4 # player to the right

        # verifies who wins the play and adds the cards to the corresponding team
        card_trump_suit = highest_card(cards, trump_suit)
        if card_trump_suit != False:
            # wins who has the highest trump card
            for j in range(len(cards)):
                if rank(cards[j]) == card_trump_suit and suit(cards[j])==trump_suit:
                    player = j
                    break
        else:
            # highest card of the suit played
            played_card = highest_card(cards, suit_played)
            for j in range(len(cards)):
                if rank(cards[j]) == played_card and suit(cards[j])== suit_played:
                    player = j
                    break
        
        # verifica quem ganha a jogada e acrescenta cartas para a pontuacao dessa equipa
        if player % 2 == 0:
            cards_player_team.extend(cards)
            print("This turn is for your team.")
        else:
            cards_opponents.extend(cards)
            print("This turn is for the other team.")

    # Verifies the score of each team to check who won (>60 points), or if there was a draw (60 points)
    if score(cards_player_team) > 60:
        print("You win! " + str(score(cards_player_team)) + " points. Congratulations!")
    elif score(cards_opponents) > 60:
        print("You lose! The other team scored " + str(score(cards_opponents)) + " points.")
    else: 
        print("It's a draw - 60 points for each team.")

# play
sueca()
