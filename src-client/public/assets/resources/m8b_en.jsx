/* eslint-disable */
export default {
  title: 'The World of Letters - Strings, methods and algorithms',
  description: 'Test your knowledge of these two sections with this mini-game.',
  nQuestion: 16,
  defaultMessageForCorrectAnswer: 'Correct!',
  defaultMessageForIncorrectAnswer: 'Wrong.',
  questions: [
//Level 1
{ question: 'Consider the following string:\npalavra="Programacao"\nWhich returns the following expression:\nlen(palavra)',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  explanation: 'Returns the number of characters in the string.',
  level: 1,
  time: 20,
  penalty: 7,
  reward: 50
},
{ question: 'Consider the following string:\npalavra="Programacao"\nWhich returns the following expression:\nlen(palavra[1:])',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  explanation: 'Returns the number of characters in the string "ogramacao".',
  level: 1,
  time: 20,
  penalty: 7,
  reward: 50
},
//Level 2
{ question: 'Consider the following string:\nfrase = "Isto nao ata nem desata"\nWhich returns the following expression:\nfrase.replace("ta", "fio")',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  level: 2,
  time: 30,
  penalty: 7,
  reward: 50
},
{ question: 'Consider the following string:\nfrase = "Isto nao ata nem desata"\nWhich returns the following expression:\nfrase.replace("ata", "fio")',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  level: 2,
  time: 30,
  penalty: 7,
  reward: 50
},
{ question: 'Consider the following string:\nfrase = "Isto nao ata nem desata"\nWhich returns the following expression:\nfrase.replace(" ", "_")',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  level: 2,
  time: 30,
  penalty: 7,
  reward: 50
},
//Level 3
{ question: 'Consider the following string:\npalavra="Programacao"\nWhich returns the following expression:\nfrase.count("ata")',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  explanation: 'Counts all occurrences.',
  level: 3,
  time: 20,
  penalty: 7,
  reward: 50
},
{ question: 'Consider the following string:\npalavra="Programacao"\nWhich returns the following expression:\nfrase.count("ata", 12)',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  explanation: 'Counts all occurrences starting with index 12. (" nem desata")',
  level: 3,
  time: 20,
  penalty: 7,
  reward: 50
},
{ question: 'Consider the following string:\npalavra="Programacao"\nWhich returns the following expression:\nfrase.count("ata", 12, 20)',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  explanation: 'Counts all occurrences from index 12 to index 20 (" nem des").',
  level: 3,
  time: 20,
  penalty: 7,
  reward: 50
},
//Level 4
{ question: 'Complete the following function that counts all letters.',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  level: 4,
  time: 60,
  penalty: 82,
  reward: 550
},
{ question: 'Complete the following function that counts all spaces.',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  level: 4,
  time: 60,
  penalty: 82,
  reward: 550
},
//Level 5
{ question: 'Complete the following function that counts all capital letters.',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  level: 5,
  time: 60,
  penalty: 82,
  reward: 550
},
{ question: 'Complete the following function that counts all lowercase letters.',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  level: 5,
  time: 60,
  penalty: 82,
  reward: 550
},
//Level 6
{ question: 'Complete the following function that counts all lowercase letters.',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  level: 6,
  time: 60,
  penalty: 82,
  reward: 550
},
{ question: 'Complete the following function that counts all capital letters.',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  level: 6,
  time: 60,
  penalty: 82,
  reward: 550
},
//Level 7
{ question: 'Complete the following function that counts all periods and commas.',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  level: 7,
  time: 60,
  penalty: 82,
  reward: 550
},
//Level 8
{ question: 'Complete the following function that counts all letters, case or lowercase.',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  level: 8,
  time: 60,
  penalty: 82,
  reward: 550
}
  ]
};