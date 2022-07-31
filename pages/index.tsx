import type { NextPage } from "next";
import { MainLayout } from "../components/layouts";
import { GetStaticProps } from "next";
import pokeAPI from "../api/pokeAPI";
import { PokemonListResponse } from "../interfaces";

const HomePage: NextPage = (props) => {
  console.log(props);

  return (
    <>
      <MainLayout title="Pokedex">
        <ul>
          <li>Pokemon</li>
          <li>Pokemon</li>
          <li>Pokemon</li>
          <li>Pokemon</li>
        </ul>
      </MainLayout>
    </>
  );
};

//server side
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeAPI.get<PokemonListResponse>("/pokemon?limit=151");

  return {
    props: {
      pokemons: data.results,
    },
  };
};

export default HomePage;
