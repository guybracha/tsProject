"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeObjectById = void 0;
function removeObjectById(objects, id) {
    var index = objects.findIndex(function (obj) { return obj.getId() === id; });
    if (index !== -1) {
        objects.splice(index, 1);
        refreshView(); // Refresh the view after removing the object
    }
    else {
        console.error("Object with id ".concat(id, " not found."));
    }
}
exports.removeObjectById = removeObjectById;
function refreshView() {
    // Refresh meeting elements
    meetingElement.innerHTML = meetings.map(function (meeting) {
        return "\n            <div class=\"col-md-6\">\n                <div class=\"meeting-block row\">\n                    <h2>".concat(meeting.getId, "</h2>\n                    <div class=\"col-md-4\">\n                        <img src=\"").concat(meeting.imgUrl, "\" class=\"img-fluid custom-img\">\n                    </div>\n                    <div class=\"col-md-8\" style=\"background-color: white; border: gold 2px solid\">\n                        <h3>Time: ").concat(meeting.hour, "</h3>\n                        <h3>At: ").concat(meeting.location, "</h3>\n                        <h3>Meeting: ").concat(meeting.title, "</h3>\n                        <h3>Details: ").concat(meeting.text, "</h3>\n                        <button type=\"button\" onClick=\"notify('").concat(meeting.title, "','").concat(meeting.date, "','").concat(meeting.hour, "','").concat(meeting.location, "')\" class=\"btn btn-success\">Alert</button>\n                        <button type=\"button\" class=\"btn btn-danger remove-meeting-button\" onclick=\"removeObjectById(meetings, ").concat(meeting.getId, ")\">Remove</button>\n                    </div>\n                </div>\n            </div>\n        ");
    }).join('');
    // Refresh task elements
    taskElement.innerHTML = tasks.map(function (task) {
        return "\n            <div class=\"col-md-6\">\n                <div class=\"meeting-block row\">\n                    <h2>".concat(task.getId, "</h2>\n                    <div class=\"col-md-4\">\n                        <img src=\"").concat(task.imgUrl, "\" class=\"img-fluid custom-img\">\n                    </div>\n                    <div class=\"col-md-8\" style=\"background-color: white; border: gold 2px solid\">\n                        <h3>Deadline: ").concat(task.lastDate, "</h3>\n                        <h3>Task: ").concat(task.title, "</h3>\n                        <h3>Details: ").concat(task.text, "</h3>\n                        <h3>Written at: ").concat(task.writingDate, "</h3>\n                        <button type=\"button\" onClick=\"deadline('").concat(task.lastDate, "','").concat(task.writingDate, "')\" class=\"btn btn-success\">Alert</button>\n                        <button type=\"button\" class=\"btn btn-danger remove-task-button\" onclick=\"removeObjectById(tasks, ").concat(task.getId, ")\">Remove</button>\n                    </div>\n                </div>\n            </div>\n        ");
    }).join('');
    // Refresh sport elements
    sportElement.innerHTML = sports.map(function (sport) {
        return "\n            <div class=\"col-md-6\">\n                <div class=\"meeting-block row\">\n                    <h2>".concat(sport.getId, "</h2>\n                    <div class=\"col-md-4\">\n                        <img src=\"").concat(sport.imgUrl, "\" class=\"img-fluid custom-img\">\n                    </div>\n                    <div class=\"col-md-8\" style=\"background-color: white; border: gold 2px solid\">\n                        <h3>Date: ").concat(sport.date, "</h3>\n                        <h3>Task: ").concat(sport.title, "</h3>\n                        <h3>Sport kind: ").concat(sport.text, "</h3>\n                        <h3>Place at: ").concat(sport.location, "</h3>\n                        <button type=\"button\" onClick=\"training('").concat(sport.title, "','").concat(sport.hour, "')\" class=\"btn btn-success\">Alert</button>\n                        <button type=\"button\" class=\"btn btn-danger remove-sport-button\" onclick=\"removeObjectById(sports, ").concat(sport.getId, ")\">Remove</button>\n                    </div>\n                </div>\n            </div>\n        ");
    }).join('');
}
