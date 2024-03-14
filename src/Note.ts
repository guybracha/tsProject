abstract class Note {
    writingDate: string;
    title: string;
    text: string;
    imgUrl: string;
    id: number;  // instance property

    constructor(writingDate: string, title: string, text: string, imgUrl: string) {
        this.writingDate = writingDate;
        this.title = title;
        this.text = text;
        this.imgUrl = imgUrl;
        this.id = Note.getNextId();  // assigning a unique id to each instance
    }

    get getId(): number {
        return this.id;  // using this.id instead of Note.id
    }

    public deleteNote(): void {
        console.log("Note was successfully deleted");
        // No need to decrement Note.currentId here as it's a static property
    }

    private static currentId: number = 1;

    private static getNextId(): number {
        return Note.currentId++;
    }
}
