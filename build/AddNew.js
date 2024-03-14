function showAdditionalFields(selectedType) {
    var additionalFieldsDiv = document.getElementById('additionalFields');
    if (!additionalFieldsDiv)
        return;
    additionalFieldsDiv.innerHTML = ''; // Clear previous fields
    if (selectedType === 'meeting') {
        // Display additional fields for meeting
        additionalFieldsDiv.innerHTML = "\n            <div class=\"form-group\">\n                <label for=\"location\">Location</label>\n                <input type=\"text\" class=\"form-control\" id=\"location\" placeholder=\"Enter Location\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"meetingTime\">Meeting Time</label>\n                <input type=\"text\" class=\"form-control\" id=\"meetingTime\" placeholder=\"Enter Meeting Time\">\n            </div>\n        ";
    }
    else if (selectedType === 'task') {
        // Display additional fields for task
        additionalFieldsDiv.innerHTML = "\n            <div class=\"form-group\">\n                <label for=\"priority\">Priority</label>\n                <input type=\"text\" class=\"form-control\" id=\"priority\" placeholder=\"Enter Priority\">\n            </div>\n        ";
    }
    else if (selectedType === 'sport') {
        // Display additional fields for sport
        additionalFieldsDiv.innerHTML = "\n            <div class=\"form-group\">\n                <label for=\"sportType\">Sport Type</label>\n                <input type=\"text\" class=\"form-control\" id=\"sportType\" placeholder=\"Enter Sport Type\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"venue\">Venue</label>\n                <input type=\"text\" class=\"form-control\" id=\"venue\" placeholder=\"Enter Venue\">\n            </div>\n        ";
    }
}
// Event listener for dropdown change
var typeDropdown = document.getElementById('type');
if (typeDropdown) {
    typeDropdown.addEventListener('change', function (event) {
        var selectedType = event.target.value;
        showAdditionalFields(selectedType);
    });
}
