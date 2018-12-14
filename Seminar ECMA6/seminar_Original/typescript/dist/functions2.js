"use strict";
// generische Funktionen
function holIrgendwas(url) {
    return fetch(url).then(resp => resp.json());
}
let datenObj = holIrgendwas('/test');
datenObj.then(val => console.log(val.name));
let idObj = holIrgendwas('/test');
idObj.then(val => console.log(val.id));
function makeSpeicher(val) {
    let speicher = [];
    if (val) {
        speicher.push(val);
    }
    return speicher;
}
let numSpeicher = makeSpeicher(42);
// geht nicht:
//numSpeicher.push('Nelken')
let strSpeicher = makeSpeicher('Rosen');
// geht nicht:
// strSpeicher.push(42)
// nur die Struktur wird erkannt!
let idValueSpeicher = makeSpeicher({ id: 3, wert: 'Drei' });
let idValueSpeicher2 = makeSpeicher();
let infoSpeicher = makeSpeicher({ name: 'Info', wert: 'Sensation' });
let newInfo = { name: 'Test', wert: 'Testinfo' };
// geht:
infoSpeicher.push(newInfo);
// geht nicht:
infoSpeicher.push({ irgendwas: 'Ho', name: 'Fehler', wert: 'Falsch' });
