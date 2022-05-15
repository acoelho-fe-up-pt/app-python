import random

# 1. randomly select the computer's move
computer = random.choice(["rock", "paper", "scissors"])

# 2. read the player's move and show the computer's
player = input("rock, paper or scissors? ")
print ("I played " + computer)

# 3. Verify if player wins or loses
if computer == "rock" and player == "scissors":
    print ("You lost... ")
elif computer == "scissors" and player == "paper":
    print ("You lost...")
elif computer == "paper" and player == "rock":
    print ("You lost... ")
elif computer == "scissors" and player == "rock":
    print ("You won! ")
elif computer == "paper" and player == "scissors":
    print ("You won! ")
elif computer == "rock" and player == "paper":
    print ("You won! ")
else:
    print ("It's a draw!")
