// BANCO DE QUESTOES - Foco em Raciocínio de Alto Nível (QI Fluido) + Conhecimentos Fundamentais (QI Cristalizada)
const BANCO_DE_QUESTOES = [
    // As perguntas estão bem definidas.
    // Lógico-Matemático (raciocínio, álgebra, sequências numéricas, problemas complexos)
    { id: 102, categoria: "Lógico-Matemático", dificuldade: "dificil", enunciado: "Se um tijolo pesa 1kg mais meio tijolo, quanto pesa um tijolo e meio?", opcoes: ["2kg", "2.5kg", "3kg", "4kg"], resposta_correta: "3kg" }, // Clássico problema de álgebra
    { id: 103, categoria: "Lógico-Matemático", dificuldade: "dificil", enunciado: "Ana, Bia e Carol correm numa pista circular. Ana completa uma volta em 4 min, Bia em 5 min e Carol em 6 min. Após quanto tempo elas se encontrarão no ponto de partida pela primeira vez?", opcoes: ["30 min", "45 min", "60 min", "120 min"], resposta_correta: "60 min" }, // MMC (Mínimo Múltiplo Comum)
    { id: 104, categoria: "Lógico-Matemático", dificuldade: "dificil", enunciado: "Um caracol sobe um muro de 10 metros. Durante o dia, ele sobe 3 metros, mas à noite, escorrega 2 metros. Em quantos dias ele atinge o topo?", opcoes: ["7 dias", "8 dias", "9 dias", "10 dias"], resposta_correta: "8 dias" }, // Problema de raciocínio com pegadinha
    { id: 501, categoria: "Lógico-Matemático", dificuldade: "dificil", enunciado: "Em um lago, um trecho de vitórias-régias dobra de área a cada dia. Se leva 48 dias para cobrir o lago, quantos dias leva para cobrir metade dele?", opcoes: ["24 dias", "36 dias", "47 dias", "48 dias"], resposta_correta: "47 dias" }, // Raciocínio inverso/exponencial
    { id: 502, categoria: "Lógico-Matemático", dificuldade: "dificil", enunciado: "Tenho mais filhas do que filhos. Cada uma das minhas filhas tem o mesmo número de irmãos e irmãs. Cada um dos meus filhos tem o dobro de irmãs em relação a irmãos. Quantos filhos e filhas eu tenho?", opcoes: ["3 filhas, 2 filhos", "4 filhas, 3 filhos", "5 filhas, 4 filhos", "2 filhas, 1 filho"], resposta_correta: "4 filhas, 3 filhos" }, // Sistema de equações lógicas
    { id: 503, categoria: "Lógico-Matemático", dificuldade: "dificil", enunciado: "Qual é o próximo número na sequência: 1, 11, 21, 1211, 111221, ...?", opcoes: ["312211", "13112221", "21121112", "11112221"], resposta_correta: "312211" },
    { id: 504, categoria: "Lógico-Matemático", dificuldade: "media", enunciado: "Um bastão de beisebol e uma bola custam R$ 1,10 no total. O bastão custa R$ 1,00 a mais que a bola. Quanto custa a bola?", opcoes: ["R$ 0,10", "R$ 0,05", "R$ 1,00", "R$ 0,15"], resposta_correta: "R$ 0,05" },
    { id: 505, categoria: "Lógico-Matemático", dificuldade: "dificil", enunciado: "Se 5 máquinas levam 5 minutos para fazer 5 produtos, quanto tempo levariam 100 máquinas para fazer 100 produtos?", opcoes: ["100 minutos", "50 minutos", "10 minutos", "5 minutos"], resposta_correta: "5 minutos" },
    { id: 506, categoria: "Lógico-Matemático", dificuldade: "dificil", enunciado: "Qual o valor de X na sequência: 1, 4, 27, 256, 3125, X?", opcoes: ["46656", "7776", "15625", "9999"], resposta_correta: "46656" },
    { id: 901, categoria: "Lógico-Matemático", dificuldade: "media", enunciado: "Qual o próximo número na sequência: 2, 3, 5, 8, 13, X?", opcoes: ["18", "21", "24", "26"], resposta_correta: "21" },
    { id: 904, categoria: "Lógico-Matemático", dificuldade: "media", enunciado: "Se X + Y = 10 e X - Y = 4, qual o valor de X?", opcoes: ["5", "6", "7", "8"], resposta_correta: "7" },
    { id: 906, categoria: "Lógico-Matemático", dificuldade: "dificil", enunciado: "Um relógio analógico marca 3:15. Qual o ângulo (menor) entre os ponteiros das horas e dos minutos?", opcoes: ["0 graus", "7.5 graus", "15 graus", "22.5 graus"], resposta_correta: "7.5 graus" },
    { id: 907, categoria: "Lógico-Matemático", dificuldade: "media", enunciado: "Qual o próximo número na sequência: 1, 8, 27, 64, 125, X?", opcoes: ["196", "216", "225", "256"], resposta_correta: "216" },
    { id: 1001, categoria: "Lógico-Matemático", dificuldade: "facil", enunciado: "Qual o próximo número na sequência: 1, 4, 9, 16, 25, X?", opcoes: ["30", "32", "36", "49"], resposta_correta: "36" },
    { id: 1004, categoria: "Lógico-Matemático", dificuldade: "facil", enunciado: "Se A = 2, B = 4, C = 6, então D = X?", opcoes: ["8", "10", "12", "14"], resposta_correta: "8" },
    { id: 1006, categoria: "Lógico-Matemático", dificuldade: "media", enunciado: "Um fazendeiro tem 17 ovelhas. Todas, exceto 9, morreram. Quantas ovelhas ele tem agora?", opcoes: ["8", "9", "17", "0"], resposta_correta: "9" },
    { id: 1008, categoria: "Lógico-Matemático", dificuldade: "dificil", enunciado: "Se 7 trabalhadores constroem 7 casas em 7 dias, quantos dias 1 trabalhador levaria para construir 1 casa?", opcoes: ["1 dia", "7 dias", "14 dias", "49 dias"], resposta_correta: "7 dias" },

    // Espacial-Abstrato (visualização, rotação, padrões visuais não numéricos)
    { id: 302, categoria: "Espacial-Abstrato", dificuldade: "media", enunciado: "Uma folha de papel é dobrada ao meio e depois furada no centro. Ao desdobrar, quantos furos haverá?", opcoes: ["1", "2", "3", "4"], resposta_correta: "2" },
    { id: 303, categoria: "Espacial-Abstrato", dificuldade: "dificil", enunciado: "Observe a sequência: ● → ○● → ●○● → ○●○●. Qual é o próximo item?", opcoes: ["●○●○●", "○○●●○", "●●○○●", "○●○●○"], resposta_correta: "●○●○●" },
    { id: 601, categoria: "Espacial-Abstrato", dificuldade: "dificil", enunciado: "Um cubo 3x3x3 é pintado de vermelho em todas as faces. Quantos dos cubos menores têm exatamente UMA face pintada?", opcoes: ["6", "8", "12", "27"], resposta_correta: "6" },
    { id: 603, categoria: "Abstrato-Verbal", dificuldade: "dificil", enunciado: "A sequência é: O, T, T, F, F, S, S, ... Qual a próxima letra?", opcoes: ["E", "N", "O", "T"], resposta_correta: "E" },
    { id: 604, categoria: "Espacial-Abstrato", dificuldade: "media", enunciado: "Se você espelhar horizontalmente e depois girar 90 graus no sentido horário a letra 'b', qual letra você obtém?", opcoes: ["b", "d", "p", "q"], resposta_correta: "p" },
    { id: 605, categoria: "Espacial-Abstrato", dificuldade: "dificil", enunciado: "Imagine as seguintes dobras em um papel quadrado: 1. Dobra ao meio na horizontal. 2. Dobra ao meio na vertical. 3. Corta o canto que contém todas as dobras. Quantos buracos o papel terá ao ser desdobrado?", opcoes: ["1", "2", "4", "Um buraco no centro"], resposta_correta: "Um buraco no centro" },
    { id: 903, categoria: "Espacial-Abstrato", dificuldade: "media", enunciado: "Imagine uma pirâmide com uma base quadrada. Se você a cortar horizontalmente em dois pedaços, qual forma geométrica será a nova face superior do pedaço de baixo?", opcoes: ["Triângulo", "Círculo", "Quadrado", "Trapézio"], resposta_correta: "Quadrado" },
    { id: 1003, categoria: "Espacial-Abstrato", dificuldade: "facil", enunciado: "Se a palavra 'SOL' for refletida horizontalmente, quais letras você obterá?", opcoes: ["LOS", "OL S", "SOL", "L O S"], resposta_correta: "SOL" },
    { id: 1007, categoria: "Espacial-Abstrato", dificuldade: "facil", enunciado: "Qual a próxima forma na sequência: Quadrado, Triângulo, Círculo, Quadrado, Triângulo, X?", opcoes: ["Pentágono", "Hexágono", "Círculo", "Retângulo"], resposta_correta: "Círculo" },

    // Lógica Dedutiva (silogismos, quebra-cabeças lógicos, inferência)
    { id: 401, categoria: "Lógica Dedutiva", dificuldade: "dificil", enunciado: "Se todo Wip é um Wap, e alguns Waps são Wups, podemos concluir que:", opcoes: ["Todo Wip é um Wup", "Nenhum Wip é um Wup", "Alguns Wips são Wups", "Nenhuma conclusão é garantida"], resposta_correta: "Nenhuma conclusão é garantida" },
    { id: 402, categoria: "Lógica Dedutiva", dificuldade: "dificil", enunciado: "Você tem duas portas, uma leva ao céu e outra ao inferno. Dois guardas as vigiam. Um sempre mente, o outro sempre fala a verdade. Qual pergunta você faz a UM deles para descobrir a porta do céu?", opcoes: ["Qual porta o outro guarda diria que leva ao céu?", "Você está guardando a porta do céu?", "A outra porta é pior que a sua?", "Essa porta leva para o inferno?"], resposta_correta: "Qual porta o outro guarda diria que leva ao céu?" },
    { id: 403, categoria: "Lógica Dedutiva", dificuldade: "dificil", enunciado: "Se chove, a rua fica molhada. A rua está molhada. Portanto:", opcoes: ["Choveu", "Não choveu", "Pode ter chovido ou não", "O sol está brilhando"], resposta_correta: "Pode ter chovido ou não" },
    { id: 405, categoria: "Lógica Dedutiva", dificuldade: "dificil", enunciado: "Numa ilha, os nativos ou são cavaleiros (sempre falam a verdade) ou são ladrões (sempre mentem). Você encontra três nativos: A, B e C. 'A' diz: 'Nós todos somos ladrões'. 'B' diz: 'Exatamente um de nós é cavaleiro'. Who is who?", opcoes: ["A é ladrão, B é cavaleiro, C é ladrão", "Todos são ladrões", "A é cavaleiro, B e C são ladrões", "A é ladrão, B e C são cavaleiros"], resposta_correta: "A é ladrão, B é cavaleiro, C é ladrão" },
    { id: 902, categoria: "Lógica Dedutiva", dificuldade: "dificil", enunciado: "Todos os A's são B's. Nenhum C é B. Podemos concluir que:", opcoes: ["Nenhum A é C", "Todos os C's são A's", "Alguns A's são C's", "Nenhuma conclusão garantida"], resposta_correta: "Nenhum A é C" },
    { id: 905, categoria: "Lógica Temporal", dificuldade: "media", enunciado: "Se é terça-feira amanhã, que dia da semana foi anteontem?", opcoes: ["Sexta-feira", "Sábado", "Domingo", "Segunda-feira"], resposta_correta: "Domingo" },
    { id: 908, categoria: "Lógica Dedutiva", dificuldade: "dificil", enunciado: "Você tem um barco e dois baldes, um de 3 litros e outro de 5 litros. Como você pode medir exatamente 4 litros de água usando apenas os baldes, sem outras ferramentas?", opcoes: ["Encher o de 3L duas vezes", "Encher o de 5L e despejar 3L no outro", "Encher o de 3L, despejar no de 5L, encher o de 3L novamente, despejar no de 5L até encher, o que sobrar no de 3L é 1L, transferir para o de 5L e repetir o processo", "Encher o de 5L, despejar no de 3L, sobrando 2L. Despejar os 2L no balde de 3L (agora com 2L). Encher o balde de 5L, e com ele completar o balde de 3L (faltando 1L), sobrando 4L no balde de 5L."], resposta_correta: "Encher o de 5L, despejar no de 3L, sobrando 2L. Despejar os 2L no balde de 3L (agora com 2L). Encher o balde de 5L, e com ele completar o balde de 3L (faltando 1L), sobrando 4L no balde de 5L." },
    { id: 1002, categoria: "Lógica Dedutiva", dificuldade: "media", enunciado: "Todos os cães são mamíferos. Alguns mamíferos são aquáticos. Podemos concluir que:", opcoes: ["Todos os cães são aquáticos", "Alguns cães são aquáticos", "Nenhum cão é aquático", "Nenhuma conclusão é garantida"], resposta_correta: "Nenhuma conclusão é garantida" },
    { id: 1005, categoria: "Lógica Dedutiva", dificuldade: "dificil", enunciado: "Você tem três caixas rotuladas 'Maçãs', 'Laranjas' e 'Maçãs e Laranjas'. Todas as caixas estão rotuladas incorretamente. Você pode pegar apenas uma fruta de uma caixa para rotular todas corretamente. De qual caixa você pegaria?", opcoes: ["Maçãs", "Laranjas", "Maçãs e Laranjas", "Qualquer uma"], resposta_correta: "Maçãs e Laranjas" },
    { id: 1009, categoria: "Lógica Probabilística", dificuldade: "dificil", enunciado: "Uma família tem dois filhos. Sabe-se que um deles é um menino. Qual é a probabilidade de o outro filho ser um menino também? (Assuma que a chance de ser menino ou menina é 50% para cada nascimento)", opcoes: ["1/4", "1/3", "1/2", "2/3"], resposta_correta: "1/3" },

    // Conhecimentos Fundamentais (baseado em currículo escolar brasileiro)
    { id: 1101, categoria: "Conhecimentos Gerais - Língua Portuguesa", dificuldade: "media", enunciado: "Em 'A casa era grande, mas estava vazia', a palavra destacada ('mas') expressa uma relação de:", opcoes: ["Adição", "Oposição", "Conclusão", "Explicação"], resposta_correta: "Oposição" },
    { id: 1102, categoria: "Conhecimentos Gerais - Matemática", dificuldade: "dificil", enunciado: "Se 3/5 de uma sala de aula são meninas e há 12 meninos, quantas meninas há na sala?", opcoes: ["18", "20", "24", "30"], resposta_correta: "18" },
    { id: 1103, categoria: "Conhecimentos Gerais - História", dificuldade: "media", enunciado: "A Proclamação da República no Brasil, em 1889, resultou principalmente da crise de qual sistema político anterior?", opcoes: ["Monarquia Constitucional", "Regime Imperial", "Nova República", "Período Colonial"], resposta_correta: "Regime Imperial" },
    { id: 1104, categoria: "Conhecimentos Gerais - Geografia", dificuldade: "media", enunciado: "O que é um ecossistema, no contexto ambiental?", opcoes: ["Uma comunidade de plantas e animais isolada", "Uma área desértica sem vida", "A interação entre seres vivos e seu ambiente físico", "Apenas a parte não-viva de um ambiente"], resposta_correta: "A interação entre seres vivos e seu ambiente físico" },
    { id: 1105, categoria: "Conhecimentos Gerais - Ciências", dificuldade: "facil", enunciado: "Qual é a principal função dos pulmões no corpo humano?", opcoes: ["Bombear sangue", "Filtrar o sangue", "Realizar a troca gasosa", "Produzir hormônios"], resposta_correta: "Realizar a troca gasosa" },
    { id: 1106, categoria: "Conhecimentos Gerais - Língua Portuguesa", dificuldade: "media", enunciado: "Na frase 'Choveu canivetes!', a figura de linguagem utilizada para exagerar a intensidade da chuva é:", opcoes: ["Metáfora", "Comparação", "Hipérbole", "Personificação"], resposta_correta: "Hipérbole" },
    { id: 1107, categoria: "Conhecimentos Gerais - Matemática", dificuldade: "media", enunciado: "Qual é o menor número inteiro positivo divisível por 2, 3 e 5 ao mesmo tempo?", opcoes: ["10", "15", "30", "60"], resposta_correta: "30" },
    { id: 1108, categoria: "Conhecimentos Gerais - História", dificuldade: "media", enunciado: "A Constituição Federal de 1988 no Brasil é conhecida como 'Constituição Cidadã' principalmente por:", opcoes: ["Estabelecer o voto obrigatório", "Restaurar a monarquia", "Ampliar direitos e garantias individuais e sociais", "Reduzir o poder do presidente"], resposta_correta: "Ampliar direitos e garantias individuais e sociais" },
    { id: 1109, categoria: "Conhecimentos Gerais - Geografia", dificuldade: "media", enunciado: "Qual bioma brasileiro é caracterizado por árvores de pequeno porte, caules retorcidos e casca grossa, adaptadas ao clima seco, e é considerado a savana brasileira?", opcoes: ["Amazônia", "Mata Atlântica", "Cerrado", "Pampa"], resposta_correta: "Cerrado" },
    { id: 1110, categoria: "Conhecimentos Gerais - Ciências", dificuldade: "facil", enunciado: "Qual força fundamental da natureza é responsável por manter os planetas em órbita ao redor do Sol?", opcoes: ["Força eletromagnética", "Força nuclear", "Força gravitacional", "Força de atrito"], resposta_correta: "Força gravitacional" },

    // Perguntas Estilo GRE/GMAT (com foco em raciocínio quantitativo/lógico avançado)
    { id: 1201, categoria: "Raciocínio Quantitativo", dificuldade: "dificil", enunciado: "Trabalho Conjunto: Se a máquina A produz 100 peças em 2 horas e a máquina B produz 100 peças em 3 horas, quanto tempo levariam as duas máquinas trabalhando juntas para produzir 100 peças?", opcoes: ["1h 12min", "1h 20min", "1h 30min", "2h 30min"], resposta_correta: "1h 12min" },
    { id: 1202, categoria: "Raciocínio Quantitativo", dificuldade: "dificil", enunciado: "Probabilidade: Em um baralho de 52 cartas, qual a probabilidade de tirar dois ases seguidos, sem reposição da primeira carta?", opcoes: ["1/13", "1/17", "1/221", "1/26"], resposta_correta: "1/221" },
    { id: 1203, categoria: "Lógica Dedutiva", dificuldade: "dificil", enunciado: "Inferência Lógica: Se todos os unicórnios são mágicos, e alguns seres mágicos são visíveis, podemos concluir que:", opcoes: ["Todos os unicórnios são visíveis", "Alguns unicórnios são visíveis", "Nenhum unicórnio é visível", "Nenhuma conclusão é garantida"], resposta_correta: "Nenhuma conclusão é garantida" },
    { id: 1204, categoria: "Raciocínio Quantitativo", dificuldade: "media", enunciado: "Porcentagem: Um item custava R$ 100. Seu preço aumentou 10% e depois diminuiu 10% do novo preço. Qual o preço final do item?", opcoes: ["R$ 90,00", "R$ 99,00", "R$ 100,00", "R$ 110,00"], resposta_correta: "R$ 99,00" },
    { id: 1205, categoria: "Raciocínio Quantitativo", dificuldade: "dificil", enunciado: "Sequência Numérica: Qual o próximo número na sequência: 1, 2, 6, 24, 120, X?", opcoes: ["240", "360", "720", "840"], resposta_correta: "720" },
    { id: 1206, categoria: "Lógica Dedutiva", dificuldade: "media", enunciado: "Lógica de Pessoas: Três amigos (A, B, C) moram em três cidades diferentes (X, Y, Z). A não mora em X. B mora em Z. Quem mora em Y?", opcoes: ["A", "B", "C", "Não é possível determinar"], resposta_correta: "A" },
    { id: 1207, categoria: "Raciocínio Quantitativo", dificuldade: "media", enunciado: "Média Ponderada: Um aluno tirou 8.0 em uma prova que vale peso 2 e 6.0 em outra prova que vale peso 3. Qual a média ponderada do aluno?", opcoes: ["6.8", "7.0", "7.2", "7.5"], resposta_correta: "6.8" },
    { id: 1208, categoria: "Raciocínio Quantitativo", dificuldade: "media", enunciado: "Geometria Conceitual: Se o lado de um quadrado é duplicado, o que acontece com a sua área?", opcoes: ["Dobra", "Triplica", "Quadruplica", "Permanece a mesma"], resposta_correta: "Quadruplica" },
    { id: 1209, categoria: "Raciocínio Quantitativo", dificuldade: "dificil", enunciado: "Problema de Idade: Maria tem o dobro da idade de João. Há 5 anos, Maria tinha o triplo da idade de João. Quantos anos Maria tem agora?", opcoes: ["10", "15", "20", "25"], resposta_correta: "20" },
    { id: 1210, categoria: "Lógica Dedutiva", dificuldade: "dificil", enunciado: "Paradoxo Lógico: Qual afirmação é verdadeira? 1) Exatamente uma destas afirmações é falsa. 2) Exatamente duas destas afirmações são falsas. 3) Exatamente três destas afirmações são falsas.", opcoes: ["A afirmação 1 é verdadeira", "A afirmação 2 é verdadeira", "A afirmação 3 é verdadeira", "Nenhuma é verdadeira"], resposta_correta: "A afirmação 2 é verdadeira" },
];

// --- VARIÁVEIS GLOBAIS ---
// Declaração de variáveis para elementos da UI, estados do teste e pontuações.
let startScreen, testScreen, resultScreen;
let startBtn, nextBtn, restartBtn, confirmBtn, themeToggleBtn; 
let questionNumberEl, totalQuestionsEl, questionCategoryEl, questionTextEl, optionsContainer, progressBar, timerDisplay;
let scoreEl; // Pontuação final (líquida)
let averageTimeEl, resultMessageEl;
let highScoreEl, categoryScoresContainer; 
let qiAssessmentEl;

// Novos elementos para exibir acertos e perdidos separadamente
let pointsGainedEl, pointsLostEl; 

// Estado do Teste
let questoesDoTeste = []; // Array para as questões do teste atual, sorteadas do BANCO_DE_QUESTOES.
let questaoAtualIndex = 0; // Índice da questão atual sendo exibida.
let pontuacao = 0; // Pontuação atual (líquida).
const TOTAL_PERGUNTAS_NO_TESTE = 20; // Número fixo de perguntas por teste.

// Estado do Cronômetro
const TEMPO_POR_QUESTAO = 35; // Tempo em segundos para cada questão.
let tempoRestante; // Tempo restante para a questão atual.
let timerInterval; // ID do intervalo do timer, para poder limpá-lo.
let tempoTotalDeResposta = 0; // Tempo total gasto em respostas confirmadas.
let perguntasRespondidas = 0; // Contagem de perguntas onde o usuário confirmou a resposta (não por timeout).

// Variáveis de Estado Avançadas
let currentSelectedOptionCard = null; // Armazena a referência ao card de opção atualmente selecionado (destacado).
let highScore = 0; // A maior pontuação já alcançada, persistente via localStorage.
let scoreByCategory = {}; // Objeto para rastrear acertos por categoria no teste atual.
let totalQuestionsByCategory = {}; // Novo objeto para rastrear o total de perguntas POR CATEGORIA.

// Novas variáveis para rastrear pontos ganhos e perdidos explicitamente
let pointsGained = 0; 
let pointsLost = 0;

// --- FUNÇÕES GLOBAIS ---

/**
 * Prepara o teste selecionando e embaralhando as questões.
 * Garante que o número de perguntas não exceda o disponível no banco.
 */
function prepararTeste() {
    const numPerguntas = Math.min(TOTAL_PERGUNTAS_NO_TESTE, BANCO_DE_QUESTOES.length);
    
    // Cria uma CÓPIA do BANCO_DE_QUESTOES antes de embaralhar para não modificar o original.
    const bancoEmbaralhado = [...BANCO_DE_QUESTOES].sort(() => Math.random() - 0.5);
    
    // Seleciona o número desejado de perguntas embaralhadas.
    questoesDoTeste = bancoEmbaralhado.slice(0, numPerguntas);
    
    // Reseta todos os estados para um novo teste.
    questaoAtualIndex = 0;
    pontuacao = 0;
    tempoTotalDeResposta = 0;
    perguntasRespondidas = 0;
    scoreByCategory = {}; // Reinicia as pontuações por categoria.
    totalQuestionsByCategory = {}; // Reinicia a contagem total por categoria.
    pointsGained = 0; // Zera pontos ganhos
    pointsLost = 0;   // Zera pontos perdidos
}

/**
 * Apresenta a questão atual na tela do teste, atualizando a UI.
 */
function apresentarQuestao() {
    clearInterval(timerInterval); // Garante que qualquer timer anterior seja parado.

    // Verifica se todas as questões foram apresentadas para finalizar o teste.
    if (questaoAtualIndex >= questoesDoTeste.length) {
        mostrarResultado();
        return;
    }

    const questao = questoesDoTeste[questaoAtualIndex];
    
    // Atualiza a contagem de perguntas para a categoria atual.
    if (!totalQuestionsByCategory[questao.categoria]) {
        totalQuestionsByCategory[questao.categoria] = 0;
    }
    totalQuestionsByCategory[questao.categoria]++;

    // Atualiza a barra de progresso.
    const progresso = ((questaoAtualIndex) / questoesDoTeste.length) * 100;
    progressBar.style.width = `${progresso}%`;
    
    // Atualiza os elementos de texto da questão na UI.
    questionNumberEl.innerText = questaoAtualIndex + 1;
    totalQuestionsEl.innerText = questoesDoTeste.length;
    // Formata a categoria removendo hífens para exibição.
    const categoriaFormatada = questao.categoria.replace(/-/g, ' '); 
    questionCategoryEl.innerText = `Categoria: ${categoriaFormatada} (${questao.dificuldade})`;
    questionTextEl.innerText = questao.enunciado;

    optionsContainer.innerHTML = ''; // Limpa as opções de resposta anteriores.
    // Embaralha as opções para que não apareçam sempre na mesma ordem.
    const opcoesEmbaralhadas = [...questao.opcoes].sort(() => Math.random() - 0.5);

    // Cria e adiciona os cards de opção ao container.
    opcoesEmbaralhadas.forEach(opcao => {
        const optionCard = document.createElement('div');
        // Classes padrão para os cards de opção, incluindo estados de tema claro/escuro.
        optionCard.className = "option-card bg-white p-4 rounded-lg border-2 border-slate-200 cursor-pointer hover:bg-slate-100 hover:border-indigo-400 text-slate-800 " +
                               "dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:border-indigo-500 dark:text-gray-100";
        optionCard.innerText = opcao;
        // Adiciona um listener para quando a opção é clicada (pré-confirmação).
        optionCard.addEventListener('click', () => selecionarOpcao(optionCard, questao));
        optionsContainer.appendChild(optionCard);
    });

    // Esconde e desabilita os botões 'Confirmar' e 'Próxima' no início da questão.
    confirmBtn.classList.add('hidden', 'bg-blue-300', 'text-blue-500', 'cursor-not-allowed');
    confirmBtn.classList.remove('bg-blue-600', 'text-white', 'hover:bg-blue-700');
    confirmBtn.disabled = true;

    nextBtn.classList.add('hidden', 'bg-slate-300', 'text-slate-500', 'cursor-not-allowed');
    nextBtn.classList.remove('bg-indigo-600', 'text-white', 'hover:bg-indigo-700');
    nextBtn.disabled = true;

    currentSelectedOptionCard = null; // Reinicia a variável de opção selecionada.
    
    iniciarTimer(); // Inicia o cronômetro para a nova questão.
}

/**
 * Inicia a contagem regressiva do timer para a questão atual.
 */
function iniciarTimer() {
    tempoRestante = TEMPO_POR_QUESTAO; // Reseta o tempo.
    timerDisplay.innerText = tempoRestante; // Atualiza o display.
    timerDisplay.classList.remove('text-red-500', 'timer-pulse'); // Remove estilos de urgência.

    // Define um intervalo para atualizar o timer a cada segundo.
    timerInterval = setInterval(() => {
        tempoRestante--;
        timerDisplay.innerText = tempoRestante;
        
        // Aplica estilos de urgência nos últimos 5 segundos.
        if (tempoRestante <= 5) {
            timerDisplay.classList.add('text-red-500', 'timer-pulse');
        }
        
        // Se o tempo esgotar, chama a função de timeout.
        if (tempoRestante <= 0) {
            handleTimeout();
        }
    }, 1000); // 1000 milissegundos = 1 segundo.
}

/**
 * Lida com o cenário onde o tempo para a questão se esgota.
 * Penaliza o usuário e prepara para a próxima questão (manual).
 */
function handleTimeout() {
    clearInterval(timerInterval); // Para o timer.
    questionTextEl.innerText = "O tempo acabou!"; // Mensagem de feedback.
    
    // Penaliza o usuário por não responder a tempo. A pontuação mínima é 0.
    pontuacao = Math.max(0, pontuacao - 1); 
    pointsLost++; // Incrementa pontos perdidos.

    // Desabilita todas as opções de resposta e aplica um estilo neutro/opaco (sem revelar correto/incorreto).
    // Garante que todas as classes de estado e tema anteriores sejam removidas antes de aplicar o estilo final.
    Array.from(optionsContainer.children).forEach(card => {
        card.style.pointerEvents = 'none'; // Impede novos cliques.
        card.classList.remove('bg-white', 'border-slate-200', 'hover:bg-slate-100', 'hover:border-indigo-400', 'text-slate-800', 
                               'bg-indigo-100', 'border-indigo-500', 'text-indigo-800', 'font-bold',
                               'dark:bg-gray-700', 'dark:border-gray-600', 'dark:hover:bg-gray-600', 'dark:hover:border-indigo-500', 'dark:text-gray-100',
                               'dark:bg-indigo-800', 'dark:border-indigo-700', 'dark:text-indigo-100',
                               'border-green-500', 'dark:border-green-400', 'border-red-500', 'dark:border-red-400'); 
        
        // Aplica estilo neutro/opaco para todas as opções (nenhuma foi selecionada ou confirmada).
        card.classList.add('bg-slate-100', 'border-slate-200', 'opacity-50', 
                           'dark:bg-gray-800', 'dark:border-gray-700', 'text-slate-800', 'dark:text-gray-100');
    });

    // Esconde e desabilita o botão 'Confirmar'.
    confirmBtn.classList.add('hidden', 'bg-blue-300', 'text-blue-500', 'cursor-not-allowed');
    confirmBtn.classList.remove('bg-blue-600', 'text-white', 'hover:bg-blue-700');
    confirmBtn.disabled = true;

    // Habilita e mostra o botão 'Próxima' para avanço manual (após timeout).
    // Nota: A lógica de auto-avanço não se aplica aqui, pois o timeout significa que não houve resposta,
    // então o usuário precisa clicar 'Próxima' para seguir. Isso evita que o teste corra automaticamente
    // se o usuário estiver ausente.
    nextBtn.disabled = false;
    nextBtn.classList.remove('hidden', 'bg-slate-300', 'text-slate-500', 'cursor-not-allowed');
    nextBtn.classList.add('bg-indigo-600', 'text-white', 'hover:bg-indigo-700');
    
    currentSelectedOptionCard = null; // Reinicia a variável de opção selecionada.
}

/**
 * Lida com a seleção de uma opção pelo usuário (pré-confirmação).
 * Apenas destaca visualmente a opção, não finaliza a resposta.
 * @param {HTMLElement} optionClickedCard - O elemento do card da opção que foi clicada.
 * @param {Object} questao - O objeto da questão atual. (Não usado diretamente aqui, mas passado para consistência).
 */
function selecionarOpcao(optionClickedCard, questao) {
    // Se já havia uma opção destacada, remove seu destaque.
    if (currentSelectedOptionCard) {
        // Remove classes de destaque
        currentSelectedOptionCard.classList.remove('bg-indigo-100', 'border-indigo-500', 'text-indigo-800', 'font-bold', 
                                                   'dark:bg-indigo-800', 'dark:border-indigo-700', 'dark:text-indigo-100');
        // Retorna a opção ao seu estilo normal (claro/escuro).
        currentSelectedOptionCard.classList.add('bg-white', 'border-slate-200', 'text-slate-800', 
                                                'dark:bg-gray-700', 'dark:border-gray-600', 'dark:text-gray-100');
    }

    // Destaca a nova opção clicada
    // Remove quaisquer classes de feedback de erro/acerto que possam ter ficado de um teste anterior (improvável, mas robustez).
    optionClickedCard.classList.remove('bg-white', 'border-slate-200', 'opacity-50', 'text-slate-800', 
                                      'dark:bg-gray-700', 'dark:border-gray-600', 'dark:text-gray-100',
                                      'border-green-500', 'dark:border-green-400', 'border-red-500', 'dark:border-red-400'); 
    
    // Aplica classes de destaque para a opção selecionada.
    optionClickedCard.classList.add('bg-indigo-100', 'border-indigo-500', 'text-indigo-800', 'font-bold',
                                   'dark:bg-indigo-800', 'dark:border-indigo-700', 'dark:text-indigo-100'); 
    
    currentSelectedOptionCard = optionClickedCard; // Atualiza a opção atualmente destacada.

    // Habilita e mostra o botão 'Confirmar'.
    confirmBtn.disabled = false;
    confirmBtn.classList.remove('hidden', 'bg-blue-300', 'text-blue-500', 'cursor-not-allowed');
    confirmBtn.classList.add('bg-blue-600', 'text-white', 'hover:bg-blue-700');
    
    // Garante que o botão 'Próxima' esteja oculto e desabilitado neste estágio.
    nextBtn.classList.add('hidden');
    nextBtn.disabled = true;
}

/**
 * Lida com a confirmação da resposta pelo usuário.
 * Para o timer, calcula a pontuação e avança automaticamente.
 */
function confirmAnswer() {
    // Garante que uma opção foi de fato selecionada antes de confirmar.
    if (!currentSelectedOptionCard) {
        console.warn("Botão Confirmar clicado sem opção selecionada."); 
        return; 
    }

    clearInterval(timerInterval); // Para o timer.
    
    const questaoAtual = questoesDoTeste[questaoAtualIndex]; // Obtém a questão atual.
    
    // Calcula o tempo gasto e incrementa o contador de perguntas respondidas.
    const tempoGasto = TEMPO_POR_QUESTAO - tempoRestante;
    tempoTotalDeResposta += tempoGasto;
    perguntasRespondidas++; 
    
    // Verifica se a resposta selecionada está correta.
    const eCorreto = currentSelectedOptionCard.innerText === questaoAtual.resposta_correta;
    
    if (eCorreto) {
        pontuacao++; // Incrementa a pontuação líquida.
        pointsGained++; // Incrementa pontos ganhos.
        // Rastreia a pontuação por categoria.
        if (!scoreByCategory[questaoAtual.categoria]) {
            scoreByCategory[questaoAtual.categoria] = 0;
        }
        scoreByCategory[questaoAtual.categoria]++;
    } else {
        // Penaliza por resposta incorreta. Pontuação mínima de 0.
        pontuacao = Math.max(0, pontuacao - 1); 
        pointsLost++; // Incrementa pontos perdidos.
    }

    // Desabilita todas as opções e aplica um estilo neutro/opaco.
    // A opção selecionada (currentSelectedOptionCard) mantém seu destaque.
    Array.from(optionsContainer.children).forEach(card => {
        card.style.pointerEvents = 'none'; // Desabilita cliques em todas as opções.
        
        // Remove todas as classes de estado e tema anteriores, incluindo feedback de borda.
        card.classList.remove('bg-white', 'border-slate-200', 'hover:bg-slate-100', 'hover:border-indigo-400', 'text-slate-800', 
                               'bg-indigo-100', 'border-indigo-500', 'text-indigo-800', 'font-bold',
                               'dark:bg-gray-700', 'dark:border-gray-600', 'dark:hover:bg-gray-600', 'dark:hover:border-indigo-500', 'dark:text-gray-100',
                               'dark:bg-indigo-800', 'dark:border-indigo-700', 'dark:text-indigo-100',
                               'border-green-500', 'dark:border-green-400', 'border-red-500', 'dark:border-red-400'); 

        // Aplica estilo neutro para todas as opções, removendo o destaque específico de correto/incorreto.
        // A opção selecionada (currentSelectedOptionCard) mantém seu estilo de destaque inicial (azul/índigo).
        // Isso atende ao requisito de não mostrar o certo/errado, mas ainda destacar a escolha do usuário.
        card.classList.add('bg-slate-100', 'border-slate-200', 'opacity-50', 
                           'dark:bg-gray-800', 'dark:border-gray-700', 'text-slate-800', 'dark:text-gray-100');
    });

    // Opcional: Se quiser que a OPÇÃO SELECIONADA MANTENHA A BORDA DA SELEÇÃO (AZUL/ÍNDIGO)
    // E AS OUTRAS SIMPLESMENTE FIQUEM OPAQUECIDAS E NEUTRAS
    if (currentSelectedOptionCard) {
        currentSelectedOptionCard.classList.remove('opacity-50'); // Remove opacidade da selecionada
        currentSelectedOptionCard.classList.remove('bg-slate-100', 'border-slate-200', 'dark:bg-gray-800', 'dark:border-gray-700'); // Remove neutro
        currentSelectedOptionCard.classList.add('bg-indigo-100', 'border-indigo-500', 'text-indigo-800', 'font-bold',
                                               'dark:bg-indigo-800', 'dark:border-indigo-700', 'dark:text-indigo-100');
    }

    // Esconde e desabilita o botão 'Confirmar'.
    confirmBtn.classList.add('hidden', 'bg-blue-300', 'text-blue-500', 'cursor-not-allowed');
    confirmBtn.classList.remove('bg-blue-600', 'text-white', 'hover:bg-blue-700');
    confirmBtn.disabled = true;

    // Remove o botão 'Próxima', pois o avanço será automático após a confirmação.
    nextBtn.classList.add('hidden');
    nextBtn.disabled = true;
    
    questionTextEl.innerText = "Resposta confirmada! Avançando..."; // Feedback breve ao usuário.
    
    // Auto-avança para a próxima questão após 0.5 segundos.
    setTimeout(() => {
        proximaQuestao();
    }, 500); 
}


/**
 * Avança para a próxima questão no teste ou finaliza se todas foram respondidas.
 */
function proximaQuestao() {
    questaoAtualIndex++; // Incrementa o índice da questão.
    apresentarQuestao(); // Chama a função para exibir a próxima questão.
}

/**
 * Determina e retorna a classificação conceitual de QI com base na pontuação percentual.
 * @param {number} score - Pontuação final do usuário no teste.
 * @param {number} totalQuestions - Total de perguntas no teste.
 * @returns {Object} Um objeto contendo a descrição da classificação e a classe de cor.
 */
function determineQiAssessment(score, totalQuestions) {
    // Evita divisão por zero se, por algum motivo, não houver perguntas.
    if (totalQuestions === 0) return { description: "N/A", color: "text-gray-500 dark:text-gray-400" };

    const percentage = (score / totalQuestions) * 100;
    let qiDescription = "";
    let colorClass = ""; // A cor será definida aqui para corresponder à imagem e ser responsiva ao tema.

    // As faixas de porcentagem são ajustadas para o teste de 20 perguntas com penalização,
    // visando um balanço que reflita as classificações de QI.
    if (percentage >= 90) { 
        qiDescription = "Excepcionalmente Avançado";
        colorClass = "text-purple-400"; 
    } else if (percentage >= 75) { 
        qiDescription = "Muito Acima da Média";
        colorClass = "text-indigo-400"; 
    } else if (percentage >= 55) { 
        qiDescription = "Acima da Média";
        colorClass = "text-blue-400"; 
    } else if (percentage >= 35) { 
        qiDescription = "Média";
        colorClass = "text-green-400"; 
    } else if (percentage >= 15) { 
        qiDescription = "Abaixo da Média";
        colorClass = "text-yellow-400"; 
    } else { // Para 0-2 acertos líquidos (ou pontuação negativa, que é floored a 0)
        qiDescription = "Raciocínio Lento/Muito Abaixo da Média";
        colorClass = "text-amber-400"; // Cor laranja/âmbar para corresponder à imagem.
    }

    return { description: qiDescription, color: colorClass }; 
}

/**
 * Mostra a tela de resultados do teste com o desempenho do usuário.
 * Inclui pontuação, tempo médio, high score e pontuação por categoria.
 */
function mostrarResultado() {
    progressBar.style.width = `100%`; // Completa a barra de progresso.
    testScreen.classList.add('hidden'); // Esconde a tela do teste.
    resultScreen.classList.remove('hidden'); // Mostra a tela de resultados.

    // Atualiza a pontuação total e o número de perguntas no display.
    scoreEl.innerText = pontuacao;
    // totalScoreEl.innerText = questoesDoTeste.length; // Removido, pois a pontuação final agora é 'scoreEl'
    
    // Atualiza os novos campos de acertos e perdidos
    pointsGainedEl.innerText = pointsGained;
    pointsLostEl.innerText = pointsLost;

    // Calcula e exibe o tempo médio por resposta.
    const tempoMedio = perguntasRespondidas > 0 ? (tempoTotalDeResposta / perguntasRespondidas).toFixed(1) : 0;
    averageTimeEl.innerText = tempoMedio;

    // Lógica para atualizar e exibir o High Score (maior pontuação).
    const currentHighScore = parseInt(localStorage.getItem('highScore') || '0', 10); 
    if (pontuacao > currentHighScore) {
        highScore = pontuacao; // Atualiza o high score global.
        localStorage.setItem('highScore', highScore.toString()); // Salva no localStorage.
        highScoreEl.innerText = `${highScore} (Novo Recorde!)`; // Mensagem de novo recorde.
        highScoreEl.classList.add('text-yellow-500', 'dark:text-yellow-300'); // Estilo de destaque.
    } else {
        highScore = currentHighScore; // Mantém o high score salvo se a pontuação atual for menor.
        highScoreEl.innerText = highScore;
        highScoreEl.classList.remove('text-yellow-500', 'dark:text-yellow-300'); // Remove estilo de destaque se não for novo recorde.
    }

    // Atualiza a seção de Pontuação por Categoria.
    categoryScoresContainer.innerHTML = ''; // Limpa resultados de testes anteriores.
    // Obtém todas as categorias únicas do banco de questões para exibir um resumo completo.
    const allCategories = [...new Set(BANCO_DE_QUESTOES.map(q => q.categoria))]; 
    allCategories.sort().forEach(category => { // Ordena as categorias alfabeticamente para consistência.
        const acertos = scoreByCategory[category] || 0; // Acertos na categoria.
        const totalPerguntasNaCategoria = totalQuestionsByCategory[category] || 0; // Total de perguntas mostradas na categoria.
        const div = document.createElement('div');
        div.className = "flex justify-between items-center bg-slate-50 dark:bg-gray-800 p-3 rounded";
        // Remove o prefixo 'Conhecimentos Gerais - ' para uma exibição mais limpa.
        const displayCategory = category.startsWith('Conhecimentos Gerais - ') ? category.substring('Conhecimentos Gerais - '.length) : category;
        // Exibe acertos / total de perguntas feitas na categoria.
        div.innerHTML = `<span class="font-medium">${displayCategory}:</span> <span class="font-bold text-indigo-600 dark:text-indigo-400">${acertos} / ${totalPerguntasNaCategoria}</span>`;
        categoryScoresContainer.appendChild(div);
    });

    // Define a mensagem geral de resultado baseada no percentual de acertos.
    const percentual = (pontuacao / questoesDoTeste.length) * 100;
    let mensagem = "";
    if (percentual >= 90) { 
        mensagem = "Parabéns, seu raciocínio é de elite!";
    } else if (percentual >= 70) {
        mensagem = "Excelente trabalho! Você tem um raciocínio muito acima da média.";
    } else if (percentual >= 50) {
        mensagem = "Bom resultado! Seu raciocínio lógico é sólido.";
    } else {
        mensagem = "Continue praticando! O desafio de lógica aprimora a cada tentativa.";
    }
    resultMessageEl.innerText = mensagem;

    // Determina e exibe a Classificação de Raciocínio (QI conceitual).
    const qiResult = determineQiAssessment(pontuacao, questoesDoTeste.length);
    qiAssessmentEl.innerText = qiResult.description;
    qiAssessmentEl.className = `text-2xl sm:text-3xl font-extrabold my-2 ${qiResult.color}`; // Aplica a classe de cor dinâmica.
}

// --- Lógica de Tema Escuro/Claro ---
/**
 * Aplica o tema (claro ou escuro) à página e salva a preferência.
 * @param {string} theme - 'light' ou 'dark'.
 */
function applyTheme(theme) {
    const htmlElement = document.documentElement; // Referência ao elemento <html>.
    if (theme === 'dark') {
        htmlElement.classList.add('dark'); // Adiciona a classe 'dark' para ativar estilos Tailwind dark:.
        themeToggleBtn.innerHTML = '🌙'; // Altera o ícone do botão para lua.
    } else {
        htmlElement.classList.remove('dark'); // Remove a classe 'dark' para o tema claro.
        themeToggleBtn.innerHTML = '☀️'; // Altera o ícone do botão para sol.
    }
    localStorage.setItem('themePreference', theme); // Salva a preferência no localStorage.
}

/**
 * Carrega a preferência de tema do usuário (ou do sistema) na inicialização da página.
 */
function loadTheme() {
    const savedTheme = localStorage.getItem('themePreference'); // Tenta carregar a preferência salva.
    if (savedTheme) {
        applyTheme(savedTheme); // Aplica a preferência salva.
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Se não há preferência salva, verifica a preferência do sistema operacional.
        applyTheme('dark');
    } else {
        // Se não há preferência salva nem do sistema, define como tema claro padrão.
        applyTheme('light');
    }
}

// --- INICIALIZAÇÃO E EVENT LISTENERS ---
// Executa o código somente após o DOM estar completamente carregado.
document.addEventListener('DOMContentLoaded', () => {
    // Associa as variáveis JavaScript aos elementos HTML por seus IDs.
    startScreen = document.getElementById('start-screen');
    testScreen = document.getElementById('test-screen');
    resultScreen = document.getElementById('result-screen');
    startBtn = document.getElementById('start-btn');
    nextBtn = document.getElementById('next-btn');
    confirmBtn = document.getElementById('confirm-btn'); 
    restartBtn = document.getElementById('restart-btn');
    themeToggleBtn = document.getElementById('theme-toggle'); 
    questionNumberEl = document.getElementById('question-number');
    totalQuestionsEl = document.getElementById('total-questions');
    questionCategoryEl = document.getElementById('question-category'); 
    questionTextEl = document.getElementById('question-text');
    optionsContainer = document.getElementById('options-container');
    progressBar = document.getElementById('progress-bar');
    timerDisplay = document.getElementById('timer-display');
    
    // Elementos da tela de resultados
    scoreEl = document.getElementById('score');
    // totalScoreEl (anteriormente usava para "0 / 20", agora 'scoreEl' é a pontuação final e a /20 será removida)
    averageTimeEl = document.getElementById('average-time');
    resultMessageEl = document.getElementById('result-message');
    highScoreEl = document.getElementById('high-score'); 
    categoryScoresContainer = document.getElementById('category-scores-container'); 
    qiAssessmentEl = document.getElementById('qi-assessment');

    // Novos elementos para pontos ganhos e perdidos
    pointsGainedEl = document.getElementById('points-gained');
    pointsLostEl = document.getElementById('points-lost');
    
    // CORREÇÃO: totalScoreEl não é mais necessário aqui, pois o formato "0 / 20" será alterado.
    // O ID "total-score" ainda existe no HTML, mas não será preenchido com o total de perguntas.
    // Em vez disso, a "Pontuação Final" será apenas o valor de `pontuacao`.
    // A linha 'totalScoreEl.innerText = questoesDoTeste.length;' em mostrarResultado() será removida.

    // Carrega o tema preferido do usuário ao iniciar a página.
    loadTheme();
    // Carrega o High Score salvo no localStorage.
    highScore = parseInt(localStorage.getItem('highScore') || '0', 10); 

    // Configura os event listeners para os botões principais.
    startBtn.addEventListener('click', () => {
        startScreen.classList.add('hidden'); // Esconde a tela inicial.
        testScreen.classList.remove('hidden'); // Mostra a tela do teste.
        prepararTeste(); // Prepara um novo teste.
        apresentarQuestao(); // Inicia a primeira questão.
    });

    confirmBtn.addEventListener('click', confirmAnswer); // Listener para o botão de confirmação.
    nextBtn.addEventListener('click', proximaQuestao); // Listener para o botão 'Próxima' (usado apenas em timeout para avanço manual).

    restartBtn.addEventListener('click', () => {
        resultScreen.classList.add('hidden'); // Esconde a tela de resultados.
        startScreen.classList.remove('hidden'); // Retorna à tela inicial.
        progressBar.style.width = `0%`; // Reseta a barra de progresso.
    });

    // Listener para o botão de alternância de tema.
    themeToggleBtn.addEventListener('click', () => {
        const htmlElement = document.documentElement;
        if (htmlElement.classList.contains('dark')) {
            applyTheme('light'); // Se está no modo escuro, muda para claro.
        } else {
            applyTheme('dark'); // Se está no modo claro, muda para escuro.
        }
    });
});