import React, { Component } from "react";
import "./cat-page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMars } from "@fortawesome/free-solid-svg-icons";
import { faVenus } from "@fortawesome/free-solid-svg-icons";

export default class CatPage extends Component {
  state = {
    id: "id1",
    breed: "Scottish Stright",
    sex: "male",
    neutered: "--",
    name: "Arny",
    imageProfile: "../img/id1-1.jpg",
    parentcattery: "Lambent Eyes",
    birthDate: "19/09/2009",
    eyeColor: `b`,
    chip: "chip12345678",
  };

  render() {
    const {
      id,
      breed,
      sex,
      neutered,
      name,
      imageProfile,
      parentcattery,
      birthDate,
      eyeColor,
      chip,
    } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            {/* <div className="cat-page-wrapper mt-3"> */}
            <div className="border mb-3 cat-page-wrapper mt-3">
              <div className="row g-0">
                <div className="col-md-6 cat-page-card">
                  <div className="cat-page__icon">
                    {sex === "male" ? (
                      <FontAwesomeIcon
                        icon={faMars}
                        className="cat-page-icon-mars"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faVenus}
                        className="cat-page-icon-venus"
                      />
                    )}
                  </div>
                  <img className="cat-page__img" src={imageProfile} alt="cat" />
                </div>
                <div className="col-md-6">
                  <div className="card-body cat-page-main-text">
                    <div className="d-flex justify-content-between">
                      <p className="card-text">
                        <small className="text-muted">{id}</small>
                      </p>
                      <h6>
                        <span className="badge bg-warning text-dark p-2 shadow-sm">
                          {breed}
                        </span>
                      </h6>
                    </div>
                    <h4 className="card-title mb-3">
                      {parentcattery} - {name}{" "}
                    </h4>

                    <p className="card-text">
                      <span className="text-secondary">Birhday: </span>
                      {birthDate}
                    </p>
                    <p className="card-text">
                      <span className="text-secondary">Neutered: </span>
                      {neutered}
                    </p>
                    <p className="card-text">
                      <span className="text-secondary">Eye color: </span>
                      {eyeColor}
                    </p>
                    <p className="card-text">
                      <span className="text-secondary">Chip: </span>
                      {chip}
                    </p>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                  className="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Home
                </a>
                <a
                  className="nav-link"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Profile
                </a>
                <a
                  className="nav-link"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  href="#nav-contact"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Contact
                </a>
              </div>
            </nav>
            <div className="tab-content p-3" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                ... Text text
              </div>
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                ...Text text
              </div>
              <div
                className="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                ...
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
