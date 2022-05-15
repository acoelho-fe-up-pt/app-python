/* eslint-disable */
export default {
  title: 'Error detection and correction',
  description: 'Test your knowledge of these two sections with this mini-game.',
  nQuestion: 12,
  defaultMessageForCorrectAnswer: 'Correto!',
  defaultMessageForIncorrectAnswer: 'Incorreto.',
  questions: [
//Level 1
{ question: 'A misspelled identifier is an error...\n(example: "prit" instead of "print")',
  questionType: 'multipleChoice',
  answerType: 'text',
  answerSelectionType: 'single',
  answers: [
    'lexical',
    'syntactic',
    'semantic'
  ],
  correctAnswer: 1,
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 1,
  time: 20,
  penalty: 7,
  reward: 50
},
{ question: 'Forgeting of a ":" is an error...',
  questionType: 'multipleChoice',
  answerType: 'text',
  answerSelectionType: 'single',
  answers: [
    'lexical',
    'syntactic',
    'semantic'
  ],
  correctAnswer: 2,
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 1,
  time: 20,
  penalty: 7,
  reward: 50
},
{ question: 'Not selcting the right operator is an error...\n(exemplo: "x += 1" em vez de "x -= 1"',
questionType: 'multipleChoice',
answerType: 'text',
answerSelectionType: 'single',
answers: [
  'lexical',
  'syntactic',
  'semantic'
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
{ question: 'Detect the type of error in the following program:',
questionType: 'multipleChoice',
questionPic: 'M7B_2_1.png',
answerType: 'text',
answerSelectionType: 'single',
answers: [
  'lexical',
  'syntactic',
  'semantic'
],
correctAnswer: 2,
messageForCorrectAnswer: 'Correto!',
messageForIncorrectAnswer: 'Incorreto.',
level: 2,
time: 30,
penalty: 7,
reward: 50
},
{ question: 'Detect the type of error in the following program:',
questionType: 'multipleChoice',
questionPic: 'M7B_2_2.png',
answerType: 'text',
answerSelectionType: 'single',
answers: [
  'lexical',
  'syntactic',
  'semantic'
],
correctAnswer: 1,
messageForCorrectAnswer: 'Correto!',
messageForIncorrectAnswer: 'Incorreto.',
level: 2,
time: 30,
penalty: 7,
reward: 50
},
{ question: 'Detect the type of error in the following program:',
questionType: 'multipleChoice',
questionPic: 'M7B_2_3.png',
answerType: 'text',
answerSelectionType: 'single',
answers: [
  'lexical',
  'syntactic',
  'semantic'
],
correctAnswer: 3,
messageForCorrectAnswer: 'Correto!',
messageForIncorrectAnswer: 'Incorreto.',
level: 2,
time: 30,
penalty: 7,
reward: 50
},
// Level 3
{ question: 'The following program should return the even numbers 2, 4, 6, 8, 10.\nBut it returns only 2, 4, 6, 8.\nFind the error and correct it.',
  questionType: 'fixBugs',
  problem:[
    'for i in range({{input1}},{{input2}}):',
    '{{tab}}print(i * {{input3}})'
  ],
  inputs: {
  input1:{options:['1', '2', '3'],selected: '1'},
  input2:{options:['4', '5', '6'],selected: '5'},
  input3:{options:['2','3','4'],selected: '2'},
  },
  correctAnswer: [{input:2, option:3}],
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 3,
  time: 60,
  penalty: 112,
  reward: 750
},
// Level 4
{ question: "The following program should count how many elements there are in the set, but it doesn't give the correct number.",
  questionType: 'fixBugs',
  problem:[
    'x = {{input1}}',
    'for numero in [1, 2, 3, 4, 5]:',
        '{{tab}}x = x {{input2}} 1',
    'print (x)'
  ],
  inputs: {
  input1:{options:['0', '1'],selected: '1'},
  input2:{options:['1', '2', '3'],selected: '1'},
  },
  correctAnswer: [{input:1, option:1}],
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 4,
  time: 60,
  penalty: 112,
  reward: 750
},
//Level 5
{ question: 'The following program should sum the numbers in the set, but it does not give the correct number.',
  questionType: 'fixBugs',
  problem:[
    'x = {{input1}}',
    'for numero in [1, 2, 3, 4, 5]:',
        '{{tab}}x = x {{input2}} {{input3}}',
    'print(x)'
  ],
  inputs: {
  input1:{options:['0', '1'],selected: '0'},
  input2:{options:['+', '-', '/', '*'],selected: '+'},
  input3:{options:['1', '2', 'n', 'numero'],selected: '1'}
  },
  correctAnswer: [{input:3, option:4}],
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 5,
  time: 60,
  penalty: 112,
  reward: 750
},

//Level 6
{ question: 'The following program should calculate the maximum of a set of natural numbers.\nFind the error and correct it.',
  questionType: 'fixBugs',
  problem:[
    'x = {{input1}}',
    'for numero in [5, 2, 7, 4, 3]:',
        '{{tab}}if x {{input2}} {{input3}}:',
            '{{tab}}{{tab}}{{input4}} = {{input5}}',
    'print ({{input6}})'
  ],
  inputs: {
  input1:{options:['0', '1'],selected: '0'},
  input2:{options:['<','>','==','!='],selected: '>'},
  input3:{options:['x', 'numero'],selected: 'numero'},
  input4:{options:['x', 'numero'],selected: 'x'},
  input5:{options:['x', 'numero'],selected: 'numero'},
  input6:{options:['x', 'numero'],selected: 'numero'},
  },
  correctAnswer: [{input:6, option:1}],
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 6,
  time: 60,
  penalty: 112,
  reward: 750
},
//Level 7
{ question: 'The following program should return the even numbers 2, 4, 6, 8, 10.\nBut it returns only 2, 4, 6, 8.\nFind the error and correct it.',
  questionType: 'fixBugs',
  problem:[
    'for i in range({{input1}},{{input2}}):',
    '{{tab}}print(i * {{input3}})'
  ],
  inputs: {
  input1:{options:['1', '2', '3'],selected: '1'},
  input2:{options:['4', '5', '6'],selected: '5'},
  input3:{options:['2','3','4'],selected: '2'},
  },
  correctAnswer: [{input:2, option:3}],
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 7,
  time: 60,
  penalty: 112,
  reward: 750
},
//Level 8
{ question: 'Correct the 4 errors in the following heads or tails game, where you win 100 points or lose 50 each turn, and end when you reach 500 points or go negative.',
  questionType: 'fixBugs',
  problem:[
    'import random',
    'pontos = 100',
    'while pontos {{input1}} 500 and not pontos {{input2}} 0:',
        '{{tab}}x = input("cara ou coroa:")',
        '{{tab}}if x == random.choice(["cara", "coroa"]):',
            '{{tab}}{{tab}}pontos {{input3}} 100',
        '{{tab}}else:',
            '{{tab}}{{tab}}pontos {{input4}} 50',
        '{{tab}}print(pontos)'  ],
  inputs: {
    input1:{options:['<','<=','>','>=','=='],selected: '<'},
    input2:{options:['<','<=','>','>=','=='],selected: '<'},
    input3:{options:['=', '+=', '-='],selected: '='},
    input4:{options:['=', '+=', '-='],selected: '='},
  },
  correctAnswer: [{input:1, option:1}, {input:2, option:1},{input:3, option:2},{input:4, option:3}],
  messageForCorrectAnswer: 'Correto!',
  messageForIncorrectAnswer: 'Incorreto.',
  level: 8,
  time: 60,
  penalty: 112,
  reward: 750
}
  ]
};