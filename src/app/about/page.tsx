import React from 'react';
import './_styles/about.css';
import AboutIntro from './_components/AboutIntro';
import Problem from './_components/Problem';
import CoreFunction from './_components/CoreFunction';
import Faq from './_components/Faq';
import Link from 'next/link';
import AboutOutro from './_components/AboutOutro';

const AboutPage = () => {
    return (
        <div className='wrap'>
            <AboutIntro />
            <Problem />
            <CoreFunction />
            <Faq />
            <AboutOutro />
        </div>
    );
};

export default AboutPage