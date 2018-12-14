// Typisierung von Functionen

function addiere(a:number, b:number): number  {
    return a + b;
}

function log(): void {
    console.log('Ausloggen!');
}

let erg = addiere(7, 42);

function addiereMehr(a:number, b:number=0, c?:number):number {
    if(c) {
        return a + b + c;
    }
    return a + b;     
}
erg = addiereMehr(6,9,4);
erg = addiereMehr(6,9);
erg = addiereMehr(6);

// Signaturoverload:
function test(val:number): number;
function test(val:string): string;
function test(val:boolean): boolean;
// Implementierungssignatur
function test(val:number|string|boolean): string|number|boolean {
    switch(typeof val) {
        case 'string':
            return 'Teststring';
        case 'number':
            return 42;
        case 'boolean':
            return true;
        default:
            return 'Das war falsch';
    }
}

let testerg = test('Beispiel');
let testerg2 = test(17);

// Arrowfunction
let addArrow = (a:number, b:number):number => a + b;

// Function-Type
let addierer: (val1:number, val2:number) => number; 
addierer = (a,b) => a + b;
