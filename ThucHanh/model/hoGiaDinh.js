"use strict";
exports.__esModule = true;
exports.hoGiaDinh = void 0;
var hoGiaDinh = /** @class */ (function () {
    function hoGiaDinh() {
        this.person = [];
    }
    hoGiaDinh.prototype.add = function (t) {
        this.person.push(t);
        console.log(this.person);
    };
    return hoGiaDinh;
}());
exports.hoGiaDinh = hoGiaDinh;
