import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Kolumn</title>
        <meta name='Kolumn' content='Publish your articles on Blockchain' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <p>Hello World!</p>
    </div>
  );
};

export default Home;
