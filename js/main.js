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
