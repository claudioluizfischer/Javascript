let meters = prompt("What is the measurement in meters?");
meters_number = parseFloat(meters);

let option = prompt(
  "What is the new measurer you want to convert " +
    meters +
    " meters to?" +
    "\n1. Milimeter (mm)" +
    "\n2. Centimeter (cm)" +
    "\n3. Decimeter (dm)" +
    "\n4. Decameter (dam)" +
    "\n5. Hectmeter (hm)" +
    "\n6. Kilometer (km)"
);

let mm = meters_number * 1000;
let cm = meters_number * 100;
let dm = meters_number * 10;
let dam = meters_number / 10;
let hm = meters_number / 100;
let km = meters_number / 1000;

switch (option) {
  case "1":
    alert(meters + " m in milimeters is " + mm + " mm");
    break;
  case "2":
    alert(meters + " m in centimeters is " + cm + " cm");
    break;
  case "3":
    alert(meters + " m in decimeter is " + dm + " dm");
    break;
  case "4":
    alert(meters + " m in decameter is " + dam + " dam");
    break;
  case "5":
    alert(meters + " m in hectmeter is " + hm + " hm");
    break;
  case "6":
    alert(meters + " m in kilometers is " + km + " km");
    break;
  default:
    alert("Invalid option");
}
