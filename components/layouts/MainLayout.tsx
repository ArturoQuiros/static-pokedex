import Head from "next/head";
import React, { PropsWithChildren } from "react";
import { Navbar } from "../ui";
import { useRouter } from "next/router";

type Props = {
  title?: string;
};

const origin = typeof window === "undefined" ? " " : window.location.origin;

export const MainLayout: React.FC<PropsWithChildren<Props>> = ({
  children,
  title,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Arturo Quirós"></meta>
        <meta name="description" content={`About Pokemon ${title}`}></meta>
        <meta name="keywords" content={`${title} , pokemon , pokedex`}></meta>
        <meta property="og:title" content={`Pokedex: ${title}`} />
        <meta
          property="og:description"
          content="Become a Pokemon expert with the podedex"
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
