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

let seconds = 10;
let countdown = setInterval(function() {
    if (seconds < 0){
        clearInterval(countdown);
    } else{
        document.querySelector('.clock').innerHTML =  seconds;
    }
    seconds -= 1;

},1000);