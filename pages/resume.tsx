import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import data from '../public/data/resume.json';
import ResumeCard from '../components/ResumeCard';
import { ResumeData, JobData, EducationData } from 'ResumeTypes';
import EducationCard from '../components/EducationCard';
import SkillCard from '../components/SkillCard';
import { PageThemeContext } from '../components/ThemeContext';
import { useState } from 'react';

const Resume: NextPage<ResumeData> = (resumeData: ResumeData) => {
    const [theme, setTheme] = useState<string>("light");

    const jobs: JobData[] = resumeData.data.experience;
    const education: EducationData[] = resumeData.data.education;
    const skills: string[] = resumeData.data.skills;

    return (
        <div className="relative flex flex-col dark:bg-gray-700 dark:text-white">
            <PageThemeContext.Provider value={{ theme, setTheme }}>
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
                    <section id="experience" aria-label="experience">
                        <h2 className="text-2xl">Experience</h2>
                        <div className="p-1 md:grid md:grid-cols-2">
                            {jobs?.map((job: JobData, i: number) => {
                                return <ResumeCard key={i} job={job} />
                            })}
                        </div>
                    </section>
                    <section id="education" aria-label="education">
                        <h2 className="text-2xl">Education</h2>
                        <div className="p-1 md:grid md:grid-cols-1 lg:grid-cols-2">
                            {education?.map((school: EducationData, i: number) => {
                                return <EducationCard key={i} school={school} />
                            })}
                        </div>
                    </section>
                    <section id="skills" aria-label="skills">
                        <h2 className="text-2xl">Skills</h2>
                        <div className="p-1">
                            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3">
                                {skills?.map((skill: string, i: number) => {
                                    return <SkillCard key={i} index={i} skill={skill} />
                                })}
                            </ul>
                        </div>
                    </section>
                </main>
                <Footer />
            </PageThemeContext.Provider>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {

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