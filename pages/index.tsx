import type { NextPage } from "next";
import { MainLayout } from "../components/layouts";
import { GetStaticProps } from "next";

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
  return {
    props: {},
  };
};

export default HomePage;
