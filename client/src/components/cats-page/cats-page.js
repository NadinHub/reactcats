import React from "react";
import CatsList from "../../containers/CatsList/CatsList";

const CatsPage = () => {
  return (
    <div className="row">
      <div className="col">
        <CatsList onItemSelected={() => {}} />
      </div>
    </div>
  );
};

export default CatsPage;
