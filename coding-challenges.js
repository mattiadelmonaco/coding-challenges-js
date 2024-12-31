// 👉 Challenge 1: Somma di Numeri in un Array
// Descrizione: Scrivi una funzione che prenda un array di numeri e ritorni la loro somma.

const numbersList = [12, 45, 78, 34, 56, 89, 23, 67, 90, 14];
console.log(numbersList)

/**
 * 
 * @param {array} array array with numbers
 * @returns {number} array's number sum
 */
// function sum (array) {
//     let total = 0
//     for (let i = 0; i < array.length; i++) {
//         total += array[i]
//     }
//     return total
// }

// const totalSum = sum(numbersList)

// console.log (totalSum)

/**
 * 
 * @param {array} array array with numbers
 * @returns {number} array's number sum
 */
function sum (array) {
    let total = 0
    array.forEach(number => {
        total += number
    })
    return total
}

const totalSum = sum(numbersList)

console.log(totalSum)

// 👉 Challenge 2: Conta le Parole
// Descrizione: Crea una funzione che prenda una stringa e restituisca il numero di parole in essa.

const words = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
console.log(words)

/**
 * 
 * @param {string} strings strings to count
 * @returns {number} how many words are in the variable
 */
function wordsCounter (strings) {
    const wordsArray = strings.split(" ")
    const totalWords = wordsArray.length
    
    return totalWords
}

const wordsNumber = wordsCounter(words)
console.log(wordsNumber)

// 👉 Challenge 3: Trova il Numero Maggiore
// Descrizione: Scrivi una funzione che prenda un array di numeri e ritorni il più grande.

// 👉 Challenge 4: Fattoriale
// Descrizione: Scrivi una funzione che calcoli il fattoriale di un numero dato (es: 5! = 5 * 4 * 3 * 2 * 1 = 120).

// 👉 Challenge 5: Fibonacci
// Descrizione: Implementa una funzione che calcoli il valore dell’elemento N-esimo nella sequenza di Fibonacci (es: 0, 1, 1, 2, 3, 5, ...).

// 👉 Challenge 6: Anagrammi
// Descrizione: Crea una funzione che controlli se due stringhe sono anagrammi (composte dagli stessi caratteri in ordine diverso).

// 👉 Challenge 7: Rimuovi Duplicati
// Descrizione: Scrivi una funzione che prenda un array e ritorni un nuovo array senza duplicati.

// 👉 Challenge 8: Trova la Sotto-Stringa più Lunga senza Ripetizioni
// Descrizione: Data una stringa, trova la lunghezza della sottostringa più lunga che non contiene caratteri ripetuti.

// 👉 Challenge 9: Ordinamento Merge Sort
// Descrizione: Implementa il Merge Sort, un algoritmo di ordinamento ricorsivo. Prendi un array non ordinato e ritorna un array ordinato.
// Suggerimento: Dividi ricorsivamente l’array in metà fino a raggiungere singoli elementi, poi combina gli array ordinati.

// 👉 Challenge 10: Raggruppa Oggetti per Proprietà
// Descrizione: Scrivi una funzione che raggruppi un array di oggetti per una proprietà specificata.
// [
//     { categoria: 'frutta', nome: 'mela' },
//     { categoria: 'frutta', nome: 'banana' },
//     { categoria: 'verdura', nome: 'carota' }
// ]

// 👉 Challenge 11: Trova l’Oggetto con il Valore Massimo
// Descrizione: Scrivi una funzione che trovi l’oggetto con il valore massimo per una proprietà specificata in un array di oggetti.
// [
//     { nome: 'Alice', punteggio: 90 },
//     { nome: 'Bob', punteggio: 85 },
//     { nome: 'Charlie', punteggio: 95 }
// ]

// 👉 Challenge 12: Ordina Oggetti in Base a una Proprietà
// Descrizione: Scrivi una funzione che ordini un array di oggetti in base a una proprietà specificata, in ordine crescente o decrescente.
// [
//     { nome: 'Alice', eta: 25 },
//     { nome: 'Bob', eta: 22 },
//     { nome: 'Charlie', eta: 28 }
// ]