

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