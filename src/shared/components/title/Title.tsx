import React from 'react';

interface TitleProps {
    chip: string,
    title: string,
    accent: string
}

const Title = ({ chip, title, accent }: TitleProps) => {
    return (
        <div>
            <p className='title__chip md'>
                <span className='title__line'></span>
                {chip}
            </p>
            <h2 className='title md'>
                {title} <br/>
                <span>{accent}</span>
            </h2>
        </div>
    );
};

export default Title;