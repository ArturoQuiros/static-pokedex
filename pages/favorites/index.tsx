import { MainLayout } from "../../components";
import { NoFavorites } from "../../components/ui";
import { useState, useEffect } from "react";
import localFav from "../../utils/localFav";
import { FavPokemonContainer } from "../../components/pokemon";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFav.pokemons);
  }, []);

  return (
    <MainLayout title="Pokémons - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavPokemonContainer pokemons={favoritePokemons} />
      )}
    </MainLayout>
  );
};

export default FavoritesPage;
