'use client';
import React from 'react';

const Search_interface = () => {
    return (
        <div className='inner'>
            <form className='search-form'>
                <input type="text" className='search-form__input' />
                <button className='search-form__button'>검색</button>
            </form> {/* search-form */}
        </div>
    );
};

export default Search_interface;