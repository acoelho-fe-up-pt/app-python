export default {
  code: `
  from tabuleiro import *

  # funÃ§Ã£o que percorre o percurso
  def pode_avancar(cor):
      return cor == False or cor == "gold2"
  
  # sai do labirinto
  def labirinto(n):
      while n.ve() != "gold2":
          # decide por que direÃ§Ã£o avanÃ§ar - "tatear com a mÃ£o direita"
          if pode_avancar(n.ve_dir()):
              n.direita()
          elif pode_avancar(n.ve_frente()):
              pass
          elif pode_avancar(n.ve_esq()):
              n.esquerda()
          else: #volta para trÃ¡s
              n.direita()
              n.direita()
          
          # avanÃ§a uma quadrÃ­cula
          n.frente(1)     
  
  # define labirinto
  lista = [(1,1),(1,2),(1,3),(1,4),(1,5),(1,6),(1,7),(1,8),(1,9),(1,10),\
      (1,11),(1,12),(1,13),(1,14),(1,15),(1,16),(1,17),(1,18),(2,1),\
      (2,2),(2,4),(2,14),(2,18),(3,1),(3,4),(3,8),(3,9),(3,10),(3,11),\
      (3,14),(3,16),(3,18),(4,1),(4,3),(4,4),(4,8),(4,14),(4,16),(4,18),\
      (5,1),(5,6),(5,7),(5,8),(5,10),(5,11),(5,12),(5,13),(5,14),(5,15),\
      (5,16),(5,18),(6,1),(6,2),(6,3),(6,4),(6,8),(6,18),(7,1),(7,4),\
      (7,6),(7,8),(7,11),(7,12),(7,13),(7,14),(7,18),(8,1),(8,4),(8,6),\
      (8,8),(8,14),(8,16),(8,18),(9,1),(9,4),(9,8),(9,14),(9,16),(9,18),\
      (10,1),(10,2),(10,3),(10,4),(10,5),(10,6),(10,7),(10,8),(10,9),\
      (10,10),(10,11),(10,12),(10,13),(10,14),(10,15),(10,16),(10,18)]
  paredes = ("grey", lista)
  porta  = ("gold2", [(10, 17)])
  
  # cria tabuleiro e nave
  t = Tabuleiro(10, 18, [paredes, porta])
  n = Nave(t, 3, 3)
  
  # faz o percurso de forma automÃ¡tica
  labirinto(n)
  
  input()
  
`
};
