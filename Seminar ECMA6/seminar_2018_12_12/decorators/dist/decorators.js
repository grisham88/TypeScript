"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
console.log('Es geht um Decorators...');
// Class Decorator
function personDecorator(myClass) {
    console.log('Ich dekoriere....:s', myClass);
    // nope! Nicht so machen:
    // myClass.prototype.bumm = function() {}
    // Das da machen wir:
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1(vorname, nachname) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            var _this = _super.apply(this, [vorname, nachname].concat(args)) || this;
            _this.haustier = "Dackel";
            _this.fullname = vorname + ' ' + nachname;
            return _this;
        }
        class_1.prototype.spezial = function () {
            console.log('Reindekoriert!');
        };
        return class_1;
    }(myClass));
}
function nochEinDecorator(myClass) {
    console.log('Ich dekoriere auch!');
}
// Method Decorator
function halloDecorator(a, b, descr) {
    console.log('Method Decorator - Prototype d. Class:', a, 'Key:', b, 'Descriptor:', descr);
    var oldMethod = descr.value;
    var newMethod = function () {
        oldMethod.call(this);
        // console.log('Ooops, ich wurde wegdekoriert!');
    };
    // Return: a) NICHTS! b) einen Descriptor!
    return {
        value: newMethod,
        writable: true,
        enumerable: true,
        configurable: true
    };
}
// ClassDecorator
var Person = /** @class */ (function () {
    function Person(vorname, nachname) {
        this.vorname = vorname;
        this.nachname = nachname;
    }
    Person.prototype.hallo = function () {
        console.log('Hallo, ich bin', this.vorname, '!');
    };
    __decorate([
        halloDecorator,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Person.prototype, "hallo", null);
    Person = __decorate([
        nochEinDecorator,
        personDecorator,
        __metadata("design:paramtypes", [Object, Object])
    ], Person);
    return Person;
}());
var jim = new Person('Jim', 'Dandy');
console.log(jim);
jim.hallo();
var joe = new Person('Joe', 'Cool');
console.log(joe);
