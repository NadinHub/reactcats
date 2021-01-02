import React, { Component } from "react";
// import CatComponent from "./components/Cat/Cat"; // CatComponent  - the name we import can be any name. If we export by defalut.
// import CatEdit from "./components/Cat/CatEdit";
import Header from "../Header";
import PageHeader from "../../components/app-header";
import CatsList from "../../containers/CatsList/CatsList.js";
// import ItemAddForm from '../item-add-form';
// import CardAd from '../CardAd/CardAd';

import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.countMales();
    //   eyeColors = [
    //   "blue",
    //   "red",
    //   "odd eyed",
    //   "green",
    //   "sable (burmese color)",
    //   "champagne (burmese color)",
    //   "platinum (burmese color)",
    //   "blue (burmese color)",
    // ]
  }

  state = {
    catsData: [
      {
        id: "id1",
        breed: "Scottish Stright",
        sex: "male",
        neutered: "false",
        name: "Arny",
        imageProfile: "./img/id1-1.jpg",
        parentcattery: "Lambent Eyes",
        birthDate: "19/09/2009",
        eyeColor: `b`,
        chip: "chip12345678",
      },
      {
        id: "id2",
        breed: "Scottish Fold",
        sex: "male",
        neutered: "false",
        name: "Boston",
        parentcattery: "Malecat",
        imageProfile: "./img/id2-1.jpg",
        birthDate: "19/09/2009",
        eyeColor: "blue",
        chip: "chip12345678",
      },
      {
        id: "id3",
        breed: "Scottish Fold",
        sex: "female",
        neutered: "false",
        name: "Honey",
        parentcattery: "Angels",
        imageProfile: "./img/id3-1.jpg",
        birthDate: "19/09/2009",
        eyeColor: "blue",
        chip: "chip12345678",
      },
      {
        id: "id4",
        breed: "Scottish Stright",
        sex: "female",
        name: "Alisa",
        imageProfile: "./img/id4-1.jpg",
        parentcattery: "Malecat",
        birthDate: "19/09/2009",
        eyeColor: "blue",
        chip: "chip12345678",
      },
      {
        id: "id5",
        breed: "Scottish Fold",
        sex: "female",
        neutered: "false",
        name: "Boston-female",
        parentcattery: "Malecat",
        imageProfile: "./img/id2-1.jpg",
        birthDate: "03/09/2014",
        eyeColor: "blue",
        chip: "chip12345678",
      },
      {
        id: 6,
        breed: "Scottish Fold",
        sex: "female",
        neutered: "false",
        name: "Honey2",
        parentcattery: "Angels",
        imageProfile: "./img/id3-1.jpg",
        birthDate: "19/09/2012",
        eyeColor: "blue",
        chip: "chip12345678",
      },
    ],
    appheader: { pageheader: "My cats", malesNum: 1, femalesNum: 1 },
  };

  //We can't change state (appheader), we need to create a new array;
  countMales = () => {
    console.log("CountMales invoked");
    let malesNum2 = 0;
    this.state.catsData.forEach((obj) => {
      if (obj.sex === "male") malesNum2++;
    });
    console.log("MalesNumber2 = " + malesNum2);
    this.setState(({ catsData, appheader }) => {
      let newAppHeaderState = {
        pageheader: "My cats",
        malesNum: malesNum2,
        femalesNum: 0,
      };
      // this.setState(() => {
      return {
        appheader: newAppHeaderState,
      };
    });
  };

  // countMales();

  // countFemales = () => {
  //   catsData.forEach((obj) => {
  //     femalesNum = 0;
  //     if (obj.sex === "female") femalesNum++;
  //   });
  //   // console.log(femalesNum);
  //   // return femalesNum;
  // };

  // countFemales();

  render() {
    return (
      <div className="container">
        <Header />
        <PageHeader
          pageheader={this.state.appheader.pageheader}
          malesNum={this.state.appheader.malesNum}
          femalesNum={this.state.appheader.femalesNum}
        />
        {/* <PageHeader pageheader='My cats'/> */}
        {/* Вывод данных из хранилища} */}
        <CatsList cats={this.state.catsData} />
      </div>
    );
  }
}

// export default App;
// we write onClick in camelCase format, not like in HTML onclick.
