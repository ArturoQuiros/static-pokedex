import React, { FC } from "react";
import { Grid } from "@nextui-org/react";
import { FavPokemonCard } from "./FavPokemonCard";

interface Props {
  pokemons: number[];
}

export const FavPokemonContainer: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction={"row"} justify="center">
      {pokemons.map((id) => (
        <FavPokemonCard key={id} id={id}></FavPokemonCard>
      ))}
    </Grid.Container>
  );
};
