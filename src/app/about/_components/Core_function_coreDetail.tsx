import React from 'react';

interface CoreDetailProps {
    icon: string;
    title: string;
    accent: string;
    text: string;
    badges?:  string[];
};

const Core_function_coreDetail = ({icon, title, accent, text, badges}: CoreDetailProps) => {
    return (
        <div className='core__detail'>
            <span className='core__icon'>{icon}</span>
            <h6 className='core__title'>
                {title} <br />
                <span className='text-[var(--gold-0)]'>{accent}</span>
            </h6>
            <p className='core__text'>
                {text}
            </p>
            <div className='core__badges'>
                {
                    badges?.map((badge) => (
                        <p key={badge} className='core__badge'>{badge}</p>
                    ))
                }
            </div>
        </div>
    );
};

export default Core_function_coreDetail;