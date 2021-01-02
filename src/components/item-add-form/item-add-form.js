import React, { Component } from "react";

export default class ItemAddForm extends Component {
  render() {
    return (
      // <div className="row">
        <div className="col mt-3">
          <div className="card">
            <h5 className="card-header">Add pet fast</h5>
            <div className="card-body">
              {/* <h5 className="card-title">Add pet fast</h5> */}
              <div className="card-tex">
                <form className="item-add-form" onSubmit={this.onSubmit}>
                  {/* <label htmlFor="parentcattery" className="">Parent cattery name:</label> */}
                  <input
                    type="text"
                    name="parentcattery"
                    className="form-control"
                    placeholder="Parent cattery name"
                  />
                  <input
                    type="text"
                    name="catname"
                    className="form-control"
                    placeholder="Cat name"
                  />
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Male
                    </label>
                  </div>
                  <div className="m-3 form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
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
                  <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">
                      Download pet photo
                    </label>
                    <input className="form-control" type="file" id="formFile" />
                  </div>
                  <button type="submit" className="btn w-100 btn-primary">
                    Add a new pet fast
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      // </div>
    );
  }
}
