/* eslint-disable */
export default {
  title: 'Estruturas de decisão',
  description: 'Teste os seus conhecimentos desta secção com este minijogo.',
  nQuestion: 11,
  defaultMessageForCorrectAnswer: 'Correto!',
  defaultMessageForIncorrectAnswer: 'Incorreto.',
  questions: [
//Level 1
{
  question: 'Qual a instrução que implementa a estrutura de decisão condicional?',
  questionType: 'multipleChoice',
  answerType: 'text',
  answerSelectionType: 'single',
  answers: [
    'def',
    'if',
    'and',
    'or'
  ],
  correctAnswer: 2,
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  explanation: 'Uma estrutura de decisão inicia-se sempre com if.', 
  level: 1,
  time: 20,
  penalty: 7,
  reward: 50
},
{
  question: 'Qual a instrução que implementa a estrutura de decisão condicional?',
  questionType: 'multipleChoice',
  answerType: 'text',
  answerSelectionType: 'single',
  answers: [
    'def',
    'if',
    'and',
    'or'
  ],
  correctAnswer: 2,
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  explanation: 'Uma estrutura de decisão inicia-se sempre com if.', 
  level: 1,
  time: 20,
  penalty: 7,
  reward: 50
},
//Level 2
{
  question: 'Uma estrutura de decisão alternativa define-se iniciando com if e seguindo-se...',
  questionType: 'multipleChoice',
  answerType: 'text',
  answerSelectionType: 'single',
  answers: [
    'and',
    'begin',
    'else',
    'or'
  ],
  correctAnswer: 3,
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  explanation: 'Uma estrutura de decisão alternativa inclui o else para o bloco correspondente a uma condição falsa.', 
  level: 2,
  time: 20,
  penalty: 7,
  reward: 50
},{
  question: 'Uma estrutura de seleção múltipa pode adicionar novas condições através de diversos...',
  questionType: 'multipleChoice',
  answerType: 'text',
  answerSelectionType: 'single',
  answers: [
    'if',
    'elif',
    'elseif',
    'else'
  ],
  correctAnswer: 2,
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  explanation: 'Uma estrutura de decisão alternativa inclui o else para o bloco correspondente a uma condição falsa.', 
  level: 2,
  time: 20,
  penalty: 7,
  reward: 50
},
//Level 3
{
  question: 'Qual o resultado da seguinte expressão condicional:\n 3 > 2 and not 2 == 3-1',
  questionType: 'multipleChoice',
  questionPic: 'M6A_3_1.png',
  answerType: 'text',
  answerSelectionType: 'single',
  answers: [
    'True',
    'False'
  ],
  correctAnswer: 2,
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 3,
  time: 20,
  penalty: 26,
  reward: 175
},
{
  question: 'Qual o resultado da seguinte expressão condicional:\n 3 > 2 or not 2 == 3-1',
  questionType: 'multipleChoice',
  questionPic: 'M6A_3_1.png',
  answerType: 'text',
  answerSelectionType: 'single',
  answers: [
    'True',
    'False'
  ],
  correctAnswer: 1,
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 3,
  time: 20,
  penalty: 26,
  reward: 175
},
//Level 4
{
  question: 'Qual o valor de x que torna verdadeira esta expressão condicional?\n x > 2 and x < 5',
  questionType: 'multipleChoice',
  questionPic: 'M6A_4_1.png',
  answerType: 'text',
  answerSelectionType: 'single',
  answers: [
    '1',
    '2',
    '3',
    '5'
  ],
  correctAnswer: 3,
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 4,
  time: 20,
  penalty: 41,
  reward: 275
},
{
  question: 'Qual o valor de x que torna verdadeira esta expressão condicional?\n x > 2 or x != 3',
  questionType: 'multipleChoice',
  questionPic: 'M6A_4_1.png',
  answerType: 'text',
  answerSelectionType: 'single',
  answers: [
    '1',
    '2',
    '3',
    '5'
  ],
  correctAnswer: 4,
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 4,
  time: 20,
  penalty: 41,
  reward: 275
},
//Level 5
    {
      question: 'Complete a seguinte estrutura condicional.',
      questionType: 'fillSpaces',
      problem:['if temperatura < {{input1}}:',
      '{{tab}}print("Gelo!")',
      '{{tab}}elif temperatura < {{input2}}:',
      '{{tab}}print("Frio.")',
      '{{tab}}elif temperatura < {{input3}}:',
      '{{tab}}print("Bom.")',
      'else print("Quente")'],
      answers: [
        '25',
        '10',
        '0'
      ],
      correctAnswer: [3,2,1],
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      level: 5,
      time: 60,
      penalty: 60,
      reward: 400
    },
//Level 6
    {
      question: 'Complete a seguinte estrutura de decisão que determina a aprovação de um estudante quando a classificação é maior ou igual a 10 e um número máximo de 4 faltas.',
      questionType: 'fillSpaces',
      problem:['if classificacao >= {{input1}} {{input2}} faltas > {{input3}}:',
      '{{tab}}print ("aprovado")', 'else:', '{{tab}}print("reprovado")'],
      answers: [
        '20',
        '10',
        '4',
        'and',
        'and not',
        'or',
        'or not'
      ],
      correctAnswer: [2, 5, 3],
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      level: 6,
      time: 60,
      penalty: 82,
      reward: 550
    },
//Level 7
{
  question: 'Complete a seguinte estrutura de decisão que determina a classificação qualitativa de um estudante.',
  questionType: 'fillSpaces',
  problem:[
'if classificacao {{input1}} 10 and faltas {{input2}} 4:',
'{{tab}}texto = ("aprovado com ")',
'{{tab}}if classificacao < {{input3}}:',
'{{tab}}{{tab}}texto += "suficiente."',
'{{tab}}elif classificacao < {{input4}}:',
'{{tab}}{{tab}}texto += "bom."',
'{{tab}}{{input6}}: classificacao < {{input5}}:',
'{{tab}}{{tab}}texto += "muito bom."',
'{{tab}}{{input7}}:',
'{{tab}}{{tab}}texto += "excelente."',
'{{tab}}print (texto)',
'else:',
'{{tab}}print("reprovado")',
  ],
  answers: [
    '<=',
    '>=',
    '19',
    '14',
    '17',
    'else',
    'elif'
  ],
  correctAnswer: [2, 1, 4, 5, 3, 7, 6],
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 6,
  time: 60,
  penalty: 82,
  reward: 550
},
//Level 8
{ question: 'Complete a seguinte funcao que determina o PVP atribuindo 20% de desconto se o preco base é superior a 100€.',
  questionType: 'fillSpaces',
  problem:[
'def pvp(preco):',
'{{tab}}if preco {{input1}} 100:',
'{{tab}}{{tab}}return preco * {{input2}} * 1.23',
'{{tab}}{{input3}}:',
'{{tab}}{{tab}}return preco * {{input4}}'
  ],
  answers: [
    '<',
    '<=',
    '>',
    '>=',
    '0.2',
    '0.8',
    '0.23',
    '1.23',
    'else',
    'elif'
  ],
  correctAnswer: [3, 6, 9, 8],
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 6,
  time: 60,
  penalty: 82,
  reward: 550
}
  ]
};