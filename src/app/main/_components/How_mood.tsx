'use client';
import Title from '@/shared/components/title/Title';
import React, { useState } from 'react';

const moodTabs = [
    { id: 'smile', label: '😂 웃고 싶어' },
    { id: 'cry', label: '😭 울고 싶어' },
    { id: 'tension', label: '😱 긴장감' },
    { id: 'think', label: '🧠 생각하고 싶어' },
    { id: 'light', label: '🌙 가볍게' },
];

const How_mood = () => {
    const [moodTabState, setMoodTabState] = useState('smile');
    console.log(moodTabState)

    return (
        <section>
            <div className='inner-2'>
                <Title chip='무드 픽' title='오늘 기분은' accent='어떤가요?'/>

                <ul className='mood-tab-btns'>
                    {
                        moodTabs.map((btn) => (
                            <li 
                                key={btn.id} 
                                className={`mood-tab-btn button-0 ${moodTabState === btn.id ? 'is-active' : ''}`}
                                onClick={() => setMoodTabState(btn.id)}
                            >
                                {btn.label}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
};

export default How_mood;