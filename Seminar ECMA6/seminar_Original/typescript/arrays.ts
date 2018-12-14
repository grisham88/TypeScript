// TS und Arrays

let array1 = [];
    array1.push(42);
    array1.push(true);
    array1.push('egal');

// TypeInference:
let array2 = ['Rosen'];
  //array2.push(42);
    array2.push('Tulpen');

let array3 = [42, true];

// Annotation:
let array4: string[] = [];
let array5: (number|string|null)[] = [];
    array5.push(null);

let array6: Array<string|boolean> = [];