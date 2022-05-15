import random

# 1. selects head or tail
coin = random.choice(['head', 'tail'])

# input from the player
play = input('head or tail? ')
print ('I played ' + coin)

# check if the player wins or loses
if coin == play:
    print ('You win!')
else:
    print ('You lose...')
