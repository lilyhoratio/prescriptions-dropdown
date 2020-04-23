import React, { useState } from "react";
import "./App.css";
import MedicationList from "./MedicationList";
import MedicationSearchbar from "./MedicationSearchbar";
import { medications } from "./data/data";

const emptySearch = {
  name: "",
  strength: "",
};

function App() {
  const [searchFilter, setSearchFilter] = useState(emptySearch);

  // More efficient to use trie ?
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

  const reset = () => {
    setSearchFilter(emptySearch);

    // also need to reset any meds with expanded product package info back to closed
  };

  return (
    <div className="App">
      <MedicationSearchbar
        searchFilter={searchFilter}
        setFilterText={setSearchFilter}
      />
      <button className="App-reset-button" onClick={reset}>
        Reset
      </button>

      <MedicationList
        setSearchFilter={setSearchFilter}
        medications={filteredMedications}
        maxHeight={"510px"}
      />
    </div>
  );
}

export default App;
