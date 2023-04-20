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

/* let n = [1, 2, 3, 4];
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
console.log(shuffle(n));
*/
