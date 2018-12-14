"use strict";
// classes
var Person2 = /** @class */ (function () {
    // ab hier normal weiter:
    function Person2(vorname, nachname, alter, konto, id) {
        this.alter = alter;
        this.konto = konto;
        this.id = id;
        this.haustier = "Dackel";
        this.vorname = vorname;
        this.nachname = nachname;
    }
    Person2.prototype.hallo = function () {
        console.log('Hallo');
    };
    Object.defineProperty(Person2.prototype, "kontostand", {
        get: function () {
            return this.konto;
        },
        enumerable: true,
        configurable: true
    });
    return Person2;
}());
function personAusgeben(person) {
    var vn = person.vorname;
    var nn = person.nachname;
    console.log(vn + ' ' + nn);
}
var max = new Person2('Max', 'Muster', 30, 1000, 1);
personAusgeben(max);
//Möglichkeit ohne das ganze Objekt mitzugeben, die Funktion nutzen zu können
personAusgeben({ vorname: 'Meike', nachname: 'Müller' });
