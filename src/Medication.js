import React, { useState } from "react";
import "./Medication.css";

function Medication({
  name,
  strength,
  setSearchFilter,
  isBrand,
  // isRefrigerated,
  productPackages,
}) {
  const [seePackageInfo, setSeePackageInfo] = useState(true);

  const handleClick = () => {
    setSearchFilter({ name, strength });
  };

  const handleExpansion = () => {
    setSeePackageInfo(!seePackageInfo);
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
      <div onClick={handleExpansion}>
        {seePackageInfo ? "View Product Packages" : "Collapse"}
      </div>
      {!seePackageInfo && (
        <div>
          {productPackages && productPackages.map((p) => <p>{p.id}</p>)}
        </div>
      )}
    </div>
  );
}

export default Medication;
