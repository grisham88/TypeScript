"use strict";
// Object-Types
let myObj = {};
// myObj.x = "X"; // hmm...
let tim = {
    vorname: 'Tim',
    nachname: 'Thaler'
};
tim.nachname = 'Joe';
tim = {
    vorname: 'Joe',
    nachname: 'Cool',
};
// Annotation mit structural Type
let joe;
// MUSS komplett initialisiert werden!
joe = {
    vorname: 'Joe',
    nachname: 'Cool'
};
joe.nachname = 'Cooler';
let jack;
jack = {
    vorname: 'Jack',
    nachname: 'Chan'
};
