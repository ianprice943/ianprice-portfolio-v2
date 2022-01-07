import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PageThemeContext } from '../components/ThemeContext';
import { useState } from 'react';

const Portfolio: NextPage = () => {
    const [ theme, setTheme ] = useState<string>("light");

    return (
        <div className="relative flex flex-col dark:bg-gray-700 dark:text-white">
            <PageThemeContext.Provider value={{ theme, setTheme }}>
                <Head>
                    <title>Ian Price - Portfolio</title>
                    <meta name="description" content="The portfolio page of Ian Price's Portfolio" />
                    <meta name="viewport" content="width=device-width,initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="//www.ianprice943.dev" />
                    <meta property="og:title" content="Ian Price - Portfolio" />
                    <meta property="og:description" content="The portfolio page of Ian Price's Portfolio" />
                    <meta property="og:image" content="/public/LinkedIn.png" />
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="//www.ianprice943.dev" />
                    <meta property="twitter:title" content="Ian Price - Portfolio" />
                    <meta property="twitter:description" content="The portfolio page of Ian Price's Portfolio" />
                    <meta property="twitter:image" content="/public/LinkedIn.png" />
                </Head>
                <Header active="portfolio"/>
                <main className="flex-grow pr-2 pl-2">
                    Test Portfolio
                </main>
                <Footer />
            </PageThemeContext.Provider>
        </div>
    )
}

export default Portfolio;