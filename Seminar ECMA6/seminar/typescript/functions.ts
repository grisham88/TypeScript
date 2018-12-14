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