function removeObjectById(objects, id) {
    if (!Array.isArray(objects)) {
        console.error("Invalid input: 'objects' must be an array.");
        return;
    }
    var index = objects.findIndex(function (obj) { return obj.getId() === id; });
    if (index !== -1) {
        var element = document.getElementById("".concat(objects[index].constructor.name.toLowerCase(), "-").concat(id));
        if (element) {
            element.remove();
        }
        if (objects[index].deleteNote) {
            objects[index].deleteNote();
        }
        objects.splice(index, 1);
    }
    else {
        console.error("Object with id ".concat(id, " not found."));
    }
}
