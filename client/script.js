// ------------------------------
// Global state
// ------------------------------

// This will store ALL readings loaded from JSON
let allReadings = [];

// ------------------------------
// DOM references
// ------------------------------

const tableBody = document.getElementById("book-table-body") //document.querySelector("tbody");
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

        // store the fetched values.
        const title = reading.book.title;
        const authors = reading.book.authors.join(", ");
        const status = reading.status.charAt(0).toUpperCase() + reading.status.slice(1); // capitalize first letter
        const rating = reading.rating !== null ? `${reading.rating} / 5` : "—";
        const notes = reading.notes || "";

        row.innerHTML = `
            <td>${title}</td>
            <td>${authors}</td>
            <td>${status}</td>
            <td>${rating}</td>
            <td>${notes}</td>
        `;

        tableBody.appendChild(row);
    });
}
