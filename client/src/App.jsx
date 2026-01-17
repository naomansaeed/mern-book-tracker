//useState → allows React to remember values between renders
//useEffect → allows you to run side effects (like fetching data)
import { useEffect, useState } from "react";
//BookTable, StatusFilter → child components responsible only for UI
import BookTable from "./components/BookTable";
import StatusFilter from "./components/StatusFilter";
 /* This function:
- runs to produce UI
- re-runs whenever state changes
- must be pure (no DOM mutation, no blocking work) */
function App() {
  // ------------------------------
  // State
  // ------------------------------
/*
readings
Holds all data fetched from JSON
Equivalent to the old allReadings

statusFilter
Holds the currently selected filter
Replaces the old change event + variable

Important:
State is the cause; UI is the effect.
*/
  const [readings, setReadings] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");

  // ------------------------------
  // Data loading
  // ------------------------------
/*
Runs once when App first mounts
Fetches static JSON
Updates state via setReadings
Triggers a re-render automatically
*/
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
  // Derived data (filtering)
  // ------------------------------
/*
This is derived state, not stored state.

does not store filtered data
derives it from:
 original data (readings)
 UI state (statusFilter)
  */
  const filteredReadings =
    statusFilter === "all"
      ? readings
      : readings.filter(
          (reading) => reading.status === statusFilter
        );

  // ------------------------------
  // Render
  // ------------------------------
/*
Renders heading
Renders filter, controlled by state
Renders table, using filtered data

App does not care how the table renders — only what data it gets.
  */
  return (
    <main>
      <h1>Book Tracker</h1>

      <StatusFilter
        value={statusFilter}
        onChange={setStatusFilter}
      />

     <BookTable readings={filteredReadings} />
    </main>
  );
}

export default App;
