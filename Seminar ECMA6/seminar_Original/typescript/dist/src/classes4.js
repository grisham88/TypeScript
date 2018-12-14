"use strict";
// Abstract Classes und Static Members in Classes
class Mensch {
    constructor(anzahlBeine = 2) {
        this.anzahlBeine = anzahlBeine;
    }
    hallo() {
        console.log(this.gruessen(), 'Ich habe ', this.anzahlBeine, 'Beine');
    }
}
class Student extends Mensch {
    constructor(vorname, nachname) {
        super();
        this.vorname = vorname;
        this.nachname = nachname;
        this.faecher = [];
    }
    getSpezies() {
        console.log('Ich bin ein ', Student.spezies);
    }
    // auf Anforderung der abstract class:
    gruessen() {
        return 'Hallo!';
    }
}
Student.spezies = "Mensch";
// abstract class kann konkrete Members beitragen
let sylvia = new Student('Sylvia', 'Schmidt');
// abstract class kann NICHT instanziert werden
// let markus = new Mensch(3)
class Lehrer extends Mensch {
    gruessen() {
        return 'Salve!';
    }
}
