import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
import Footer from '../components/Footer';
import profilePicture from '../public/LinkedIn.png';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col dark:bg-gray-700 dark:text-white">
      <Head>
        <title>Ian Price - Home</title>
        <meta name="description" content="The homepage of Ian Price's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header active="home"/>
      <main className="flex-grow pr-2 pl-2">
        <section className="flex flex-col md:flex-row"> {/* Rework to use grid? Image is way too big on desktop */}
          <div className="block w-2/3 mx-auto md:w-1/3 md:m-2.5">
            <Image src={profilePicture} alt="An image of Ian" layout='intrinsic'/>
          </div>
          <div className="text-2xl md:w-1/2 md:mx-auto">
            <p className="mb-2">Ian is a 24 year old web developer based in Columbus, Ohio. He holds a Bachelor of Science in Computer Science from Miami University, and graduated in 2019.</p>
            <p className="mb-2">Ian's focus is on front-end web development, with over two years of E-Commerce experience. He takes designs and brings them to life on the web while ensuring responsiveness, cross browser compatibility, and WCAG2+ADA compliance.</p>
            <p>Recently Ian has jumped into full-stack ASP.NET development at the Columbus based CRM company WebPresented.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home;