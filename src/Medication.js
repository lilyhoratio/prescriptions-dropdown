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
        <span id="snowflake">{Math.random() >= 0.5 && "❄️"}</span>
        {/* <span className="">{isRefrigerated ? "❄️" : ""}</span> */}
      </div>

      {/* {!seePackageInfo && ( */}
      <div
        className={`Medication-package-info ${
          !seePackageInfo ? "open" : "closed"
        }`}
      >
        {productPackages &&
          productPackages
            .sort((a, b) => a.size - b.size)
            .map((p) => (
              <p>
                SKU #{p.sku}: {p.size} day supply
              </p>
            ))}
      </div>
      {/* )} */}
      <div className={"Medication-button"} onClick={handleExpansion}>
        {seePackageInfo ? "View Packages" : "Collapse"}
      </div>
    </div>
  );
}

export default Medication;
