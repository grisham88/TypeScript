"use strict";
// classes
class Person2 {
    // ab hier normal weiter:
    constructor(vorname, nachname, alter, konto, id) {
        this.alter = alter;
        this.konto = konto;
        this.id = id;
        this.haustier = "Dackel";
        this.vorname = vorname;
        this.nachname = nachname;
    }
    hallo() {
        console.log('Hallo');
    }
    get kontostand() {
        return this.konto;
    }
}
function personAusgeben(person) {
    let vn = person.vorname;
    let nn = person.nachname;
    console.log(vn + ' ' + nn);
}
let max = new Person2('Max', 'Muster', 30, 1000, 1);
personAusgeben(max);
personAusgeben({ vorname: 'Meike', nachname: 'Müller' });
