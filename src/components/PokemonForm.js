import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ newPokemon, onSetNewPokemon, onAddNewPokemon }) {
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={e => {
          e.preventDefault();
          onAddNewPokemon();
        }}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            value={newPokemon.name} 
            onChange={e => onSetNewPokemon({...newPokemon, name: e.target.value})} 
          />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp" 
            value={newPokemon.hp} 
            onChange={e => onSetNewPokemon({...newPokemon, hp: Number(e.target.value)})} 
          />
          <Form.Input
            fluid label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newPokemon.sprites.front}
            onChange={e => onSetNewPokemon({...newPokemon, sprites: {front: e.target.value}})}
          />
          <Form.Input
            fluid label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newPokemon.sprites.back}
            onChange={e => onSetNewPokemon({...newPokemon, sprites: {...newPokemon.sprites, back: e.target.value}})}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
