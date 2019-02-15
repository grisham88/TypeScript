tsc// Hallo TypeScript!
function addiere(a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 0; }
    return a + b;
}
var erg = addiere(7, 8);
var Ding = /** @class */ (function () {
    function Ding() {
    }
    Ding.prototype.dings = function () { };
    return Ding;
}());
var dasDing = new Ding();
