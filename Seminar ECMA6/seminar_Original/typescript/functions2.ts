// generische Funktionen

interface Info {
    name:string;
    wert:string;
}
interface IdVal {
    id:number;
    wert:string
}

function holIrgendwas<T>(url:string): Promise<T> {
   return fetch(url).then(resp => resp.json()) ;
}

let datenObj = holIrgendwas<Info>('/test');
datenObj.then(val => console.log(val.name));

let idObj = holIrgendwas<IdVal>('/test');
idObj.then(val => console.log(val.id));

function makeSpeicher<T>(val?:T){
    let speicher:T[] = [];
    if(val) {
        speicher.push(val);
    }
    return speicher;
}

let numSpeicher = makeSpeicher<number>(42);
// geht nicht:
//numSpeicher.push('Nelken')

let strSpeicher = makeSpeicher('Rosen');
// geht nicht:
// strSpeicher.push(42)

// nur die Struktur wird erkannt!
let idValueSpeicher = makeSpeicher({id:3,wert:'Drei'});

let idValueSpeicher2 = makeSpeicher<IdVal>();

let infoSpeicher = makeSpeicher<Info>({name:'Info',wert:'Sensation'});
let newInfo:Info = {name:'Test', wert:'Testinfo'};
// geht:
infoSpeicher.push(newInfo);
// geht nicht:
infoSpeicher.push({irgendwas:'Ho', name:'Fehler', wert:'Falsch'})

