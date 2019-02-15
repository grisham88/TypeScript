// Value Types??

// das ist einer!
let zweiundvierzig: 42;
zweiundvierzig = 42;
// zweiundvierzig = 17;
//  Type '17' is not assignable to type '42'.

let numBool: number | boolean | null;

type numBoolNull = number | boolean | null;

let numBool2: numBoolNull;

type ampel = 'rot' | 'gelb' | 'grün';
type zahlangabe = 'nix' | 'nada' | number | null;

let color: ampel;
color = 'rot'; // ok!