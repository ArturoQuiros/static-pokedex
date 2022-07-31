import { Card, Grid, Row, Text } from "@nextui-org/react";
import { GetStaticProps } from "next";
import { MainLayout } from "../components/layouts";
import { PokemonCard } from "../components/pokemon";
import { SmallPokemon, PokemonListResponse } from "../interfaces";
import pokeAPI from "../api/pokeAPI";
import type { NextPage } from "next";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <MainLayout title="Pokedex">
        <Grid.Container gap={2} justify="flex-start">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>
          ))}
        </Grid.Container>
      </MainLayout>
    </>
  );
};

//server side
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeAPI.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons: pokemons,
    },
  };
};

export default HomePage;
