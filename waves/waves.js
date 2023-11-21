// minutes 
const timer = 5; 

//seconds
const amountTime = timer * 60;

function calculateTime () {
    const countdown = document.querySelector("#countdown"); 

    let minutes = Math.floor(amountTime/60); 
    let seconds = amountTime%60; 

    countdown.textContent = `${minutes} : ${seconds}`; 
    amountTime--; 

}