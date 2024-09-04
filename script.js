
// MODEL

let number1 = 0;
let number2 = 0;
let score = 0;

// VIEW

updateView()
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/ `

        <div class="header"> 
            <div>THE CROCODILE GAME</div> 
            <img src="croco.png"/>
        </div>

        <div class="box">
            <div class="text"> <b>Which number is bigger? <br> Use > or < </b> </div>
            <div class="numAndInput"> 
                <div id="firstNumber"> ${number1} </div>
                <input id="input">
                <div id="secondNumber"> ${number2} </div>
            </div>
            <div class="buttonsDiv">
                <button onclick="getNewNumber()"> Get New Numbers </button>
                <button onclick="checkAnswer()"> Check Your Answer </button>
            </div>
        </div>

        <div class="scoreBox">
            <div> Your score is: </div>
            <div id="score" style="font-size: 35px;"> ${score} </div>
        </div>

        <div class="joke">
            <div>What do you get if you cross a crocodile and a computer?</div>
            <div>A lot of bytes!</div>
        </div>
    `;
}

// CONTROLLER

function getNewNumber(){
    number1 = Math.floor(Math.random()*10 + 1); // genererer to random tall
    number2 = Math.floor(Math.random()*10 + 1);
        
    document.getElementById('firstNumber').innerHTML = number1; // oppdaterer tallene i div
    document.getElementById('secondNumber').innerHTML = number2;

    console.log(number1)
    console.log(number2)
        
    document.getElementById('input').value = ''; // tømmer input feltet
    
    updateView();
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
    
    updateView();
}