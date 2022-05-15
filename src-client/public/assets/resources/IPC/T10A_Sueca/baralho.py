from p5 import *

# constantes
CARTAS = "A23456789XJQK"
NAIPES = "OPCE"
CARTA_LARGURA = 64
CARTA_ALTURA = 91

# variável global
baralho_imagens = None


# cria imagens do baralho
def cria_baralho_imagens():
    baralho = {}
    for naipe in NAIPES:
        for carta in CARTAS:
            chave = carta+naipe
            imagem = load_image("baralho/" + carta + naipe + ".jpg")
            # WINDOWS "baralho\\"
            baralho[chave]=imagem
    return baralho

# (3, "O")  -> "3O"
# ("K", "E") -> "KE"
# (10, "P") -> "XP"
def retorna_imagem(carta):
    global baralho_imagens
    if carta[0] == 10:
        return baralho_imagens["X"+carta[1]]
    else:
        return baralho_imagens[str(carta[0])+carta[1]]

def setup():
    global baralho_imagens
    size(1000, 800)

    # cria baralho com imagens das cartas
    baralho_imagens = cria_baralho_imagens()

def draw():
    global baralho_imagens

    background("green")

    # exemplos
    image(retorna_imagem((7, "E")), (0, 0))
    image(retorna_imagem(("A", "E")), (100, 80))
    image(retorna_imagem((10, "P")), (100, 180))
    image(retorna_imagem(("Q", "C")), (250, 80))

    # desenhar todo o baralho
    x = 0
    y = 300
    for naipe in NAIPES:
        for carta in CARTAS:
            image(baralho_imagens[carta+naipe], (x,y))
            x += CARTA_LARGURA
        x = 0
        y += CARTA_ALTURA


if __name__ == '__main__':
    run()
