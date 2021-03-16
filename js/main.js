// Snack 1)
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

var bicycle = [
    {
        "name":'Bianchi',
        "weigth":10
    },
    {
        "name":'E-bike',
        "weigth":30
    },
    {
        "name":'Mountain',
        "weigth":22
    },
    {
        "name":'City',
        "weigth":15
    },
    {
        "name":'Corsa',
        "weigth":9
    }
];

for (var key in bicycle) {
    console.log(bicycle[key]);
}

let bicycleLight = bicycle[0];

for (let i = 0; i < bicycle.length; i++) {
    if (bicycle[i].weigth < bicycleLight.weigth) {
        bicycleLight = bicycle[i];
    }
}

//Lezione
// bicycle.forEach((cycle) => { <!-- cycle = nome che diamo al nostro elemento -->
//     if (cycle.weigth < cycleLight.weigth) {
//         bicycleLight = bicycle;
//     }
// });

console.log(`La bici più leggera è ${bicycleLight.name}, che pesa ${bicycleLight.weigth} kg`);


// Snack2)
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare,
// le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e
// falli subiti e stampiamo tutto in console.
console.warn("Snack 2");

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

var teamCalcio = [
    {
        "nome": 'Juventus',
        "punti": 0,
        "falli": 0
    },
    {
        "nome": 'Milan',
        "punti": 0,
        "falli": 0
    },
    {
        "nome": 'Inter',
        "punti": 0,
        "falli": 0
    },
    {
        "nome": 'Barcellona',
        "punti": 0,
        "falli": 0
    }
];

for (var key in teamCalcio) {
    console.log(teamCalcio[key]);
}

console.log("**************");

var punteggi = [];
teamCalcio.forEach((team) =>
{
    var {nome, punti, falli} = team;
    punti = randomNumber(1,20);
    falli = randomNumber(1, 20);
    punteggi.push({nome,falli});

});

for (var key in punteggi) {
    console.log(punteggi[key]);
}

// Snack 3)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter
console.warn("Esercizio 3");

const arraySnack = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numeroMin = parseInt(prompt("Inserisci un numero minimo"));
var numeroMax = parseInt(prompt("Inserisci un numero massimo"));
console.log(arraySnack);

//Metodo forEach
console.log("Metodo forEach");

arraySnack.forEach( (element, index) => {
    if ((element >= numeroMin) && (element < numeroMax)) {
        console.log(`Il numero alla posizione ${element} è ${index}`);
    }
});

//Metodo Filter
console.log("Metodo Filter");

const arrayBetween = arraySnack.filter((element) => {
    return ((element >= numeroMin) && (element < numeroMax))
});

console.log(arrayBetween);


//Metodo con la funzione
console.log("Metodo con funzione");

console.log(numBetween(arraySnack, numeroMin, numeroMax));

function numBetween(arrayBetween, numero1, numero2) {
    var arrayNew = [];
    if ((numero1 < numero2) && (numero2 <= arrayBetween.length)) {
        for (var i = numero1; i < numero2; i++)
        arrayNew.push(arrayBetween[i]);
    }
    else {
        alert("Torna a inserire i numeri!");
    }
    return arrayNew;
}
