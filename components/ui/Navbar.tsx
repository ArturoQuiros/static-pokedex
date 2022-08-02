import Image from "next/image";
import NextLink from "next/link";
import {
  Spacer,
  Text,
  useTheme,
  Link,
  CssBaseline,
  Button,
} from "@nextui-org/react";

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
        padding: "0x 50px",
        backgroundColor: theme?.colors.gray400.value,
      }}
    >
      <NextLink href="/" passHref>
        <Link css={{ padding: "10px" }}>
          <Image
            src="/img/logo.png"
            alt="icono de la app"
            width={200}
            height={70}
          />
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href="/favorites" passHref>
        <Link css={{ marginRight: "10px" }}>
          <Button ghost={true} color="gradient">
            Favoritos
          </Button>
        </Link>
      </NextLink>
    </div>
  );
};
