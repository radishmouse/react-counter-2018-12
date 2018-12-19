import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 0,
      pokemonToShow: [],
      allPokemon: [
        {
          url: 'http://pokemon/1'
        },
        {
          url: 'http://pokemon/2'
        },
        {
          url: 'http://pokemon/3'
        },
        {
          url: 'http://pokemon/4'
        },
        {
          url: 'http://pokemon/5'
        },

      ]
    };
  }

  render() {
    return (
      <div className="App">
        <div>{this.state.pageNumber}</div>
        <button onClick={this._prevPage}>-</button>
        <button onClick={this._nextPage}>+</button>

        <ul>
          {this.state.pokemonToShow.map(pokemon => {
            return <li>pokemon.name</li>
          })}
        </ul>
      </div>
    );
  }

  _getPokemonForPage = () => {

    this.setState({
      pokemonToShow: []
    }, () => {
      const from = this.state.pageNumber;
      const to = this.state.pageNumber + 2;
  
      for (let i = from; i<to; i++) {
        console.log(`doing a fetch for: ${this.state.allPokemon[i].url}`);
        /*
          fetch(this.state.allPokemon[i].url)
            .then(pokemon => {
              this.setState({
                pokemonToShow: [...this.state.pokemonToShow, pokemon]
              })
            })
  
        */
  
      }
    })



  }

  _nextPage = () => {
    this.setState({
      pageNumber: this.state.pageNumber + 1
    }, () => {
      // pretend that i'm going to fetch
      this._getPokemonForPage();
    });
  }
  _prevPage = () => {
    this.setState({
      pageNumber: this.state.pageNumber - 1
    }, () => {
      // pretend that i'm going to fetch
      this._getPokemonForPage();
    });
  }
}

export default App;
