
//Welcome Page

{
let h2 = document.createElement('h2');
h2.innerHTML = 'Welcome to <br>your exam';
let title = document.querySelector('.title');
title.appendChild(h2);

let h3 = document.createElement('h3');
let p = document.createElement('p');
p.innerHTML = "We don't expect most engineers to know the answers to all of these <br>questions, so don't worry if you're unsure of a few of them.";
h3.innerHTML = 'Instructions';
let subtitle = document.querySelector('.subtitle');
subtitle.appendChild(h3);
subtitle.appendChild(p);
}

(function makeList() {
    let ul = document.createElement('ul');
    ul.setAttribute('id', 'list');

    arr = ['each question is timed and can onyl be answered once', 'changing browser tab or opening other windows will invalidate the question', 'this exam will take approx. 0-5 minutes.']

    document.querySelector('.myList').appendChild(ul);
    arr.forEach(printList);
    function printList (element, index, arr) {
        let li = document.createElement('li');
        li.setAttribute('class', 'li-item');
        ul.appendChild(li);
        li.innerHTML = element;
    }

})();


let p = document.createElement('p');
let box = document.createElement ('input');
box.setAttribute('type', 'checkbox','class', 'cbox');
p.innerHTML = 'I promise to answer myself without help from anyone';
let check = document.querySelector('.checkbox');
check.append(box);
let pcheck = document.querySelector('.pcheck');
check.setAttribute('class', 'pbox');
check.append(box);
pcheck.append(p);
let but = document.createElement('button');
but.innerHTML = 'proceed';
let button = document.querySelector('.button');
button.appendChild(but);
but.addEventListener('click', function nextPage(){
    if (box.checked == true) {
       let welcome = document.querySelector('.welcome');
       let benchmark = document.querySelector('.benchmark');
       welcome.style.display = 'none';
       benchmark.style.display = 'block';
        }
    })

// Benchmark Page

      fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy')
     .then(res => res.json())
    .then(res => {
        questions = res.results
        questions.sort((a,b) => Math.floor(0.5-Math.random()));         
    console.log(res); 
    
    let template = document.getElementsByTagName('template')[0];
    let clone = template.content.cloneNode(true);
    let qea = document.querySelector('.qea');
   

    clone.querySelector('.question').textContent = questions[0].question;
    clone.querySelector('.answer').textContent = questions[0].correct_answer;
    qea.appendChild(clone);
})

    

    

    
      

   


