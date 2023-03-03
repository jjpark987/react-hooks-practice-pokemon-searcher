import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [newPokemon, setNewPokemon] = useState({
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: ""
    }
  });

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then(data => setAllPokemon(data))
  }, []);

  let filteredPokemon = allPokemon.filter(pokemon => pokemon.name.toLowerCase().includes(searchInput.toLowerCase()));

  function addNewPokemon() {
  fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newPokemon.name,
        hp: newPokemon.hp,
        sprites: {
          front: newPokemon.sprites.front,
          back: newPokemon.sprites.back
      }
      })
    })
    .then(r => r.json())
    .then(data => {
      setAllPokemon([...allPokemon, newPokemon]);
      console.log(data)
    })
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm newPokemon={newPokemon} onSetNewPokemon={setNewPokemon} onAddNewPokemon={addNewPokemon} />
      <br />
      <Search searchInput={searchInput} onSetSearchInput={setSearchInput} />
      <br />
      <PokemonCollection filteredPokemon={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
