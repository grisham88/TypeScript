"use strict";
// Abstract Classes und Static Members in Classes
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
var Mensch = /** @class */ (function () {
    function Mensch(anzahlBeine) {
        if (anzahlBeine === void 0) { anzahlBeine = 2; }
        this.anzahlBeine = anzahlBeine;
    }
    Mensch.prototype.hallo = function () {
        console.log(this.gruessen(), 'Ich habe', this.anzahlBeine, 'Beine');
    };
    return Mensch;
}());
// let markus = new Mensch(3);
// Cannot create an instance of an abstract class.
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(vorname, nachname) {
        var _this = 
        // Auf Anforderung der abstract class:
        _super.call(this) || this;
        _this.vorname = vorname;
        _this.nachname = nachname;
        _this.faecher = [];
        return _this;
    }
    Student.prototype.getSpezies = function () {
        console.log('Ich bin ein ', Student.spezies);
    };
    // Auf Anforderung der abstract class:
    Student.prototype.gruessen = function () {
        return 'Hallo';
    };
    Student.spezies = "Mensch";
    return Student;
}(Mensch));
var Lehrer = /** @class */ (function (_super) {
    __extends(Lehrer, _super);
    function Lehrer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lehrer.prototype.gruessen = function () {
        return 'Salve!';
    };
    return Lehrer;
}(Mensch));
// Abstract class kann konkrete Members beitragen
var sylvia = new Student('Sylvia', 'Schmidt');
// sylvia.spezies;
// Property 'spezies' is a static member of type 'Student'
sylvia.getSpezies;
// Zugriff nur über Methode möglich
sylvia.gruessen();
