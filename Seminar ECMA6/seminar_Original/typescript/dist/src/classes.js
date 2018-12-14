"use strict";
// classes
class Person {
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
let tom;
tom = new Person('Tom', 'Jones', 33, 10000, 1);
// public:
console.log(tom.alter);
// private:
// console.log(tom.konto); // moniert
class Fahrer extends Person {
    hallo() {
        console.log('Ich habe einen', this.haustier);
    }
    idMelden() {
        // protected, ist also erlaubt
        console.log('Mein ID ist ', this.id);
    }
}
let fritz = new Fahrer('Fritz', 'Fischer', 18, 5000, 2);
// Protected:
// console.log(fritz.id); // wird moniert
