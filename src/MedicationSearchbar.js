import React, { useState } from "react";

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
    <>
      <input
        type="text"
        placeholder="Name (e.g. Ibuprofen)"
        name="name"
        onChange={handleChange}
        value={searchtext.name}
      />

      <input
        type="text"
        placeholder="Strength (e.g. 220 MG)"
        name="strength"
        onChange={handleChange}
        value={searchtext.strength}
      />
    </>
  );
}

export default MedicationSearchbar;
