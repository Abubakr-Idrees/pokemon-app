import React from "react";
import { useGetPokemonListQuery } from "../services/pokemon";
import Header from "../app/components/Header";
import { Provider } from "react-redux";
import { store } from "../app/store";
interface PokemonListProps {
  onSelectPokemon: (pokemon: string) => void;
}

const PokemonList: React.FC<PokemonListProps> = ({ onSelectPokemon }) => {
  const { data, error, isLoading } = useGetPokemonListQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred</div>;

  return (
    <Provider store={store}>
      <div className="list-container" data-testid="pokemon-list">
        <Header title="PokeReact" />
        <ul>
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
