import { useEffect, useState } from "react";

function App() {
  // ------------------------------
  // State
  // ------------------------------

  const [readings, setReadings] = useState([]);

  // ------------------------------
  // Data loading
  // ------------------------------

  useEffect(() => {
    fetch("/readings.json")
      .then((response) => response.json())
      .then((data) => {
        setReadings(data);
      })
      .catch((error) => {
        console.error("Failed to load readings:", error);
      });
  }, []);

  // ------------------------------
  // Render
  // ------------------------------

  return (
    <main>
      <h1>Book Tracker</h1>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Title</th>
            <th>Authors</th>
            <th>Status</th>
            <th>Rating</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {readings.map((reading) => {
            const title = reading.book.title;
            const authors = reading.book.authors.join(", ");
            const status =
              reading.status.charAt(0).toUpperCase() +
              reading.status.slice(1);
            const rating =
              reading.rating !== null ? `${reading.rating} / 5` : "—";
            const notes = reading.notes || "";

            return (
              <tr key={reading.id}>
                <td>{title}</td>
                <td>{authors}</td>
                <td>{status}</td>
                <td>{rating}</td>
                <td>{notes}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}

export default App;
