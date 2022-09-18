"use strict";
exports.__esModule = true;
exports.DocumentManager = void 0;
var DocumentManager = /** @class */ (function () {
    function DocumentManager() {
        this.person = [];
    }
    DocumentManager.prototype.add = function (t) {
        this.person.push(t);
        console.log(this.person);
    };
    DocumentManager.prototype["delete"] = function (id, t) {
    };
    DocumentManager.prototype.showall = function (khuID) {
        var arr = [];
        console.log(this.person);
        console.log(this.person[0].khu);
        for (var i = 0; i < this.person.length; i++) {
            if (this.person[i].khu === khuID) {
                arr.push(this.person[i]);
            }
        }
        console.log(arr);
    };
    DocumentManager.prototype.findById = function (id) {
    };
    return DocumentManager;
}());
exports.DocumentManager = DocumentManager;
