/* eslint-disable */
export default {
  title: 'Identificadores e variáveis',
  description: 'Teste os seus conhecimentos desta secção com o Minijogo "Identificadores e variáveis".',
  nQuestion: 8,
  defaultMessageForCorrectAnswer: 'Correto!',
  defaultMessageForIncorrectAnswer: 'Incorreto.',
  questions: [
//Level 1
    {
      question: 'Qual dos seguintes identificadores não é válido?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      explanation: 'Os identificadores não podem começar por um dígito.', 
level: 1, 
time: 30,
 penalty: 7,
  reward: 50
    },
    {
      question: 'Qual dos seguintes identificadores não é válido?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      explanation: 'Os identificadores não podem ter espaços.', 
level: 1, 
time: 30, 
penalty: 7, 
reward: 50
    },
    {
      question: 'Qual dos seguintes identificadores não é válido?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      explanation: 'Os identificadores não podem ter caracteres que representem operadores (** - exponenciação).', 
level: 1,
 time: 30,
  penalty: 7,
   reward: 50
    },
    {
      question: 'Qual dos seguintes identificadores não é válido?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      explanation: 'Os identificadores não podem ter caracteres que representem operadores (** - exponenciação).', 
level: 1, 
time: 30, 
penalty: 7, 
reward: 50
    },
    {
      question: 'Qual dos seguintes identificadores não é válido?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      explanation: 'Os identificadores não podem ter palavras-chave (and).', 
level: 1,
 time: 30,
  penalty: 7, 
  reward: 50
    },
    {
      question: 'Qual dos seguintes identificadores não é válido?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      explanation: 'Os identificadores não podem ter palavras-chave (or).', 
level: 1, 
time: 30, 
penalty: 7,
 reward: 50
    },
    {
      question: 'Qual dos seguintes identificadores não é válido?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      explanation: 'Os identificadores não podem ter palavras-chave (for).', 
level: 1, 
time: 30, 
penalty: 7, 
reward: 50
    },
    {
      question: 'Qual dos seguintes identificadores não é válido?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      explanation: 'Os identificadores não podem começar com um dígito nem ter operadores (% - resto da divisão).', 
level: 1,
 time: 30, 
 penalty: 7,
  reward: 50
    },
    {
      question: 'Qual dos seguintes identificadores não é válido?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      explanation: 'Os identificadores não podem começar com um dígito nem ter operadores (.).', 
level: 1, 
time: 30, 
penalty: 7, 
reward: 50
    },
    {
      question: 'Qual dos seguintes identificadores não é válido?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      explanation: 'Os identificadores não podem ter espaços nem operadores (,).', 
level: 1,
 time: 30,
  penalty: 7, 
  reward: 50
    },
//Level 2
    {
      question: 'Qual o identificador mais adequado para o uma constante com o valor do IVA?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'I',
        'IVA',
        '_23porcento',
        'Imposto'
      ],
      correctAnswer: 2,
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 2, 
time: 30,
 penalty: 15,
  reward: 100
    },
    {
      question: 'Qual o identificador mais adequado para o saldo do jogador 1?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'S1',
        'saldo',
        'J1',
        'saldo_jogador_1'
      ],
      correctAnswer: 4,
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 2, 
time: 30, 
penalty: 15, 
reward: 100
    },
    {
      question: 'Qual o identificador mais adequado para a pontuação de um jogador?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'S',
        'pts',
        'pontuacao',
        'a_pontuacao_do_jogador'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 2, 
time: 30, 
penalty: 15, 
reward: 100
    },
    {
      question: 'Qual o identificador mais adequado para o valor de um somatório?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'soma',
        's',
        'sx',
        's_'
      ],
      correctAnswer: 1,
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 2, 
time: 30, 
penalty: 15, 
reward: 100
    },
    {
      question: 'Qual o identificador mais adequado para o valor de um contador?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'soma',
        'contador',
        'c',
        'cnt'
      ],
      correctAnswer: 2,
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 2, 
time: 30, 
penalty: 15, 
reward: 100
    },
    {
      question: 'Qual o identificador mais adequado para uma constante relativa à altura?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'altura',
        'Altura',
        'A',
        'ALTURA'
      ],
      correctAnswer: 4,
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      explanation: 'As constantes costumam ser representadas por maúsculas.', 
level: 2, 
time: 30, 
penalty: 15, 
reward: 100
    },
    {
      question: 'Qual o identificador mais adequado para uma variável relativa ao número de colunas?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'NCOL',
        'c',
        'n_colunas',
        'n'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 2, time: 30, penalty: 15, reward: 100
    },
    {
      question: 'Qual o identificador mais adequado para uma constante relativa à largura?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'largura',
        'L',
        'LARGURA',
        'Largura'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      explanation: 'As constantes costumam ser representadas em maiúsculas.', 
level: 2, time: 30, penalty: 15, reward: 100
    },
    {
      question: 'Qual o identificador mais adequado para uma variável relativa ao número de linhas?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'NLIN',
        'l',
        'n_linhas',
        'n'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 2, time: 30, penalty: 15, reward: 100
    },
    {
      question: 'Qual o identificador mais adequado para uma variável relativa ao número de jogadores?',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'J',
        'j',
        'n_jogadores',
        'n'
      ],
      correctAnswer: 3,
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 2, time: 30, penalty: 15, reward: 100
    },
//Level 3
    {
      question: 'Qual o valor da variável x na expressão x = 3 + 5 - 4?',
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
level: 3, time: 30, penalty: 26, reward: 175
    },
    {
      question: 'Qual o valor da variável x na expressão x = 3 - 4 + 5?',
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
level: 3, time: 30, penalty: 26, reward: 175
    },
    {
      question: 'Qual o valor da variável x na expressão x = - 4 + 5 + 3?',
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
level: 3, time: 30, penalty: 26, reward: 175
    },
    {
      question: 'Qual o valor da variável x na expressão x = -8 + 4 - 3?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 3, time: 30, penalty: 26, reward: 175
    },
    {
      question: 'Qual o valor da variável x na expressão x = 5 * 3 * 2?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 3, time: 30, penalty: 26, reward: 175
    },
    {
      question: 'Qual o valor da variável x na expressão x = -3 * 4 * 2?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 3, time: 30, penalty: 26, reward: 175
    },
    {
      question: 'Qual o valor da variável x na expressão x = -3 * 4 * -2?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 3, time: 30, penalty: 26, reward: 175
    },
    {
      question: 'Qual o valor da variável x na expressão x = 3 * 4 + 2?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 3, time: 30, penalty: 26, reward: 175
    },
    {
      question: 'Qual o valor da variável x na expressão x = 4 + 3 * 2 ?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 3, time: 30, penalty: 26, reward: 175
    },
    {
      question: 'Qual o valor da variável x na expressão x = 2 ** 3 * 2?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 3, time: 30, penalty: 26, reward: 175
    },
//Level 4
    {
      question: 'Qual o valor da variável x?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 4, time: 30, penalty: 41, reward: 275
    },
    {
      question: 'Qual o valor da variável x?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 4, time: 30, penalty: 41, reward: 275
    },
    {
      question: 'Qual o valor da variável x?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 4, time: 30, penalty: 41, reward: 275
    },
     {
      question: 'Qual o valor da variável x?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 4, time: 30, penalty: 41, reward: 275
    },
    {
      question: 'Qual o valor da variável x?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 4, time: 30, penalty: 41, reward: 275
    },
    {
      question: 'Qual o valor da variável x?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 4, time: 30, penalty: 41, reward: 275
    },
    {
      question: 'Qual o valor da variável x?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 4, time: 30, penalty: 41, reward: 275
    },
//Level 5 
    {
      question: 'Qual o valor da variável x?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 5, time: 45, penalty: 60, reward: 400
    },
    {
      question: 'Qual o valor da variável x?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 5, time: 45, penalty: 60, reward: 400
    },
    {
      question: 'Qual o valor da variável x?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 5, time: 45, penalty: 60, reward: 400
    },
    {
      question: 'Qual o valor da variável x?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 5, time: 45, penalty: 60, reward: 400
    },
    {
      question: 'Qual o valor da variável x?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 5, time: 45, penalty: 60, reward: 400
    },
    {
      question: 'Qual o valor da variável x?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 5, time: 45, penalty: 60, reward: 400
    },
//Level 6
    {
      question: 'Qual o valor da variável x?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 6, time: 50, penalty: 82, reward: 550
    },
    {
      question: 'Qual o valor da variável x?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 6, time: 50, penalty: 82, reward: 550
    },
    {
      question: 'Qual o valor da variável x?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 6, time: 50, penalty: 82, reward: 550
    },
    {
      question: 'Qual o valor da variável x?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 6, time: 50, penalty: 82, reward: 550
    },
    {
      question: 'Qual o valor da variável x?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 6, time: 50, penalty: 82, reward: 550
    },
//Level 7
    {
      question: 'Qual a sequência de expressões que representa a seguinte expressão matemática?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 7, time: 60, penalty: 112, reward: 750
    },
    {
      question: 'Qual o valor das variáveis que avaliam a/b com o valor da seguinte expressão?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 7, time: 60, penalty: 112, reward: 750
    },
    {
      question: 'Qual o valor das variáveis que avaliam a/b com o valor da seguinte expressão?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 7, time: 60, penalty: 112, reward: 750
    },
    {
      question: 'Qual o valor das variáveis que avaliam a/b com o valor da seguinte expressão?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 7, time: 60, penalty: 112, reward: 750
    },
//Level 8
    {
      question: 'Qual o valor que se obtém da seguinte sequência de expressões em Python?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 8, time: 60, penalty: 150, reward: 1000
    },
    {
      question: 'Qual o valor que se obtém da seguinte sequência de expressões em Python?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 8, time: 60, penalty: 150, reward: 1000
    },
    {
      question: 'Qual o valor que se obtém da seguinte sequência de expressões em Python?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
level: 8, time: 60, penalty: 150, reward: 1000
    },
  ]
};