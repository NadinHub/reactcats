import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import CardSmall from "../../components/CardSmall";
import CardAd from "../../components/CardAd";
// import PageHeader from "../../components/app-header";
import ItemFilter from "../../components/item-filter";
import ItemAddForm from "../../components/item-add-form";

// get data from store
// list data

function CatsList({ cats }) {
  // const cats = useSelector(selectCats);
  // const dispatch = useDispatch();
  const elements = cats.map((item) => {
    return (
      <CardSmall
        id={item.id}
        key={item.id}
        sex={item.sex}
        name={item.name}
        parentcattery={item.parentcattery}
        imageProfile={item.imageProfile}
        birthDate={item.birthDate}
      />
    );
  });

  // let malesNumber;
  // const males = cats.find((sex) => {});

  return (
    <div className="container">
      <div className="row">
        <ItemFilter />
      </div>
      <div className="row">
        {elements}
        <ItemAddForm onItemAdded={this.onItemAdded}/>
        <CardAd />
      </div>
    </div>
  );
}

export default CatsList;
