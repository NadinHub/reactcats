import React, {Component} from "react";
import "./CardSmall.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMars } from "@fortawesome/free-solid-svg-icons";
import { faVenus } from "@fortawesome/free-solid-svg-icons";
// import { fas } from '@fortawesome/fontawesome-svg-core'
// import icons from '/css/all.css';
// import  ./Cat/Cat.css
//It's a template where we put any parameters (=props)

// We don't have name? So, we import only using the file name Cat.js???
export default class CardSmall extends Component {

  render() {
    const {  
      id,
      sex,
      name,
      parentcattery,
      imageProfile,
      birthDate,} = this.props;

// const CardSmall2 = ({
//   id,
//   sex,
//   name,
//   parentcattery,
//   imageProfile,
//   birthDate,
// }) => {
  // const style = {
  //   border: sex==='male' ? '1px solid blue' : '1px solid pink'
  // };
  return (
    <div className="col mt-4">
      <div className="card shadow">
        <a href="./cat-page">
          <img
            src={imageProfile}
            className="card-img-top cardsmall__img"
            alt="cat"
          />
        </a>
        <div className="icon-mars-wrap">
          {sex === "male" ? (
            <FontAwesomeIcon icon={faMars} className="icon-mars" />
          ) : (
            <FontAwesomeIcon icon={faVenus} className="icon-venus" />
          )}
        </div>
        <span className="card-id">{id}</span>
        <div className="card-body">
          <h5 className="card-title">
            {parentcattery} - {name}
          </h5>
          <p className="card-text">
            <span className="text-secondary">Birth date: </span>
            {birthDate}
          </p>
        </div>
      </div>
    </div>
  );
}}

// export default CardSmall;
