import React from 'react';
import Form from "./components/Form";
import Header from "./components/Header";
import Pokemon from "./components/Pokemon";
import './App.css';

class App extends React.Component {
    state = {
      name: undefined,
      experience: undefined,
      height: undefined,
      weight: undefined,
      id: undefined,
      img_url: undefined,
      stats: undefined,
      error: undefined,
    }


  getStats = async (e) => {
    e.preventDefault(); /* To prevent refresh page when button pressed  */
    const pokemon = e.target.elements.pokemon.value; 
    const api_call = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await api_call.json();
    console.log(data);
    if (pokemon)
    {
      this.setState({
        name: data.name,
        experience: data.base_experience,
        height: data.height,
        weight: data.weight,
        id: data.id,
        img_url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
        error: " ",
      });
    } else {
      this.setState({
        name: undefined,
        experience: undefined,
        height: undefined,
        weight: undefined,
        id: undefined,
        img_url: undefined,
        stats: undefined,
        error: "Please enter a valid pokemon name",
      });
    }
  }

  render () { 
    return (
      <div className="App">
        <Header />
        <Form 
        getStats={this.getStats}
        />
        <Pokemon 
        name={this.state.name}
        experience={this.state.experience}
        height={this.state.height}
        weight={this.state.weight}
        id={this.state.id}
        img_url={this.state.img_url}
        stats={this.state.stats}
        error={this.state.error}
        />
      </div>
    );
  }

}

export default App;
