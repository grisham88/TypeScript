// Abstract Classes und Static Members in Classes

abstract class Mensch {
    constructor(public anzahlBeine = 2) {}
    abstract gruessen(): string;
    hallo () {
        console.log(this.gruessen(), 
        'Ich habe ', this.anzahlBeine,'Beine');
    }
}

class Student extends Mensch {
    static spezies = "Mensch";
    public faecher: string[] = [];

    constructor(public vorname:string, public nachname :string) {
        super();
    }
    getSpezies() {
        console.log('Ich bin ein ', Student.spezies)
    }
    // auf Anforderung der abstract class:
    gruessen() {
        return 'Hallo!'
    }
}
// abstract class kann konkrete Members beitragen
let sylvia = new Student('Sylvia','Schmidt');

// abstract class kann NICHT instanziert werden
// let markus = new Mensch(3)

class Lehrer extends Mensch {
    gruessen() {
        return 'Salve!';
    }
}

