import React from 'react';
import './_styles/about.css';
import About_intro from './_components/About_intro';
import Problem from './_components/Problem';
import Core_function from './_components/Core_function';
import Faq from './_components/Faq';

const AboutPage = () => {
    return (
        <div className='wrap'>
            <About_intro />
            <Problem />
            <Core_function />
            <Faq />
        </div>
    );
};

export default AboutPage