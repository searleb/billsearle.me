import { useContext } from 'react';
import Head from 'next/head';
import colourContext from '../../context/colour';

const Favico = () => {
  const { colour } = useContext(colourContext);

  return (
    <Head>
      <link
        key="favico"
        rel="icon"
        sizes="any"
        href={
          `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Crect width='16' height='16' fill='%23${colour.slice(1)}'/%3E%3C/svg%3E`
        }
      />
    </Head>
  );
};

export default Favico;
