//Welcome Page

{
  let h2 = document.createElement("h2");
  h2.innerHTML = "Welcome to <br><span>your exam</span>";
  let title = document.querySelector(".title");
  title.appendChild(h2);

  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  p.innerHTML =
    "We don't expect most engineers to know the answers to all of these <br>questions, so don't worry if you're unsure of a few of them.";
  h3.innerHTML = "Instructions";
  let subtitle = document.querySelector(".subtitle");
  subtitle.appendChild(h3);
  subtitle.appendChild(p);
}

(function makeList() {
  let ul = document.createElement("ul");
  ul.setAttribute("id", "list");

  arr = [
    "Each question is <span>timed</span> and can onyl be <span>answered once</span>.",
    "Changing browser tab or opening other windows will <span>invalidate the question</span>.",
    "This exam will take approx.<span>0-5 minutes</span>.",
  ];

  document.querySelector(".myList").appendChild(ul);
  arr.forEach(printList);
  function printList(element, index, arr) {
    let li = document.createElement("li");
    li.setAttribute("class", "li-item");
    ul.appendChild(li);
    li.innerHTML = element;
  }
})();

let p = document.createElement("p");
let box = document.createElement("input");
box.setAttribute("type", "checkbox", "id", "btn", "class", "cbox");
p.innerHTML =
  "<span>I promise to answer myself without help from anyone</span>";
let check = document.querySelector(".checkbox");
check.append(box);
let pcheck = document.querySelector(".pcheck");
check.setAttribute("class", "pbox");
check.append(box);
pcheck.append(p);
let but = document.createElement("button");
but.innerHTML = "proceed";
let button = document.querySelector(".button");
button.appendChild(but);
but.addEventListener("click", function nextPage() {
  if (box.checked == true) {
    let welcome = document.querySelector(".welcome");
    let benchmark = document.querySelector(".benchmark");
    welcome.innerHTML = "";
    benchmark.style.display = "block";
  }
});

// Benchmark Page
let contatore = 0;
let domande;
let domandaCorrente;
let risposteSbagliate = [];

async function init() {
  let apiURL =
    "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy";
  domande = await fetch(apiURL).then((res) => res.json());
  domande = shuffle(domande.results);

  but.addEventListener("click", function () {
    createButtons();
  });
}

let counter = document.querySelector(".counter");
let pCounter = document.createElement("p");
pCounter.setAttribute("class", "pcounter");

  
counter.append(pCounter);

function createButtons() {
  domandaCorrente = domande[contatore];
  let { type, difficulty, question, correct_answer, incorrect_answers } =
    domandaCorrente;
  let titolo = document.querySelector(".qea .question");
  let bottoni = document.querySelector(".qea .buttons");
  bottoni.innerHTML = "";
  titolo.textContent = question;
  let risposteCompleto = incorrect_answers;
  risposteCompleto.push(correct_answer);
  
  if (type != "boolean") {
    risposteCompleto = shuffle(risposteCompleto);
  }

  for (let risposta of risposteCompleto) {
    let button = document.createElement("button");
    button.classList.add("button-answer");
    button.textContent = risposta;
    button.addEventListener('mousedown', function (){
      button.classList.add('pressed');
    });
    button.addEventListener("mouseup", function () {
      button.classList.remove('pressed');
    });
    button.addEventListener('mouseleave',function(){
      button.classList.remove('pressed');
    })
    button.addEventListener("click", function () {
      if (contatore < domande.length) {
        contatore++;
        if (incorrect_answers.includes(risposta)) {
          risposteSbagliate.push(domandaCorrente);
        }
        createButtons();
      } else {
      }
    });
    bottoni.append(button);
  }
  pCounter.innerHTML= 'question '+ (contatore + 1) + '/10';
}

function shuffle(array) {
  let newArr = [];
  let length = array.length;
  for (let i = 0; i < length; i++) {
    let rand = Math.floor(Math.random() * array.length);
    newArr.push(array[rand]);
    array.splice(rand, 1);
  }
  return newArr;
}

init();

//Timer

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 20;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.querySelector(".timer").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

// const fullDashArray = 283;
// const colorCodes = {
//   info: {
//     color: "aqua"
//   },
// };
// let remainingPathColor = colorCodes.info.color;

// const timeLimit = 5;
// let timePassed = 0;
// let timeLeft = timeLimit;


// document.querySelector('.timer').innerHTML = `
// <div class="base-timer">
//   <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
//     <g class="base-timer__circle">
//       <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
//       <path
//         id="base-timer-path-remaining"
//         stroke-dasharray="283"
//         class="base-timer__path-remaining ${remainingPathColor}"
//         d="
//           M 50, 50
//           m -45, 0
//           a 45,45 0 1,0 90,0
//           a 45,45 0 1,0 -90,0
//         "
//       ></path>
//       </g>
//   </svg>
//   <span id="base-timer-label" class="base-timer_label">
//     ${formatTimeLeft(timeLeft)}
//   </span>
// </div>
// `;



// function formatTimeLeft(time){
//   let seconds = time % 60;
//   if (seconds < 10) {
//     seconds = `0${seconds}`;
//   }
//   return `${seconds}`;
// }


// let timerInterval = null;

// function startTimer() {
//   timerInterval = setInterval(() => {
//     timePassed = timePassed += 1;
//     timeLeft = timeLimit - timePassed;
//     document.querySelector('#base-timer-label').innerHTML = formatTime(timeLeft);
//     setCircleDasharray();
//       if(timeLeft === 0){
//         createButtons();
//       }
//     },1000);
//   }

// function calculateTimeFraction() {
//   const rawTimeFraction = timeLeft / timeLimit;
//   return rawTimeFraction - (1 / timeLimit) * (1 - rawTimeFraction);
// }

// function setCircleDasharray() {
//   const circleDasharray = `${(
//     calculateTimeFraction() * fullDashArray
//   ).toFixed(0)} 283`;
//   document
//     .querySelector("#base-timer-path-remaining")
//     .setAttribute("stroke-dasharray", circleDasharray);
// }

//Timer
// let timer = document.querySelector(".timer");
// let upSec = document.createElement("p");
// let clock = document.createElement("div");
// let remain = document.createElement("p");
// upSec.setAttribute("class", "upSec");
// clock.setAttribute("class", "clock");
// remain.setAttribute("class", "remain");
// upSec.textContent = "SECONDS";
// remain.textContent = "remaining";
// timer.append(upSec);
// timer.append(clock);
// timer.append(remain);
// but.addEventListener("click", function countdown() {
//   let seconds = 5;
//   let countdown = setInterval(function () {
//     if (seconds < 0) {
//       seconds = 5 + 1;
//     } else {
//       clock.textContent = seconds;
//     }
//     seconds--;
//   }, 1000);
// });
//indice di domande

let resText = document.querySelector('.resText');
let resH3 = document.createElement('h3');
let resP = document.createElement('p');
resH3.textContent = 'Results';
resP.textContent = 'The summary of your answers:';
resText.appendChild(resH3);
resText.appendChild(resP);

let summary = document.querySelector('.summary');
let rightP1 = document.createElement('p');
rightP1.setAttribute('class','rightP');
let rightP2 = document.createElement('p');
rightP2.setAttribute('class','rightP');
let rightP3 = document.createElement('p');
rightP3.setAttribute('class','rightP');
rightP1.textContent= 'Correct';
rightP2.textContent = '%';
rightP3.textContent = 'questions';
summary.appendChild(rightP1);
summary.appendChild(rightP2);
summary.appendChild(rightP3);

let percentage = document.querySelector('.percent');
let percP1 = document.createElement('p');
percP1.setAttribute('class', 'percP');
let percP2 = document.createElement('p');
percP2.setAttribute('class', 'percP');
let percP3 = document.createElement('p');
percP3.setAttribute('class', 'percP');
let percP4 = document.createElement('p');
percP4.setAttribute('class', 'percP');
percP1.textContent = 'Congratulations';
percP2.textContent = 'You passed the exam.';
percP3.textContent = 'We\' ll send you the certificate in a few minutes.';
percP4.textContent = 'Check your email (including promotion/spam folder)';
percentage.appendChild(percP1);
percentage.appendChild(percP2);
percentage.appendChild(percP3);
percentage.appendChild(percP4);

let wrong = document.querySelector('.wrong');
let wrongP1 = document.createElement('p');
wrongP1.setAttribute('class','wrongP');
let wrongP2 = document.createElement('p');
wrongP2.setAttribute('class','wrongP');
let wrongP3 = document.createElement('p');
wrongP3.setAttribute('class','wrongP');
wrongP1.textContent= 'Wrong';
wrongP2.textContent = '%';
wrongP3.textContent = 'questions';
wrong.appendChild(wrongP1);
wrong.appendChild(wrongP2);
wrong.appendChild(wrongP3);

let rate = document.querySelector('.rate');
let rateBut = document.createElement('button');
rateBut.setAttribute('class','rateBut');
rateBut.textContent = 'RATE US';
rate.appendChild(rateBut);

rateBut.addEventListener('click', function(){
    let results = document.querySelector('.results');
    results.style.display = 'none';
    feedback.style.display = 'block';
}
);
