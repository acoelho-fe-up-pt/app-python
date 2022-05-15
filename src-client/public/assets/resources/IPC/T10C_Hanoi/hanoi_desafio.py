###################
# ABSTRAÇÃO PILHA #
###################
# construtor
def cria_pilha():
    return []

# seletores
def pilha_vazia(pilha):
    if len (pilha) == 0:
        return True
    else:
        return False

def topo_da_pilha(pilha):
    if not pilha_vazia(pilha):
        return pilha[-1]
    else:
        return False

# modificadores
def poe_na_pilha(pilha, elem):
    pilha.append(elem)

def tira_da_pilha(pilha):
    if not pilha_vazia(pilha):
        return pilha.pop()
    else:
        return False
###################
