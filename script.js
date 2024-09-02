let number1 = 0;
let number2 = 0;
let score = 0;

function getNewNumber(){
    number1 = Math.floor(Math.random()*10 + 1); // genererer to random tall
    number2 = Math.floor(Math.random()*10 + 1);
        
    document.getElementById('firstNumber').innerHTML = number1; // oppdaterer tallene i div
    document.getElementById('secondNumber').innerHTML = number2;

    console.log(number1)
    console.log(number2)
        
    document.getElementById('input').value = ''; // tømmer input feltet
}
    
function checkAnswer(){
    let operatorInput = document.getElementById('input').value;
    let correctOperator = '';

    if (number1 > number2){ // sjekker om operator i input div er riktig
        correctOperator = '>';      
    } else if (number1 < number2){
        correctOperator = '<';
    } else {
        correctOperator = '='; //hvis begge tallene er like
    }

    if (operatorInput == correctOperator){ // sjekker om input svar er riktig og legger til eller trekker fra på score
        score++;
        alert('That is correct! You get a point!');
    } else {
        score--;
        alert('NO, WRONG! I am so disappointed. I will take a point back now.')
    }

    document.getElementById('score').innerHTML = score; // oppdaterer score div
}