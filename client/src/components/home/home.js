import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="row">
      <div className="col">
        <div className="p-3">
          <h1>Main - Home</h1>
          <Link to="/mypage">My page</Link>
          {/* <h2>
            Total: {malesNum} males and {femalesNum} females
          </h2> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
