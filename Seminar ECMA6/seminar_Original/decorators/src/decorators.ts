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
function nochEinDecorator(myClass: any) {
    console.log('Ich dekoriere auch!');
}
// Method Decorator
function halloDecorator(a,b, descr) {
    console.log('Method Decorator - Prototype d. Class:', a,
                'Key:', b,
                'Descriptor:', descr);

    let oldMethod = descr.value;

    let newMethod = function() {
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
@nochEinDecorator
@personDecorator 
class Person {
    constructor(vorname, nachname) {
        this.vorname = vorname;
        this.nachname = nachname;
    }
    @halloDecorator 
    hallo() {
        console.log('Hallo, ich bin', this.vorname ,'!');
    }
}

let jim = new Person('Jim','Dandy');
console.log(jim);
jim.hallo();

let joe = new Person('Joe','Cool');
console.log(joe);