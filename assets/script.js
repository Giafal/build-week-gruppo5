
let h2 = document.createElement('h2');
h2.innerHTML = 'Welcome to <b>your exam</b>';
let title = document.querySelector('#title');
title.appendChild(h2);

let h3 = document.createElement('h3');
let p = document.createElement('p');
p.innerHTML = "We don't expect most engineers to know the answers to all of these questions, so don't worry if you're unsure of a few of them.";
h3.innerHTML = 'Instructions';
let subtitle = document.querySelector('#subtitle');
subtitle.appendChild(h3);
subtitle.appendChild(p);

let ul = document.createElement('ul');
let li1 = document.createElement('li1');