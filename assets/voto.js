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
rirightP1.textContent= 'Correct';
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


// Stelle

