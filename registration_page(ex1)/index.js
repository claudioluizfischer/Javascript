let first_name = window.prompt("Qual seu nome?")
let last_name = window.prompt("Qual seu sobre nome?")
let study_field = window.prompt("Qual seu campo de estudo?")
let born_date = window.prompt("Quando você nasceu?")

alert(
    "Recruta: " + first_name + " " + last_name +
    "\nCampo de estudo: " + study_field +
    "\nIdade: " + (2023 - born_date) 
)