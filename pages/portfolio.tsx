import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PageThemeContext } from '../components/ThemeContext';
import { useState } from 'react';
import gitHubImage from '../public/images/GitHub_Logo_White.png';
import pokemonImage from '../public/images/PMDRTDXLogo.png';
import wkMediation from '../public/images/wk_mediation_logo_horiz_graygold.png';

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
                <main className="flex-grow px-2 pb-8 md:px-4 lg:px-8 xl:px-16 2xl:px-32">
                    <section className="grid md:grid-cols-2">
                        <article className="flex flex-col shadow-lg mb-2 md:mr-4 rounded-xl p-4 lg:p-2 xl:p-4 border-gray-50 border-4 dark:bg-gray-600 dark:border-gray-600">
                            <h2 className="text-center text-lg font-semibold">To see what side projects I&apos;m working on, check out my GitHub</h2>
                            <a href="https://github.com/ianprice943" aria-label="Ian's GitHub" className="my-auto rounded-xl bg-gray-600 dark:bg-transparent">
                                <Image src={gitHubImage} alt="GitHub Logo" layout='intrinsic' />
                            </a>
                        </article>
                        <article className="shadow-lg mb-2 md:mr-4 rounded-xl p-4 lg:p-2 xl:p-4 border-gray-50 border-4 dark:bg-gray-600 dark:border-gray-600">
                            <h2 className="text-center text-lg font-semibold">Pokemon Mystery Dungeon Rescue Team DX Starters</h2>
                            <p className="text-center text-sm py-2">A website I developed to learn Vue.js, and later React and Typescript</p>
                            <a href="https://pmdrtdx-react.herokuapp.com/" aria-label="Website for a game, written in React" className="my-auto">
                                <Image src={pokemonImage} alt="Pokemon Mystery Dungeon Rescue Team DX Logo" layout='intrinsic' />
                            </a>
                            <ul className="flex justify-around">
                                <li className="hover:underline">
                                    <a href="https://pmdrtdx-vuejs.herokuapp.com/" aria-label="Website for a game, written in Vue.js">Vue.js Version</a>
                                </li>
                                <li className="hover:underline">
                                    <a href="https://pmdrtdx-react.herokuapp.com/" aria-label="Website for a game, written in React">React Version</a>
                                </li>
                            </ul>
                        </article>
                        <article className="shadow-lg mb-2 md:mr-4 rounded-xl p-4 lg:p-2 xl:p-4 border-gray-50 border-4 dark:bg-gray-600 dark:border-gray-600">
                            <h2 className="text-center text-lg font-semibold">William Kampf Mediation</h2>
                            <p className="text-center text-sm py-2">An introductory site and blog for a client&apos;s Mediation business.</p>
                            <a href="https://wkmediation.com/" aria-label="Website for a mediator in Los Angeles" className="my-auto">
                                <Image src={wkMediation} alt="WK Mediation Logo" layout='intrinsic' />
                            </a>
                        </article>
                    </section>
                </main>
                <Footer />
            </PageThemeContext.Provider>
        </div>
    )
}

export default Portfolio;