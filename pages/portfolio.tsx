import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Portfolio: NextPage = () => {
  return (
    <div className="flex flex-col dark:bg-gray-700 dark:text-white">
      <Head>
        <title>Ian Price - Resume</title>
        <meta name="description" content="Ian Price's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header active="portfolio"/>
      <main className="flex-grow pr-2 pl-2">
        Test Portfolio
      </main>
      <Footer />
    </div>
  )
}

export default Portfolio;