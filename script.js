const display = document.getElementById('display');
const numbers = document.querySelectorAll('[id*=calc]')
const operators = document.querySelectorAll('[id*=operators')


//Variable storage

let number1 = ""
let number2 = ""
let operator
let result
let recalculo = false

function insertNum(value){
    
    
    if(operator == undefined){
        number1 += value
        display.innerHTML = number1
        console.log(number1)
    }
    
    if(recalculo){
        number2 += value
        display.innerHTML = number2
    }else if(operator){
        number2 += value
        display.innerHTML = number1 + operator + number2
        
    }

}

function insertOperator(value){
    if(number1 != ""){
        operator = value
        display.innerHTML += operator
    }

    if(result){
        number1 = result
        operator = value
        result = undefined
        number2 = ""
    }
    if(number1 && operator && number2){
        calculate()
        recalculo = true
        number1 = result
        result = undefined
        number2 = ""
    }
    
}

// Calculate function
function calculate(){
    
    switch (operator) {
        case '+':
            result = parseInt(number1) + parseInt(number2)
            break;
        case '-':
            result = parseInt(number1) - parseInt(number2)
            break;
        case '*':
            result = parseInt(number1) * parseInt(number2)
            break;
        case '/':
            result = parseInt(number1) / parseInt(number2)
            break;
        
        default:
            console.log("Invalid operation")
    }
            display.innerHTML = result
            
}

// Clean function

function clean(){
    document.getElementById('display').innerHTML = "";
    number1 = ""
    number2 = ""
    operator = undefined
    result = ""
    recalculo = false
}

// Back function

function back(){
    var results = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = results.substring(0, results.length -1);
}

