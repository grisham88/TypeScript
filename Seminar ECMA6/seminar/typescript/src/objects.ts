// Object-Types

let myObj = {};
// myObj.x = "X"; // hmm...

let tim = {
  vorname: 'Tim',
  nachname: 'Thaler'
};
tim.nachname = 'Joe';
tim = {
  vorname: 'Joe',
  nachname: 'Cool',
  // alter:42 // nope!
};
// Annotation mit structural Type
let joe: {
  vorname: string,
  nachname: string
};
// MUSS komplett initialisiert werden!
joe = {
  vorname: 'Joe',
  nachname: 'Cool'
};
joe.nachname = 'Cooler';

// Structural Type speichern
type typePerson = {
  vorname: string,
  nachname: string
};

let jack: typePerson;
jack = {
  vorname: 'Jack',
  nachname: 'Doe'
};