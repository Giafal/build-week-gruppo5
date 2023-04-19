let timer = document.querySelector('.timer');
let clock = document.createElement('div');
clock.setAttribute('class', 'clock');
timer.appendChild(clock);

let seconds = 10;
let countdown = setInterval(function() {
    if (seconds == 0){
        clearInterval(countdown);
    } else{
        document.querySelector('.clock').innerHTML = seconds;
    }
    seconds -= 1;

},1000);