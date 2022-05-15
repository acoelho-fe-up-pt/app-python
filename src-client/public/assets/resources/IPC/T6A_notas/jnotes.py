import random 

def notes(value, note):
    n = value // note
    if n > 0:
        print(n, "notes of", note)
    return n

def game():
    # 1. amount to guess
    amount = 5*random.randint(20, 200)
    print("How many banknotes are needed to pay for", amount, "€?")

    # 2. Read the players' play
    notes_player = int(input())

    # 3. Calculate the number of banknotes
    notes_50 = notes(amount, 50)
    amount -= 50 * notes_50
    
    notes_20 = notes(amount, 20)
    amount -= 20 * notes_20
    
    notes_10 = notes(amount, 10)
    amount -= 10 * notes_10
    
    notes_5 = notes(amount, 5)
    amount -= 5 * notes_5
    
    # 4. Check if the player has guessed
    if notes_player == notes_50 + notes_20 + notes_10 + notes_5:
        print("You won!")
    else:
        print("No.You needed", notes_50 + notes_20 + notes_10 + notes_5, "notes")

game()