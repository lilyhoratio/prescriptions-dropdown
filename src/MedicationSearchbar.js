import React, { useState } from "react";
import "./MedicationSearchbar.css";

function MedicationSearchbar({ setFilterText }) {
  const [searchtext, setSearchtext] = useState({ name: "", strength: "" });

  const handleChange = (e) => {
    const updatedSearchText = {
      ...searchtext,
      [e.target.name]: e.target.value,
    };

    setSearchtext(updatedSearchText);
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
        value={searchtext.name}
      />

      <input
        type="text"
        className="MedicationSearchbar-strength"
        placeholder="Strength (e.g. 220 MG)"
        name="strength"
        onChange={handleChange}
        value={searchtext.strength}
      />
    </div>
  );
}

export default MedicationSearchbar;
