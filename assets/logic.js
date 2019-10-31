
const passwordArray = [];


let numberChar = prompt("How many characters in your password? It must be between 8 and 128.");

let numberCharInt = parseInt(numberChar); 

if (numberCharInt === "NaN" || numberCharInt < 8 || numberCharInt >128) {
    alert("You must enter a number between 8 and 128");
    numberChar = prompt("How many characters in your password? It must be between 8 and 128.");
}