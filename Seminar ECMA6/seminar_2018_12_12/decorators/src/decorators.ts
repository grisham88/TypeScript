console.log('Es geht um Decorators...');

// Class Decorator
function personDecorator(myClass: any) {
    console.log('Ich dekoriere....:s', myClass);

    // nope! Nicht so machen:
    // myClass.prototype.bumm = function() {}

    // Das da machen wir:
    return class extends myClass {
        constructor(vorname, nachname, ...args) {
            super(vorname, nachname, ...args);
            this.haustier = "Dackel";
            this.fullname = vorname + ' ' + nachname;
        }
        spezial() {
            console.log('Reindekoriert!');
        }
    }
}
// Class Decorator
function nochEinDecorator(myClass: any) {
    console.log('Ich dekoriere auch!');
}

// Method Decorator
function halloDecorator(a, b, descriptor) {
    console.log('Method Decorator - \nPrototype d. Class:', a,
        '\npropertyKey:', b,
        '\npropertyDescriptor:', descriptor);

    let oldMethod = descriptor.value;

    let newMethod = function () {
        oldMethod.call(this);
        // console.log('Ooops, ich wurde wegdekoriert!');
    }

    // Return: a) NICHTS! b) einen Descriptor!
    return {
        value: newMethod, // ERSATZMETHODE
        writable: true,
        enumerable: true,
        configurable: true
    }
}

// ClassDecorator
// Klasse/Methoden werden immer modifiziert 
// und nicht erst durch Instanzierungen bzw. Aufrufe
@nochEinDecorator
@personDecorator
class Person {
    constructor(vorname, nachname) {
        this.vorname = vorname;
        this.nachname = nachname;
    }
    @halloDecorator
    hallo() {
        console.log('Hallo, ich bin', this.vorname, '!');
    }
}
// Durch setzen der @Decorators wird direkt die Funktion ausgeführt
// Ich dekoriere....:s ƒ Person(vorname, nachname) {
//     this.vorname = vorname;
//     this.nachname = nachname;
// }
// Ich dekoriere auch!
// Method Decorator:
// Prototype d. Class: {hallo: ƒ, constructor: ƒ} 
// propertyKey: hallo 
// PropertyDescriptor: {value: ƒ, writable: true, enumerable: true, configurable: true}

let jim = new Person('Jim', 'Dandy');
console.log(jim);
// class_1 
// {vorname: "Jim", nachname: "Doe", haustier: "Dackel", fullname: "Jim Doe"}
jim.hallo();
// Hallo, ich bin eine Person!

let joe = new Person('Joe', 'Cool');
console.log(joe);
// class_1 
// {vorname: "Joe", nachname: "Doe", haustier: "Dackel", fullname: "Joe Doe"}