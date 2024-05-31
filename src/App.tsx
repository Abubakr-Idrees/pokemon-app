import React, { useEffect, useState } from 'react';
import PokemonList from './features/PokemonList';
import PokemonDetails from './features/PokemonDetails';
import './App.css';
import { useGetPokemonListQuery } from './services/pokemon';
import { Provider } from 'react-redux';
import { store } from './app/store';

const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const { data: pokemonListData, isFetching } = useGetPokemonListQuery();

  useEffect(() => {
    if (!isFetching && pokemonListData && pokemonListData.results.length > 0 && !selectedPokemon) {
      setSelectedPokemon(pokemonListData.results[0].name);
    }
  }, [pokemonListData, isFetching, selectedPokemon]);

  return (
    <Provider store={store}>

    <div className="app-container">
      <PokemonList onSelectPokemon={setSelectedPokemon} />
      {selectedPokemon && <PokemonDetails selectedPokemon={selectedPokemon} />}
    </div>
    </Provider>
  );
};

export default App;
