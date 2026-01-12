// ------------------------------
// Global state
// ------------------------------

// This will store ALL readings loaded from JSON
let allReadings = [];

// ------------------------------
// DOM references
// ------------------------------

const tableBody = document.querySelector("tbody");
const statusFilter = document.getElementById("statusFilter");

// ------------------------------
// Fetch data from JSON
// ------------------------------

fetch("readings.json")
    .then(response => response.json())
    .then(data => {
        // Store original data
        allReadings = data;

        // Initial render (no filter applied)
        renderReadings(allReadings);
    })
    .catch(error => {
        console.error("Failed to load readings:", error);
    });

// ------------------------------
// Event listeners
// ------------------------------

// Trigger filtering whenever dropdown changes
statusFilter.addEventListener("change", applyFilter);

// ------------------------------
// Filter logic
// ------------------------------

function applyFilter() {
    const selectedStatus = statusFilter.value;

    // If "all" is selected, show everything
    if (selectedStatus === "all") {
        renderReadings(allReadings);
        return;
    }

    // Otherwise, filter by status
    const filteredReadings = allReadings.filter(reading => {
        return reading.status === selectedStatus;
    });

    renderReadings(filteredReadings);
}

// ------------------------------
// Rendering logic
// ------------------------------

function renderReadings(readings) {
    // Clear existing rows
    tableBody.innerHTML = "";

    // Create rows from provided data
    readings.forEach(reading => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${reading.title}</td>
            <td>${reading.author}</td>
            <td>${reading.status}</td>
            <td>${reading.year}</td>
        `;

        tableBody.appendChild(row);
    });
}
