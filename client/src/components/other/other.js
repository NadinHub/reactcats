import React from "react";
import { Link } from "react-router-dom";

const Other = () => {
  return (
    <div className="row">
      <div className="col">
        <div className="app-header d-flex">
          <h1>
              404 error
            <Link to="/">Go to main page</Link>
          </h1>
          {/* <h2>
            Total: {malesNum} males and {femalesNum} females
          </h2> */}
        </div>
      </div>
    </div>
  );
};

export default Other;
