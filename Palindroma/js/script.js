// INPUT
// Chiedere all'utente di inserire una parola
const wordInput = prompt("Inserisci una parola");
console.log("Questa è la parola inserita: " + wordInput);

// Verificare se la parola inserita è palindroma
palindromeVerify (wordInput);

// Creo la funzione di verifica della parola palindroma
function palindromeVerify(word) {

    let reverseWord = word.split('').reverse().join('');

    console.log("Questa è la parola al contrario: " + reverseWord);

    if (reverseWord === word) {
        let message = "Questa parola è palindroma";
        console.log(message);
    } else {
        let message = "Questa parola non è palindroma";
        console.log(message);
    }
}