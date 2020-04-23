import React, { useState } from "react";
import "./App.css";
import MedicationList from "./MedicationList";
import MedicationSearchbar from "./MedicationSearchbar";
import { medications } from "./data/data";

function App() {
  const [searchFilter, setSearchFilter] = useState({
    name: "",
    strength: "",
  });

  const filteredMedications = medications.filter((medication) => {
    const hasNameMatch = medication.name
      .toLowerCase()
      .includes(searchFilter.name.toLowerCase());

    const hasStrengthMatch =
      medication.strength &&
      medication.strength
        .toLowerCase()
        .includes(searchFilter.strength.toLowerCase());

    const hasFacilityMatch = medication.facility === "SF";

    return hasNameMatch && hasStrengthMatch && hasFacilityMatch;
  });

  return (
    <div className="App">
      <h1>Search for a medication</h1>
      <form>
        <MedicationSearchbar setFilterText={setSearchFilter} />
      </form>

      <MedicationList
        setSearchFilter={setSearchFilter}
        medications={filteredMedications}
      />
    </div>
  );
}

export default App;
