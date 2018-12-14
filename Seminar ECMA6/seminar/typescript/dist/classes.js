"use strict";
// classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    // ab hier normal weiter:
    function Person(vorname, nachname, alter, konto, id) {
        this.alter = alter;
        this.konto = konto;
        this.id = id;
        this.haustier = '';
        this.vorname = vorname;
        this.nachname = nachname;
    }
    Person.prototype.hallo = function () {
        console.log('Hallo');
    };
    Object.defineProperty(Person.prototype, "kontostand", {
        get: function () {
            return this.konto;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var tom;
tom = new Person('Tom', 'Jones', 33, 10000, 1);
// tom.vorname = 'Tim';
// Property 'vorname' is private and only accessible within class 'Person'.
tom.alter = 35;
tom.haustier = 'Dackel';
// Zuweisung ist möglich (public)
// tom.konto = 5000;
// Property 'konto' is private and only accessible within class 'Person'.
var kontostand = tom.kontostand;
//Abfrage ist möglich
var Fahrer = /** @class */ (function (_super) {
    __extends(Fahrer, _super);
    function Fahrer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fahrer.prototype.hallo = function () {
        console.log('Ich hab einen', this.haustier);
    };
    Fahrer.prototype.idMelden = function () {
        console.log('Mein ID ist', this.id);
    };
    return Fahrer;
}(Person));
var fritz = new Fahrer('Fritz', 'Fischer', 18, 5000, 2);
// console.log(fritz.id);
// Property 'id' is protected and only accessible within class 'Person' and its subclasses.
fritz.idMelden();
// Zugriff möglich
