// Abstract Classes und Static Members in Classes

abstract class Mensch {
    constructor(public anzahlBeine = 2) { }
    //Abstract methods enthalten keinen Code, dienen nur als Muss-Vorlage
    abstract gruessen(): string
    hallo() {
        console.log(this.gruessen(), 'Ich habe', this.anzahlBeine, 'Beine');
    }
}

// let markus = new Mensch(3);
// Cannot create an instance of an abstract class.

class Student extends Mensch {
    static spezies = "Mensch";
    public faecher: string[] = [];

    constructor(public vorname: string, public nachname: string) {
        // Auf Anforderung der abstract class:
        super();
    }
    getSpezies() {
        console.log('Ich bin ein ', Student.spezies)
    }
    // Auf Anforderung der abstract class:
    gruessen() {
        return 'Hallo';
    }
}

class Lehrer extends Mensch {
    gruessen() {
        return 'Salve!';
    }
}

// Abstract class kann konkrete Members beitragen
let sylvia = new Student('Sylvia', 'Schmidt');
// sylvia.spezies;
// Property 'spezies' is a static member of type 'Student'
sylvia.getSpezies;
// Zugriff nur über Methode möglich
sylvia.gruessen();