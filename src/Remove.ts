function removeObjectById<T extends { getId(): number }>(objects: T[] | undefined, id: number): void {
    if (!Array.isArray(objects)) {
        console.error("Invalid input: 'objects' must be an array.");
        return;
    }
    const index = objects.findIndex(obj => obj.getId() === id);
    if (index !== -1) {
        const element = document.getElementById(`${objects[index].constructor.name.toLowerCase()}-${id}`);
        if (element) {
            element.remove();
        }
        objects.splice(index, 1);
    } else {
        console.error(`Object with id ${id} not found.`);
    }
}
