// import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.component.css";

const CardList = (props) => {
  const { drinks } = props;
  return (
    <div className="card-list">
      {drinks.map((drink) => {
        return <Card eachdrink={drink} key={drink.idDrink} />;
      })}
    </div>
  );
};

// class CardList extends Component {
//   render() {
//     const { drinks } = this.props;
//     return (
//       <div className="card-list">
//         {drinks.map((drink) => {
//           return <Card  drink = {drink} key={drink.idDrink} />
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
