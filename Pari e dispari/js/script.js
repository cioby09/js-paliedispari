// Chiedere all'utente una scelta tra pari e dispari

// Chiedere all'utente di inserire un numero tra 1 e 5

// Generare un numero casuale tra 1 e 5 per il computer

// Sommare i due numeri

// Stabilire se la somma dei due numeri è pari o dispari

// Dichiarare chi ha vinto


// INPUT
// Chiedo all'utente di scegliere tra pari e dispari
const numberTypeChoice = prompt("Pari o dispari?");
console.log("L'utente ha scelto: " + numberTypeChoice.toLowerCase());

// Chiedo all'utente di inserire un numero tra 1 e 5
const numberUserChoice = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log("L'utente ha scelto il numero: " + numberUserChoice)

// Genero un numero casuale tra 1 e 5 per il computer
const numberCpuChoice = getRndNumber(1, 5);
console.log("Il computer ha scelto il numero: " + numberCpuChoice);

// Stabilisco la somma dei due numberi
const numberTotal = numberUserChoice + numberCpuChoice;
console.log("La somma dei due numeri è di: " + numberTotal)

// Verifico se la somma dei due numeri è pari o dispari
const oddOrEvenResult = oddOrEven(numberTotal);
console.log("Il risultato è: " + oddOrEvenResult);

// OUTPUT
// Dichiariamo il vincitore
if (oddOrEvenResult === numberTypeChoice) {
    console.log("Hai vinto!");
} else {
    console.log("Hai perso!");
}


// Creo la funzione che genera un numero casuale
/**
 * Genera un numero compreso tra min e max
 * @param {number} min
 * @param {number} max
 * @returns {number} Il numero casuale
 */
function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Creo la funzione che stabilisce se un numero è pari o dispari

/**
 * Controllo se un numero è pari o dispari
 * @param {number} number
 * @returns {string} "pari" se pari, "dispari" se dispari
 */
function oddOrEven(number) {
    let result;
    if (number % 2 === 0) {
        result = "pari";
    } else {
        result = "dispari";
    }
    return result;
}