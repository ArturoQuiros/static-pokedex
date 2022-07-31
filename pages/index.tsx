import type { NextPage } from "next";
import { MainLayout } from "../components/layouts";
import { GetStaticProps } from "next";
import pokeAPI from "../api/pokeAPI";
import { SmallPokemon, PokemonListResponse } from "../interfaces";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <MainLayout title="Pokedex">
        <ul>
          {pokemons.map(({ id, img, url, name }) => (
            <li key={id}>
              <h1>{name}</h1>
              <h2>{`ID: ${img}`}</h2>
              <h2>{`URL: ${url}`}</h2>
            </li>
          ))}
        </ul>
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
