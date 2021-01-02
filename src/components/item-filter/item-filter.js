import React, {Component} from "react";

export default class ItemFilter extends Component {
  render() {
    return (
      // <div className="col">
        <div
          className="btn-group btn-group-sm"
          role="group"
          aria-label="Basic outlined example"
        >
          <button type="button" className="btn btn-secondary">
            All
          </button>
          <button type="button" className="btn btn-outline-secondary">
            Male
          </button>
          <button type="button" className="btn btn-outline-secondary">
            Female
          </button>
        </div>
      // </div>
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
