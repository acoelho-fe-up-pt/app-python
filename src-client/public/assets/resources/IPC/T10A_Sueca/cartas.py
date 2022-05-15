from PIL import Image

CARTAS = "A23456789XJQK"
NAIPES = "OPCE"


img = Image.open("cartas.jpg")
LARGURA = 959
ALTURA = 419
CARTA_L = 64
CARTA_A = 93

x=0
y=0
for naipe in NAIPES:
    for carta in CARTAS:
        if carta == "4" or carta == "6" or carta == "8" or carta == "X" or carta == "Q":
            x += 1


        img.crop((0+x, 2+y, CARTA_L+x, CARTA_A+y)).save("baralho/"+carta + naipe + ".jpg")
        x += CARTA_L + 10
    y += CARTA_A + 16
    x = 0
