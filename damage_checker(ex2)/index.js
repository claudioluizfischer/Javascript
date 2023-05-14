let figure_1 = window.prompt("Personagem 1:")
let power_figure_1 = window.prompt("Qual o poder de ataque do " + figure_1 + " ?")
let number_power_figure_1 = parseFloat(power_figure_1)

let figure_2 = window.prompt("Personagem 2:")
let life_points = window.prompt("Quantos pontos o " + figure_2 + " tem de vida?")
let number_life_points = parseFloat(life_points)
let defense_points = window.prompt("Quantos pontos de defesa tem o " + figure_2 + " ?")
let number_defense_points = parseFloat(defense_points)

let shield = window.confirm(figure_2 + " tem escudo?")

let damage = 0

if ((number_power_figure_1 > number_defense_points) && (shield === false)){
    damage = number_power_figure_1 - number_defense_points
}else if ((number_power_figure_1 > number_defense_points) && (shield === true)){
    damage = (number_power_figure_1 - number_defense_points) / 2
}else if (number_power_figure_1 <= number_defense_points){
    damage = 0
}

new_number_life_points = number_life_points - damage
number_life_points -= damage

if (shield === true){
    new_shield = "sim"
}else{
    new_shield = "não"
}

alert(figure_1 + " causou " + damage + " pontos de dano em " + figure_2)
alert(
    figure_1 + "\nPoder de ataque: " + number_power_figure_1 + "\n\n" +
    figure_2 + "\nPontos de vida: " + number_life_points +
    "\nPoder de defesa: " + number_defense_points + "\nPossui escuto: " + new_shield
)