const meetingOne : Meeting = new Meeting("10.2.24","Fox","Meeting at Fox","https://upload.wikimedia.org/wikipedia/commons/c/c0/Fox_Broadcasting_Company_logo_%282019%29.svg","Hollywood","10:00","15.3.4");
const meetingTwo : Meeting = new Meeting("11.2.24","Disney","Pitching Disney a new show","https://static.wikia.nocookie.net/disney/images/a/a2/DisneyTVA.svg/revision/latest?cb=20200621072212","Burbank","12:00","20.3.24");
const meetings : Meeting[] = [meetingOne, meetingTwo];

const taskOne : Tasks = new Tasks("20.1.24","Cleaning the room","Bring some cleaning materials","https://www.thespruce.com/thmb/iMt63n8NGCojUETr6-T8oj-5-ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg","4.3.24");
const taskTwo : Tasks = new Tasks("1.3.24","Complete binging futurama","Start watching Disney+ Already","https://m.media-amazon.com/images/M/MV5BY2JiMzM3NTItM2QyNy00ODIyLWE5M2ItMTU0MDRlNzQzNjc3XkEyXkFqcGdeQXZhcmdtaWM@._V1_.jpg","15.3.24");
const taskThree : Tasks = new Tasks("1.3.24","Finish already this project","Just finish this typescript project, dude!","https://miro.medium.com/v2/resize:fit:1358/1*moJeTvW97yShLB7URRj5Kg.png","16.3.24");
const tasks : Tasks[] = [taskOne, taskTwo, taskThree];

const trainingOne : Sport = new Sport("17.02.24","Soccer","Soccer Training with Maccabi","https://upload.wikimedia.org/wikipedia/en/e/e9/Maccabi_Tel_Aviv.png","Bloomfield","27/02/24","14:30","Soccer Shoes, Soccer Ball, Training shirt");
const trainingTwo : Sport = new Sport("28.03.24","Basketball","Basketball Game in the park","https://upload.wikimedia.org/wikipedia/commons/1/17/Herzliya_-_tarbut_usport.JPG","Sportek Herzliya","28/01/24","10:30","Sport Shoes, Orange Basektball, Training shirt");
const trainingThree : Sport = new Sport("1.01.24","Tennis Game","A tennis game with ma and pa","https://upload.wikimedia.org/wikipedia/commons/a/a8/Plough_Lane_panorama.jpg","London","14.03.24","12:00","Tennis Rocket, Shoes, T-shirt and shorts");
const sports : Sport[] = [trainingOne, trainingTwo, trainingThree];

const meetingElement = document.getElementById("meeting");
let meetingHtml = '<div class="row">'
for(let i = 0; i < meetings.length; i++){
    const current = meetings[i];
    console.log(`${meetings[i].getId} - ${meetings[i].title}`);
    meetingHtml += `<div id="element-${current.getId}" div class="col-md-6">
        <div class="meeting-block row">
        <h2>${current.getId}</h2>
        <div class="col-md-4">
            <img src="${current.imgUrl}" class="img-fluid custom-img">
        </div>
        <div class="col-md-8" style="background-color: white; border: gold 2px solid">
        <h3>Time: ${current.hour}</h3>
        <h3>At: ${current.location}</h3>
        <h3>Meeting: ${current.title}</h3>
        <h3>Details: ${current.text}</h3>
        <button type="button" onClick="notify('${current.title}','${current.date}','${current.hour}','${current.location}')" class="btn btn-success">Alert</button>
        <button type="button" data-id="${current.getId}" class="btn btn-danger remove-meeting-button" onclick="removeObjectById(meetings, ${current.getId}, refreshView)">Remove</button>
        </div>
        </div>
        </div>
    `;
}
meetingHtml += '</div>';
meetingElement.innerHTML = meetingHtml;


const taskElement = document.getElementById("task");
let taskHtml = '<div class="row">'
for(let i = 0; i < tasks.length; i++){
    console.log(`${tasks[i].getId} - ${tasks[i].title}`);
    const current = tasks[i];
    taskHtml += `<div id="element-${current.getId}" div class="col-md-6">
    <div class="meeting-block row">
    <h2>${current.getId}</h2>
    <div class="col-md-4">
        <img src="${current.imgUrl}" class="img-fluid custom-img">
    </div>
    <div class="col-md-8" style="background-color: white; border: gold 2px solid">
        <h3>Deadline: ${current.lastDate}</h3>
        <h3>Task: ${current.title}</h3>
        <h3>Details: ${current.text}</h3>
        <h3>Written at: ${current.writingDate}</h3>
        <button type="button" onClick="deadline('${current.lastDate}','${current.writingDate}')" class="btn btn-success">Alert</button>
        <button type="button" data-id="${current.getId}" class="btn btn-danger remove-meeting-button" onclick="removeObjectById(tasks, ${current.getId}, refreshView)">Remove</button>
        </div>
    </div>
    </div>
    `;
}
taskHtml += '</div>';
taskElement.innerHTML = taskHtml;

const sportElement = document.getElementById("sport");
let sportHtml = '<div class="row">'
for(let i = 0; i < sports.length; i++){
    console.log(`${sports[i].getId} - ${sports[i].title}`);
    const current = sports[i];
    sportHtml += `<div id="element-${current.getId}" class="col-md-6">
    <div class="meeting-block row">
    <h2>${current.getId}</h2>
    <div class="col-md-4">
        <img src="${current.imgUrl}" class="img-fluid custom-img">
    </div>
    <div class="col-md-8" style="background-color: white; border: gold 2px solid">
        <h3>Date: ${current.date}</h3>
        <h3>Task: ${current.title}</h3>
        <h3>Sport kind: ${current.text}</h3>
        <h3>Place at: ${current.location}</h3>
        <h3>Equipment: ${current.equipment}</h3>
        <button type="button" onClick="training('${current.title}','${current.hour}')" class="btn btn-success">Alert</button>
        <button type="button" data-id="${current.getId}" class="btn btn-danger remove-meeting-button" onclick="removeObjectById(sports, ${current.getId}, refreshView)">Remove</button>
        </div>
    </div>
    </div>
    `;
}
sportHtml += '</div>';
sportElement.innerHTML = sportHtml;
