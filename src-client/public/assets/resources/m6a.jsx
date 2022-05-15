/* eslint-disable */
export default {
  title: 'Funções, parâmetros e argumentos',
  description: 'Teste os seus conhecimentos desta secção com o Minijogo "Funções, parâmetros e argumentos".',
  nQuestion: 8,
  defaultMessageForCorrectAnswer: 'Correto!',
  defaultMessageForIncorrectAnswer: 'Incorreto.',
  questions: [
//Level 1
    {
      question: 'Qual a instrução que inicia a definição de uma função?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      explanation: 'A definição de uma função inicia-se com def', 
      level: 1,
      time: 20,
      penalty: 7,
      reward: 50
    },
    {
      question: 'Qual a instrução que permite retornar valores numa função?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      explanation: 'A instrução return termina a execução de uma função e devolve um objeto.', 
      level: 1,
      time: 20,
      penalty: 7,
      reward: 50
    },
//Level 2
    {
      question: 'Como se denomina o identificador x?',
      questionType: 'multipleChoice',
      questionPic: 'M6A_2_1.png',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'argumento',
        'parâmetro',
        'literal',
        'variável'
      ],
      correctAnswer: 2,
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      level: 2,
      time: 20,
      penalty: 15,
      reward: 100
    },
    {
      question: 'Na chamada de uma função como se denomina o valor passado para a função em dobro(5) ?',
      questionType: 'multipleChoice',
      questionPic: 'M6A_2_2.png',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'argumento',
        'parâmetro',
        'literal',
        'variável'
      ],
      correctAnswer: 1,
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      level: 2,
      time: 20,
      penalty: 15,
      reward: 100
    },
//Level 3
    {
      question: 'Qual o resultado da seguinte chamada à função teste?',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      level: 3,
      time: 20,
      penalty: 26,
      reward: 175
    },
//Level 4
    {
      question: 'Qual o resultado da seguinte chamada à função teste? ',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      level: 4,
      time: 30,
      penalty: 41,
      reward: 275
    },
//Level 5
    {
      question: 'Construa a seguinte função que deverá retornar o triplo de um valor.',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      level: 5,
      time: 60,
      penalty: 60,
      reward: 400
    },
//Level 6
    {
      question: 'Construa a seguinte função que deverá retornar o quadrado de um valor.',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      level: 6,
      time: 60,
      penalty: 82,
      reward: 550
    },
//Level 7
    {
      question: 'A seguinte função devolve o múltiplo de um número. \nNo entanto ao testar a instrução: \n>> múltiplo (5, 3) \nobteve-se como resultado o número 8, quando o resultado correto deveria ser 15, o triplo de 5.',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      level: 7,
      time: 60,
      penalty: 112,
      reward: 750
    },
//Level 8
    {
      question: 'Construa a função pvp, que retorna o preço de venda ao público de um artigo. \nSoma ao preço do artigo o valor do IVA, que é igual a 23% do preço.',
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
      messageForCorrectAnswer: 'Correto!',
      messageForIncorrectAnswer: 'Incorreto.',
      level: 8,
      time: 120,
      penalty: 150,
      reward: 1000
    },
  ]
};