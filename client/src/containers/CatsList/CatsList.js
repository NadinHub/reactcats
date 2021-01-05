import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import CardSmall from "../../components/CardSmall";
import CardAd from "../../components/CardAd";
// import PageHeader from "../../components/app-header";
import ItemAddForm from "../../components/item-add-form";

// get data from store
// list data

function CatsList({ cats, addItem, onSearchChange }) {
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

 

  return (
    <div className="container">

      <div className="row">
        {elements}
        <ItemAddForm onItemAdded={addItem} />
        <CardAd />
      </div>
    </div>
  );
}

export default CatsList;
