// Typisierung 

function addiere(a: number, b: number) {
    return a + b;
}
// oder
function addiere2(a: number, b: number): number {
    return a + b;
}

let erg = addiere(7, 8);
let erg2 = addiere2(7, 8);

// vom returnType void
function log(): void {
    console.log('Ausloggen!');
}

// Function mit Optionalem Parameter -> ?
function addiereMehr(a: number, b: number = 0, c?: number): number {
    if (c) {
        return a + b + c;
    }
    return a + b;
}
erg = addiereMehr(6, 9, 4);
erg = addiereMehr(6, 9);

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
//testerg ist vom Typ string
let testerg2 = test(17);
//testerg2 ist vom Typ number

// Arrow-Function mit Rückgabetyp
let addArrow = (a: number, b: number): number => a + b

// Function-Type
let addierer: (val1: number, val2: number) => number = (a, b) => a + b;
addierer = (a, b) => a + b;