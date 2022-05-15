/* eslint-disable max-len */
export default {
  title: 'Compound expressions',
  description: 'Test your knowledge of this section with the following "Compound Expressions" Minigame.',
  nQuestion: 8,
  defaultMessageForCorrectAnswer: 'Correct!',
  defaultMessageForIncorrectAnswer: 'Wrong.',
  questions: [
    // Level 1
    {
      question: 'What is the result of this expression: 3 + 5?',
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
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 1,
      time: 20,
      penalty: 7,
      reward: 50
    },
    {
      question: 'What is the result of this expression: 3 + 5?',
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
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 1,
      time: 20,
      penalty: 7,
      reward: 50
    },
    {
      question: 'What is the result of this expression: 8 - 5?',
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
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 1,
      time: 20,
      penalty: 7,
      reward: 50
    },
    {
      question: 'What is the result of this expression: 5 - 7?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '2',
        '12',
        '-2',
        '3'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 1,
      time: 20,
      penalty: 7,
      reward: 50
    },
    {
      question: 'What is the result of this expression: 3 * 4?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '12',
        '7',
        '3',
        '-12'
      ],
      correctAnswer: 1,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 1,
      time: 20,
      penalty: 7,
      reward: 50
    },
    {
      question: 'What is the result of this expression: 3 * -4?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '12',
        '3',
        '-4',
        '-12'
      ],
      correctAnswer: 4,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 1,
      time: 20,
      penalty: 7,
      reward: 50
    },
    {
      question: 'What is the result of this expression: -3 * 4?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '12',
        '-3',
        '4',
        '-12'
      ],
      correctAnswer: 4,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 1,
      time: 20,
      penalty: 7,
      reward: 50
    },
    {
      question: 'What is the result of this expression: -3 * -4?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '12',
        '-3',
        '4',
        '-12'
      ],
      correctAnswer: 1,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 1,
      time: 20,
      penalty: 7,
      reward: 50
    },
    {
      question: 'What is the result of this expression: 2 ** 3?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '2',
        '6',
        '8',
        '12'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 1,
      time: 20,
      penalty: 7,
      reward: 50
    },
    {
      question: 'What is the result of this expression: 3 ** 2?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '3',
        '6',
        '9',
        '12'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 1,
      time: 20,
      penalty: 7,
      reward: 50
    },
    {
      question: 'What is the result of this expression: 10 ** 4?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '10',
        '100',
        '1000',
        '10000'
      ],
      correctAnswer: 4,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      explanation: 'This expression is equivalent to 10^4 or in scientific notation 10e4',
      level: 1,
      time: 20,
      penalty: 7,
      reward: 50
    },
    // Level 2
    {
      question: 'What is the result of this expression: 8 // 4?',
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
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 2,
      time: 20,
      penalty: 15,
      reward: 100
    },
    {
      question: 'What is the result of this expression: 8 % 4?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '0',
        '1',
        '2',
        '3'
      ],
      correctAnswer: 1,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 2,
      time: 20,
      penalty: 15,
      reward: 100
    },
    {
      question: 'What is the result of this expression: 9 // 2?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '4',
        '4.5',
        '5',
        '5.5'
      ],
      correctAnswer: 1,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 2,
      time: 20,
      penalty: 15,
      reward: 100
    },
    {
      question: 'What is the result of this expression: 9 / 2?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '4',
        '4.5',
        '5',
        '5.5'
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
      question: 'What is the result of this expression: 9 % 2?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '0',
        '1',
        '2',
        '3'
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
      question: 'What is the result of this expression: 124 // 10?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '11',
        '12.3',
        '12',
        '13'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 2,
      time: 20,
      penalty: 15,
      reward: 100
    },
    {
      question: 'What is the result of this expression: 124 % 10?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '4',
        '12',
        '0.4',
        '120'
      ],
      correctAnswer: 1,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 2,
      time: 20,
      penalty: 15,
      reward: 100
    },
    {
      question: 'What is the result of this expression: 124 % 100?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '12',
        '0.4',
        '24',
        '48'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 2,
      time: 20,
      penalty: 15,
      reward: 100
    },
    {
      question: 'What is the result of this expression: 124 // 1000?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '0',
        '1',
        '12',
        '4'
      ],
      correctAnswer: 1,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 2,
      time: 20,
      penalty: 15,
      reward: 100
    },
    {
      question: 'What is the result of this expression: 124 % 1000?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        0,
        4,
        24,
        124
      ],
      correctAnswer: 4,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 2,
      time: 20,
      penalty: 15,
      reward: 100
    },
    // Level 3
    {
      question: 'What is the result of this expression: 3 + 5 - 4?',
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
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 3,
      time: 30,
      penalty: 26,
      reward: 175
    },
    {
      question: 'What is the result of this expression: 3 - 4 + 5?',
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
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 3,
      time: 30,
      penalty: 26,
      reward: 175
    },
    {
      question: 'What is the result of this expression: - 4 + 5 + 3?',
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
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 3,
      time: 30,
      penalty: 26,
      reward: 175
    },
    {
      question: 'What is the result of this expression: -8 + 4 -3?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '9',
        '-1',
        '8',
        '-7'
      ],
      correctAnswer: 4,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 3,
      time: 30,
      penalty: 26,
      reward: 175
    },
    {
      question: 'What is the result of this expression: 5 * 3 * 2?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '15',
        '30',
        '12',
        '24'
      ],
      correctAnswer: 2,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 3,
      time: 30,
      penalty: 26,
      reward: 175
    },
    {
      question: 'What is the result of this expression: -3 * 4 * 2?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        12,
        24,
        -12,
        -24
      ],
      correctAnswer: 4,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 3,
      time: 30,
      penalty: 26,
      reward: 175
    },
    {
      question: 'What is the result of this expression: -3 * 4 * -2?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        24,
        -24,
        10,
        -14
      ],
      correctAnswer: 1,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 3,
      time: 30,
      penalty: 26,
      reward: 175
    },
    {
      question: 'What is the result of this expression: 3 * 4 + 2?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        12,
        14,
        18,
        24
      ],
      correctAnswer: 2,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 3,
      time: 30,
      penalty: 26,
      reward: 175
    },
    {
      question: 'What is the result of this expression: 4 + 3 * 2?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        10,
        12,
        14,
        24
      ],
      correctAnswer: 1,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 3,
      time: 30,
      penalty: 26,
      reward: 175
    },
    {
      question: 'What is the result of this expression: 2 ** 3 * 2?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        8,
        16,
        32,
        64
      ],
      correctAnswer: 2,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 3,
      time: 30,
      penalty: 26,
      reward: 175
    },
    // Level 4
    {
      question: 'What is the result of this expression: -3 ** 2 * 2',
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
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 4,
      time: 35,
      penalty: 41,
      reward: 275
    },
    {
      question: 'What is the result of this expression: -3 ** 3?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        9,
        -9,
        27,
        -27
      ],
      correctAnswer: 4,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 4,
      time: 35,
      penalty: 41,
      reward: 275
    },
    {
      question: 'What is the result of this expression: (3 + 4) * (7 - 5)?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        12,
        14,
        18,
        24
      ],
      correctAnswer: 2,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 4,
      time: 35,
      penalty: 41,
      reward: 275
    },
    {
      question: 'What is the result of this expression: 5 + 2 ** 2?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        9,
        25,
        49,
        54
      ],
      correctAnswer: 1,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 4,
      time: 35,
      penalty: 41,
      reward: 275
    },
    {
      question: 'What is the result of this expression: 14 - 3 ** 2?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        5,
        19,
        49,
        121
      ],
      correctAnswer: 1,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 4,
      time: 35,
      penalty: 41,
      reward: 275
    },
    {
      question: 'What is the result of this expression: (4 - 5) ** (2 * 5)?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        -1,
        1,
        -2,
        2
      ],
      correctAnswer: 2,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 4,
      time: 35,
      penalty: 41,
      reward: 275
    },
    {
      question: 'What is the result of this expression: (4 - 5) ** 5 * 2?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        -1,
        1,
        -2,
        2
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 4,
      time: 35,
      penalty: 41,
      reward: 275
    },
    // Level 5
    {
      question: 'What is the result of this expression: 9 / 6?',
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
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 5,
      time: 35,
      penalty: 60,
      reward: 400
    },
    {
      question: 'What is the result of this expression: 10 / 5?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        2,
        2.0,
        2.01,
        1.99
      ],
      correctAnswer: 2,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 5,
      time: 35,
      penalty: 60,
      reward: 400
    },
    {
      question: 'What is the result of this expression: -9 / 4?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        2,
        -2,
        2.25,
        -2.25
      ],
      correctAnswer: 4,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 5,
      time: 35,
      penalty: 60,
      reward: 400
    },
    {
      question: 'What is the result of this expression: -9 / -4.5?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        2,
        -2,
        2.0,
        -2.0
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 5,
      time: 35,
      penalty: 60,
      reward: 400
    },
    {
      question: 'What is the result of this expression: 8 / 6?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '1.0',
        '1.2222222222222222',
        '1.3',
        '1.3333333333333333'
      ],
      correctAnswer: 4,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 5,
      time: 35,
      penalty: 60,
      reward: 400
    },
    {
      question: 'What is the result of this expression: (1.5 + 2  /  4) * (5 - 7)?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '-2.0',
        '2.0',
        '-4.0',
        '4.0'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 5,
      time: 35,
      penalty: 60,
      reward: 400
    },
    // Level 6
    {
      question: 'What is the result of this expression: 1e2?',
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
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 6,
      time: 35,
      penalty: 82,
      reward: 550
    },
    {
      question: 'What is the result of this expression: 10 / 5e2?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '0.01',
        '0.02',
        '0.001',
        '0.002'
      ],
      correctAnswer: 2,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 6,
      time: 35,
      penalty: 82,
      reward: 550
    },
    {
      question: 'What is the result of this expression: -1.5e-3 * 2e3?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '-0.3',
        '-3.0',
        '0.3',
        '3.0'
      ],
      correctAnswer: 2,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 6,
      time: 35,
      penalty: 82,
      reward: 550
    },
    {
      question: 'What is the result of this expression: 1.23e2 / 2e-1?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '1.23',
        '12.3',
        '61.5',
        '615.0'
      ],
      correctAnswer: 4,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 6,
      time: 35,
      penalty: 82,
      reward: 550
    },
    {
      question: 'What is the result of this expression:  1.23e2 + 2.54e4?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '3.77',
        '377.0',
        '25523.0',
        '254123.0'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 6,
      time: 35,
      penalty: 82,
      reward: 550
    },
    // Level 7
    {
      question: 'Which expression in Python represents the following mathematical expression?',
      questionType: 'multipleChoice',
      answerType: 'text',
      questionPic: 'M5A_71.png',
      answerSelectionType: 'single',
      answers: [
        '(3 - 5) * (3 + 6)',
        '(3 - 5) * (3 * 6)',
        '(3 - 5) / 3 / 6',
        '(3 - 5) / 3 * 6'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 7,
      time: 40,
      penalty: 110,
      reward: 750
    },
    {
      question: 'Which expression in Python represents the following mathematical expression?',
      questionType: 'multipleChoice',
      answerType: 'text',
      questionPic: 'M5A_72.png',
      answerSelectionType: 'single',
      answers: [
        '(3 - 5) * 3 * 5 / (3 + 6 + 3 - 6)',
        '(3 - 5) * 3 * 5 / (3 + 6)  *  (3 - 6)',
        '(3 - 5) / (3 + 6) *  (3 * 5) *  (3-6)',
        '(3 - 5) / (3 + 6) *  3 * 5 / (3-6)'
      ],
      correctAnswer: 4,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 7,
      time: 40,
      penalty: 110,
      reward: 750
    },
    {
      question: 'Which expression in Python represents the following mathematical expression?',
      questionType: 'multipleChoice',
      answerType: 'text',
      questionPic: 'M5A_73.png',
      answerSelectionType: 'single',
      answers: [
        '(3 + 5) ** 2 / (4 * 2 * (7 - 3))',
        '(3 + 5) * (3 + 5) / (4 * 2) * (7 - 3)',
        '(3 + 5) / (4 * 2) *  (3 + 5) * (7 - 3)',
        '(3 + 5) * (3 + 5) / ((4 * 2) / (7 - 3))'
      ],
      correctAnswer: 1,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 7,
      time: 40,
      penalty: 110,
      reward: 750
    },
    {
      question: 'Which expression in Python represents the following mathematical expression?',
      questionType: 'multipleChoice',
      answerType: 'text',
      questionPic: 'M5A_74.png',
      answerSelectionType: 'single',
      answers: [
        '2 * 3 ** 2 * (3 + 6) * (3 -1)',
        '2 * 3 ** 2 / ((3 + 6) * (3 -1))',
        '2 * 3 ** 2 / (3 + 6) * (3 -1)',
        '2 * 3 ** 2 * ((3 + 6) * (3 -1))'
      ],
      correctAnswer: 2,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 7,
      time: 40,
      penalty: 110,
      reward: 750
    },
    // Level 8
    {
      question: 'What value do you get from the following expression in Python: (3 + 5) / (4 * 2) * (3 + 5) ** 2?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '32.0',
        '64.0',
        '128.0',
        '256.0'
      ],
      correctAnswer: 2,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 8,
      time: 40,
      penalty: 150,
      reward: 1000
    },
    {
      question: 'What value do you get from the following expression in Python: (3 + 5) / 4 * 2 * (3 + 5) ** 2?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '32.0',
        '64.0',
        '128.0',
        '256.0'
      ],
      correctAnswer: 4,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 8,
      time: 40,
      penalty: 150,
      reward: 1000
    },
    {
      question: 'What value do you get from the following expression in Python: 2 * 3 ** 2 * (3 + 6) / (3 -1)?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '27.0',
        '54.0',
        '81.0',
        '162.0'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      level: 8,
      time: 40,
      penalty: 150,
      reward: 1000
    }
  ]
};
