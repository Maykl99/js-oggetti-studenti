/* Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome ed età.
Stampare a schermo attraverso il for in tutte le proprietà.
- Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.
- Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
Usate prima i console.log e poi provare a stampare con jQuery:
BONUS: Provate ad utilizzare Handlebars. */

/* for(var i=0; i<=2; i++){
    var sentinella='';
    oggettoStudenteIn=prompt("Inserisci nell'ordire: nome, cognome, età");
    sentinella += oggettoStudenteIn;
    console.log(sentinella)
} */

// 5. creazione oggetto da parte dell'utente
var nome=prompt('Inserisci un nome');
var cognome=prompt('Inserisci un cognome');
var eta= prompt("Inserisci la tua età")

// 6. nuovo oggetto creato
nuovoOggettoStudente={
    'nome': nome,
    'cognome': cognome,
    'eta': eta,
}

// 1. creazione oggetto singolo studente
oggettoStudente={
    'nome': 'Marco',
    'cognome': 'Verdi',
    'eta': 31
}

// 2. stampo proprieta dell'oggetto singolo studente
for(key in oggettoStudente){
    console.log(oggettoStudente[key])
}

// 3. creare un array di oggetti studenti
var listaStudenti=[
    oggettoStudente,
    nuovoOggettoStudente,
    {
        'nome': 'Claudio',
        'cognome': 'Bianchi',
        'eta': 21 
    },

    {
        'nome': 'Ivan',
        'cognome': 'Ricciardelli',
        'eta': 45 
    },
    
    {
        'nome': 'Matteo',
        'cognome': 'Rossi',
        'eta': 26
    }
]

// 4. ciclo su tutti gli oggetti, stampo nome e cognome per ogni studente
for(var i in listaStudenti){
    console.log(listaStudenti[i].nome + ' ' + listaStudenti[i].cognome);
}