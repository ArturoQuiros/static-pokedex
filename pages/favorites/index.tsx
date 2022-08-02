import { MainLayout } from "../../components";
import { NoFavorites } from "../../components/ui";
import { useState, useEffect } from "react";
import localFav from "../../utils/localFav";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFav.pokemons);
  }, []);

  return (
    <MainLayout title="Pokémons - Favoritos">
      <NoFavorites></NoFavorites>
    </MainLayout>
  );
};

export default FavoritesPage;
