/* - Creare un oggetto che descriva uno studente con le
seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso il for in tutte le proprietà. */


var studente = {
    "nome" : "Mario",
    "cognome" : "Bianchi",
    "eta" : 20
}

for (var chiave in studente) {
    console.log(studente[chiave]);
    document.getElementById("primo_es").innerHTML += " " + studente[chiave];
}

/* Creare un array di oggetti di studenti. Ciclare su tutti gli
studenti e stampare per ognuno nome e cognome */

var studenti = [
    {
        "nome" : "Marco",
        "cognome" : "Lepore",
        "eta" : "32"
    },
    {
        "nome" : "Matteo",
        "cognome" : "Rossi",
        "eta" : "30"
    },
    {
        "nome" : "Mario",
        "cognome" : "Bianchi",
        "eta" : "31"
    },
    {
        "nome" : "Giuseppe",
        "cognome" : "Verdi",
        "eta" : "20"
    },
    {
        "nome" : "Michele",
        "cognome" : "Gialli",
        "eta" : "33"
    },
    {
        "nome" : "Fabio",
        "cognome" : "Forghieri",
        "eta" : "31"
    }
]

for (var i = 0; i < studenti.length; i++) {
    document.getElementById("terzo_es").innerHTML += " " + studenti[i]["nome"] + studenti[i]["cognome"];
}

/* Dare la possibilità all’utente attraverso 3 prompt di
aggiungere un nuovo oggetto studente inserendo
nell’ordine: nome, cognome e età. */

var tmp = {
    nome : prompt("Inserisci il tuo nome"),
    cognome : prompt("Inserisci il tuo cognome"),
    eta : prompt("Inserisci la tua età"),
}
studenti.push(tmp);
console.log(studenti);

/*for (var chiave in studenti) {
document.getElementById("terzo_es").innerHTML += studenti[chiave];
}*/