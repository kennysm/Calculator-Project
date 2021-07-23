const display = document.getElementById('display');
const numbers = document.querySelectorAll('[id*=calc]')
const operators = document.querySelectorAll('[id*=operators')

//Variáveis para armazenarmos o valor, o operador

var number1; 
var number2;

//Insert function

function insert(calc)
{
    var number = document.getElementById ('display').innerHTML;
    document.getElementById('display').innerHTML = number + calc;
    
}

//Clean function

function clean(){
    document.getElementById('display').innerHTML = "";
}


//Calculate function

function calculate(data){
    switch(data) {
        case "=":
            display.innerHTML = math.evaluate(display.innerHTML);
            break;
     
    default:
        display.innerHTML+= data;
        
    }
    
}
   
 
  


