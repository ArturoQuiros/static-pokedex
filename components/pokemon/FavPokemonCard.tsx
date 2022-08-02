import { Card, Grid } from "@nextui-org/react";
import React, { FC } from "react";

interface Props {
  id: number;
}

export const FavPokemonCard: FC<Props> = ({ id }) => {
  return (
    <Grid xs={6} sm={3} md={3} xl={1}>
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
  );
};
