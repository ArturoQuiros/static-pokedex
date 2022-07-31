import Head from "next/head";
import React, { PropsWithChildren } from "react";

type Props = {
  title?: string;
};

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
      </Head>

      <main>{children}</main>
    </>
  );
};
