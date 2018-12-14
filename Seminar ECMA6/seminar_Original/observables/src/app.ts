// Observables verwenden (Creator importieren):
console.log('Los gehts...');

// Creators:
import { Observable, from, timer, fromEvent } from 'rxjs';
// Operators:
import { take, startWith, timestamp, filter, debounceTime } from 'rxjs/operators';

// ### Observable, Observer, Subscription:

let myObservable = new Observable(function(observer) {
    // Stream bilden
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.next('Hallo');
    observer.next({
        x:"X",
        y:"Y"
    });
    // observer.error('Havarie!')
    // Feierabend:
    observer.complete();
})
console.log('Observable:', myObservable);

// Subscribe -> Subscription
let subscription1 = myObservable.subscribe(
    val => console.log('Subscribe 1: ', val)
);
console.log('Subscription:',subscription1);

let subscription2 = myObservable.subscribe({
    next: val => console.log('Subscribe 2:', val),
    complete: () => console.log('Subscribe 2: Stream beendet.'),
    error: err => console.error('Subscribe 2: Error ', err)
}); 

// ### Pipe:
let subscription3 = myObservable
    .pipe(
        take(4)
    )
    .subscribe({
        next: val => console.log('Subscribe 3:', val),
        complete: () => console.log('Subscribe 3: Stream beendet.'),
        error: err => console.error('Subscribe 3: Error ', err)
    });

    // früher (RxJs 5/5.5) 
    // waren Operators in Observable INTEGRIERT:
    //
    // myObservable
    //    .take(4)
    //    .filter()
    //    .map()
    //    .subscribe()
    //
    // -> schlecht (bzw. nicht) tree-shakeable!!!

console.log('#################  Observable aus Array #################')

let blumenArray = ['Rosen','Tulpen','Nelken','Geranien'];

// Observable wird über from() erzeugt:
// früher als: Observable.from()

from(blumenArray).subscribe(
    val => console.log('onNext',val),
    err => console.error('onError',err),
    ()  => console.log('onComplete: Array durchlaufen')
);

from(blumenArray)
    .pipe(
        startWith('Danke für die Blumen!')
    )
    .subscribe(
        val => console.log('onNext',val),
        err => console.error('onError',err),
        ()  => console.log('onComplete: Array durchlaufen')
    );

    console.log('########### Eventstream bilden ############');
    // timer(delayMS, intervalMS)
    let timerSubscription = timer(0, 100)
    .pipe(
        timestamp()
    )
    .subscribe(
        val => console.log(val)
    );

    setTimeout(function() {
        console.log("Unsubscribe der timerSubscription!");
        timerSubscription.unsubscribe();
    }, 1000);

    console.log('########### DOM-Events abonnieren #########');

    let myBtn = document.getElementById('btn') as HTMLElement;

    fromEvent(myBtn, 'click')
    .pipe(
        filter( (e:any) => e.clientX > 80)
    ).subscribe(
        (evt:any) => console.log('Klick an Btn:', evt.clientX)
    );

    let myInput = document.querySelector('#user') as HTMLInputElement;

    fromEvent(myInput, 'keyup')
    .pipe(
        debounceTime(300)
    )
    .subscribe(
        (evt:any) => console.log('Eingabe:', evt.target.value)
    );