"use strict";
// In TS hat dies IMMER einen Typ:
// ... entweder TypeInference
let a;
a = 12;
a = 'Hallo';
a = false;
let b = 13;
//  b = 'Na?'; // TS TypeError
// Annotation
// generic Type
let c;
c = 'Ein String';
// Union Type
let d = true;
d = 17;
let e;
e = null;
