/* eslint-disable */
export default {
  title: 'Decision structures',
  description: 'Test your knowledge of this section with this mini-game.',
  nQuestion: 11,
  defaultMessageForCorrectAnswer: 'Correct!',
  defaultMessageForIncorrectAnswer: 'Wrong.',
  questions: [
//Level 1
{
  question: 'Which instruction implements the conditional decision structure?',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  explanation: 'A decision structure always starts with if.', 
  level: 1,
  time: 20,
  penalty: 7,
  reward: 50
},
{
  question: 'Which instruction implements the conditional decision structure?',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  explanation: 'A decision structure always starts with if.', 
  level: 1,
  time: 20,
  penalty: 7,
  reward: 50
},
//Level 2
{
  question: 'An alternative decision structure is defined by starting with if and following...',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  explanation: 'An alternative decision structure includes else for the block corresponding to a condition evaluated as false.', 
  level: 2,
  time: 20,
  penalty: 7,
  reward: 50
},{
  question: 'A multiple selection structure can add new conditions through various...',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  explanation: 'A multiple selection structure includes elif for each addicional condition.', 
  level: 2,
  time: 20,
  penalty: 7,
  reward: 50
},
//Level 3
{
  question: 'What is the result of the following conditional expression:\n 3 > 2 and not 2 == 3-1',
  questionType: 'multipleChoice',
  questionPic: 'M6A_3_1.png',
  answerType: 'text',
  answerSelectionType: 'single',
  answers: [
    'True',
    'False'
  ],
  correctAnswer: 2,
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  level: 3,
  time: 20,
  penalty: 26,
  reward: 175
},
{
  question: 'What is the result of the following conditional expression:\n 3 > 2 or not 2 == 3-1',
  questionType: 'multipleChoice',
  questionPic: 'M6A_3_1.png',
  answerType: 'text',
  answerSelectionType: 'single',
  answers: [
    'True',
    'False'
  ],
  correctAnswer: 1,
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  level: 3,
  time: 20,
  penalty: 26,
  reward: 175
},
//Level 4
{
  question: 'What is the value of x that makes this conditional expression true?\n x > 2 and x < 5',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  level: 4,
  time: 20,
  penalty: 41,
  reward: 275
},
{
  question: 'What is the value of x that makes this conditional expression true?\n x > 2 or x != 3',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  level: 4,
  time: 20,
  penalty: 41,
  reward: 275
},
//Level 5
    {
      question: 'Complete the following conditional structure.',
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
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 5,
      time: 60,
      penalty: 60,
      reward: 400
    },
//Level 6
    {
      question: "Complete the following decision structure that determines a student's approval when the grade is greater than or equal to 10 and has a maximum number of 4 absences.",
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
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 6,
      time: 60,
      penalty: 82,
      reward: 550
    },
//Level 7
{
  question: "Complete the following decision structure that determines a student's qualitative rating.",
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  level: 6,
  time: 60,
  penalty: 82,
  reward: 550
},
//Level 8
{ question: 'Complete the following function that determines the PVP by giving a 20% discount if the base price is over $100.',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  level: 6,
  time: 60,
  penalty: 82,
  reward: 550
}
  ]
};