import React from 'react';

interface TitleProps {
    chip: string,
    title: string,
    title_1?: string,
    accent?: string
}

const Title = ({ chip, title, title_1, accent }: TitleProps) => {
    return (
        <div>
            <p className='title__chip md'>
                <span className='title__line'></span>
                {chip}
            </p>
            <h2 className='title md'>
                {title} <br/>
                <span>{accent}</span> {title_1}
                
            </h2>
        </div>
    );
};

export default Title;