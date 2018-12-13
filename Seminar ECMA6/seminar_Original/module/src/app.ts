console.log('Hi, ich bin die App!');

// import by name
import { value1, toolObject, toolFunction } from './modul1';
// alias
import { value2 as value2Modul1 } from './modul1';

// ICH WILL ALLES! Namespacing mit Aliasobjekt
import * as tools from './modul2';

import { superTools } from './modul3';
// Defaultimport
import toolset from './modul3';

// Import aus Verzeichnis (Barrel):
import { myTool1 } from './tools'
// spezielle Sachen, die nicht im Barrel sind:
import { myTool1Variant } from './tools/tool1'

console.log('Der Sinn des Lebens:', value1);
let value2 = 'Ich bin schon belegt!'; // !
console.log('Alias:', value2Modul1);

let propA = toolObject.a; 
console.log('prop a aus toolObject', propA);

// Pauschalimport
console.log(tools);
// Defaultimport
console.log(toolset);
