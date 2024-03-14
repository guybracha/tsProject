var meetingOne = new Meeting("10.2.24", "Fox", "Meeting at Fox", "https://upload.wikimedia.org/wikipedia/commons/c/c0/Fox_Broadcasting_Company_logo_%282019%29.svg", "Hollywood", "10:00", "15.3.4");
var meetingTwo = new Meeting("11.2.24", "Disney", "Pitching Disney a new show", "https://static.wikia.nocookie.net/disney/images/a/a2/DisneyTVA.svg/revision/latest?cb=20200621072212", "Burbank", "12:00", "20.3.24");
var meetings = [meetingOne, meetingTwo];
var taskOne = new Tasks("20.1.24", "Cleaning the room", "Bring some cleaning materials", "https://www.thespruce.com/thmb/iMt63n8NGCojUETr6-T8oj-5-ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg", "4.3.24");
var taskTwo = new Tasks("1.3.24", "Complete binging futurama", "Start watching Disney+ Already", "https://m.media-amazon.com/images/M/MV5BY2JiMzM3NTItM2QyNy00ODIyLWE5M2ItMTU0MDRlNzQzNjc3XkEyXkFqcGdeQXZhcmdtaWM@._V1_.jpg", "15.3.24");
var taskThree = new Tasks("1.3.24", "Finish already this project", "Just finish this typescript project, dude!", "https://miro.medium.com/v2/resize:fit:1358/1*moJeTvW97yShLB7URRj5Kg.png", "16.3.24");
var tasks = [taskOne, taskTwo, taskThree];
var trainingOne = new Sport("17.02.24", "Soccer", "Soccer Training with Maccabi", "https://upload.wikimedia.org/wikipedia/en/e/e9/Maccabi_Tel_Aviv.png", "Bloomfield", "27/02/24", "14:30", "Soccer Shoes, Soccer Ball, Training shirt");
var trainingTwo = new Sport("28.03.24", "Basketball", "Basketball Game in the park", "https://upload.wikimedia.org/wikipedia/commons/1/17/Herzliya_-_tarbut_usport.JPG", "Sportek Herzliya", "28/01/24", "10:30", "Sport Shoes, Orange Basektball, Training shirt");
var trainingThree = new Sport("1.01.24", "Tennis Game", "A tennis game with ma and pa", "https://upload.wikimedia.org/wikipedia/commons/a/a8/Plough_Lane_panorama.jpg", "London", "14.03.24", "12:00", "Tennis Rocket, Shoes, T-shirt and shorts");
var sports = [trainingOne, trainingTwo, trainingThree];
var meetingElement = document.getElementById("meeting");
var meetingHtml = '<div class="row">';
for (var i = 0; i < meetings.length; i++) {
    var current = meetings[i];
    console.log("".concat(meetings[i].getId, " - ").concat(meetings[i].title));
    meetingHtml += "<div class=\"col-md-6\">\n        <div class=\"meeting-block row\">\n        <h2>".concat(current.getId, "</h2>\n        <div class=\"col-md-4\">\n            <img src=\"").concat(current.imgUrl, "\" class=\"img-fluid custom-img\">\n        </div>\n        <div class=\"col-md-8\" style=\"background-color: white; border: gold 2px solid\">\n        <h3>Time: ").concat(current.hour, "</h3>\n        <h3>At: ").concat(current.location, "</h3>\n        <h3>Meeting: ").concat(current.title, "</h3>\n        <h3>Details: ").concat(current.text, "</h3>\n        <button type=\"button\" onClick=\"notify('").concat(current.title, "','").concat(current.date, "','").concat(current.hour, "','").concat(current.location, "')\" class=\"btn btn-success\">Alert</button>\n        <button type=\"button\" data-id=\"").concat(current.getId, "\" class=\"btn btn-danger remove-meeting-button\" onclick=\"removeObjectById(meetings, ").concat(current.getId, ")\">Remove</button>\n        </div>\n        </div>\n        </div>\n    ");
}
meetingHtml += '</div>';
meetingElement.innerHTML = meetingHtml;
var taskElement = document.getElementById("task");
var taskHtml = '<div class="row">';
for (var i = 0; i < tasks.length; i++) {
    console.log("".concat(tasks[i].getId, " - ").concat(tasks[i].title));
    var current = tasks[i];
    taskHtml += "<div class=\"col-md-6\">\n    <div class=\"meeting-block row\">\n    <h2>".concat(current.getId, "</h2>\n    <div class=\"col-md-4\">\n        <img src=\"").concat(current.imgUrl, "\" class=\"img-fluid custom-img\">\n    </div>\n    <div class=\"col-md-8\" style=\"background-color: white; border: gold 2px solid\">\n        <h3>Deadline: ").concat(current.lastDate, "</h3>\n        <h3>Task: ").concat(current.title, "</h3>\n        <h3>Details: ").concat(current.text, "</h3>\n        <h3>Written at: ").concat(current.writingDate, "</h3>\n        <button type=\"button\" onClick=\"deadline('").concat(current.lastDate, "','").concat(current.writingDate, "')\" class=\"btn btn-success\">Alert</button>\n        <button type=\"button\" data-id=\"").concat(current.getId, "\" class=\"btn btn-danger remove-meeting-button\" onclick=\"removeObjectById(tasks, ").concat(current.getId, ")\">Remove</button>\n        </div>\n    </div>\n    </div>\n    ");
}
taskHtml += '</div>';
taskElement.innerHTML = taskHtml;
var sportElement = document.getElementById("sport");
var sportHtml = '<div class="row">';
for (var i = 0; i < sports.length; i++) {
    console.log("".concat(sports[i].getId, " - ").concat(sports[i].title));
    var current = sports[i];
    sportHtml += "\n    <div class=\"col-md-6\">\n    <div class=\"meeting-block row\">\n    <h2>".concat(current.getId, "</h2>\n    <div class=\"col-md-4\">\n        <img src=\"").concat(current.imgUrl, "\" class=\"img-fluid custom-img\">\n    </div>\n    <div class=\"col-md-8\" style=\"background-color: white; border: gold 2px solid\">\n        <h3>Date: ").concat(current.date, "</h3>\n        <h3>Task: ").concat(current.title, "</h3>\n        <h3>Sport kind: ").concat(current.text, "</h3>\n        <h3>Place at: ").concat(current.location, "</h3>\n        <button type=\"button\" onClick=\"training('").concat(current.title, "','").concat(current.hour, "')\" class=\"btn btn-success\">Alert</button>\n        <button type=\"button\" data-id=\"").concat(current.getId, "\" class=\"btn btn-danger remove-meeting-button\" onclick=\"removeObjectById(sports, ").concat(current.getId, ")\">Remove</button>\n        </div>\n    </div>\n    </div>\n    ");
}
sportHtml += '</div>';
sportElement.innerHTML = sportHtml;
