import { useEffect, useState } from "react";
import BookTable from "./components/BookTable";

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

     <BookTable readings={readings} />
    </main>
  );
}

export default App;
