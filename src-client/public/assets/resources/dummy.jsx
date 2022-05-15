/* eslint-disable */
export default {
  title: 'Titulo Minijogo',
  description: 'Descrição Minijogo',
  nQuestion: 6, // Numero de questão
  defaultMessageForCorrectAnswer: 'Correto!', // Mensagem geral para resposta correta
  defaultMessageForIncorrectAnswer: 'Incorreto.', // Mensagem geral para resposta incorreta
  questions: [
    { // pergunta escolha multipla com 1 opção de correta
      question: 'Questão para selecionar a resposta correta',
      questionPic: 'duvidar.gif', // imagem que aparece depois da pergunta
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'single',
      answers: [
        'incorreta', // posição 1
        'incorreta', // posição 2
        'correta', // posição 3
        'incorreta' // posição 4
      ],
      correctAnswer: 3, // Resposta correta
      messageForCorrectAnswer: 'Fantástico!', // Resposta especifica para resposta correta
      messageForIncorrectAnswer: 'Desilusão ter falhado.', // Resposta especifica para resposta correta
      explanation: 'A resposta correta era simplesmente a que diz correta', // explicação que aparece se errar
      level: 1,
      time: 80, // tempo em segundos para responder
      penalty: 1,
      reward: 3
    },
    { // pergunta escolha multipla com várias opções corretas
      question: 'Questão para selecionar as respostas corretas',
      questionType: 'multipleChoice',
      answerType: 'text',
      answerSelectionType: 'multiple',
      answers: [
        'correta',
        'correta',
        'incorreta',
        'correta'
      ],
      correctAnswer: [1, 2, 4],
      level: 1,
      time: 20,
      penalty: 1,
      reward: 3
    },
    { // pergunta escolha multipla com 1 opções corretas (imagem) 
      question: 'Questão para selecionar o numero 3',
      questionType: 'multipleChoice',
      answerType: 'photo',
      answerSelectionType: 'single',
      answers: [
        '3.png',
        '5.png',
        '8.png',
        '0.png'
      ],
      correctAnswer: 1,
      level: 1,
      time: 20,
      penalty: 1,
      reward: 3
    }, 
    {
      question: 'Construir print("Hello World")',
      questionType: 'buildCode',
      answers: [  //em codigos multi linha usar \\n para mudar de linha na resposta
        'print', // 1
        'echo', // 2
        'console', // 3
        'log', // 4
        '(', // 5
        ')', // 6
        '"Hello World"', // 7
      ],
      correctAnswer: [
      [ // possibilidade de resposta 1
        [1,5,7,6] // 1ª linha correta
      ]
    ],
      level: 1,
      time: 120,
      penalty: 1,
      reward: 3
    },
    {
      question: 'Resolva o seguinte problema',
      problem: ['({{input1}}-{{input2}})+{{input3}})*{{input4}}) = 24',
        '{{input5}} = 24'],
      inputs: {
        input1: { options: ['incorreta1', 'incorreta2', 'incorreta3', 6], selected: 'incorreta' },
        input2: { options: [3], selected: 'incorreta' },
        input3: { options: [7], selected: 'incorreta' },
        input4: { options: ['incorreta1', 'incorreta2', 'incorreta3','incorreta4'], selected: 3 },
        input5: { options: [24], selected: 'incorreta' }
      },
      questionType: 'fixBugs',
      correctAnswer: [
        { input: 1, option: 4 },
        { input: 2, option: 1 },
        { input: 3, option: 1 },
        { input: 5, option: 1 }
      ],
      level: 1,
      time: 300,
      penalty: 1,
      reward: 3
    },
    {
      question: 'Preenche os espaços.',
      problem: [
        'Estamos no ano {{input1}}.',
        'Temos de ficar em {{input2}}!'
      ],
      questionType: 'fillSpaces',
      answers: [
        'casa',
        'incorreta',
        'incorreta',
        '2020'
      ],
      correctAnswer: [4, 1],
      level: 1,
      time: 600,
      penalty: 1,
      reward: 3
    }
  ]
};
