"use strict";
// Typisierung 
function addiere(a, b) {
    return a + b;
}
// oder
function addiere2(a, b) {
    return a + b;
}
var erg = addiere(7, 8);
var erg2 = addiere2(7, 8);
// vom returnType void
function log() {
    console.log('Ausloggen!');
}
// Function mit Optionalem Parameter -> ?
function addiereMehr(a, b, c) {
    if (b === void 0) { b = 0; }
    if (c) {
        return a + b + c;
    }
    return a + b;
}
erg = addiereMehr(6, 9, 4);
erg = addiereMehr(6, 9);
// Implementierungssignatur
function test(val) {
    switch (typeof val) {
        case 'string':
            return 'Teststring';
        case 'number':
            return 42;
        case 'boolean':
            return true;
        default:
            return 'Das war falsch';
    }
}
var testerg = test('Beispiel');
//testerg ist vom Typ string
var testerg2 = test(17);
//testerg2 ist vom Typ number
// Arrow-Function mit Rückgabetyp
var addArrow = function (a, b) { return a + b; };
// Function-Type
var addierer = function (a, b) { return a + b; };
addierer = function (a, b) { return a + b; };
