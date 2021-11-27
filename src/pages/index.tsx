import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
//Importing Layouts
import NavBar from '../layouts/Navbar';
import FrontBox from '../layouts/FrontBox';
//Importing Web3 Service
import { Web3Service } from '../services/Web3Service';

const Home: NextPage = () => {
  useEffect(()=>{
    Web3Service.init();
  },[])
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
