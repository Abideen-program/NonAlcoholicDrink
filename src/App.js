import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      drinks: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState(() => {
          return {
            drinks: data.drinks,
          };
        })
      );
  }

  onSearch = (event) => {
    const searchString = event.target.value.toLowerCase();

    this.setState(() => {
      return {
        searchField: searchString,
      };
    });
  };

  render() {
    const { drinks, searchField } = this.state;
    const { onSearch } = this;

    const filteredDrinks = drinks.filter((drink) => {
      return drink.strDrink.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          className="search box"
          type="search"
          placeholder="search your drink"
          onChange={onSearch}
        />

        {filteredDrinks.map((drink) => {
          const { strDrink, idDrink } = drink;
          return (
            <div key={idDrink}>
              <h1>{strDrink}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
