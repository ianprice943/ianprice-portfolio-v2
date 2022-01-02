import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
import Footer from '../components/Footer';
import resumeData from '../public/data/resume.json';
import { useState } from 'react';

interface ResumeData {
    experience: JobData[],
    education: EducationData[],
    skills: string[]
}

interface JobData {
    companyName: string,
    companyTitle: string,
    experienceTime: string,
    responsibilities: string[]
}

interface EducationData {
    schoolName: string,
    graduateLevel: string,
    degreeEarned: string,
    educationTime: string
}

const Resume: NextPage<ResumeData> = (data: ResumeData) => {

    const [resumeData, setData] = useState([]);

    const jobs = data.experience;
    const education = data.education;
    const skills = data.skills;

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
            <main className="flex-grow px-2 pb-6 md:px-4 lg:px-8 xl:px-16 2xl:px-32">
                <section aria-label="experience">
                    <h2>Experience</h2>
                    <ul>
                        {jobs?.map((job: JobData, i: number) => {
                            return <p key={i}>{job.companyName}</p>
                        })}
                    </ul>
                </section>
                <section aria-label="education">
                    <h2>Education</h2>
                    <ul>
                        {education?.map((school: EducationData, i: number) => {
                            return <p key={i}>{school.schoolName}</p>
                        })}
                    </ul>
                </section>
                <section aria-label="skills">
                    <h1>Skills</h1>
                    <u>
                        {skills?.map((skill: string, i: number) => {
                            return <p key={i}>{skill}</p>
                        })}
                    </u>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const data: ResumeData = await resumeData;

    if(!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            data
        }
    }
}

export default Resume;