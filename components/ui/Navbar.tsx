import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export const Navbar = () => {
  const { theme, isDark } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0x 20px",
        backgroundColor: theme?.colors.gray400.value,
      }}
    >
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
        }
        alt="Pokemon Icon"
        width={70}
        height={70}
      ></Image>
      <Text color="white" h2>
        P
      </Text>
      <Text color="white" h3>
        okémon
      </Text>
      <Spacer css={{ flex: 1 }}></Spacer>
      <Text color="white" h3>
        Favoritos
      </Text>
    </div>
  );
};
