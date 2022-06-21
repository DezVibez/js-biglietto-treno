console.log("JS OK")

/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in pagina forma umana (con massimo due decimali
*/


const età = parseInt (prompt("Quanti anni hai?", 19));
const destinazione = (prompt ("Quanti chilometri vuoi percorrere", 100))
console.log (età + " anni")
console.log (destinazione + " Km")

let prezzoBiglietto = destinazione * 0.21
console.log (prezzoBiglietto + " €")