let vehicle_1 = window.prompt("Qual o nome do veículo 1?")
let speed_1 = window.prompt("Qual a velocidade do(a) " + vehicle_1 + "? ")
let velocity_1 = parseFloat(speed_1)

let vehicle_2 = window.prompt("Qual o nome do veículo 2?")
let speed_2 = window.prompt("Qual a velocidade do(a) " + vehicle_2 + "? ")
let velocity_2 = parseFloat(speed_2)

alert(
    vehicle_1 + " tem " + velocity_1 + " km/h" +
    "\n" + vehicle_2 + " tem " + velocity_2 + " km/h"
)

if (velocity_1 > velocity_2){
    alert(vehicle_1 + " é mais rápido que o " + vehicle_2)
}else if (vehicle_1 < vehicle_2){
    alert(vehicle_2 + " é mais rápido que o " + vehicle_1)
}else{
    alert(vehicle_1 + " tem a mesma velocidade que o " + vehicle_2)
}
