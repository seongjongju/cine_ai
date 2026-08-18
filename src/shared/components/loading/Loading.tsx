import React from 'react';
import { ClipLoader } from "react-spinners";

interface LoadingProps {
    isLoading: boolean;
};

const Loading = ({ isLoading }: LoadingProps) => {
    console.log(isLoading);

    return (
        <div className='spiner-loading'>
            <ClipLoader
                color={"#ffffff"}
                loading={isLoading}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default Loading;