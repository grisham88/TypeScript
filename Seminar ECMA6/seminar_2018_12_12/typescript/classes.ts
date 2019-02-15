// classes

class Person {
    // Interface
    private vorname: string;
    public nachname: string;
    public haustier = '';

    // ab hier normal weiter:
    constructor(vorname: string,
        nachname: string,
        public alter: number,
        private konto: number,
        protected id: number) {
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

let tom: Person; 
    tom = new Person('Tom','Jones',33, 10000, 1);
// tom.vorname = 'Tim';
// Property 'vorname' is private and only accessible within class 'Person'.

tom.alter = 35;
tom.haustier = 'Dackel';
// Zuweisung ist möglich (public)
// tom.konto = 5000;
// Property 'konto' is private and only accessible within class 'Person'.

let kontostand = tom.kontostand;
//Abfrage ist möglich

class Fahrer extends Person {
    hallo() {
        console.log('Ich hab einen', this.haustier);
    }
    idMelden() {
        console.log('Mein ID ist', this.id)
    }
}

let fritz = new Fahrer('Fritz', 'Fischer', 18, 5000, 2);
// console.log(fritz.id);
// Property 'id' is protected and only accessible within class 'Person' and its subclasses.

fritz.idMelden();
// Zugriff möglich