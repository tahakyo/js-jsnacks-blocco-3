// 2. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando a somma degli elementi è minore di 50.


// creo array vuota

let newArray = [];

// dicichiaro la varibile sum e la inizializzo a 0
let sum = 0;
let userNumber = 0;
// uso while per calcolare la somma dei numeri iseriti dall'utente
while (sum <= 50) {
    userNumber = parseInt(prompt('inserisci un numero'));
    sum += userNumber;
    if (sum <= 50)
    newArray.push(userNumber);
    console.log(sum);
}
console.log(newArray);