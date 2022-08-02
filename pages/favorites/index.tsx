import { MainLayout } from "../../components";
import { NoFavorites } from "../../components/ui";
import { useState, useEffect } from "react";
import localFav from "../../utils/localFav";
import { Card, Grid } from "@nextui-org/react";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFav.pokemons);
  }, []);

  return (
    <MainLayout title="Pokémons - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites></NoFavorites>
      ) : (
        <Grid.Container gap={2} direction={"row"} justify="center">
          {favoritePokemons.map((id) => (
            <Grid xs={6} sm={3} md={3} xl={1} key={id}>
              <Card
                isHoverable
                isPressable
                css={{
                  padding: 10,
                }}
              >
                <Card.Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                  width={"100%"}
                  height={100}
                ></Card.Image>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      )}
    </MainLayout>
  );
};

export default FavoritesPage;
