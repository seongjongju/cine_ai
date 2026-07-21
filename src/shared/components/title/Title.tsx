import React from 'react';

interface TitleProps {
    title: React.ReactNode;
}

const Title = ({ title }: TitleProps) => {
    return (
        <>
            {title}
        </>
    );
};

export default Title;