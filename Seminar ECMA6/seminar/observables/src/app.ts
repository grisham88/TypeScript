// Wird als Startpunkt in der webpack.config.js hinterlegt
// module.exports = {
// entry: './src/app.ts'...

// Observables verwenden (Creator importieren):
console.log('Los gehts...')

import { Observable, from } from 'rxjs'
import { take } from 'rxjs/operators';

let myObservable = new Observable(function (observer) {
    // Stream bilden
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.next('Hallo');
    observer.next({
        x: "X",
        y: "Y"
    });
    // Fehlermeldung
    // observer.error('Havarie!');

    // Complete Message
    // -> Abschluss des Streams, das Subscribe wird dadurch aufgelöst
    observer.complete();
});

console.log(myObservable);
// Observable {_isScalar: false}
// _isScalar:false
// __proto__:
// @@observable:ƒ ()
// forEach:ƒ (next, promiseCtor)
// lift:ƒ (operator)
// pipe:ƒ ()
// subscribe:ƒ (observerOrNext, error, complete)
// toPromise:ƒ (promiseCtor)
// _subscribe:ƒ (subscriber)
// _trySubscribe:ƒ (sink)
// constructor:ƒ Observable(subscribe)
// __proto__:Object

//Nutzung des Observables mittels Funktion
let subscription1 = myObservable.subscribe(
    (value) => console.log('Subscribe 1:', value)
);
// Durch das Stream bilden -> observer.next und 
// Übergabe eines Werts wird das Event in subscribe ausgelöst
// Subscribe 1: 1
// Subscribe 1: 2
// Subscribe 1: 3
// Subscribe 1: 4
// Subscribe 1: Hallo
// Subscribe 1: {x: "X", y: "Y"}

console.log('Subscription:', subscription1);
// Subscription: 
// Subscriber {closed: true, _parent: null, _parents: null, _subscriptions: null, syncErrorValue: null, …}
// closed:true
// destination:SafeSubscriber {closed: true, _parent: null, _parents: null, _subscriptions: null, syncErrorValue: null, …}
// isStopped:true
// syncErrorThrowable:true
// syncErrorThrown:false
// syncErrorValue:null
// _parent:null
// _parentSubscription:Subscription {closed: true, _parent: null, _parents: null, _subscriptions: null}
// _parents:null
// _subscriptions:null

// Nutzung des Observables mittels Objectabfrage auf den Observable
// Paralleles Abfragen des Streams möglich
let subscription2 = myObservable.subscribe({
    next: val => console.log('Subscribe 2:', val),
    complete: () => console.log('Subscribe 2: Stream beendet.'),
    //Falls error im Observer ausgelöst wird
    error: err => console.error('Subscribe 2: Error', err)
});
// Bei Übergabe eines Werts, wird das Event in subscribe ausgelöst
// next -> 
// Subscribe 2: 1
// Subscribe 2: 2
// Subscribe 2: 3
// Subscribe 2: 4
// Subscribe 2: Hallo
// Subscribe 2: {x: "X", y: "Y"}
// complete -> 
// Subscribe 2: Stream beendet.
// error -> 
// Subscribe 2: Error Havarie!
// Uncaught Havarie!

//Eingrenzung des gewünschten Streams mittels .pipe und take
let subscription3 = myObservable
    .pipe(
        take(4)
    )
    .subscribe(
        //Analog zu next: val => ...
        val => console.log('Subscribe 3:', val)
        // Subscribe 3: 1
        // Subscribe 3: 2
        // Subscribe 3: 3
        // Subscribe 3: 4
    );

console.log('#################  Observable aus Array #################')

let blumenArray = ['Rosen', 'Tulpen', 'Nelken', 'Geranien']

// Observable wird über from() direkt für ein Object/Funktion erzeugt:
from(blumenArray)
    .subscribe(
        val => console.log(val)
    );
// Rosen
// Tulpen
// Nelken
// Geranien