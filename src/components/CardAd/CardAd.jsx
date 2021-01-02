import React from "react";
import "./cardAd.css";

const CardAd = () => {
  const onAddPet = () => {
    console.log(`Add a new pet`);
  };

  return (
    <div className="col mt-3">
      <div className="card btn">
        <div className="card-body cardAd-icon" onClick={onAddPet}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="currentColor"
            className="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
          <h2 className="card-title mt-3">Add a new pet</h2>
        </div>
      </div>
    </div>
  );
};

export default CardAd;
