interface Meeting extends Note{
    location : String;
    hour : string;
    date : string;
}

function notify(title : string, date: string, hour: string, location : string): void{
    alert(`Your Meeting with ${title} is on ${date} at ${hour} in ${location}`);
    console.log(`Your Meeting with ${title} is on ${date} at ${hour} in ${location}`);
}

class Meeting extends Note implements Meeting{
    public constructor(writingDate : string, title: string, text: string, imgUrl: string, location : string, hour: string, date: string){
        super(writingDate, title, text, imgUrl);
        this.location = location;
        this.hour = hour;
        this.date = date;
    }
    public deleteNote(): void {
        alert("Your Task Deleted Succesfully");
    }

    get getId(): number {
        return this.id;
    }
}