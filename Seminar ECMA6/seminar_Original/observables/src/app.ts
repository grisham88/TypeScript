// Observables verwenden (Creator importieren):
console.log('Los gehts...');

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

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

let subscription3 = myObservable
.pipe(
    take(4)
)
.subscribe({
    next: val => console.log('Subscribe 3:', val),
    complete: () => console.log('Subscribe 3: Stream beendet.'),
    error: err => console.error('Subscribe 3: Error ', err)
});
// früher (RxJs 5/5.5):
// myObservable
//    .take(4)
//    .filter()
//    .map()
//    .subscribe()

console.log('#################  Observable aus Array #################')

let blumenArray = ['Rosen','Tulpen','Nelken','Geranien']