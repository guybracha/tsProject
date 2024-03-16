function removeObjectById(objects, id, refreshView) {
    var index = objects.findIndex(function (obj) { return obj.getId() === id; });
    if (index !== -1) {
        var objectToRemove = objects[index];
        if (objectToRemove.deleteNote) {
            objectToRemove.deleteNote();
        }
        objects.splice(index, 1);
        refreshView();
    }
    else {
        console.error("Object with id ".concat(id, " not found."));
    }
}
function refreshView() {
    console.log('View refreshed');
}
