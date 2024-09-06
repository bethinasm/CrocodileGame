
// MODEL

let number1 = 0;
let number2 = 0;
let score = 0;

// VIEW

updateView()
function updateView() {
    let html = `

        <div class="header"> 
            <div>THE CROCODILE GAME</div> 
            <img src="croco.png"/>
        </div>

        <div class="box">
            <div class="text"> <b>Which number is bigger? <br> Use >  < or = </b> </div>
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
    `
    document.getElementById('app').innerHTML = html;
}

function getOperatorInput() {
    return document.getElementById('input').value;    // Er dette lov ?
}

// CONTROLLER

function getNewNumber(){
    number1 = Math.floor(Math.random()*10 + 1); // genererer to random tall
    number2 = Math.floor(Math.random()*10 + 1);
        
    // document.getElementById('firstNumber').innerHTML = number1; // oppdaterer tallene i div - skal ikke brukes med MVC
    // document.getElementById('secondNumber').innerHTML = number2; - skal ikke brukes med MVC

    console.log(number1)
    console.log(number2)
        
    // document.getElementById('input').value = ''; // tømmer input feltet - skal ikke brukes med MVC
    
    updateView();
}
    
function checkAnswer(){
    let operatorInput = getOperatorInput();//document.getElementById('input').value; (skal ikke brukes i MVC) // value brukes fordi det ikke er slutt tag på input
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

    //document.getElementById('score').innerHTML = score; // oppdaterer score div - skal ikke brukes med MVC, bare document.getElementById en gang
    
    updateView();
}