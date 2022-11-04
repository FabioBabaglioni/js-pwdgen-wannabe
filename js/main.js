// Creare una password per l'utente

// chiedere all'utente il proprio nome

let firstName = prompt ("scrivi il tuo nome");

console.log(firstName);

// chiedere all'utente il proprio cognome
let surname = prompt ("scrivi il tuo cognome");

console.log(surname);


// chiedere all'utente il suo colore preferito 
let colorPrefe = prompt ("scrivi il tuo colore preferito");

console.log(colorPrefe);

// costante numero finale
const ultimeCifre = 21;

// mostrargli la password creata
document.getElementById("password").innerHTML = `la tua password è: ${firstName}${surname}${colorPrefe}${ultimeCifre}`;
