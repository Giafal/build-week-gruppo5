{
let h2 = document.createElement('h2');
h2.innerHTML = 'Welcome to <b>your exam</b>';
let title = document.querySelector('.title');
title.appendChild(h2);

let h3 = document.createElement('h3');
let p = document.createElement('p');
p.innerHTML = "We don't expect most engineers to know the answers to all of these questions, so don't worry if you're unsure of a few of them.";
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
box.setAttribute('type', 'checkbox');
p.innerHTML = 'I promise to answer myself without help from anyone';
let check = document.querySelector('.checkbox');
check.append(box,p);
let but = document.createElement('button');
but.innerHTML = 'proceed';
let button = document.querySelector('.button');
button.appendChild(but);
/*but.addEventListener('click', function nextPage(){
    if (box.checked === true) {
       let welcome = document.querySelector('.welcome');
        document.welcome.replace('ciao');
   
}
}
)
()
 */