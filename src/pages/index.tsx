import type { NextPage } from 'next';
import Head from 'next/head';

//Importing Layouts
import NavBar from '../layouts/Navbar';
import FrontBox from '../layouts/FrontBox';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Kolumn</title>
        <meta name='Kolumn' content='Publish your articles on Blockchain' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <FrontBox />
    </div>
  );
};

export default Home;
