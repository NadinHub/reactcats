import React, { Component } from "react";
import Axios from "axios";

export default class ItemAddForm extends Component {
  state = {
    breeds: ["SFS", "SSS", "BRI", "Main Coon", "ABY"],
    parentcattery: "",
    catname: "",
    sex: "",
  };

  onParentCatteryChange = (e) => {
    console.log(e.target.value);
    this.setState({ parentcattery: e.target.value.toUpperCase() });
  };

  onCatNameChange = (e) => {
    console.log(e.target.value);
    this.setState({ catname: e.target.value });
  };

  setGender = (e) => {
    console.log(`Sex set to ${e.target.value}`);
    this.setState({ sex: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.catname);
    this.props.onItemAdded(
      this.state.parentcattery,
      this.state.catname,
      this.state.sex
    );
    Axios.post("http://localhost:3001/api/insert", {
      catname: this.state.catname,
      parentcattery: this.state.parentcattery,
      sex: this.state.sex,
    })
      .then((res) => {
        alert("successful insert", res);
      })
      // .then(() => {
      //   this.setState({ parentcattery: "" }); //???? Почему не ставится?
      // });
    // clean (update value={this.state.parentcattery})
    //input in the controlled input component
    this.setState({ parentcattery: "" });
    this.setState({ catname: "" });
    this.setState({ sex: "" });
  };

  // submitAddCat {
  //   (e) => {
  //     e.preventDefault()
  //     this.props.onItemAdded("Hello World")}
  // }

  render() {
    return (
      <div className="col mt-3">
        <div className="card">
          <h5 className="card-header">Add pet fast</h5>
          <div className="card-body">
            <div className="card-tex">
              <form className="item-add-form" onSubmit={this.onSubmit}>
                {/* <label htmlFor="parentcattery" className="">Parent cattery name:</label> */}
                {/* {this.state.parentcattery} */}

                {/* <label htmlFor="exampleDataList" className="form-label">
                  Choose the breed
                </label> */}
                {/* <input
                  type="text"
                  className="form-control"
                  list="breeds"
                  id="exampleDataList"
                  placeholder="Breed"
                  onChange={this._onChange}
                />
                <datalist id="breeds">
                  {this.state.breeds.map((item, index) => (
                    <option key={index} value={item} />
                  ))} */}
                {/* <option value="Scottish Fold" />
                  <option value="Scrottish Stright" />
                  <option value="Brittish shorthair" />
                  <option value="Brittish longhair" />
                  <option value="Main Coon" /> */}
                {/* </datalist> */}
                <input
                  type="text"
                  name="parentcattery"
                  className="form-control"
                  placeholder="Parent cattery name"
                  onChange={this.onParentCatteryChange}
                  value={this.state.parentcattery}
                  // controlled component |
                />
                <input
                  type="text"
                  name="catname"
                  className="form-control"
                  placeholder="Cat name"
                  onChange={this.onCatNameChange}
                  value={this.state.catname}
                />
                <div
                  className="form-check form-check-inline"
                  onChange={this.setGender}
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sex"
                    id="inlineRadio1"
                    value="male"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Male
                  </label>
                </div>
                <div className="m-3 form-check form-check-inline" onChange={this.setGender}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sex"
                    id="inlineRadio2"
                    value="female"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Female
                  </label>
                </div>
                <div className="mb-3">
                  <label htmlFor="birthdate" className="">
                    Birth date
                  </label>
                  <input
                    type="date"
                    name="birthdate"
                    className="form-control"
                    placeholder="Birth date"
                  />
                </div>
                {/* <div className="mb-3">
                  <label htmlFor="formFile" className="form-label">
                    Download pet photo
                  </label>
                  <input className="form-control" type="file" id="formFile" />
                </div> */}
                <button
                  type="submit"
                  className="btn w-100 btn-primary"
                  // onClick={submitAddCat}
                >
                  Add a new pet fast
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* <button
          className="btn w-100 btn-primary"
          onClick={() => this.props.onItemAdded("Hello World")}
        >
          Add a new pet fast
        </button> */}
      </div>
      // </div>
    );
  }
}
