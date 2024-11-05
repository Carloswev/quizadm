const questions = [
  {
    question: "EU SOU...",
    answers: [
      { text: "Focado, Determinado e Persistente", category: "tubarao" },
      { text: "Confiável, Meticuloso e Previsível ", category: "lobo" },
      { text: "Idealista, Criativo e Visionário", category: "aguia" },
      { text: "Colaborativas e divertidas", category: "golfinho" }
    ]
  },
  {
    question: "EU GOSTO DE...",
    answers: [
      { text: "Ser piloto", category: "tubarao" },
      { text: "Planejar a viagem", category: "lobo" },
      { text: "Planejar novas rotas", category: "aguia" },
      { text: "Conversar com os passageiros", category: "golfinho" }
    ]
  },
  {
    question: "SE VOCÊ QUISER SE DAR BEM COMIGO...",
    answers: [
      { text: "Libere, saia do caminho...", category: "tubarao" },
      { text: "Me deixe saber sua expectativa...", category: "lobo" },
      { text: "Me dê liberdade...", category: "aguia" },
      { text: "Seja amigável, carinhoso e compreensivo...", category: "golfinho" }
    ]
  },
  {
    question: "PARA CONSEGUIR OBTER BONS RESULTADOS, É PRECISO...",
    answers: [
      { text: "Planejar e obter recursos", category: "tubarao" },
      { text: "Controlar o essencial", category: "lobo" },
      { text: "Ter incertezas", category: "aguia" },
      { text: "Diversão e celebração", category: "golfinho" }
    ]
  },
  {
    question: "EU ME DIVIRTO QUANDO...",
    answers: [
      { text: "Estou me exercitando", category: "tubarao" },
      { text: "Determino as regras", category: "lobo" },
      { text: "Tenho novidade", category: "aguia" },
      { text: "Estou com os outros", category: "golfinho" }
    ]
  },
  {
    question: "EU PENSO QUE...",
    answers: [
      { text: "O ataque é a melhor defesa", category: "tubarao" },
      { text: "Um homem prevenido vele por dois", category: "lobo" },
      { text: "É bom ser manso, mas andar com um porrete", category: "aguia" },
      { text: "Unidos venceremos, divididos perdemos", category: "golfinho" }
    ]
  },
  {
    question: "MINHA PREOCUPAÇÃO É...",
    answers: [
      { text: "Fazer com que aconteça", category: "tubarao" },
      { text: "Fazer com quer funcione", category: "lobo" },
      { text: "Gerar a ideia global", category: "aguia" },
      { text: "Fazer com que as pessoas gostem", category: "golfinho" }
    ]
  },
  {
    question: "EU PREFIRO...",
    answers: [
      { text: "Vantagens a meu favor", category: "tubarao" },
      { text: "Ter todos os detalhes", category: "lobo" },
      { text: "Perguntas e respostas", category: "aguia" },
      { text: "Que todos tenham chance de ser ouvido", category: "golfinho" }
    ]
  },
  {
    question: "EU GOSTO DE...",
    answers: [
      { text: "Fazer progresso", category: "tubarao" },
      { text: "Fazer sentido", category: "lobo" },
      { text: "Tornar as pessoas desconfortáveis", category: "aguia" },
      { text: "construir memorias", category: "golfinho" }
    ]
  },
  {
    question: "EU DE CHEGAR...",
    answers: [
      { text: "Na frente", category: "tubarao" },
      { text: "Na hora", category: "lobo" },
      { text: "Em outro lugar", category: "aguia" },
      { text: "Junto", category: "golfinho" }
    ]
  },
  {
    question: "EU GOSTO DE MUDANÇAS SE...",
    answers: [
      { text: "Me der uma vantagem competitiva ", category: "tubarao" },
      { text: "Melhorar ou me der mais controle", category: "lobo" },
      { text: "Me der mais liberdade e variedade", category: "aguia" },
      { text: "For divertido e puder ser compartilhado", category: "golfinho" }
    ]
  },
  {
    question: "UM ÓTIMO DIA PARA MIM É QUANDO.. :",
    answers: [
      { text: "Consigo fazer muitas coisas", category: "tubarao" },
      { text: "Tudo segue como o planejado", category: "lobo" },
      { text: "Desfruto de coisas novas", category: "aguia" },
      { text: "Me diverto com meus amigos", category: "golfinho" }
    ]
  },
  {
    question: "EU VEJO A MORTE COMO...?",
    answers: [
      { text: "Algo que sempre chega", category: "tubarao" },
      { text: "Um modo de reorganizar a vida", category: "lobo" },
      { text: "Uma grande aventura", category: "aguia" },
      { text: "Opurtunidade para rever pessoas", category: "golfinho" }
    ]
  },
  {
    question: "MINHA FILOSOFIA DE VIDA É...",
    answers: [
      { text: "há ganhadores e perdedores, e eu acredito ser um ganhador", category: "tubarao" },
      { text: "Para ganhar, tem de seguir as regras", category: "lobo" },
      { text: "Para ganhar, tem de inventar novas coisas", category: "aguia" },
      { text: "Para eu ganhar, ninguém precisa perder", category: "golfinho" }
    ]
  },
  {
    question: "EU SEMPRE GOSTEI DE...",
    answers: [
      { text: "Focalizar a meta", category: "tubarao" },
      { text: "Evitar surpresas", category: "lobo" },
      { text: "Explorar", category: "aguia" },
      { text: "Realizar uma abordagem natural", category: "golfinho" }
    ]
  },
  {
    question: "NAO EXISTE NADA ERRADO EM...",
    answers: [
      { text: "Se colocar na frente", category: "tubarao" },
      { text: "Colocar todos em ordem  ", category: "lobo" },
      { text: "Se colocar em outro lugar", category: "aguia" },
      { text: "Colocar outros na frente ", category: "golfinho" }
    ]
  },
  {
    question: "EU GOSTO DE BUSCAR CONSELHOS DE...",
    answers: [
      { text: "Pessoas bem-sucedidas", category: "tubarao" },
      { text: "Autoridade no assunto", category: "lobo" },
      { text: "Lugares, os mais estranhos", category: "aguia" },
      { text: "Anciões e conselheiros", category: "golfinho" }
    ]
  },
  {
    question: "MEU LEMA É..",
    answers: [
      { text: "Simplesmente fazer", category: "tubarão" },
      { text: "Fazer bem feito", category: "lobo" },
      { text: "Fazer o que precisa ser feito", category: "aguia" },
      { text: "Fazer junto com o grupo", category: "golfinho" }
    ]
  },
  {
    question: "EU GOSTO DE...",
    answers: [
      { text: " Coisas claras e simples", category: "tubarao" },
      { text: "Ordem e sistematização", category: "lobo" },
      { text: "Complexidade, mesmo se confuso", category: "aguia" },
      { text: " Calor humano e animação", category: "golfinho" }
    ]
  },
  {
    question: "TEMPO PARA MIM É...",
    answers: [
      { text: "Algo que detesto desperdiçar", category: "tubarao" },
      { text: "Uma flecha que leva ao inevitável", category: "lobo" },
      { text: "Irrelevante", category: "aguia" },
      { text: "Um grande ciclo", category: "golfinho" }
    ]
  },
];

let currentQuestionIndex = 0;
let scores = {
  tubarao: 0,
  lobo: 0,
  aguia: 0,
  golfinho: 0
};

const questionContainer = document.getElementById('question-container');
const progressBar = document.getElementById('progress-bar');

// Armazena respostas do usuário para permitir correções
let userAnswers = Array(questions.length).fill(null);

// Adiciona evento de keypress ao documento para responder com Enter
document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const focusedButton = document.querySelector('button:focus');
    if (focusedButton) {
      focusedButton.click();
    } else {
      const firstButton = questionContainer.querySelector('button');
      if (firstButton) {
        firstButton.click();
      }
    }
  }
});

// Adiciona evento de keydown ao documento para navegação com setas
document.addEventListener('keydown', (e) => {
  const buttons = questionContainer.querySelectorAll('button');
  const focusedButton = document.querySelector('button:focus');
  if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
    const previousButton = buttons[Array.prototype.indexOf.call(buttons, focusedButton) - 1];
    if (previousButton) {
      previousButton.focus();
    }
  } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
    const nextButton = buttons[Array.prototype.indexOf.call(buttons, focusedButton) + 1];
    if (nextButton) {
      nextButton.focus();
    }
  }
});

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.innerHTML = `<h2>${currentQuestion.question}</h2>`;
  
  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.innerText = String.fromCharCode(65 + index) + '. ' + answer.text; // Formata como A, B, C, D
    button.addEventListener('click', () => selectAnswer(answer, index));
    button.tabIndex = index; 
    button.setAttribute('role', 'button');
    button.setAttribute('aria-label', `Resposta ${index + 1}: ${answer.text}`);
    questionContainer.appendChild(button);
  });

  // Atualiza a barra de progresso
  updateProgressBar();

  // Foca no primeiro botão
  const firstButton = questionContainer.querySelector('button');
  if (firstButton) firstButton.focus();

  // Gerencia os botões "Corrigir Resposta" e "Próxima"
  document.getElementById('previous-button').disabled = currentQuestionIndex === 0;
  document.getElementById('next-button').disabled = currentQuestionIndex >= questions.length - 1;
}

function updateProgressBar() {
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressBar.value = progressPercentage;
}

function selectAnswer(answer, index) {
  // Remove pontuação da resposta anterior, se já houver uma
  if (userAnswers[currentQuestionIndex] !== null) {
    const previousAnswer = questions[currentQuestionIndex].answers[userAnswers[currentQuestionIndex]];
    scores[previousAnswer.category]--;
  }

  // Armazena a nova resposta e adiciona a pontuação
  userAnswers[currentQuestionIndex] = index;
  scores[answer.category]++; // Atualiza a pontuação corretamente

  // Habilita o botão "Próxima" após a seleção de uma resposta
  document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    showResult();
  }
}

function goToPreviousQuestion() {
  if (currentQuestionIndex > 0) {
    // Remove a pontuação da resposta da pergunta atual
    const previousAnswerIndex = userAnswers[currentQuestionIndex];
    if (previousAnswerIndex !== null) {
      const previousAnswer = questions[currentQuestionIndex].answers[previousAnswerIndex];
      scores[previousAnswer.category]--;
    }

    // Volta para a questão anterior
    currentQuestionIndex--;
    showQuestion();
  }
}

function showResult() {
  const totalAnswers = userAnswers.filter(answer => answer !== null).length;

  // Verifica se há respostas
  if (totalAnswers === 0) {
    questionContainer.innerHTML = "<h2>Nenhuma resposta dada.</h2>";
    return;
  }

  // Identifica a categoria com maior pontuação
  const maxCategory = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

  // Calcula as porcentagens para cada categoria
  const percentages = {};
  for (const category in scores) {
    percentages[category] = ((scores[category] / totalAnswers) * 100).toFixed(2);
  }

  questionContainer.innerHTML = `
    <h2>Seu perfil comportamental é: <a href="profiles/${maxCategory}.html" target="_blank">${maxCategory.charAt(0).toUpperCase() + maxCategory.slice(1)}</a></h2>
    <p>Porcentagens:</p>
  `;

  for (const category in percentages) {
    questionContainer.innerHTML += `
      <p><a href="profiles/${category}.html" target="_blank">${category.charAt(0).toUpperCase() + category.slice(1)}</a>: ${percentages[category]}%</p>
    `;
  }

  const profileImage = document.createElement('img');
  profileImage.src = `images/${maxCategory}.png`;
  profileImage.alt = `Imagem do perfil ${maxCategory}`;
  profileImage.style.width = '200px';
  questionContainer.appendChild(profileImage);

  const ctx = document.getElementById('results-chart').getContext('2d');
  document.getElementById('results-chart').style.display = 'block';

  // Dados do gráfico
  const chartData = {
    labels: Object.keys(percentages),
    datasets: [{
      label: 'Porcentagem do perfil',
      data: Object.values(percentages).map(Number),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  };

  // Inicializa o gráfico
  const resultsChart = new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });

  // Esconde botões de navegação
  document.getElementById('next-button').style.display = 'none';
  document.getElementById('previous-button').style.display = 'none';

  // Cria o botão de reiniciar o quiz
  const restartButton = document.createElement('button');
  restartButton.innerText = 'Reiniciar Quiz';
  restartButton.addEventListener('click', () => restartQuiz(restartButton));
  questionContainer.appendChild(restartButton);
}

function restartQuiz(restartButton) {
  // Reseta variáveis para o estado inicial
  currentQuestionIndex = 0;
  scores = {
    tubarao: 0,
    lobo: 0,
    aguia: 0,
    golfinho: 0
  };
  userAnswers = Array(questions.length).fill(null);

  // Limpa o gráfico
  const resultsChartElement = document.getElementById('results-chart');
  if (resultsChartElement.chartInstance) {
    resultsChartElement.chartInstance.destroy(); // Destrói a instância do gráfico
  }
  resultsChartElement.style.display = 'none';

  // Remove o botão de reinício e exibe os botões de navegação
  restartButton.remove();
  document.getElementById('next-button').style.display = 'inline-block';
  document.getElementById('previous-button').style.display = 'inline-block';

  // Limpa o conteúdo e mostra a primeira pergunta
  questionContainer.innerHTML = '';
  showQuestion();
}

// Inicializa a primeira pergunta
showQuestion();