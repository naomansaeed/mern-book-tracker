

// --------------------------------------
// Function responsible ONLY for rendering
// --------------------------------------
// This function takes an array of readings
// and renders them into the table body.
// It does not fetch data, validate input,
// or apply styling.

function renderReadings (readings) {
    // Select the <tbody> element where rows will be inserted.
    // querySelector() uses CSS selector syntax.
    // '#book-table-body' means: element with this ID.

    //const tableBody = document.getElementById("book-table-body");
    const tableBody = document.querySelector("#book-table-body");

    // Clear existing rows before rendering.
    // This allows the function to be reused safely.
    tableBody.innerHTML = "";

    // Loop through each reading and create a table row
    readings.forEach((reading) => {
        // Create a new table row element
        const row = document.createElement("tr");
        // ---- Title cell ----
        const titleCell = document.createElement("td");
        titleCell.textContent = reading.book.title;
        // ---- Author cell ----
        const authorCell = document.createElement("td");
        // Join multiple authors into a readable string
        authorCell.textContent = reading.book.authors.join(", ");
        // ---- Status cell ----
        const statusCell = document.createElement("td");
        statusCell.textContent = reading.status;
        // ---- Rating cell ----
        const ratingCell = document.createElement("td");
        // Use a dash if rating is null
        ratingCell.textContent = reading.rating ?? "—";
        // ---- Notes cell ----
        const notesCell = document.createElement("td");
        notesCell.textContent = reading.notes;
        // Append all cells to the row
        row.append(
            titleCell,
            authorCell,
            statusCell,
            ratingCell,
            notesCell
        );
        // Append the completed row to the table body
        tableBody.appendChild(row);
    });
}

// --------------------------------------
// Initial render call
// --------------------------------------
// This renders the table once the script loads.
// Later, the same function can be reused when
// data changes or is fetched from elsewhere.

renderReadings(readings);