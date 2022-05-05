// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const arrayNumbers = [1,8,4,3,9,7,6];
// dichiar e inizializzo due array una per i numeri pari e una per i dispari
let evenArray = [];
let oddArray = [];
// con il ciclo for scorro l array dei numeri per definire se un numero è par o dispari
for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] % 2 === 0) {
        evenArray.push(arrayNumbers[i]);
    }else {
        oddArray.push(arrayNumbers[i]);
    }
}
console.log(evenArray, oddArray);


const domEvenArray = document.getElementById('green');
domEvenArray.innerHTML = `<p style="color:green;">${evenArray}</p>`;
const domOddArray = document.getElementById('red');
domOddArray.innerHTML = `<p style="color:red;">${oddArray}</p>`;

