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
function notify(title, date, hour, location) {
    alert("Your Meeting with ".concat(title, " is on ").concat(date, " at ").concat(hour, " in ").concat(location));
}
var Meeting = /** @class */ (function (_super) {
    __extends(Meeting, _super);
    function Meeting(writingDate, title, text, imgUrl, location, hour, date) {
        var _this = _super.call(this, writingDate, title, text, imgUrl) || this;
        _this.location = location;
        _this.hour = hour;
        _this.date = date;
        return _this;
    }
    Meeting.prototype.deleteNote = function () {
        alert("Your Task Deleted Succesfully");
    };
    Object.defineProperty(Meeting.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    return Meeting;
}(Note));
