import { Component } from "react";
import './card-list.component.css'


class CardList extends Component {
  render() {
    const { drinks } = this.props
    return (
      <div className="card-list">
        {
        drinks.map((drink) => {
          const { strDrink, idDrink, strDrinkThumb } = drink;
          return (
            <div key={idDrink}>
              <img className="drink-images" alt = {strDrink} src={strDrinkThumb}/>
              <h3>{strDrink}</h3>
            </div>
          );
        })
        }
      </div>
    );
  }
}

export default CardList;
