const quizSection = document.getElementById("quiz-section");
const resultSection = document.getElementById("result-section");
const questionContainer = document.getElementById("question-container");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const restartBtn = document.getElementById("restart-btn");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");
const resultSummary = document.getElementById("result-summary");
const resultsContainer = document.getElementById("results");

let quizData = null;
let currentQuestionIndex = 0;
let answers = [];

async function init() {
  try {
    const res = await fetch("./data/ai-tools.json");
    if (!res.ok) {
      throw new Error("データの読み込みに失敗しました。");
    }
    quizData = await res.json();

    answers = new Array(quizData.questions.length).fill(null);
    renderQuestion();
    attachEvents();
  } catch (error) {
    questionContainer.innerHTML = `<p>エラー: ${error.message}</p>`;
    nextBtn.disabled = true;
    prevBtn.disabled = true;
  }
}

function attachEvents() {
  nextBtn.addEventListener("click", handleNext);
  prevBtn.addEventListener("click", handlePrev);
  restartBtn.addEventListener("click", handleRestart);
}

function renderQuestion() {
  const question = quizData.questions[currentQuestionIndex];

  progressText.textContent = `質問 ${currentQuestionIndex + 1} / ${quizData.questions.length}`;
  progressFill.style.width = `${((currentQuestionIndex + 1) / quizData.questions.length) * 100}%`;

  questionContainer.innerHTML = `
    <h2 class="question-title">${question.title}</h2>
    <div class="options">
      ${question.options
        .map((option, index) => {
          const selected = answers[currentQuestionIndex] === index ? "selected" : "";
          return `
            <div class="option ${selected}" data-index="${index}">
              ${option.label}
            </div>
          `;
        })
        .join("")}
    </div>
  `;

  document.querySelectorAll(".option").forEach((el) => {
    el.addEventListener("click", () => {
      const selectedIndex = Number(el.dataset.index);
      answers[currentQuestionIndex] = selectedIndex;
      renderQuestion();
    });
  });

  prevBtn.disabled = currentQuestionIndex === 0;
  nextBtn.disabled = answers[currentQuestionIndex] === null;

  if (currentQuestionIndex === quizData.questions.length - 1) {
    nextBtn.textContent = "結果を見る";
  } else {
    nextBtn.textContent = "次へ";
  }
}

function handleNext() {
  if (answers[currentQuestionIndex] === null) return;

  if (currentQuestionIndex < quizData.questions.length - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
  } else {
    showResults();
  }
}

function handlePrev() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex -= 1;
    renderQuestion();
  }
}

function handleRestart() {
  currentQuestionIndex = 0;
  answers = new Array(quizData.questions.length).fill(null);

  resultSection.classList.add("hidden");
  quizSection.classList.remove("hidden");

  renderQuestion();
}

function collectSelectedTags() {
  const selectedTags = [];

  quizData.questions.forEach((question, qIndex) => {
    const answerIndex = answers[qIndex];
    if (answerIndex !== null) {
      const selectedOption = question.options[answerIndex];
      selectedTags.push(...selectedOption.tags);
    }
  });

  return selectedTags;
}

function scoreTools(selectedTags) {
  return quizData.tools
    .map((tool) => {
      let score = 0;

      selectedTags.forEach((tag) => {
        if (tool.tags.includes(tag)) {
          score += 1;
        }
      });

      return {
        ...tool,
        score
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

function showResults() {
  const selectedTags = collectSelectedTags();
  const topTools = scoreTools(selectedTags);

  quizSection.classList.add("hidden");
  resultSection.classList.remove("hidden");

  const bestTool = topTools[0];
  resultSummary.textContent = `あなたには「${bestTool.name}」タイプが特に向いています。`;

  resultsContainer.innerHTML = topTools
    .map((tool, index) => {
      return `
        <article class="result-card">
          <div class="result-rank">おすすめ ${index + 1}</div>
          <h3>${tool.name}</h3>
          <p>${tool.description}</p>
          <p><strong>向いている理由:</strong> ${tool.reasonTemplate}</p>
          <a class="cta-link" href="${tool.link}" target="_blank" rel="noopener noreferrer">
            詳細を見る
          </a>
        </article>
      `;
    })
    .join("");
}

init();