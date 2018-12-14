// generische Funktionen
interface Info {
    name: string;
    wert: string;
}
interface IdVal {
    id: number;
    wert: string;
}

// Mittels <T> sind weitere Parameter möglich, 
// jedoch in diesem Fall ohne genauen Typ
function holIrgendwas<T>(url: string): Promise<T> {
    return fetch(url).then(resp => resp.json());
}

// Nun kann auf die Members des Interfaces zugegriffen werden
let datenObj = holIrgendwas<Info>('/test');
datenObj.then(val => console.log(val.name));

let idObj = holIrgendwas<IdVal>('/test');
idObj.then(val => console.log(val.id));

//Anhand des Inputparameters wird der Typ festgestellt
function makeSpeicher<T>(val: T) {
    let speicher: T[] = [];
    speicher.push(val);
    return speicher;
}

function makeSpeicher2<T>(val?: T) {
    let speicher: T[] = [];
    if (val) {
        speicher.push(val);
    }
    return speicher;
}

let numSpeicher = makeSpeicher(42);
// numSpeicher.push('Nelken')
// Argument of type '"Nelken"' is not assignable to parameter of type 'number'.

let strSpeicher = makeSpeicher('Rosen');
// strSpeicher.push(42)
// Argument of type '42' is not assignable to parameter of type 'string'.

// nur die Struktur wird erkannt!
let idValueSpeicher = makeSpeicher({ id: 3, wert: 'Drei' });

// Rückgabetyp ist nun IdVal
let idValueSpeicher2 = makeSpeicher2<IdVal>();

//Nun wird das Interface erkannt für die Variable infoSpeicher
let infoSpeicher = makeSpeicher<Info>({ name: 'Info', wert: 'Sensation' });
// oder hinzufügen über
let newInfo:Info = {name:'Test', wert:'Testinfo'};
infoSpeicher.push(newInfo)

// infoSpeicher.push({irgendwas:'Ho', name:'Fehler', wert:'Falsch'})
// Argument of type '{ irgendwas: string; name: string; wert: string; }' 
// is not assignable to parameter of type 'Info'.  Object literal may only specify known properties,
// and 'irgendwas' does not exist in type 'Info'.