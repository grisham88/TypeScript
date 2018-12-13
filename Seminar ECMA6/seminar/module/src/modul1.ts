console.log('Modul 1');

let value1 = 42;

let value2 = "Wert 2";

export let toolObject = {
    a: "A",
    b: "B",
    c: "C"
}

let toolFunction = function() {
    console.log('toolFunction aus Modul1');
}

// export BY NAME
export { value1, value2, toolFunction }