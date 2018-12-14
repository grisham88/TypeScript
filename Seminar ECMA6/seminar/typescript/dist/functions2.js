"use strict";
// Mittels <T> sind weitere Parameter möglich, 
// jedoch in diesem Fall ohne genauen Typ
function holIrgendwas(url) {
    return fetch(url).then(function (resp) { return resp.json(); });
}
// Nun kann auf die Members des Interfaces zugegriffen werden
var datenObj = holIrgendwas('/test');
datenObj.then(function (val) { return console.log(val.name); });
var idObj = holIrgendwas('/test');
idObj.then(function (val) { return console.log(val.id); });
//Anhand des Inputparameters wird der Typ festgestellt
function makeSpeicher(val) {
    var speicher = [];
    speicher.push(val);
    return speicher;
}
function makeSpeicher2(val) {
    var speicher = [];
    if (val) {
        speicher.push(val);
    }
    return speicher;
}
var numSpeicher = makeSpeicher(42);
// numSpeicher.push('Nelken')
// Argument of type '"Nelken"' is not assignable to parameter of type 'number'.
var strSpeicher = makeSpeicher('Rosen');
// strSpeicher.push(42)
// Argument of type '42' is not assignable to parameter of type 'string'.
// nur die Struktur wird erkannt!
var idValueSpeicher = makeSpeicher({ id: 3, wert: 'Drei' });
// Rückgabetyp ist nun IdVal
var idValueSpeicher2 = makeSpeicher2();
//Nun wird das Interface erkannt für die Variable infoSpeicher
var infoSpeicher = makeSpeicher({ name: 'Info', wert: 'Sensation' });
// oder hinzufügen über
var newInfo = { name: 'Test', wert: 'Testinfo' };
infoSpeicher.push(newInfo);
infoSpeicher.push({ irgendwas: 'Ho', name: 'Fehler', wert: 'Falsch' });
// Argument of type '{ irgendwas: string; name: string; wert: string; }' 
// is not assignable to parameter of type 'Info'.  Object literal may only specify known properties,
// and 'irgendwas' does not exist in type 'Info'.
