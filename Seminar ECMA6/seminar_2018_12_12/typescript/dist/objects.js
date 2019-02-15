"use strict";
// Object-Types
var myObj = {};
// myObj.x = "X"; // hmm...
var tim = {
    vorname: 'Tim',
    nachname: 'Thaler'
};
tim.nachname = 'Joe';
tim = {
    vorname: 'Joe',
    nachname: 'Cool',
};
// Annotation mit structural Type
var joe;
// MUSS komplett initialisiert werden!
joe = {
    vorname: 'Joe',
    nachname: 'Cool'
};
joe.nachname = 'Cooler';
var jack;
jack = {
    vorname: 'Jack',
    nachname: 'Doe'
};
