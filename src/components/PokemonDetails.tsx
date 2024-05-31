import React from 'react';
import { useGetPokemonByNameQuery } from '../api/pokemon';
import Header from '../app/components/Header';

interface PokemonDetailsProps {
  selectedPokemon: string;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ selectedPokemon }) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(selectedPokemon);

  if (isLoading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">An error has occurred</div>;
  if (!data) return null;

  return (
    <div className="details-container">
      <div className="pokemon-details-card" data-testid="pokemon-details">
        <Header title={data?.name || 'Pokemon'} />
        <img className="pokemon-image" src={data.sprites?.front_default} alt={data.name} />
        <div className="pokemon-info">
          <div className="detail-item"><strong>Name:</strong> {data.name}</div>
          <div className="detail-item"><strong>Height:</strong> {data.height * 10} cm</div>
          <div className="detail-item"><strong>Weight:</strong> {data.weight / 10} kg</div>
          <div className="detail-item"><strong>Types:</strong> {data.types?.map(typeInfo => typeInfo.type.name).join(', ')}</div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
