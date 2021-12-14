import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Head>
        <title>Ian Price - Home</title>
        <meta name="description" content="The homepage of Ian Price's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="sm:flex-grow pr-2 pl-2">
        Test Main
      </main>
      <Footer />
    </div>
  )
}

export default Home;