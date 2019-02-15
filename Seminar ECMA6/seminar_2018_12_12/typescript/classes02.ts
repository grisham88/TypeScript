// classes

class Person2 {
    // Interface
    vorname: string;
    public nachname: string;
    public haustier = "Dackel";

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
interface IPerson2 {
    vorname: string;
    nachname: string;
    haustier?: string;
}


function personAusgeben(person: IPerson2) {
    let vn = person.vorname;
    let nn = person.nachname;
    console.log(vn + ' ' + nn);
}

let max = new Person2('Max', 'Muster', 30, 1000, 1);
personAusgeben(max);

//Möglichkeit ohne das ganze Objekt mitzugeben, die Funktion nutzen zu können
personAusgeben({ vorname: 'Meike', nachname: 'Müller' });