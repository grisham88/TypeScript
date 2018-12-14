"use strict";
let hans;
// Class kann Interface implementieren
class Person3 {
    constructor(vorname, nachname) {
        this.vorname = vorname;
        this.nachname = nachname;
    }
    hallo() {
        console.log('Hi!');
    }
}
// ... oder eine andere Class implementieren
class Person4 {
    constructor(vorname, nachname) {
        this.vorname = vorname;
        this.nachname = nachname;
        this.haustier = "Dackel";
        this.fon = 23456;
    }
    hallo() {
        console.log('Hi!');
    }
}
