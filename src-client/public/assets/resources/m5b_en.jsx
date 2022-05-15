/* eslint-disable */
export default {
  title: 'Identifiers and variables',
  description: 'Test your knowledge of this section with the "Identifiers and Variables" Minigame.',
  nQuestion: 8,
  defaultMessageForCorrectAnswer: 'Correct!',
  defaultMessageForIncorrectAnswer: 'Wrong.',
  questions: [
//Level 1
    {
      question: 'Which of the following identifiers is not valid?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '3porcento',
        'Tresporcento',
        'tresPorCento',
        'tres_por_cento'
      ],
      correctAnswer: 1,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      explanation: 'Identifiers cannot start with a digit.', 
level: 1, 
time: 30,
 penalty: 7,
  reward: 50
    },
    {
      question: 'Which of the following identifiers is not valid?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '2x',
        'doisx',
        '2 x',
        'X2'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      explanation: 'Identifiers cannot have spaces.', 
level: 1, 
time: 30, 
penalty: 7, 
reward: 50
    },
    {
      question: 'Which of the following identifiers is not valid?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'xQuadrado',
        'x2',
        'x**2',
        'x_2'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      explanation: 'Identifiers cannot have characters that represent operators (** - exponentiation).', 
level: 1,
 time: 30,
  penalty: 7,
   reward: 50
    },
    {
      question: 'Which of the following identifiers is not valid?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'dobro_x',
        'x2',
        'x*2',
        'x_2'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      explanation: 'Identifiers cannot have characters that represent operators (** - exponentiation).', 
level: 1, 
time: 30, 
penalty: 7, 
reward: 50
    },
    {
      question: 'Which of the following identifiers is not valid?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'and',
        'a_n_d',
        '_and',
        'and_'
      ],
      correctAnswer: 1,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      explanation: 'Identifiers cannot have keywords (and).', 
level: 1,
 time: 30,
  penalty: 7, 
  reward: 50
    },
    {
      question: 'Which of the following identifiers is not valid?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'o_r_',
        '_or',
        'or_',
        'or'
      ],
      correctAnswer: 4,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      explanation: 'Identifiers cannot have keywords (or).', 
level: 1, 
time: 30, 
penalty: 7,
 reward: 50
    },
    {
      question: 'Which of the following identifiers is not valid?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'f_o_r_',
        '_for',
        'for',
        'for_'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      explanation: 'Identifiers cannot have keywords (for).', 
level: 1, 
time: 30, 
penalty: 7, 
reward: 50
    },
    {
      question: 'Which of the following identifiers is not valid?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'iva',
        'imposto',
        '23%',
        '_23_'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      explanation: 'Identifiers can neither start with a digit nor have operators (% - division remainder).', 
level: 1,
 time: 30, 
 penalty: 7,
  reward: 50
    },
    {
      question: 'Which of the following identifiers is not valid?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'pi',
        '3.14',
        '_3_14',
        'Pi3_14'
      ],
      correctAnswer: 2,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      explanation: 'Identifiers can neither begin with a digit nor have operators (.).', 
level: 1, 
time: 30, 
penalty: 7, 
reward: 50
    },
    {
      question: 'Which of the following identifiers is not valid?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '1, 2 e 3',
        '_123',
        '123_',
        'o123'
      ],
      correctAnswer: 1,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      explanation: 'Identifiers cannot have spaces or operators (,).', 
level: 1,
 time: 30,
  penalty: 7, 
  reward: 50
    },
//Level 2
    {
      question: 'What is the most appropriate identifier for a constant with the VAT value?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'V',
        'VAT',
        '_23percent',
        'tax'
      ],
      correctAnswer: 2,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
level: 2, 
time: 30,
 penalty: 15,
  reward: 100
    },
    {
      question: "What is the most appropriate identifier for player one's balance?",
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'B1',
        'balance',
        'P1',
        'balance_player_1'
      ],
      correctAnswer: 4,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
level: 2, 
time: 30, 
penalty: 15, 
reward: 100
    },
    {
      question: "What is the most appropriate identifier for a player's score?",
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'S',
        'scr',
        'score',
        'the_score_of_the_player'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
level: 2, 
time: 30, 
penalty: 15, 
reward: 100
    },
    {
      question: 'What is the most appropriate identifier for the value for a sum?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'sum',
        's',
        'sx',
        's_'
      ],
      correctAnswer: 1,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
level: 2, 
time: 30, 
penalty: 15, 
reward: 100
    },
    {
      question: 'What is the most appropriate identifier for a counter?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'sum',
        'counter',
        'c',
        'cnt'
      ],
      correctAnswer: 2,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
level: 2, 
time: 30, 
penalty: 15, 
reward: 100
    },
    {
      question: 'What is the most appropriate identifier for a constant relative to height?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'height',
        'Height',
        'H',
        'HEIGHT'
      ],
      correctAnswer: 4,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      explanation: 'Constants are usually represented by upper case letters.', 
level: 2, 
time: 30, 
penalty: 15, 
reward: 100
    },
    {
      question: 'What is the most appropriate identifier for a variable concerning the number of columns?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'NCOL',
        'c',
        'n_columns',
        'n'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
level: 2, time: 30, penalty: 15, reward: 100
    },
    {
      question: 'What is the most appropriate identifier for a constant relative to the width?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'width',
        'W',
        'WIDTH',
        'Width'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
      explanation: 'Constants are usually represented by upper case letters.', 
level: 2, time: 30, penalty: 15, reward: 100
    },
    {
      question: 'What is the most appropriate identifier for a variable concerning the number of rows?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'NR',
        'r',
        'n_rows',
        'n'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
level: 2, time: 30, penalty: 15, reward: 100
    },
    {
      question: 'What is the most appropriate identifier for a variable concerning the number of players?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'P',
        'p',
        'n_players',
        'n'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
level: 2, time: 30, penalty: 15, reward: 100
    },
//Level 3
    {
      question: 'What is the value of the variable x in the expression x = 3 + 5 - 4?',
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
level: 3, time: 30, penalty: 26, reward: 175
    },
    {
      question: 'What is the value of the variable x in the expression x = 3 - 4 + 5?',
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
level: 3, time: 30, penalty: 26, reward: 175
    },
    {
      question: 'What is the value of the variable x in the expression x = - 4 + 5 + 3?',
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
level: 3, time: 30, penalty: 26, reward: 175
    },
    {
      question: 'What is the value of the variable x in the expression x = -8 + 4 - 3?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '-9',
        '7',
        '8',
        '-7'
      ],
      correctAnswer: 4,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
level: 3, time: 30, penalty: 26, reward: 175
    },
    {
      question: 'What is the value of the variable x in the expression x = 5 * 3 * 2?',
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
level: 3, time: 30, penalty: 26, reward: 175
    },
    {
      question: 'What is the value of the variable x in the expression x = -3 * 4 * 2?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '12',
        '24',
        '-12',
        '-24'
      ],
      correctAnswer: 4,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
level: 3, time: 30, penalty: 26, reward: 175
    },
    {
      question: 'What is the value of the variable x in the expression x = -3 * 4 * -2?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '24',
        '-24',
        '10',
        '-14'
      ],
      correctAnswer: 1,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
level: 3, time: 30, penalty: 26, reward: 175
    },
    {
      question: 'What is the value of the variable x in the expression x = 3 * 4 + 2?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '12',
        '14',
        '18',
        '24'
      ],
      correctAnswer: 2,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
level: 3, time: 30, penalty: 26, reward: 175
    },
    {
      question: 'What is the value of the variable x in the expression x = 4 + 3 * 2 ?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '10',
        '12',
        '14',
        '24'
      ],
      correctAnswer: 1,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
level: 3, time: 30, penalty: 26, reward: 175
    },
    {
      question: 'What is the value of the variable x in the expression x = 2 ** 3 * 2?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '8',
        '16',
        '32',
        '64'
      ],
      correctAnswer: 2,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
level: 3, time: 30, penalty: 26, reward: 175
    },
//Level 4
    {
      question: 'What is the value of the variable x?',
      questionType: 'multipleChoice',
      questionPic: 'M5B_4_1.png',
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
level: 4, time: 30, penalty: 41, reward: 275
    },
    {
      question: 'What is the value of the variable x?',
      questionType: 'multipleChoice',
      questionPic: 'M5B_4_2.png',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '9',
        '-9',
        '27',
        '-27'
      ],
      correctAnswer: 4,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
level: 4, time: 30, penalty: 41, reward: 275
    },
    {
      question: 'What is the value of the variable x?',
      questionType: 'multipleChoice',
      questionPic: 'M5B_4_3.png',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '12',
        '14',
        '18',
        '24'
      ],
      correctAnswer: 2,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
level: 4, time: 30, penalty: 41, reward: 275
    },
     {
      question: 'What is the value of the variable x?',
      questionType: 'multipleChoice',
      questionPic: 'M5B_4_4.png',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '9',
        '25',
        '49',
        '54'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
level: 4, time: 30, penalty: 41, reward: 275
    },
    {
      question: 'What is the value of the variable x?',
      questionType: 'multipleChoice',
      questionPic: 'M5B_4_5.png',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '5',
        '19',
        '49',
        '121'
      ],
      correctAnswer: 4,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
level: 4, time: 30, penalty: 41, reward: 275
    },
    {
      question: 'What is the value of the variable x?',
      questionType: 'multipleChoice',
      questionPic: 'M5B_4_6.png',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '-1',
        '1',
        '-2',
        '2'
      ],
      correctAnswer: 2,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
level: 4, time: 30, penalty: 41, reward: 275
    },
    {
      question: 'What is the value of the variable x?',
      questionType: 'multipleChoice',
      questionPic: 'M5B_4_7.png',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '-1',
        '1',
        '-2',
        '2'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
level: 4, time: 30, penalty: 41, reward: 275
    },
//Level 5 
    {
      question: 'What is the value of the variable x?',
      questionType: 'multipleChoice',
      questionPic: 'M5B_5_1.png',
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
level: 5, time: 45, penalty: 60, reward: 400
    },
    {
      question: 'What is the value of the variable x?',
      questionType: 'multipleChoice',
      questionPic: 'M5B_5_2.png',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '2',
        '2.0',
        '2.01',
        '1.99'
      ],
      correctAnswer: 2,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
level: 5, time: 45, penalty: 60, reward: 400
    },
    {
      question: 'What is the value of the variable x?',
      questionType: 'multipleChoice',
      questionPic: 'M5B_5_3.png',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '2',
        '-2',
        '2.25',
        '-2.25'
      ],
      correctAnswer: 4,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
level: 5, time: 45, penalty: 60, reward: 400
    },
    {
      question: 'What is the value of the variable x?',
      questionType: 'multipleChoice',
      questionPic: 'M5B_5_4.png',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '2',
        '-2',
        '2.0',
        '-2.0'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
level: 5, time: 45, penalty: 60, reward: 400
    },
    {
      question: 'What is the value of the variable x?',
      questionType: 'multipleChoice',
      questionPic: 'M5B_5_5.png',
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
level: 5, time: 45, penalty: 60, reward: 400
    },
    {
      question: 'What is the value of the variable x?',
      questionType: 'multipleChoice',
      questionPic: 'M5B_5_6.png',
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
level: 5, time: 45, penalty: 60, reward: 400
    },
//Level 6
    {
      question: 'What is the value of the variable x?',
      questionType: 'multipleChoice',
      questionPic: 'M5B_6_1.png',
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
level: 6, time: 50, penalty: 82, reward: 550
    },
    {
      question: 'What is the value of the variable x?',
      questionType: 'multipleChoice',
      questionPic: 'M5B_6_2.png',
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
level: 6, time: 50, penalty: 82, reward: 550
    },
    {
      question: 'What is the value of the variable x?',
      questionType: 'multipleChoice',
      questionPic: 'M5B_6_3.png',
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
level: 6, time: 50, penalty: 82, reward: 550
    },
    {
      question: 'What is the value of the variable x?',
      questionType: 'multipleChoice',
      questionPic: 'M5B_6_4.png',
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
level: 6, time: 50, penalty: 82, reward: 550
    },
    {
      question: 'What is the value of the variable x?',
      questionType: 'multipleChoice',
      questionPic: 'M5B_6_5.png',
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
level: 6, time: 50, penalty: 82, reward: 550
    },
//Level 7
    {
      question: 'Which sequence of expressions represents the following mathematical expression?',
      questionType: 'multipleChoice',
      questionPic: 'M5B_7_1.png',
      answerType: 'photo',
      answerSelectionType: 'single',
      answers: [
        'M5B_7_1_a1.png',
        'M5B_7_1_a2.png',
        'M5B_7_1_a3.png',
        'M5B_7_1_a4.png'
      ],
      correctAnswer: 1,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
level: 7, time: 60, penalty: 112, reward: 750
    },
    {
      question: 'What is the value of the variables that evaluate a/b with the value of the following expression?',
      questionType: 'multipleChoice',
      questionPic: 'M5B_7_2.png',
      answerType: 'photo',
      answerSelectionType: 'single',
      answers: [
        'M5B_7_2_a1.png',
        'M5B_7_2_a2.png',
        'M5B_7_2_a3.png',
        'M5B_7_2_a4.png'
      ],
      correctAnswer: 4,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
level: 7, time: 60, penalty: 112, reward: 750
    },
    {
      question: 'What is the value of the variables that evaluate a/b with the value of the following expression?',
      questionType: 'multipleChoice',
      questionPic: 'M5B_7_3.png',
      answerType: 'photo',
      answerSelectionType: 'single',
      answers: [
        'M5B_7_3_a1.png',
        'M5B_7_3_a2.png',
        'M5B_7_3_a3.png',
        'M5B_7_3_a4.png'
      ],
      correctAnswer: 1,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
level: 7, time: 60, penalty: 112, reward: 750
    },
    {
      question: 'What is the value of the variables that evaluate a/b with the value of the following expression?',
      questionType: 'multipleChoice',
      questionPic: 'M5B_7_4.png',
      answerType: 'photo',
      answerSelectionType: 'single',
      answers: [
        'M5B_7_4_a1.png',
        'M5B_7_4_a2.png',
        'M5B_7_4_a3.png',
        'M5B_7_4_a4.png'
      ],
      correctAnswer: 2,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
level: 7, time: 60, penalty: 112, reward: 750
    },
//Level 8
    {
      question: 'What value do you get from the following sequence of expressions in Python?',
      questionType: 'multipleChoice',
      questionPic: 'M5B_8_1.png',
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
level: 8, time: 60, penalty: 150, reward: 1000
    },
    {
      question: 'What value do you get from the following sequence of expressions in Python?',
      questionType: 'multipleChoice',
      questionPic: 'M5B_8_2.png',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        '32.0',
        '48.0',
        '64.0',
        '96.0'
      ],
      correctAnswer: 2,
      messageForCorrectAnswer: 'Correct!',
      messageForIncorrectAnswer: 'Wrong.',
level: 8, time: 60, penalty: 150, reward: 1000
    },
    {
      question: 'What value do you get from the following sequence of expressions in Python?',
      questionType: 'multipleChoice',
      questionPic: 'M5B_8_3.png',
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
level: 8, time: 60, penalty: 150, reward: 1000
    },
  ]
};