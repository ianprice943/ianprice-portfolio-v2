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
                <meta name="description" content="The resume page of Ian Price's Portfolio" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="//www.ianprice943.dev" />
                <meta property="og:title" content="Ian Price - Resume" />
                <meta property="og:description" content="The resume page of Ian Price's Portfolio" />
                <meta property="og:image" content="/public/LinkedIn.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="//www.ianprice943.dev" />
                <meta property="twitter:title" content="Ian Price - Resume" />
                <meta property="twitter:description" content="The resume page of Ian Price's Portfolio" />
                <meta property="twitter:image" content="/public/LinkedIn.png" />
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