export function removeObjectById<T extends { getId(): number }>(objects: T[], id: number): void {
    const index = objects.findIndex(obj => obj.getId() === id);
    if (index !== -1) {
        objects.splice(index, 1);
        refreshView(); // Refresh the view after removing the object
    } else {
        console.error(`Object with id ${id} not found.`);
    }
}

function refreshView() {
    // Refresh meeting elements
    meetingElement.innerHTML = meetings.map(meeting => {
        return `
            <div class="col-md-6">
                <div class="meeting-block row">
                    <h2>${meeting.getId}</h2>
                    <div class="col-md-4">
                        <img src="${meeting.imgUrl}" class="img-fluid custom-img">
                    </div>
                    <div class="col-md-8" style="background-color: white; border: gold 2px solid">
                        <h3>Time: ${meeting.hour}</h3>
                        <h3>At: ${meeting.location}</h3>
                        <h3>Meeting: ${meeting.title}</h3>
                        <h3>Details: ${meeting.text}</h3>
                        <button type="button" onClick="notify('${meeting.title}','${meeting.date}','${meeting.hour}','${meeting.location}')" class="btn btn-success">Alert</button>
                        <button type="button" class="btn btn-danger remove-meeting-button" onclick="removeObjectById(meetings, ${meeting.getId})">Remove</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Refresh task elements
    taskElement.innerHTML = tasks.map(task => {
        return `
            <div class="col-md-6">
                <div class="meeting-block row">
                    <h2>${task.getId}</h2>
                    <div class="col-md-4">
                        <img src="${task.imgUrl}" class="img-fluid custom-img">
                    </div>
                    <div class="col-md-8" style="background-color: white; border: gold 2px solid">
                        <h3>Deadline: ${task.lastDate}</h3>
                        <h3>Task: ${task.title}</h3>
                        <h3>Details: ${task.text}</h3>
                        <h3>Written at: ${task.writingDate}</h3>
                        <button type="button" onClick="deadline('${task.lastDate}','${task.writingDate}')" class="btn btn-success">Alert</button>
                        <button type="button" class="btn btn-danger remove-task-button" onclick="removeObjectById(tasks, ${task.getId})">Remove</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Refresh sport elements
    sportElement.innerHTML = sports.map(sport => {
        return `
            <div class="col-md-6">
                <div class="meeting-block row">
                    <h2>${sport.getId}</h2>
                    <div class="col-md-4">
                        <img src="${sport.imgUrl}" class="img-fluid custom-img">
                    </div>
                    <div class="col-md-8" style="background-color: white; border: gold 2px solid">
                        <h3>Date: ${sport.date}</h3>
                        <h3>Task: ${sport.title}</h3>
                        <h3>Sport kind: ${sport.text}</h3>
                        <h3>Place at: ${sport.location}</h3>
                        <button type="button" onClick="training('${sport.title}','${sport.hour}')" class="btn btn-success">Alert</button>
                        <button type="button" class="btn btn-danger remove-sport-button" onclick="removeObjectById(sports, ${sport.getId})">Remove</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}
