/* eslint-disable */
export default {
  title: 'Control structures - conditional and counted loops',
  description: 'Test your knowledge of these two sections with this mini-game.',
  nQuestion: 12,
  defaultMessageForCorrectAnswer: 'Correct!',
  defaultMessageForIncorrectAnswer: 'Wrong.',
  questions: [
//Level 1
{ question: 'How many times does the following cycle iterate?',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  level: 1,
  time: 20,
  penalty: 7,
  reward: 50
},
{  question: 'How many times does the following cycle iterate?',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  level: 1,
  time: 20,
  penalty: 7,
  reward: 50
},
//Level 2
{  question: 'How many times does the following cycle iterate?',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  level: 2,
  time: 20,
  penalty: 7,
  reward: 50
},
{  question: 'How many times does the following cycle iterate?',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  level: 2,
  time: 20,
  penalty: 7,
  reward: 50
},
// Level 3
{  question: 'How many times does the following cycle iterate?',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  level: 3,
  time: 20,
  penalty: 7,
  reward: 50
},
{  question: 'How many times does the following cycle iterate?',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  level: 3,
  time: 20,
  penalty: 7,
  reward: 50
},
// Level 4
{  question: 'How many numbers are printed in the following cycle?',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  level: 4,
  time: 20,
  penalty: 7,
  reward: 50
},
{  question: 'How many numbers are printed in the following cycle?',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  level: 4,
  time: 20,
  penalty: 7,
  reward: 50
},
//Level 5
    { question: 'Complete the following program that prints the numbers from 10 to 1.',
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
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 5,
      time: 60,
      penalty: 60,
      reward: 400
    },
//Level 6
    {question: 'Complete a program that prints the even numbers 2, 4, 6, and 8.',
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
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 6,
      time: 60,
      penalty: 82,
      reward: 550
    },
//Level 7
{ question: 'Complete the following program that prints the numbers 1, 3, and 9.',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  level: 7,
  time: 60,
  penalty: 82,
  reward: 550
},
//Level 8
{ question: 'Complete the following program that calculates how many even numbers there are between 1 and 20.',
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
  messageForCorrectAnswer: 'Correct!',
  messageForIncorrectAnswer: 'Wrong.',
  level: 6,
  time: 60,
  penalty: 82,
  reward: 550
}
  ]
};