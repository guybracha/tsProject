function removeObjectById<Note extends { getId(): number; deleteNote?(): void }>(
    objects: Note[], 
    id: number, 
    refreshView: () => void 
): void {
    const index = objects.findIndex(obj => obj.getId() === id);
    if (index !== -1) {
        const objectToRemove = objects[index];
        if (objectToRemove.deleteNote) {
            objectToRemove.deleteNote();
        }
        objects.splice(index, 1);
        refreshView(); 
    } else {
        console.error(`Object with id ${id} not found.`);
    }
}

function refreshView(){
    console.log('View refreshed');
}