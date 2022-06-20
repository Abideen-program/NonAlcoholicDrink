import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      drinks: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState(
          () => {
            return {
              drinks: data.drinks,
            };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    return (
      <div className="App">
        <input 
        className="search box" 
        type="search"
        placeholder="search your drink"
        />

        {this.state.drinks.map((drink) => {
          return (
            <div key={drink.idDrink}>
              <h1>{drink.strDrink}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
