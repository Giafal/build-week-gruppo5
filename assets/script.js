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
box.setAttribute("type", "checkbox", "class", "cbox");
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
    welcome.style.display = "none";
    benchmark.style.display = "block";
  }
});

// Benchmark Page
fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy")
  .then((res) => res.json())
  .then((res) => {
    questions = res.results;

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

    const randQuestions = shuffle(questions);

    let temp = document.getElementsByTagName("template")[0];
    let clone = temp.content.cloneNode(true);
    let qea = document.querySelector(".qea");
    clone.querySelector(".question").innerHTML = randQuestions[0].question;
    qea.appendChild(clone);
    let answers = randQuestions[0].incorrect_answers.concat(
      randQuestions[0].correct_answer
    );
    console.log(answers);
    const buttons = document.querySelector(".buttons");
    answers.forEach((answer) => {
      let button = document.createElement("button");
      button.innerHTML = answer;
      button.setAttribute("class", "answer");
      buttons.appendChild(button);
      });
      //Timer
    let timer = document.querySelector('.timer');
    let upSec = document.createElement('p');
    let clock = document.createElement('div');
    let remain = document.createElement('p');
    upSec.setAttribute('class', 'upSec');
    clock.setAttribute('class', 'clock');
    remain.setAttribute('class','remain');
    upSec.textContent = 'SECONDS';
    remain.textContent = 'remaining';
    timer.append(upSec);
    timer.append(clock);
    timer.append(remain);
    but.addEventListener("click", function countdown() {
      let seconds = 5;       
      let countdown = setInterval(function() {
              
              if (seconds < 0) {
              seconds = 5 + 1;
              qea.style.display = 'none';
          }else{
              clock.textContent = seconds;
          } seconds-- },1000)
  })
  //indice di domande
  let counter = document.querySelector('.counter');
  let pCounter = document.createElement('p');
  pCounter.setAttribute('class', 'pcounter');
  pCounter.innerHTML = 'QUESTION 1/10';
  counter.append(pCounter);
  

});

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
