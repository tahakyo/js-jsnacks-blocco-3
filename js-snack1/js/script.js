// 1. Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

const firstArray = [1,9,7,4,5,2,11];
const secondArray = [7,3,9,5,10,5,2,3,2];

let element = 1;

// while (firstArray.length < secondArray.length) {
//     firstArray.push(element);
//     console.log(firstArray, secondArray);
// }


while (firstArray.length < secondArray.length) {
    firstArray.push(element);
    console.log(firstArray, secondArray);
} while (firstArray.length > secondArray.length) {
    secondArray.push(element);
};

console.log(firstArray, secondArray);
// function AppendArray(arr1, arr2){
//     l1 = arr1.length;
//     l2 = arr2.length;
//     for (i=0 ; i<l2 ;i++){
//     	arr1[l1+i] = arr2[i];
//     }
//     return arr1;
// }

