/* This gonna be the functionality of the disco project */


// Functionality for the orange blinking background of the NIGHT Text
// global variables
var saturday = document.querySelector('#sat');

var interval;
var count = 0;

//functions
saturday.addEventListener('click', stop);

function startFlyer(){
    interval = setInterval(function(){        
        saturday.classList.toggle('saturday');
    }, 1500);
}

function stop(){
    if (count === 0){
        saturday.classList.add('saturday');
        startFlyer();
        count = 1;
}
else {
    saturday.classList.remove('saturday');
    count = 0;
    clearInterval(interval);
}
}