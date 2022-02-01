import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
import Footer from '../components/Footer';
import PCard from '../components/PCard';
import profilePicture from '../public/images/LinkedIn.png';
import { PageThemeContext } from '../components/ThemeContext';
import { useState } from 'react';

const Home: NextPage = () => {

    const [theme, setTheme] = useState<string>("light");

    const cardContent1 = "Greetings! I'm a 24 year old web developer based in Columbus, Ohio. In 2019 I graduated Miami University with a Bachelor of Science in Computer Science.";

    const cardContent2 = "My focus is on front-end web development. I've obtained over two years of E-Commerce experience working for Ascena and Opcapita brands such as Justice, Dressbarn, and maurices.";

    const cardContent3 = "I take designs and bring them to life on the web while ensuring responsiveness, cross browser compatibility, and WCAG2 and ADA compliance. A more accessible web is a more inclusive web."

    const cardContent4 = "I'm currently searching for the next step in my career, and am looking to continue growing my front-end skills!";

    return (
        <div className="relative flex flex-col h-full dark:bg-gray-700 dark:text-white min-h-screen">
            <PageThemeContext.Provider value={{ theme, setTheme }}>
                <Head>
                    <title>Ian Price - Home</title>
                    <meta name="description" content="The homepage of Ian Price's Portfolio" />
                    <meta name="viewport" content="width=device-width,initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="//www.ianprice943.dev" />
                    <meta property="og:title" content="Ian Price - Home" />
                    <meta property="og:description" content="The homepage of Ian Price's Portfolio" />
                    <meta property="og:image" content="/images/LinkedIn.png" />
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="//www.ianprice943.dev" />
                    <meta property="twitter:title" content="Ian Price - Home" />
                    <meta property="twitter:description" content="The homepage of Ian Price's Portfolio" />
                    <meta property="twitter:image" content="/images/LinkedIn.png" />
                </Head>
                <Header active="home"/>
                <main className="flex-grow px-2 pb-6 md:px-4 lg:px-8 xl:px-16 2xl:px-32">
                    <section className="flex flex-col md:flex-row">
                        <div className="block w-2/3 mx-auto md:ml-0 md:mr-auto md:w-5/12 md:my-2.5 xl:w-1/3">
                            <Image src={profilePicture} alt="An image of Ian" layout='intrinsic' className="rounded-xl" />
                        </div>
                        <div className="text-xl m-2.5 mr-0 md:w-6/12 md:ml-auto">
                            <PCard cardContent={cardContent1} />
                            <PCard cardContent={cardContent2} />
                            <PCard cardContent={cardContent3} />
                            <PCard cardContent={cardContent4} />
                        </div>
                    </section>
                </main>
                <Footer />
            </PageThemeContext.Provider>
        </div>
    )
}

export default Home;