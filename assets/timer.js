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
            seconds = 5;
            clone.style.display = 'none';
        }else{
            clock.textContent = seconds;
        } seconds-- },1000)
})

