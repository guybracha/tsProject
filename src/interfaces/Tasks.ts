interface Tasks extends Note{
    lastDate : string;
}

function deadline(lastDate : string, writingDate: string): void{
    alert(`This task was written at ${writingDate} and it's deadline setting at ${lastDate}`);
}

class Tasks extends Note implements Tasks{
    public constructor(writingDate : string, title: string, text: string, imgUrl: string, lastDate : string){
        super(writingDate, title, text, imgUrl);
        this.lastDate = lastDate;
    }
    public deleteNote(): void {
        alert("Your Task Deleted Succesfully");
    }
    
    get getId(): number {
        return this.id;
    }
}