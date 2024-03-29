import { ColorContext } from "context/color";
import Head from "next/head";
import { useContext } from "react";

export const Favico = () => {
  const { color } = useContext(ColorContext);
  const isDefault = color === "#ffffff";

  if (isDefault) return null;

  return (
    <Head>
      <link
        key="favico"
        rel="icon"
        sizes="any"
        href={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Crect width='16' height='16' fill='%23${color.slice(
          1
        )}'/%3E%3C/svg%3E`}
      />
    </Head>
  );
};
