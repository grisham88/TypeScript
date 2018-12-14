"use strict";
// TS und Arrays
//Array vom Typ any
var array1 = [];
array1.push(42);
array1.push(true);
array1.push('egal');
// TypeInference
var array2 = ['Rosen'];
array2.push(42);
// Argument of type '42' is not assignable to parameter of type 'string'.
array2.push('Tulpen');
//Mehrere Generics
var array3 = [42, true];
// Annotation
var array4 = [];
var array5 = [];
array5.push(null);
var array6 = [];
