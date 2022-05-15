/* eslint-disable */
export default {
  title: 'Functions, parameters, and arguments',
  description: 'Test your knowledge of this section with the "Functions, parameters and arguments" mini-game.',
  nQuestion: 8,
  defaultMessageForCorrectAnswer: 'Correct!',
  defaultMessageForIncorrectAnswer: 'Wrong.',
  questions: [
//Level 1
    {
      question: 'Which statement initiates the definition of a function?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'def',
        'function',
        'void',
        'proc'
      ],
      correctAnswer: 1,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      explanation: 'The definition of a function begins with def', 
      level: 1,
      time: 20,
      penalty: 7,
      reward: 50
    },
    {
      question: 'Which statement allows you to return values in a function?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'end',
        'begin',
        'return',
        'set'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      explanation: 'The return statement terminates the execution of a function and returns an object.', 
      level: 1,
      time: 20,
      penalty: 7,
      reward: 50
    },
//Level 2
    {
      question: 'What is the formal name of the identifier x?',
      questionType: 'multipleChoice',
      questionPic: 'M6A_2_1.png',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'argument',
        'parameter',
        'literal',
        'variable'
      ],
      correctAnswer: 2,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 2,
      time: 20,
      penalty: 15,
      reward: 100
    },
    {
      question: 'When calling a function what is the value passed to the function in dobro(5) ? ("dobro" means "double")',
      questionType: 'multipleChoice',
      questionPic: 'M6A_2_2.png',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'argument',
        'parameter',
        'literal',
        'variable'
      ],
      correctAnswer: 1,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 2,
      time: 20,
      penalty: 15,
      reward: 100
    },
//Level 3
    {
      question: 'What is the result of the following call to the function teste?',
      questionType: 'multipleChoice',
      questionPic: 'M6A_3_1.png',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '12',
        '11',
        '10',
        '5'
      ],
      correctAnswer: 2,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 3,
      time: 20,
      penalty: 26,
      reward: 175
    },
//Level 4
    {
      question: 'What is the result of the following call to the function teste? ',
      questionType: 'multipleChoice',
      questionPic: 'M6A_4_1.png',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '8',
        '16',
        '24',
        '32'
      ],
      correctAnswer: 2,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 4,
      time: 30,
      penalty: 41,
      reward: 275
    },
//Level 5
    {
      question: 'Build the following function that should return the triple of a value.',
      questionType: 'fillSpaces',
      problem:['{{input1}} triplo {{input2}}:',
      '{{tab}}{{input3}} {{input4}}'],
      answers: [
        'def',
        '(x)',
        'return',
        'print',
        'x * 3',
        'x + 3'
      ],
      correctAnswer: [1,2,3,5],
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 5,
      time: 60,
      penalty: 60,
      reward: 400
    },
//Level 6
    {
      question: 'Build the following function that should return the square of a value.',
      questionType: 'fillSpaces',
      problem:['def quadrado(x)',
      '{{tab}}{{input1}} = {{input2}}{{input3}}{{input4}}',
      '{{tab}}return r'],
      answers: [
        'r',
        'x',
        '2',
        '*',
        '+'
      ],
      correctAnswer: [1,2,4,2],
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 6,
      time: 60,
      penalty: 82,
      reward: 550
    },
//Level 7
    {
      question: 'The following function returns the multiple of a number. \However, when testing the statement: \n>> multiple (5, 3) \nwe obtain as result the number 8, when the correct result should be 15, the triple of 5.',
      questionType: 'fixBugs',
      problem:['def multiplo(numero, fator):',
      '{{tab}}m={{input1}}{{input2}}{{input3}}',
      '{{tab}}return {{input4}}'
      ],
      inputs: {
      input1:{options:['m','fator',0],selected: 'numero'},
      input2:{options:['-','^','*'],selected: '+'},
      input3:{options:['m','numero',0],selected: 'fator'},
      input4:{options:['fator','numero',0],selected: 'm'},
      },
      correctAnswer: [{input:2, option:3}],
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 7,
      time: 60,
      penalty: 112,
      reward: 750
    },
//Level 8
    {
      question: 'Build the function pvp, which returns the retail price of an article. \Adds to the price of the item the value of the VAT, which is equal to 23% of the price.',
      questionType: 'buildCode',
      answers:[
      'preco',
      '   return ',
      'def ', 
      '(',
      ')',
      ' + ',
      ' * ',
      0.23,
      'pvp',
      '\\n',
      ':'
      ],
      correctAnswer: [
        [ 
         [3,9,4,1,5,11],
         [2,1,6,1,7,8]
        ]
      ],
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 8,
      time: 120,
      penalty: 150,
      reward: 1000
    },
  ]
};