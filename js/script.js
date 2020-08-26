//utilizzo Handlebars
var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);

var context = { title: "Lista degli studenti", nominativo: "Nome e Cognome"};
var html = template(context);



document.querySelector('div.container').innerHTML=html;

// 1. creazione oggetto singolo studente
oggettoStudente={
    'nome': 'Marco',
    'cognome': 'Verdi',
    'eta': 31
}

// 2. stampo proprieta dell'oggetto singolo studente
for(key in oggettoStudente){
    console.log( ` ${key}` + ' ' + oggettoStudente[key])
}

// 3. creare un array di oggetti studenti
var listaStudenti=[
    oggettoStudente,
    {
        'nome': 'Claudio',
        'cognome': 'Bianchi',
        'eta': 21,
    },

    {
        'nome': 'Ivan',
        'cognome': 'Ricciardelli',
        'eta': 45,
    },
    
    {
        'nome': 'Matteo',
        'cognome': 'Rossi',
        'eta': 26,
    }
]



// 5. creazione oggetto da parte dell'utente
var nome=prompt('Inserisci un nome');
var cognome=prompt('Inserisci un cognome');
var eta= prompt("Inserisci la tua età")

// 6. nuovo oggetto creato
listaStudenti.push({
    'nome': nome,
    'cognome': cognome,
    'eta': eta,
})

// 4. ciclo su tutti gli oggetti, stampo nome e cognome per ogni studente
for(var i in listaStudenti){
    console.log(listaStudenti[i].nome + ' ' + listaStudenti[i].cognome);
    document.querySelector('div.container').innerHTML+=listaStudenti[i].nome + ' ' + listaStudenti[i].cognome + '<br>';
}



console.log(listaStudenti);
