export default {
  code: `
  import turtle

  # definições globais
  ORIENTACOES = "ESON"
  RUMO = {"N":90, "E":0, "S":-90, "O":180}
  MARGEM = 40
  PONTO = 10
          
  #########################
  ## ABSTRACAO TABULEIRO ##
  #########################
  
  class Tabuleiro():
      def __init__(self, linhas, colunas, lista_colorir = [], titulo = "Tabuleiro"):
          # dimensoes da janela
          self.largura, self.altura = turtle.screensize()
          self.linhas = linhas
          self.colunas = colunas
  
          # outros atributos
          self.dim = min((2*self.largura-2*MARGEM)//colunas, (2*self.altura-2*MARGEM)//linhas)
          self.ox =int(-self.dim * colunas / 2)
          self.oy = int(self.dim * linhas / 2)
          self.lista_colorir = lista_colorir
          self.tartarugas = []
  
          # desenha tabuleiro
          turtle.title(titulo)
          turtle.hideturtle()
          self.desenha()
  
      # desenha o tabuleiro
      def desenha(self):
          turtle.tracer(0)
  
          # subproblemas
          self.des_linhas()
          self.des_colunas()
          self.pinta()
  
          turtle.tracer(1)
  
      # desenha as linhas e os números de linha
      def des_linhas(self):
          # canto superior esquerdo
          turtle.pu()
          turtle.goto(self.ox, self.oy)
          turtle.setheading(0) # E
          turtle.pd()
  
          # linhas horizontais
          for l in range(self.linhas):
              turtle.fd(self.colunas * self.dim)
              if l%2 != 0:
                  # se é impar vira à esquerda
                  turtle.lt(90)
                  turtle.fd(self.dim)
                  turtle.lt(90)
              else:
                  # se é par vira à direita
                  turtle.rt(90)
                  turtle.fd(self.dim)
                  turtle.rt(90)
  
              # numero da linha
              tx, ty = turtle.position()
              turtle.pu()
              turtle.goto(self.ox - self.dim//3, ty + self.dim//3)
              turtle.write(str(l+1), False, "right", ("Calibri", 18, "bold"))
              turtle.goto(tx, ty)
              turtle.pd()
          turtle.fd(self.colunas * self.dim)
  
      # desenha as colunas e os números de coluna
      def des_colunas(self):
          # canto superior esquerdo
          turtle.pu()
          turtle.goto(self.ox, self.oy)
          turtle.setheading(270) # S
          turtle.pd()
  
          # linhas verticais
          for c in range(self.colunas):
              turtle.fd(self.linhas * self.dim)
              if c%2 == 0:
                  # se é par vira à esquerda
                  turtle.lt(90)
                  turtle.fd(self.dim)
                  turtle.lt(90)
              else:
                  # se é impar vira à direita
                  turtle.rt(90)
                  turtle.fd(self.dim)
                  turtle.rt(90)
  
              # numero da linha
              tx, ty = turtle.position()
              turtle.pu()
              turtle.goto(tx - self.dim//3, self.oy + self.dim//3)
              turtle.write(str(c+1), False, "right", ("Calibri", 18, "bold"))
              turtle.goto(tx, ty)
              turtle.pd()
          turtle.fd(self.linhas * self.dim)
  
      # pinta o tabuleiro
      def pinta(self):
          for (cor,lista) in self.lista_colorir:
              turtle.fillcolor(cor)
              for (linha,coluna) in lista:
                  self.quadrado(linha,coluna)
  
      def quadrado(self, linha, coluna):
          turtle.pu()
          turtle.goto(self.ox + coluna*self.dim, self.oy - (linha-1)*self.dim)
          turtle.pd()
          turtle.begin_fill()
          for i in range(4):
              turtle.fd(self.dim)
              turtle.rt(90)
          turtle.end_fill()
  
  
      # pesquisa listas
      def pesquisa_listas(self, linha, coluna):
          for (cor,lista) in self.lista_colorir:
              if (linha, coluna) in lista:
                  return cor
          else:
              return False
  
      def coords(self, linha, coluna):
          return self.ox + (coluna-1)* self.dim + self.dim//2, \
              self.oy - (linha-1) * self.dim - self.dim//2
  
  ####################
  ## ABSTRACAO NAVE ##
  ####################
  
  class Nave():
      def __init__(self, tab, linha=1, coluna=1, ori="E", cor = "blue"):
          self.tab = tab
          self.t = turtle.clone()
          self.linha = linha
          self.coluna = coluna
          self.ori = ori.upper()
          self.cor = cor
  
          # inicializa a tartaruga
          self.desenha()
  
      # seletores
      def get_posicao(self):
          return self.linha, self.coluna
  
      def get_orientacao(self):
          return self.ori
  
      # desenha a nave
      def desenha(self):
          # coordendas x, y da nave
          x,y = self.tab.coords(self.linha, self.coluna)
          # posiciona e desenha tartaruga como triângulo orientado
          self.t.pu()
          self.t.goto(x, y)
          self.t.fillcolor(self.cor)
          self.t.shape("triangle")
          self.t.shapesize(1.0, 1.0, 1.0)
          self.t.setheading(RUMO[self.ori])
          self.t.showturtle()
      
      # sensores 
      def determina_cor(self, ori):
          # sensor depende da orientação da nave
          if ori == "E":
              return self.tab.pesquisa_listas(self.linha, self.coluna+1)
          elif ori == "O":
              return self.tab.pesquisa_listas(self.linha, self.coluna-1)
          elif ori == "S":
              return self.tab.pesquisa_listas(self.linha+1, self.coluna)
          elif ori == "N": 
              return self.tab.pesquisa_listas(self.linha-1, self.coluna)      
          else: # posição da nave
              return self.tab.pesquisa_listas(self.linha, self.coluna)
      
      def ve(self):
          return self.determina_cor("")
      
      def ve_frente(self):
          return self.determina_cor(self.ori)
          
      def ve_dir(self):
          return self.determina_cor(ORIENTACOES[(ORIENTACOES.index(self.ori)+1)%4])
          
      def ve_esq(self):
          return self.determina_cor(ORIENTACOES[(ORIENTACOES.index(self.ori)-1)%4])
          
      def ve_tras(self):
          return self.determina_cor(ORIENTACOES[(ORIENTACOES.index(self.ori)+2)%4])
  
      # modificadores
  
      # avanca 
      def frente(self, dist):
          # atualiza as coordenadas
          if (self.ori) == "E":
              self.coluna += dist
          elif (self.ori) == "O":
              self.coluna -= dist
          elif (self.ori) == "S":
              self.linha += dist
          else: # N
              self.linha -= dist
  
          # desenha o percurso
          self.t.color(self.cor)
          self.t.pu()
          for i in range(dist):
              self.t.dot(PONTO)
              self.t.fd(self.tab.dim)
  
      # roda 90º à drieita
      def direita(self):
          if self.ori == "N":
              self.ori = "E"
          elif self.ori == "E":
              self.ori = "S"
          elif self.ori == "S":
              self.ori = "O"
          else:
              self.ori = "N"
          self.t.setheading(RUMO[self.ori])
  
      # roda 90º à esquerda
      def esquerda(self):
          if self.ori == "N":
              self.ori = "O"
          elif self.ori == "O":
              self.ori = "S"
          elif self.ori == "S":
              self.ori = "E"
          else:
              self.ori = "N"
          self.t.setheading(RUMO[self.ori])
  
      def orienta(self, ori):
          self.ori = ori
          self.t.setheading(RUMO[self.ori])     
  
`
};
