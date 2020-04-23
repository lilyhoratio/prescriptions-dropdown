import React from "react";
import Medication from "./Medication";
import "./MedicationList.css";

function MedicationList({ medications, setSearchFilter, setFilterText }) {
  return (
    <div className="MedicationList">
      {medications.map((med) => (
        <Medication
          key={med.id}
          id={med.id}
          name={med.name}
          strength={med.strength}
          isBrand={med.is_brand}
          isRefrigerated={med.refrigerated}
          productPackages={med.product_packages}
          setSearchFilter={setSearchFilter}
          setFilterText={setFilterText}
        />
      ))}
    </div>
  );
}

export default MedicationList;
