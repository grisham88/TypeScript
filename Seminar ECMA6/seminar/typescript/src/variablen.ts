// In TS hat dies IMMER ein TypeError;
// ... entweder TypeInference
let a;
a = 12;
a = 'Hallo';
a = false;

let b = 13;
b = 'Na?';
// Type '"Na?"' is not assignable to type 'number'.

// Möglichkeit einen Typ zu annotieren (Ein Typ ohne Zuweisung festlegen)
// generic Type
let c: string;
c = 'Ein String';

// Union Type (Setzt sich aus mehreren Generics zusammen)
let d: boolean | number = true;
d = 17;

// Zuweisung von null/undefined muss explizit erlaubt werden
let e: number | null | undefined = 5;
e = null;
e = undefined;