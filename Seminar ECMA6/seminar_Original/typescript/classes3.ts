interface IPerson3 {
    vorname:string;
    nachname:string;
    hallo:() => void;
    haustier?:string;
}
// Interface kann anderes Interface erweitern
interface IFahrer extends IPerson3 {
    klasse:String;
    auto:string;
}

let hans:IFahrer;

// Class kann Interface implementieren
class Person3 implements IPerson3 {
    constructor(public vorname:string, public nachname:string) {   }
    hallo() {
        console.log('Hi!');
    }
}
// ... oder eine andere Class implementieren
class Person4 implements Person3 {
    haustier = "Dackel";
    constructor(public vorname:string, public nachname:string) {   }
    hallo() {
        console.log('Hi!');
    }
}

