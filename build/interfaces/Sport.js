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
function training(title, hour) {
    alert("your training of ".concat(title, " is coming at ").concat(hour));
    console.log("your training of ".concat(title, " is coming at ").concat(hour));
}
var Sport = /** @class */ (function (_super) {
    __extends(Sport, _super);
    function Sport(writingDate, title, text, imgUrl, location, date, hour, equipment) {
        var _this = _super.call(this, writingDate, title, text, imgUrl) || this;
        _this.location = location;
        _this.date = date;
        _this.hour = hour;
        _this.equipment = equipment;
        return _this;
    }
    Sport.prototype.deleteNote = function () {
        alert("Your Task Deleted Succesfully");
    };
    Object.defineProperty(Sport.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    return Sport;
}(Note));
