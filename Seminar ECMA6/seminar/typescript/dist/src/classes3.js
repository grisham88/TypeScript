"use strict";
var hans;
// Class kann Interface implementieren
var Person3 = /** @class */ (function () {
    function Person3(vorname, nachname) {
        this.vorname = vorname;
        this.nachname = nachname;
    }
    Person3.prototype.hallo = function () {
        console.log('Hi!');
    };
    return Person3;
}());
// ... oder eine andere Class/Interface implementieren,
// bzw. auch mehrere Interfaces
var Person4 = /** @class */ (function () {
    function Person4(vorname, nachname) {
        this.vorname = vorname;
        this.nachname = nachname;
        this.haustier = "Dackel";
        this.fon = 23456;
    }
    Person4.prototype.hallo = function () {
        console.log('Hi!');
    };
    return Person4;
}());
