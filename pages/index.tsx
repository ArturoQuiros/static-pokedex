import type { NextPage } from "next";
import { MainLayout } from "../components/layouts";
import { GetStaticProps } from "next";
import pokeAPI from "../api/pokeAPI";
import { SmallPokemon, PokemonListResponse } from "../interfaces";
import { Card, Grid, Row, Text } from "@nextui-org/react";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <MainLayout title="Pokedex">
        <Grid.Container gap={2} justify="flex-start">
          {pokemons.map(({ id, img, url, name }) => (
            <Grid xs={6} sm={3} md={2} xl={1} key={id}>
              <Card isHoverable isPressable>
                <Card.Body css={{ p: 2 }}>
                  <Card.Image src={img} width="100%" height={140} />
                </Card.Body>
                <Card.Footer>
                  <Row justify="space-between">
                    <Text> {name}</Text>
                    <Text> #{id}</Text>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
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
