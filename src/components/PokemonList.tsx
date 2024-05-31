import React from "react";
import { useGetPokemonListQuery } from "../api/pokemon";
import Header from "../app/components/Header";
import { Provider } from "react-redux";
import { store } from "../app/store";

interface PokemonListProps {
  onSelectPokemon: (pokemon: string) => void;
}

const PokemonList: React.FC<PokemonListProps> = ({ onSelectPokemon }) => {
  const { data, error, isLoading } = useGetPokemonListQuery();

  if (isLoading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">An error has occurred</div>;

  return (
    <Provider store={store}>
      <div className="list-container" data-testid="pokemon-list">
        <Header title="PokeReact" />
        <ul className="pokemon-list">
          {data?.results.map((pokemon) => (
            <li
              key={pokemon.name}
              className="pokemon-item"
              onClick={() => onSelectPokemon(pokemon.name)}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  pokemon.url.split("/")[6]
                }.png`}
                alt={pokemon.name}
              />
              <span className="pokemon-name">{pokemon.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </Provider>
  );
};

export default PokemonList;
