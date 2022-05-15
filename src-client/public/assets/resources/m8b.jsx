/* eslint-disable */
export default {
  title: 'O Mundo das Letras - Cadeias de caracteres, métodos e algoritmos',
  description: 'Teste os seus conhecimentos sobre estas duas secções com este minijogo.',
  nQuestion: 16,
  defaultMessageForCorrectAnswer: 'Correto!',
  defaultMessageForIncorrectAnswer: 'Incorreto.',
  questions: [
//Level 1
{ question: 'Considerando a seguinte cadeia de caracteres:\npalavra="Programacao"\nO que retorna a seguinte expressao:\nlen(palavra)',
  questionType: 'multipleChoice',
  answerType: 'text',
  answerSelectionType: 'single',
  answers: [
    '0',
    '1',
    '10',
    '11'
  ],
  correctAnswer: 4,
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  explanation: 'Retorna o número de caracteres da cadeia de caracteres.',
  level: 1,
  time: 20,
  penalty: 7,
  reward: 50
},
{ question: 'Considerando a seguinte cadeia de caracteres:\npalavra="Programacao"\nO que retorna a seguinte expressao:\nlen(palavra[1:])',
  questionType: 'multipleChoice',
  answerType: 'text',
  answerSelectionType: 'single',
  answers: [
    '0',
    '1',
    '10',
    '11'
  ],
  correctAnswer: 3,
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  explanation: 'Retorna o número de caracteres da cadeia de caracteres "ogramacao".',
  level: 1,
  time: 20,
  penalty: 7,
  reward: 50
},
//Level 2
{ question: 'Considerando a seguinte cadeia de caracteres:\nfrase = "Isto nao ata nem desata"\nO que retorna a seguinte expressao:\nfrase.replace("ta", "fio")',
  questionType: 'multipleChoice',
  answerType: 'text',
  answerSelectionType: 'single',
  answers: [
    'Isto nao ata nem desata',
    'Isto nao afio nem desata',
    'Isto nao ata nem desafio',
    'Isto nao afio nem desafio'
  ],
  correctAnswer: 4,
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 2,
  time: 30,
  penalty: 7,
  reward: 50
},
{ question: 'Considerando a seguinte cadeia de caracteres:\nfrase = "Isto nao ata nem desata"\nO que retorna a seguinte expressao:\nfrase.replace("ata", "fio")',
  questionType: 'multipleChoice',
  answerType: 'text',
  answerSelectionType: 'single',
  answers: [
    'Isto nao ata nem desata',
    'Isto nao fio nem desata',
    'Isto nao ata nem desfio',
    'Isto nao fio nem desfio'
  ],
  correctAnswer: 4,
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 2,
  time: 30,
  penalty: 7,
  reward: 50
},
{ question: 'Considerando a seguinte cadeia de caracteres:\nfrase = "Isto nao ata nem desata"\nO que retorna a seguinte expressao:\nfrase.replace(" ", "_")',
  questionType: 'multipleChoice',
  answerType: 'text',
  answerSelectionType: 'single',
  answers: [
    'Isto_nao ata nem desata',
    'Isto nao ata nem_desata',
    'Isto_nao_ata_nem_desata',
    'Isto nao ata nem desata'
  ],
  correctAnswer: 3,
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 2,
  time: 30,
  penalty: 7,
  reward: 50
},
//Level 3
{ question: 'Considerando a seguinte cadeia de caracteres:\npalavra="Programacao"\nO que retorna a seguinte expressao:\nfrase.count("ata")',
  questionType: 'multipleChoice',
  answerType: 'text',
  answerSelectionType: 'single',
  answers: [
    '0',
    '1',
    '2',
    'erro'
  ],
  correctAnswer: 3,
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  explanation: 'Conta todas as ocorrências.',
  level: 3,
  time: 20,
  penalty: 7,
  reward: 50
},
{ question: 'Considerando a seguinte cadeia de caracteres:\npalavra="Programacao"\nO que retorna a seguinte expressao:\nfrase.count("ata", 12)',
  questionType: 'multipleChoice',
  answerType: 'text',
  answerSelectionType: 'single',
  answers: [
    '0',
    '1',
    '2',
    'erro'
  ],
  correctAnswer: 2,
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  explanation: 'Conta todas as ocorrências a partir do índice 12. (" nem desata")',
  level: 3,
  time: 20,
  penalty: 7,
  reward: 50
},
{ question: 'Considerando a seguinte cadeia de caracteres:\npalavra="Programacao"\nO que retorna a seguinte expressao:\nfrase.count("ata", 12, 20)',
  questionType: 'multipleChoice',
  answerType: 'text',
  answerSelectionType: 'single',
  answers: [
    '0',
    '1',
    '2',
    'erro'
  ],
  correctAnswer: 1,
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  explanation: 'Conta todas as ocorrências a partir do índice 12 e até ao índice 20 (" nem des").',
  level: 3,
  time: 20,
  penalty: 7,
  reward: 50
},
//Level 4
{ question: 'Complete a seguinte funcao que conta todas as letras.',
  questionType: 'fillSpaces',
  problem:[
'def conta_letras(frase):',
'{{tab}}contador = 0',
'{{tab}}for c in frase:',
'{{tab}}{{tab}}if c.{{input1}}:',
'{{tab}}{{tab}}{{tab}}contador = contador + 1',
'{{tab}}return contador'
  ],
  answers: [
    'isalpha()',
    'isspace()',
    'isupper()',
    'letra.islower()'
  ],
  correctAnswer: [1],
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 4,
  time: 60,
  penalty: 82,
  reward: 550
},
{ question: 'Complete a seguinte funcao que conta todos os espaços.',
  questionType: 'fillSpaces',
  problem:[
'def conta_espacos(frase):',
'{{tab}}contador = 0',
'{{tab}}for c in frase:',
'{{tab}}{{tab}}if c.{{input1}}:',
'{{tab}}{{tab}}{{tab}}contador = contador + 1',
'{{tab}}return contador'
  ],
  answers: [
    'isalpha()',
    'isspace()',
    'isupper()',
    'islower()'
  ],
  correctAnswer: [2],
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 4,
  time: 60,
  penalty: 82,
  reward: 550
},
//Level 5
{ question: 'Complete a seguinte funcao que conta todas as letras maiúsculas.',
  questionType: 'fillSpaces',
  problem:[
'def conta_maiusculas(frase):',
'{{tab}}contador = 0',
'{{tab}}for c in frase:',
'{{tab}}{{tab}}if c.{{input1}}:',
'{{tab}}{{tab}}{{tab}}contador = contador + 1',
'{{tab}}return contador'
  ],
  answers: [
    'isalpha()',
    'isspace()',
    'isupper()',
    'islower()'
  ],
  correctAnswer: [3],
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 5,
  time: 60,
  penalty: 82,
  reward: 550
},
{ question: 'Complete a seguinte funcao que conta todas as letras minúsculas.',
  questionType: 'fillSpaces',
  problem:[
'def conta_minusculas(frase):',
'{{tab}}contador = 0',
'{{tab}}for c in frase:',
'{{tab}}{{tab}}if c.{{input1}}:',
'{{tab}}{{tab}}{{tab}}contador = contador + 1',
'{{tab}}return contador'
  ],
  answers: [
    'isalpha()',
    'isspace()',
    'isupper()',
    'islower()'
  ],
  correctAnswer: [4],
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 5,
  time: 60,
  penalty: 82,
  reward: 550
},
//Level 6
{ question: 'Complete a seguinte funcao que conta todas as letras minúsculas.',
  questionType: 'fillSpaces',
  problem:[
'def conta_minusculas(frase):',
'{{tab}}contador = 0',
'{{tab}}for c in frase:',
'{{tab}}{{tab}}if c {{input1}} "a" {{input2}} c {{input3}} "z":',
'{{tab}}{{tab}}{{tab}}contador += 1',
'{{tab}}return contador'
  ],
  answers: [
    '==',
    '>',
    '>=',
    '<',
    '<=',
    'and',
    'or',
    'not'
  ],
  correctAnswer: [3, 6, 5],
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 6,
  time: 60,
  penalty: 82,
  reward: 550
},
{ question: 'Complete a seguinte funcao que conta todas as letras maiúsculas.',
  questionType: 'fillSpaces',
  problem:[
'def conta_maiusculas(frase):',
'{{tab}}contador = 0',
'{{tab}}for c in frase:',
'{{tab}}{{tab}}if c {{input1}} "A" {{input2}} c {{input3}} "Z":',
'{{tab}}{{tab}}{{tab}}contador += 1',
'{{tab}}return contador'
  ],
  answers: [
    '==',
    '>',
    '>=',
    '<',
    '<=',
    'and',
    'or',
    'not'
  ],
  correctAnswer: [3, 6, 5],
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 6,
  time: 60,
  penalty: 82,
  reward: 550
},
//Level 7
{ question: 'Complete a seguinte funcao que conta todos os pontos e as vírgulas.',
  questionType: 'fillSpaces',
  problem:[
'def conta_espacos(frase):',
'{{tab}}contador = {{input1}}',
'{{tab}}for c in frase:',
'{{tab}}{{tab}}if c == "."" {{input2}} c == ",":',
'{{tab}}{{tab}}{{tab}}contador {{input3}} 1',
'{{tab}}return contador'
  ],
  answers: [
    '0',
    '1',
    '+=',
    '-=',
    'and',
    'or'
  ],
  correctAnswer: [2, 6, 3],
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 7,
  time: 60,
  penalty: 82,
  reward: 550
},
//Level 8
{ question: 'Complete a seguinte funcao que conta todas as letras, sejam maíusculas ou minúsculas.',
  questionType: 'fillSpaces',
  problem:[
'def conta_letras(frase):',
'{{tab}}contador = 0',
'{{tab}}for c in frase:',
'{{tab}}{{tab}}if c >= {{input1}} and c<="Z" {{input2}} c >= {{input3}} and c <= {{input3}}:',
'{{tab}}{{tab}}{{tab}}contador += 1',
'{{tab}}return contador'
  ],
  answers: [
    'A',
    'a',
    'z',
    'Z',
    'and',
    'or',
    'not'
  ],
  correctAnswer: [1, 6, 2, 3],
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 8,
  time: 60,
  penalty: 82,
  reward: 550
}
  ]
};