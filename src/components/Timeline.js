import React from "react";
import "./Timeline.sass";

const Timeline = () => {
  const sections = [
    "Demand",
    "Validation RG",
    "Validation UTEE",
    "Prepared",
    "Delivered",
  ];

  const isEmpty = (content) => {
    return content.trim() === ""; // Vérifie si le contenu est vide ou ne contient que des espaces
  };

  return (
    <div className="timeline">
      {sections.map((section, index) => (
        <div className="container" key={index}>
          <h4>{section}</h4>
          <div
            className={`timeline-section ${
              index === 0
                ? "timeline-start"
                : index === sections.length - 1
                ? "timeline-end"
                : "timeline-middle"
            } ${section === "Planned" ? "highlighted" : ""} ${
              isEmpty(section) ? "empty-section" : ""
            }`}
          >
            <p>test</p>
            <p>06.06.2002</p>
            {section === "Planned" && <p>PLANNED: 1 TASK</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
