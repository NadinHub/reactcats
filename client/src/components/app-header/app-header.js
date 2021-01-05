import React from "react";
import {Link} from 'react-router-dom'
import "./app-header.css";
// import App from './'

const PageHeader = ({ pageheader, malesNum, femalesNum }) => {
  return (
    <div className="row">
      <div className="col">
        <div className="app-header d-flex">
        <h1><Link to="/mypage">{pageheader}</Link></h1> 
          <h2>
            Total: {malesNum} males and {femalesNum} females
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
