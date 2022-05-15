/* eslint-disable */
export default {
  title: 'Dados',
  description: 'Teste os seus conhecimentos desta secção com o seguinte minijogo "dados".',
  nQuestion: 8,
  defaultMessageForCorrectAnswer: 'Correto!',
  defaultMessageForIncorrectAnswer: 'Incorreto.',
  questions: [
    {
      question: 'Para somar os números da lista [1,2,3].',
      questionType: 'buildCode',
      answers: [
        '0', // 1
        'c', // 2
        '+', // 3
        's', // 4
        'for c', // 5
        '[1,2,3]:', // 6
        'print', // 7
        'in', // 8
        's = ', // 9
        '(s)', // 10
        '\\n' // 11
      ],
      correctAnswer: [[
        [9, 1],
        [5, 8, 6],
        [9, 4, 3, 2],
        [7, 10]
      ],
      [
        [9, 1],
        [5, 8, 6],
        [9, 2, 3, 4],
        [7, 10]
      ]],
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      level: 1,
      time: 180,
      penalty: 1,
      reward: 3
    }, 
    {
      question: 'Para somar os números da lista.',
      problem: ['soma ={{input1}}',
        'for c{{input2}}[1,2,3]:',
        's ={{input3}}{{input4}}c',
        'print(s)'],
      inputs: {
        input1: { options: [-1, 3, 1, 2], selected: 0 },
        input2: { options: ['i', 'of', 'include', 'on'], selected: 'in' },
        input3: { options: ['d', 'sizeof(s)', 'length(s)', 'soma'], selected: 's' },
        input4: { options: ['+', '/', '*', '//'], selected: '-' }
      },
      questionType: 'fixBugs',
      correctAnswer: [{ input: 4, option: 1 }],
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      level: 1,
      time: 2000,
      penalty: 1,
      reward: 3
    },
    {
      question: 'Qual o resultado destas expressões?',
      problem: ['3 + 5={{input1}}',
        '0+0={{input2}}',
        '1+2={{input3}}',
        '6-1={{input4}}'],
      questionType: 'fillSpaces',
      answers: [
        '3',
        '5',
        '8',
        '0'
      ],
      correctAnswer: [3, 4, 1, 2],
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      level: 1,
      time: 600,
      penalty: 1,
      reward: 3
    },
    {
      question: 'Qual o resultado desta expressão: 3 + 5',
      questionType: 'multipleChoice',
      answerType: 'photo',
      answerSelectionType: 'single',
      answers: [
        '3.png',
        '5.png',
        '8.png',
        '0.png'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      level: 1,
      time: 20,
      penalty: 1,
      reward: 3
    },
    {
      question: 'Qual o resultado desta expressão: 3 + 5',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '3',
        '5',
        '8',
        '0'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      level: 1,
      time: 20,
      penalty: 1,
      reward: 3
    },
    {
      question: 'Qual não é o resultado desta expressão: 3 + 5',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'multiple',
      answers: [
        '3',
        '5',
        '8',
        '0'
      ],
      correctAnswer: [1, 2, 4],
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      level: 1,
      time: 20,
      penalty: 1,
      reward: 3
    },
    {
      question: 'Qual o resultado desta expressão: 8 - 5',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '3',
        '5',
        '8',
        '-3'
      ],
      correctAnswer: 1,
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      level: 1,
      time: 10,
      penalty: 1,
      reward: 3
    },
    {
      question: 'Qual o resultado desta expressão: 10 ** 4',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '10',
        '100',
        '1000',
        '100000'
      ],
      correctAnswer: 4,
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      explanation: 'Esta expressão equivale a 10^4 ou em notação científica 10e4',
      level: 1,
      time: 45,
      penalty: 1,
      reward: 3
    },
    {
      question: 'Qual o resultado desta expressão: 8 // 4',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '1',
        '2',
        '3',
        '4'
      ],
      correctAnswer: 2,
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      level: 2,
      time: 45,
      penalty: 1,
      reward: 3
    },
    {
      question: 'Qual o resultado desta expressão: 3 + 5 - 4',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '3',
        '4',
        '5',
        '8'
      ],
      correctAnswer: 2,
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      level: 3,
      time: 45,
      penalty: 1,
      reward: 3
    },
    {
      question: 'Qual o resultado desta expressão: -3 ** 2 * 2',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '18',
        '24',
        '-18',
        '-24'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      level: 4,
      time: 45,
      penalty: 1,
      reward: 3
    },
    {
      question: 'Qual o resultado desta expressão: 9 / 6',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '1.0',
        '1.25',
        '1.5',
        '2.0'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      level: 5,
      time: 45,
      penalty: 1,
      reward: 3
    },
    {
      question: 'Qual o resultado desta expressão: 1e2',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '1.0',
        '10.0',
        '100.0',
        '1000.0'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      level: 6,
      time: 45,
      penalty: 1,
      reward: 3
    },
    {
      question: 'Qual a expressão em Python que representa a seguinte expressão matemática:',
      questionType: 'multipleChoice',
      answerType: 'text',
      questionPic: 'M311A_71.png',
      answerSelectionType: 'single',
      answers: [
        '(3 - 5) * (3 + 6)',
        '(3 - 5) * (3 * 6)',
        '(3 - 5) / 3 / 6',
        '(3 - 5) / 3 * 6'

      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      level: 7,
      time: 45,
      penalty: 1,
      reward: 3
    },
    {
      question: 'Qual o valor que se obtém da seguinte expressão em Python: (3 + 5) / (4 * 2) * (3 + 5) ** 2',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '32.0',
        '64.0',
        '128.0',
        '256.0'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      level: 8,
      time: 80,
      penalty: 1,
      reward: 3
    },
  ]
};
