interface Sport extends Note{
    location : string;
    date : string;
    hour : string;
    equipment : string;
}
function training(title: string, hour: string): void{
    alert(`your training of ${title} is coming at ${hour}`);
}

class Sport extends Note implements Sport{
    public constructor(writingDate : string, title: string, text: string, imgUrl: string, location: string, date :string , hour: string, equipment :string){
        super(writingDate, title, text, imgUrl);
        this.location = location;
        this.date = date;
        this.hour = hour;
        this.equipment = equipment;
    }
    public deleteNote(): void {
        alert("Your Task Deleted Succesfully");
    }
    
    get getId(): number {
        return this.id;
    }
}