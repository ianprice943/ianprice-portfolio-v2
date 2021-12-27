import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Resume: NextPage = () => {
  return (
    <div className="flex flex-col dark:bg-gray-700 dark:text-white">
      <Head>
        <title>Ian Price - Resume</title>
        <meta name="description" content="Ian Price's Resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header active="resume"/>
      <main className="flex-grow pr-2 pl-2">
        Test Resume
      </main>
      <Footer />
    </div>
  )
}

export default Resume;