interface IPerson3 {
    vorname:string;
    nachname:string;
    hallo:() => void;
}
// Interface kann anderes Interface erweitern
interface IFahrer extends IPerson3 {
    klasse:String;
    auto:string;
}

interface IFon {
    fon:number;
}
interface IHaustier {
    haustier:string;
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
class Person4 implements Person3, IHaustier, IFon {
    haustier = "Dackel";
    fon = 23456;
    constructor(public vorname:string, public nachname:string) {   }
    hallo() {
        console.log('Hi!');
    }
}

