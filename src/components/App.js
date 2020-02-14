import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const App = () => {
  const [pokemon, setPokemon] = useState({});
  const [number, setNumber] = useState(1);

  const getPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${number}/`)
      .then(({ data }) => {
        console.log(data);
        setPokemon(data);
      })
      .catch(err => console.error(error));
  };

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${number}/`)
      .then(({ data }) => {
        console.log(data);
        setPokemon(data);
      })
      .catch(err => console.error(error));
  }, [setPokemon]);

  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <button onClick={() => getPokemon()}>Show pokemon</button>
      <Card {...pokemon} />
    </div>
  );
};

export default App;
