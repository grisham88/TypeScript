// TS und Arrays

//Array vom Typ any
let array1 = [];
array1.push(42);
array1.push(true);
array1.push('egal');

// TypeInference
let array2 = ['Rosen'];
array2.push(42);
// Argument of type '42' is not assignable to parameter of type 'string'.
array2.push('Tulpen');

//Mehrere Generics
let array3 = [42, true];

// Annotation
let array4: string[] = [];
let array5: (number | string | null)[] = [];
array5.push(null);

let array6: Array<string | boolean> = [];