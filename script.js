const display = document.getElementById('display');
const numbers = document.querySelectorAll('[id*=calc]')
const operators = document.querySelectorAll('[id*=operators')

//Variáveis para armazenarmos o valor, o operador

let newNumber = "true" // Indica se o próximo digito será um novo numero
let beforeNumber = 0; // valor acumulado para uma operação


function insert(calc)
{
    var number = document.getElementById ('display').innerHTML;
    document.getElementById('display').innerHTML = number + calc;
    
}

function clean(){
    document.getElementById('display').innerHTML = "";
}

function calculate(){
    var results = document.getElementById('display').innerHTML;
    if(results) {
        document.getElementById('display').innerHTML = eval(results);
    }
}



