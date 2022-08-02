import { pokeAPI } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (nameId: string) => {
  const { data } = await pokeAPI.get<Pokemon>(`/pokemon/${nameId}`);
  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
};
