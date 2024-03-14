var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function deadline(lastDate, writingDate) {
    alert("This task was written at ".concat(writingDate, " and it's deadline setting at ").concat(lastDate));
    console.log("This task was written at ".concat(writingDate, " and it's deadline setting at ").concat(lastDate));
}
var Tasks = /** @class */ (function (_super) {
    __extends(Tasks, _super);
    function Tasks(writingDate, title, text, imgUrl, lastDate) {
        var _this = _super.call(this, writingDate, title, text, imgUrl) || this;
        _this.lastDate = lastDate;
        return _this;
    }
    Tasks.prototype.deleteNote = function () {
        alert("Your Task Deleted Succesfully");
    };
    Object.defineProperty(Tasks.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    return Tasks;
}(Note));
