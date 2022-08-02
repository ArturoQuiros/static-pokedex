const toggleFav = (id: number) => {
  let favs: number[] = JSON.parse(localStorage.getItem("favorites") || "[]");

  if (favs.includes(id)) {
    favs = favs.filter((pokeID) => pokeID !== id);
  } else {
    favs.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favs));
};

const isFav = (id: number): boolean => {
  if (typeof window === "undefined") return false;

  let favs: number[] = JSON.parse(localStorage.getItem("favorites") || "[]");
  return favs.includes(id);
};

export default { toggleFav, isFav };
