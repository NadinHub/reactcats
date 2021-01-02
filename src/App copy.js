// import { null } from 'check-types';
import React, { Component } from "react";
import CatComponent from "./components/Cat/Cat"; // CatComponent  - the name we import can be any name. If we export by defalut.
import CatEdit from "./components/Cat/CatEdit";
import Header from "./Header/Header";
import "./App.css";
import "./Header/header.css";
import CardSmall from "./components/CardSmall/CardSmall";
// import ReactDOM from 'react-dom'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { fas } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, faCheckSquare, faCoffee)
// library.add(fas)

class App extends Component {
  // state discribe the state.  Состояние, в котором находится данный компонент. Какой ДАННЫЙ компонент?
  state = {
    cats: [
      {
        breed: "Scottish Stright",
        sex: "male",
        name: "Arny",
        parentcattery: "Lambent Eyes",
        imageProfile: "/img/6.jpg",
      },
      {
        breed: "Scottish Fold",
        sex: "male",
        name: "Boston",
        parentcattery: "Malecat",
        imageProfile: "/img/6.jpg",
      },
      {
        breed: "Scottish Fold",
        sex: "female",
        name: "Honey",
        parentcattery: "Angels",
        imageProfile: "/img/6.jpg",
      },
    ],
    title: "My cats",
    showCats: true,
    showEditCats: true,
  };

  // changeTitleHendler = (newTitle) => {
  //     // method setState which is inherited from 'react'. We discribe only state we want to chage. Мы указваем какое именно поле мы хотим изменить (в нашим случае - это поле title)
  //     this.setState({ title: newTitle })
  // }
  title1 = React.cloneElement("h1", {}, "Text Header 1");

  changeCatByIndex = (cat, index) => {
    console.log(cat, index);
    const newCats = [...this.state.cats];
    const oldCat = newCats[index];
    newCats[index] = { ...oldCat, ...cat };
    this.setState({
      cats: newCats,
    });
    //  const newName = this.state.cats[index].name
    // this.setState({ this.state.cats[0].name: newName })
  };

  toggleCatsHandler = () => {
    this.setState({ showCats: !this.state.showCats });
  };

  editCatsHandler = () => {
    this.setState({
      showEditCats: !this.state.showEditCats,
    });
  };
  // handleInput = (event) => {
  //     this.setState(
  //         { title: event.target.value }
  //     )
  // }
  // Method render we write down, after all other methods.
  render() {
    const cardStyle = {
      border: "1px solid gray", // Запятая, а не точка с запятой, как в CSS
      textAlign: "center",
    };
    // const cats = this.state.cats;
    const title = this.state.title;

    return (
      <div className="container">
        <div className="row">
        <Header />
        </div>
        <div className="row">
        <h1 className="cat-card__h1">{title}</h1>
          <div className="col-4">
            <CardSmall
              sex={this.state.cats[0].sex}
              name={this.state.cats[0].name}
              parentcattery={this.state.cats[0].parentcattery}
              imageProfile={this.state.cats[0].imageProfile}
            />
          </div>
        </div>
        {/* <input type="text" onChange={this.handleInput} /> */}

        {/* <button onClick={this.toggleCatsHandler}>Toggle cats</button> */}

        {/* В цикле надо вывести всех кошек */}
        {/* {this.state.showCats
          ? this.state.cats.map((cat, index) => {
              return (
                <CatComponent
                  key={index}
                  breed={cat.breed}
                  sex={cat.sex}
                  name={cat.name}
                  parentcattery={cat.parentcattery}
                  // onChangeTitle={() => this.changeTitleHendler(cat.name)}
                  // onChangeName={event => this.onChangeName.bind(event.target.value, index)}
                />
              );
            })
          : null} */}

        {/* { this.state.showEditCats
                    ? this.state.cats = {
                        return ( */}
        <CatEdit
          // key={index}
          // breed={cat.breed}
          // sex={cat.sex}
          name={this.state.cats[0].name}
          parentcattery={this.state.cats[0].parentcattery}
          // onChangeTitle={() => this.changeTitleHendler(cat.name)}
          onChangeName={(event) => this.onChangeName(event.target.value)}
          onSaveCat={this.changeCatByIndex}
          index={0}
          // onCloseEdit={event => this.onChangeName(event.target.value)}
        />

        {/* )
                    } : null} */}

        {/* <CatComponent
                    breed={cats[0].breed}
                    sex={this.state.cats[0].sex}
                    name={this.state.cats[0].name}
                    // fullname={this.state.cats[0].fullname}
                    parentcattery={this.state.cats[0].parentcattery}
                    onChangeTitle={this.changeTitleHendler} />
                <CatComponent 
                    breed={cats[1].breed}
                    sex={this.state.cats[1].sex}
                    name={this.state.cats[1].name}
                    // fullname={this.state.cats[1].fullname}
                    parentcattery={this.state.cats[1].parentcattery}
                    onChangeTitle={this.changeTitleHendler.bind(this, cats[1].name)} />
                <CatComponent
                    breed={cats[2].breed}
                    sex={this.state.cats[2].sex}
                    name={this.state.cats[2].name}
                    // fullname={this.state.cats[2].fullname}
                    parentcattery={this.state.cats[2].parentcattery}
                    onChangeTitle={this.changeTitleHendler} /> */}
      </div>
    );
  }
}
export default App;
// we write onClick in camelCase format, not like in HTML onclick.
