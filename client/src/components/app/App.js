import React, { Component } from "react";
// import CatComponent from "./components/Cat/Cat"; // CatComponent  - the name we import can be any name. If we export by defalut.
// import CatEdit from "./components/Cat/CatEdit";
import Header from "../Header";
import PageHeader from "../app-header";
import CatsList from "../../containers/CatsList/CatsList.js";
import ItemFilter from "../item-filter";
import SearchPanel from "../search-panel/search-panel";
import CatPage from "../cat-page";

// import ItemAddForm from '../item-add-form';
// import CardAd from '../CardAd/CardAd';

import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Other from "../other/other";
import Main from "../home";

export default class App extends Component {
  // constructor() {
  //   super();
  //   // this.countMales();
  //   //   eyeColors = [
  //   //   "blue",
  //   //   "red",
  //   //   "odd eyed",
  //   //   "green",
  //   //   "sable (burmese color)",
  //   //   "champagne (burmese color)",
  //   //   "platinum (burmese color)",
  //   //   "blue (burmese color)",
  //   // ]
  // }

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
    appheader: { pageheader: "My cats", malesNum: 0, femalesNum: 0 },
    term: "",
    filter: "all mine", // all mine, male, female
  };

  componentDidMount() {
    this.countSex();
  }

  //We can't change state (appheader), we need to create a new array;
  countSex = () => {
    let malesNum2 = 0;
    let femalesNum2 = 0;

    this.state.catsData.forEach((obj) => {
      if (obj.sex === "male") malesNum2++;
    });
    console.log("MalesNumber2 = " + malesNum2);
    this.state.catsData.forEach((obj) => {
      if (obj.sex === "female") femalesNum2++;
    });
    console.log("FemalesNumber2 = " + femalesNum2);

    this.setState(({ catsData, appheader }) => {
      let newAppHeaderState = {
        ...appheader,
        malesNum: malesNum2,
        femalesNum: femalesNum2,
      };
      return {
        appheader: newAppHeaderState,
      };
    });
  };

  addItem = (newParentCattery, newCatName, newSex) => {
    let maxId = 1000;

    console.log("Item added", newParentCattery);
    // generate id ? - usually on server side
    const newItem = {
      id: ++maxId,
      breed: "Scottish Fold",
      sex: newSex,
      name: newCatName,
      parentcattery: newParentCattery,
      imageProfile: "./img/id2-1.jpg",
      birthDate: "03/09/2014",
    };
    // add element in array ?

    this.setState(({ catsData }) => {
      const newArr = [...catsData, newItem];
      return { catsData: newArr };
    });
  };

  // Search component
  searchName(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  onSearchChange = (term) => {
    this.setState({ term });
  };

  // Filter ----------onfilterChange executes in item-filter component
  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  filter(items, filter) {
    switch (filter) {
      case "all mine":
        return items;
      case "male":
        return items.filter((item) => item.sex === "male");
      case "female":
        return items.filter((item) => item.sex === "female");
      default:
        return items;
    }
  }

  render() {
    const { catsData, appheader, term, filter } = this.state;
    const visibleItems = this.filter(this.searchName(catsData, term), filter);
    return (
      <Router>
        <div className="container">
          <Header />
          {/* Вывод данных из хранилища} */}
          <Switch>
            <Route exact path="/mypage">
              <PageHeader
                pageheader={appheader.pageheader}
                malesNum={appheader.malesNum}
                femalesNum={appheader.femalesNum}
              />
              <div className="row">
                <SearchPanel onSearchChange={this.onSearchChange} />
                {/* filter here - is the state (all mine, male, female) */}
                <ItemFilter
                  filter={filter}
                  onFilterChange={this.onFilterChange}
                />
              </div>
              <CatsList
                cats={visibleItems}
                addItem={this.addItem}
                onSearchChange={this.onSearchChange}
              />
            </Route>
            <Route exact path="/" component={Main} />
            {/* <Route exact path="/mypage/:id" component={CatPage} /> */}
            <Route
              exact
              path="/mypage/:id"
              render={({ match, location, history }) => {
                const { id } = match.params;
                return <CatPage itemId={id} />;
              }}
            />
            <Route component={Other} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// export default App;
// we write onClick in camelCase format, not like in HTML onclick.
