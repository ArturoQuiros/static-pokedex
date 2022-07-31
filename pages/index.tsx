import { Button } from "@nextui-org/react";
import type { NextPage } from "next";
import { MainLayout } from "../components/layouts";

const HomePage: NextPage = () => {
  return (
    <>
      <MainLayout title="Pokedex">
        <h1>Hola Mundo</h1>
        <Button color="gradient">Boton</Button>
      </MainLayout>
    </>
  );
};

export default HomePage;
