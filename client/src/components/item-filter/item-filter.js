import React, { Component } from "react";

export default class ItemFilter extends Component {
  buttons = [
    { name: "all mine", label: "All mine:" },
    { name: "male", label: "Male" },
    { name: "female", label: "Female" },
    // { name: "kitten", label: "Kitten" },
    // { name: "all not mine", label: "All not mine:" },
    // { name: "alumni", label: "Alumni" },
    // { name: "favorite", label: "Favorite" },
  ];

  render() {
    const { filter, onFilterChange } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const clazz = isActive ? 'btn-secondary' : 'btn-outline-secondary'
      return (
        <button type="button" className={`btn ${clazz}`} key={name} onClick={()=> onFilterChange(name)}>
          {label}
        </button>
      );
    });
    return (
      <>
        <div className="col-auto">
          <div className="btn-group" role="group">
            {/* <button type="button" className="btn btn-outline-secondary">
             * All mine:
            </button> */}
            {buttons}
          </div>
        </div>
      </>
    );
  }
}

// const ItemFilter = () => {
//   return (
//     // <div className="col">
//       <div
//         className="btn-group btn-group-sm"
//         role="group"
//         aria-label="Basic outlined example"
//       >
//         <button type="button" className="btn btn-secondary">
//           All
//         </button>
//         <button type="button" className="btn btn-outline-secondary">
//           Male
//         </button>
//         <button type="button" className="btn btn-outline-secondary">
//           Female
//         </button>
//       </div>
//     // </div>
//   );
// };

// export default ItemFilter;

// Фильтр должен передавать значение фильтра в App.js и далее изменяется состояние в Арр,
//   и затем срабатывет метод filter.
