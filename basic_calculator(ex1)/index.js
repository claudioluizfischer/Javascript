let number_1 = window.prompt("Insira o primeiro número: ")
let number_2 = window.prompt("Insira o segundo número: ")

num1 = parseFloat(number_1)
num2 = parseFloat(number_2)

//4 operations
let sum = num1 + num2
let sub

if (num1 > num2){
    sub = num1 - num2
}else{
    sub = num2 - num1
}

let mult = num1 * num2
let div

if (num1 > num2){
    div = num1 / num2
}else{
    div = num2 / num1
}

alert(
    "Resultados" +
    "\nSOMA: " + num1 + " + " + num2 + " = " + sum +
    "\nSUBTRAÇÃO" + num1 + " - " + num2 + " = " + sub +
    "\nMULTIPLICAÇÃO:" + num1 + " * " + num2 + " = " + mult + 
    "\nDIVISÃO: " + num1 + " / " + num2 + " = " + div
)