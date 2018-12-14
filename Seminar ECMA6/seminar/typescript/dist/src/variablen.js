"use strict";
// In TS hat dies IMMER ein TypeError;
// ... entweder TypeInference
var a;
a = 12;
a = 'Hallo';
a = false;
var b = 13;
b = 'Na?';
// Type '"Na?"' is not assignable to type 'number'.
// Möglichkeit einen Typ zu annotieren (Ein Typ ohne Zuweisung festlegen)
// generic Type
var c;
c = 'Ein String';
// Union Type (Setzt sich aus mehreren Generics zusammen)
var d = true;
d = 17;
// Zuweisung von null/undefined muss explizit erlaubt werden
var e = 5;
e = null;
e = undefined;
