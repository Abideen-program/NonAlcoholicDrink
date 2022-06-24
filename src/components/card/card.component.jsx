// import { Component } from "react";
import "./card.component.css";

const Card = (props) => {
    const { strDrink, idDrink, strDrinkThumb } = props.eachdrink;
    return (
      <div className="card-container">
        <div key={idDrink}>
          <img className="drink-images" alt={strDrink} src={strDrinkThumb} />
          <h3>{strDrink}</h3>
        </div>
      </div>
    );
  }

// class Card extends Component {
//   render() {
//     const { strDrink, idDrink, strDrinkThumb } = this.props.drink;
//     return (
//       <div className="card-container">
//         <div key={idDrink}>
//           <img className="drink-images" alt={strDrink} src={strDrinkThumb} />
//           <h3>{strDrink}</h3>
//         </div>
//       </div>
//     );
//   }
// }

export default Card;
