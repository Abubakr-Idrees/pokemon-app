import React, { useEffect, useState } from 'react';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import './App.css';
import { useGetPokemonListQuery } from './api/pokemon';
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

  const handleSelectPokemon = (pokemon: string) => {
    window.history.pushState({}, '', `/pokemon/${pokemon}`);
    window.scrollTo(0, 0);
    setSelectedPokemon(pokemon);
  };

  return (
    <Provider store={store}>

    <div className="app-container">
    {selectedPokemon && <PokemonDetails selectedPokemon={selectedPokemon} />}
      <PokemonList onSelectPokemon={handleSelectPokemon} />
    </div>
    </Provider>
  );
};

export default App;
