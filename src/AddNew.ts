function showAdditionalFields(selectedType: string): void {
    const additionalFieldsDiv = document.getElementById('additionalFields');
    if (!additionalFieldsDiv) return;

    additionalFieldsDiv.innerHTML = ''; // Clear previous fields

    if (selectedType === 'meeting') {
        // Display additional fields for meeting
        additionalFieldsDiv.innerHTML = `
            <div class="form-group">
                <label for="location">Location</label>
                <input type="text" class="form-control" id="location" placeholder="Enter Location">
            </div>
            <div class="form-group">
                <label for="meetingTime">Meeting Time</label>
                <input type="text" class="form-control" id="meetingTime" placeholder="Enter Meeting Time">
            </div>
        `;
    } else if (selectedType === 'task') {
        // Display additional fields for task
        additionalFieldsDiv.innerHTML = `
            <div class="form-group">
                <label for="priority">Priority</label>
                <input type="text" class="form-control" id="priority" placeholder="Enter Priority">
            </div>
        `;
    } else if (selectedType === 'sport') {
        // Display additional fields for sport
        additionalFieldsDiv.innerHTML = `
            <div class="form-group">
                <label for="sportType">Sport Type</label>
                <input type="text" class="form-control" id="sportType" placeholder="Enter Sport Type">
            </div>
            <div class="form-group">
                <label for="venue">Venue</label>
                <input type="text" class="form-control" id="venue" placeholder="Enter Venue">
            </div>
        `;
    }
}

// Event listener for dropdown change
const typeDropdown = document.getElementById('type') as HTMLSelectElement | null;
if (typeDropdown) {
    typeDropdown.addEventListener('change', function(event) {
        const selectedType = (event.target as HTMLSelectElement).value;
        showAdditionalFields(selectedType);
    });
}
