# TypeScript Seminar

TypeScript ist eine Obermenge von ECMAScript 6 (ES6) und ist rückwärtskompatibel mit ECMAScript 5, d. h. JavaScript.  
Angular bietet somit auch die Vorzüge von ES6:  
- Lambdas
- Iteratoren
- for…of-Schleifen
- Generatoren im Stil von Python
- Reflexion


## Markdown (.md) Formatierungsregeln
* [Markdown Tutorial Git](http://agea.github.io/tutorial.md/)
* [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
* [Markdown Navigation](https://github.com/AlanWalk/markdown-navigation)


## Visual Studio Code
* Live Server als Extension installieren
** mit ALT + L + O wird der Server gestartet und die aktuelle Webseite geöffnet und bei jedem Speichern aktualisiert im Browser
* Formatierung des Texts mit ALT + Shift + F
* Zeilenumbruch aktivieren mit ALT + Z
* Aus-/Einkommentieren mit STRG + #
* Kommentar in JavaScript /**/ (Ein-/Mehrzeilig) oder // (Einzeilig)

## Git Hub
* auf git hub ein neues Repository anlegen
* https Link kopieren
* Laufwerk/Order im Explorer öffnen in der das Repository lokal abgelegt werden soll

### Git Bash
* mit Rechtsklick git bash öffnen
* git config --global user.name "username"
* git config --global user.email "eMail@host"
* Repository nach lokal kopieren:
    * git clone  https://github.com/grisham88/Javascript.git

### Visual Studio Code
* [Visual Studio Code: How to integrate Git](https://www.theregister.co.uk/2015/12/07/visual_studio_code_git_integration/)
* Den neuen Ordner öffnen
* mit Rechtsklick "Open with Code"
* Nun ist das Repository mit git verknüpft und alle Änderungen sind direkt commit und pushbar 
    * Über die Source control (Link in Visual Studio Code) sieht man alle offenen Dateien die geändert wurden
    * Mit Button "V" können diese direkt commited werden oder einzeln zum Commit freigegeben werden
    * Beim ... kann dann push ausgeführt werden -> Git wird nach Git Hub aktualisiert

## Hilfsfunktionen für VS Code
- https://code.visualstudio.com/docs/getstarted/tips-and-tricks
- https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
- https://code.visualstudio.com/docs/getstarted/keybindings
- Aufruf durch F1
    - Wenn > hinterlegt ist, werden Funktionen aufgeführt
    - Ohne > kann man nach Dateien suchen
- STRG + B für Explorer links zuklappen

## Seminarablauf

### Tag 1
ECMA 6
- Syntaxerweiterungen
    - Variablen
    - Spread- & Rest-Operationen
    - Destructuring
    - Objektliterale
    - Symbols
    - Arrays
    - Iterables -> Iterator
        - for ... of

### Tag 2
ECMA 6
- Funktionen vs. Arrow-Funktionen
- Promises -> Chains
- fetch-API
- Generatoren
- class-Keyword vs. Konstruktor
- Vererbung
- Module (Webpack und TypeScript)
- Observables

### Tag 3
Typescript
- Decorators
- Types
- Interfaces
- TS-Classes
- Generics

Tooling
- TSC (TypeScript Compiler)
- Webpack
- RxJs

## Installation TypeScript
Installation:  
- https://code.visualstudio.com/docs/languages/typescript
- The easiest way to install TypeScript is through npm, the Node.js Package Manager. If you have npm installed, you can install TypeScript globally (-g) on your computer by:

```html
npm install -g typescript
```
You can test your install by checking the version or help.
```html
tsc --version
tsc --help
```
Compilierung:  
Eingabe im Terminal tsc und name der Datei
```html
Beispiel: tcs "typescript - example.ts"
```
Dadurch wird eine ausführbare .js-Datei erzeugt

## Installation Webpack

## ECMA-6
- https://www.w3schools.com/js/js_es6.asp
- https://www.buschmais.de/2017/08/24/cleaner-code-mit-ecmascript-6/

### Emmet Cheatsheets
- https://docs.emmet.io/cheat-sheet/

### Syntaxerweiterungen
#### Variablen
#### Spread- & Rest-Operationen
#### Destructuring
#### Objektliterale
#### Symbols
#### Arrays
#### Iterables -> Iterator
##### for ... of

### Funktionen vs. Arrow-Funktionen
### Promises -> Chains
### fetch-API
    Ablösung von XML-HTTP Request Objekt
### Generatoren
### class-Keyword vs. Konstruktor
### Vererbung
### Module (Webpack und TypeScript)
### Observables

## Typescript
### Decorators
### Types
### Interfaces
### TS-Classes
### Generics