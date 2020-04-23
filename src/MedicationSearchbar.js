import React from "react";
import "./MedicationSearchbar.css";

function MedicationSearchbar({ setFilterText, searchFilter }) {
  const handleChange = (e) => {
    const updatedSearchText = {
      ...searchFilter,
      [e.target.name]: e.target.value,
    };

    setFilterText(updatedSearchText);
  };

  return (
    <div className="MedicationSearchbar">
      <input
        type="text"
        className="MedicationSearchbar-name"
        placeholder="Name (e.g. Ibuprofen)"
        name="name"
        onChange={handleChange}
        value={searchFilter.name}
      />

      <input
        type="text"
        className="MedicationSearchbar-strength"
        placeholder="Strength (e.g. 220 MG)"
        name="strength"
        onChange={handleChange}
        value={searchFilter.strength}
      />
    </div>
  );
}

export default MedicationSearchbar;
