"use strict";
exports.__esModule = true;
exports.DocumentManager = void 0;
var DocumentManager = /** @class */ (function () {
    function DocumentManager() {
        this.documents = [];
    }
    DocumentManager.prototype.add = function (t) {
        this.documents.push(t);
    };
    DocumentManager.prototype.edit = function (id, t) {
        var index = this.findById(id);
        this.documents[index] = t;
    };
    DocumentManager.prototype["delete"] = function (id) {
        var index = this.findById(id);
        this.documents.slice(index, 1);
    };
    DocumentManager.prototype.showAll = function () {
        return this.documents;
    };
    DocumentManager.prototype.findById = function (id) {
        for (var i = 0; i < this.documents.length; i++) {
            if (this.documents[i].getId() == id) {
                return i;
            }
        }
        return -1;
    };
    return DocumentManager;
}());
exports.DocumentManager = DocumentManager;
