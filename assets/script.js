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
const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];


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

    console.log(shuffle(questions));

    let template = document.getElementsByTagName("template")[0];
    let clone = template.content.cloneNode(true);
    let qea = document.querySelector(".qea");
    clone.querySelector(".question").innerHTML = questions.question;
    clone.querySelector(".answer").innerHTML = questions.correct_answer;
    qea.appendChild(clone);
    ;

let n = [1, 2, 3, 4];
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
