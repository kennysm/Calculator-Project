const display = document.getElementById('display');
const numbers = document.querySelectorAll('[id*=calc]')
const operators = document.querySelectorAll('[id*=operators')

//Variáveis para armazenarmos o valor, o operador



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


function back(){
    var results = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = results.substring(0, results.length -1);
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
   
 
  


