import React from 'react';
import { ClipLoader } from "react-spinners";

interface LoadingProps {
    isLoading: boolean;
};

const Loading = ({ isLoading }: LoadingProps) => {
    return (
        <div className='spiner-loading'>
            <ClipLoader
                color={"#ffffff"}
                loading={true}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default Loading;