var Note = /** @class */ (function () {
    function Note(writingDate, title, text, imgUrl) {
        this.writingDate = writingDate;
        this.title = title;
        this.text = text;
        this.imgUrl = imgUrl;
        this.id = Note.getNextId(); // assigning a unique id to each instance
    }
    Object.defineProperty(Note.prototype, "getId", {
        get: function () {
            return this.id; // using this.id instead of Note.id
        },
        enumerable: false,
        configurable: true
    });
    Note.prototype.deleteNote = function () {
        alert("Note was successfully deleted");
    };
    Note.getNextId = function () {
        return Note.currentId++;
    };
    Note.currentId = 1;
    return Note;
}());
