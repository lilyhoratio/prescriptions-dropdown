import React from "react";
import "./Medication.css";

function Medication({
  name,
  strength,
  setSearchFilter,
  isBrand,
  // isRefrigerated,
}) {
  const handleClick = () => {
    setSearchFilter({ name, strength });
  };

  return (
    <div className="Medication" onClick={handleClick}>
      <div className="Medication-main-info">
        <p className="Medication-name">{name}</p>
        <p className="Medication-strength">{strength}</p>
      </div>
      <div className="Medication-extra-info">
        <span className={`Medication-tag ${isBrand ? "brand" : "generic"}`}>
          {isBrand ? "Brand" : "Generic"}
        </span>
        <span>❄️</span>
        {/* <span className="">{isRefrigerated ? "❄️" : ""}</span> */}
      </div>
    </div>
  );
}

export default Medication;
