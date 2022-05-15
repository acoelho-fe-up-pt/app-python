/* eslint-disable */
export default {
  title: 'Estruturas de controlo - ciclos condicionais e contados',
  description: 'Teste os seus conhecimentos destas duas secções com este minijogo.',
  nQuestion: 12,
  defaultMessageForCorrectAnswer: 'Correto!',
  defaultMessageForIncorrectAnswer: 'Incorreto.',
  questions: [
//Level 1
{ question: 'Quantas vezes itera o seguinte ciclo?',
  questionType: 'multipleChoice',
  questionPic: 'M7A_1_1.png',
  answerType: 'text',
  answerSelectionType: 'single',
  answers: [
    '0',
    '1',
    '9',
    '10'
  ],
  correctAnswer: 3,
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 1,
  time: 20,
  penalty: 7,
  reward: 50
},
{  question: 'Quantas vezes itera o seguinte ciclo?',
  questionType: 'multipleChoice',
  questionPic: 'M7A_1_2.png',
  answerType: 'text',
  answerSelectionType: 'single',
  answers: [
    '0',
    '1',
    '9',
    '10'
  ],
  correctAnswer: 3,
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 1,
  time: 20,
  penalty: 7,
  reward: 50
},
//Level 2
{  question: 'Quantas vezes itera o seguinte ciclo?',
  questionType: 'multipleChoice',
  questionPic: 'M7A_2_1.png',
  answerType: 'text',
  answerSelectionType: 'single',
  answers: [
    '0',
    '1',
    '9',
    '10'
  ],
  correctAnswer: 1,
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 2,
  time: 20,
  penalty: 7,
  reward: 50
},
{  question: 'Quantas vezes itera o seguinte ciclo?',
  questionType: 'multipleChoice',
  questionPic: 'M7A_2_2.png',
  answerType: 'text',
  answerSelectionType: 'single',
  answers: [
    '0',
    '1',
    '4',
    '5'
  ],
  correctAnswer: 4,
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 2,
  time: 20,
  penalty: 7,
  reward: 50
},
// Level 3
{  question: 'Quantas vezes itera o seguinte ciclo?',
  questionType: 'multipleChoice',
  questionPic: 'M7A_3_1.png',
  answerType: 'text',
  answerSelectionType: 'single',
  answers: [
    '0',
    '1',
    '9',
    '10',
    '11'
  ],
  correctAnswer: 5,
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 3,
  time: 20,
  penalty: 7,
  reward: 50
},
{  question: 'Quantas vezes itera o seguinte ciclo?',
  questionType: 'multipleChoice',
  questionPic: 'M7A_3_2.png',
  answerType: 'text',
  answerSelectionType: 'single',
  answers: [
    '0',
    '1',
    '9',
    '10',
    '11'
  ],
  correctAnswer: 1,
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 3,
  time: 20,
  penalty: 7,
  reward: 50
},
// Level 4
{  question: 'Quantos números são impressos no seguinte ciclo?',
  questionType: 'multipleChoice',
  questionPic: 'M7A_4_1.png',
  answerType: 'text',
  answerSelectionType: 'single',
  answers: [
    '0',
    '1',
    '2',
    '3',
    '4'
  ],
  correctAnswer: 3,
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 4,
  time: 20,
  penalty: 7,
  reward: 50
},
{  question: 'Quantos números são impressos no seguinte ciclo?',
  questionType: 'multipleChoice',
  questionPic: 'M7A_4_2.png',
  answerType: 'text',
  answerSelectionType: 'single',
  answers: [
    '0',
    '1',
    '2',
    '3',
    '4'
   ],
  correctAnswer: 4,
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 4,
  time: 20,
  penalty: 7,
  reward: 50
},
//Level 5
    { question: 'Complete o seguinte programa que imprime os números de 10 a 1.',
      questionType: 'fillSpaces',
      problem:[
'x = 10',
'while x > {{input1}}:',
'{{tab}}{{input2}}',
'{{tab}}{{input3}}',
],
      answers: [
        '0',
        '1',
        'print(x)',
        'x = x + 1',
        'x = x - 1'
      ],
      correctAnswer: [1, 3, 5],
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      level: 5,
      time: 60,
      penalty: 60,
      reward: 400
    },
//Level 6
    {question: 'Complete programa que imprime os números pares 2, 4, 6 e 8.',
      questionType: 'fillSpaces',
      problem:[
'x = {{input1}}',
'while x {{input2}} {{input3}}:',
'{{tab}}x = x + {{input4}}',
'{{tab}}print (x)'
      ],
      answers: [
        '0',
        '1',
        '2',
        '4',
        '6',
        '8',
        '<',
        '>',
        '<=',
        '>='

      ],
      correctAnswer: [1, 9, 5, 3],
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      level: 6,
      time: 60,
      penalty: 82,
      reward: 550
    },
//Level 7
{ question: 'Complete o seguinte programa que imprime os números 1, 3 e 9.',
questionType: 'fillSpaces',
problem:[
'for i in range(1, 10, 2):',
'{{tab}}if i {{input1}} 5 and i {{input2}} 9:',
'{{tab}}{{tab}}{{input3}}',
'{{tab}}print (i)'
],
answers: [
  '<',
  '>',
  '<=',
  '>=',
  '==',
  'continue',
  'break'
],
correctAnswer: [4, 1, 6],
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 7,
  time: 60,
  penalty: 82,
  reward: 550
},
//Level 8
{ question: 'Complete o seguinte programa que calcula quantos números pares existem entre 1 e 20.',
  questionType: 'fillSpaces',
  problem:[
'contador = {{input1}}',
'for i in range(1,{{input2}}):',
'{{tab}}if i%{{input3}} == 0:',
'{{tab}}{{tab}}contador += {{input4}}',
'print (contador)'
  ],
  answers: [
    '0',
    '1',
    '2',
    '3',
    '20',
    '21'
  ],
  correctAnswer: [1, 6, 3, 2],
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 6,
  time: 60,
  penalty: 82,
  reward: 550
}
  ]
};