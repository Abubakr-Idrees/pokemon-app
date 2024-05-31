import React from 'react';
import { useGetPokemonByNameQuery } from '../services/pokemon';
import Header from '../app/components/Header';
interface PokemonDetailsProps {
  selectedPokemon: string;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ selectedPokemon }) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(selectedPokemon);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred</div>;
  if (!data) return null;

  return (
      <div className="details-container">
          <div className="pokemon-details"  data-testid="pokemon-details">
           <Header title={data?.name || 'Pokemon'}/>
            <img src={data.sprites?.front_default} alt={data.name} />
            <div className="detail-item"><strong>Name:</strong> {data.name}</div>
            <div className="detail-item"><strong>Height:</strong> {data.height * 10} cm</div>
            <div className="detail-item"><strong>Weight:</strong> {data.weight / 10} kg</div>
            <div className="detail-item"><strong>Types:</strong> {data.types?.map(typeInfo => typeInfo.type.name).join(', ')}</div>
      </div>
    </div>
  );
};

export default PokemonDetails;

