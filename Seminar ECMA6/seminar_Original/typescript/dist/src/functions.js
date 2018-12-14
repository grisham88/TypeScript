"use strict";
// Typisierung von Functionen
function addiere(a, b) {
    return a + b;
}
function log() {
    console.log('Ausloggen!');
}
let erg = addiere(7, 42);
function addiereMehr(a, b = 0, c) {
    if (c) {
        return a + b + c;
    }
    return a + b;
}
erg = addiereMehr(6, 9, 4);
erg = addiereMehr(6, 9);
erg = addiereMehr(6);
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
let testerg = test('Beispiel');
let testerg2 = test(17);
// Arrowfunction
let addArrow = (a, b) => a + b;
// Function-Type
let addierer;
addierer = (a, b) => a + b;
