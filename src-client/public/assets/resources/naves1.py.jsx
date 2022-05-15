export default {
  code: `
  from tabuleiro import *

# define percurso
partida  = ("grey", [(7,2)]) # cinzento
percurso = ("lime", \
    [(7,3),(7,4),(7,5),(7,6),(7,7),(7,8),(7,9),(7,10),\
    (2,10),(3,10),(4,10),(5,10),(6,10),(2,11),(2,12),\
    (2,13),(2,14),(3,14),(4,14),(5,14),(5,15),(5,16)])
chegada  = ("gold2", [(5, 17)])

# cria tabuleiro e nave
t = Tabuleiro(10, 18, [partida, percurso, chegada])
n = Nave(t, 7, 2)

# percurso
n.frente(8)
n.esquerda()
n.frente(5)
n.direita()
n.frente(4)
n.direita()
n.frente(3)
n.esquerda()
n.frente(3)


input()
`
};
