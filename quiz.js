function openHome() {
  window.location.href = "home.html";
}

function openRepublic() {
    window.location.href = "republic.html";
}

function openPreamble() {
    window.location.href = "preamble.html";
}

function openConstitution() {
    window.location.href = "constitution.html";
}

function openLeader() {
    window.location.href = "leader.html";
}

function openRight() {
    window.location.href = "right.html";
}

function openDuty() {
    window.location.href = "duty.html";
}

let quizData = [
  {
    q: "Republic Day of India is celebrated on which date?",
    options: ["15 August","26 January","2 October","14 November"],
    answer: "26 January"
  },
  {
    q: "India became a Republic in which year?",
    options: ["1947","1949","1950","1952"],
    answer: "1950"
  },
  {
    q: "The Constitution of India came into force on?",
    options: ["15 August 1947","26 January 1949","26 January 1950","2 October 1950"],
    answer: "26 January 1950"
  },
  {
    q: "Who was the first President of India?",
    options: ["Jawaharlal Nehru","Rajendra Prasad","Sardar Patel","Dr. B. R. Ambedkar"],
    answer: "Rajendra Prasad"
  },
  {
    q: "Who is known as the chief architect of the Indian Constitution?",
    options: ["Jawaharlal Nehru","Rajendra Prasad","Dr. B. R. Ambedkar","Mahatma Gandhi"],
    answer: "Dr. B. R. Ambedkar"
  },
  {
    q: "Where is the Republic Day parade held?",
    options: ["India Gate","Red Fort","Kartavya Path","Rashtrapati Bhavan"],
    answer: "Kartavya Path"
  },
  {
    q: "How many articles are there in the Indian Constitution originally?",
    options: ["395","400","448","450"],
    answer: "395"
  },
  {
    q: "Which is the longest written constitution in the world?",
    options: ["USA","India","UK","France"],
    answer: "India"
  },
  {
    q: "Who gives the salute to the national flag on Republic Day?",
    options: ["Prime Minister","Chief Justice","President","Vice President"],
    answer: "President"
  },
  {
    q: "Which award is announced on Republic Day?",
    options: ["Padma Awards","Bharat Ratna","Gallantry Awards","All of these"],
    answer: "All of these"
  },
  {
    q: "What is the national anthem played on Republic Day?",
    options: ["Vande Mataram","Jana Gana Mana","Saare Jahan Se Achha","Ae Mere Watan"],
    answer: "Jana Gana Mana"
  },
  {
    q: "How many schedules are there in the Indian Constitution currently?",
    options: ["8","10","12","14"],
    answer: "12"
  },
  {
    q: "Which body organizes the Republic Day parade?",
    options: ["Indian Army","Ministry of Defence","President Office","Parliament"],
    answer: "Ministry of Defence"
  },
  {
    q: "Who was the first Chief Guest of Republic Day?",
    options: ["Queen Elizabeth","Sukarno","Joseph Stalin","Nelson Mandela"],
    answer: "Sukarno"
  },
  {
    q: "Which tricolour color represents courage and sacrifice?",
    options: ["White","Green","Saffron","Blue"],
    answer: "Saffron"
  },
  {
    q: "Ashoka Chakra has how many spokes?",
    options: ["12","18","24","36"],
    answer: "24"
  },
  {
    q: "Republic Day parade showcases which of the following?",
    options: ["Cultural diversity","Military strength","State tableaux","All of these"],
    answer: "All of these"
  },
  {
    q: "Which school children event is popular on Republic Day?",
    options: ["Marathon","Cultural dance","Bravery awards","Science fair"],
    answer: "Bravery awards"
  },
  {
    q: "Who unfurls the national flag on Republic Day?",
    options: ["Prime Minister","President","Chief Minister","Governor"],
    answer: "President"
  },
  {
    q: "Republic Day signifies India becoming a?",
    options: ["Free Nation","Independent State","Democratic Republic","Union Territory"],
    answer: "Democratic Republic"
  }
];

let wrongAnswers = [];
let currentQuestion = 0;
let score = 0;

let questionEl = document.getElementById("question");
let optionsEl = document.getElementById("options");
let nextBtn = document.getElementById("nextBtn");
let questionCount = document.getElementById("questionCount");

function loadQuestion() {
  let q = quizData[currentQuestion];

  questionCount.innerText = `${currentQuestion + 1} of ${quizData.length}`;
  questionEl.innerText = q.q;
  optionsEl.innerHTML = "";
  nextBtn.disabled = true;

 q.options.forEach(opt => {
  let label = document.createElement("label");

  label.className = `
    flex items-center gap-3 bg-black/60 text-white px-3 py-2 rounded-lg cursor-pointer hover:bg-black/80 transition`;

  label.innerHTML = `
    <input type="radio" name="option" value="${opt}" class="accent-orange-500"><span>${opt}</span>`;

  optionsEl.appendChild(label);
});


  document.querySelectorAll('input[name="option"]').forEach(input => {
    input.addEventListener("change", () => {
      nextBtn.disabled = false;
    });
  });
}

function nextQuestion() {
  let selected = document.querySelector('input[name="option"]:checked');

  if (!selected) return;

  if (selected.value === quizData[currentQuestion].answer) {
    score++;
  } else {
    wrongAnswers.push({
      question: quizData[currentQuestion].q,
      correct: quizData[currentQuestion].answer,
      selected: selected.value
    });
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  nextBtn.style.display = "none";
  showResultScreen();
}

function showResultScreen() {
  questionEl.innerText = "Quiz Finished 🎉";

  optionsEl.innerHTML = `
    <p class="text-white text-xl font-bold mb-4">

      Your Score: ${score} / ${quizData.length}
    </p>

    <div class="flex flex-col gap-4 items-center">

      <button
        onclick="restartQuiz()" class="mt-2 text-2xl font-bold text-pink-700 px-6 py-2 rounded-full border-b-4 border-t-orange-700 
        border-b-green-700 border-x-white shadow-lg transition-all hover:border-t-4 hover:border-b-0 hover:-translate-y-1">
        RESTART GAME
      </button>

      <button
        onclick="showWrongAnswers()" class="text-2xl font-bold text-pink-700 px-6 py-2 rounded-full border-b-4 border-t-orange-700 
        border-b-green-700 border-x-white shadow-lg transition-all hover:border-t-4 hover:border-b-0 hover:-translate-y-1">
        WRONG ANSWERS
      </button>

    </div>
  `;
}
 function showWrongAnswers() {

  let html = `
    <div class="flex flex-col items-center gap-4 text-white">

      <button
        onclick="showResultScreen()" class="self-start text-sm font-bold text-white bg-black/60 px-4 py-1 rounded-full hover:bg-black/80">
        ←
      </button>

      <h3 class="text-2xl font-bold">Wrong Questions</h3>
  `;

  if (wrongAnswers.length === 0) {

    optionsEl.innerHTML = `
      <div class="flex flex-col items-center gap-4 text-white">

        <button
          onclick="showResultScreen()" class="self-start text-sm font-bold text-white bg-black/60 px-4 py-1 rounded-full hover:bg-black/80">
          ←
        </button>

        <p class="text-xl">Perfect score 🔥 No wrong answers!</p>
      </div>
    `;
    return;
  }

  wrongAnswers.forEach((item, index) => {
    html += `
      <div class="bg-black/50 p-4 rounded w-full text-left">
        <p><b>Q${index + 1}:</b> <b>${item.question}</b></p>
        <p class="text-red-300">❌ Your Answer: ${item.selected}</p>
        <p class="text-green-300">✅ Correct Answer: ${item.correct}</p>
      </div>
    `;
  });

  html += `</div>`;

  optionsEl.innerHTML = html;
}

function restartQuiz() {

  currentQuestion = 0;

  score = 0;

  wrongAnswers = [];

  nextBtn.style.display = "inline-block";

  loadQuestion();
}

loadQuestion();
