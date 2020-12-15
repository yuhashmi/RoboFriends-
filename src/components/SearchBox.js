import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <dl className='pa2'>
            <input 
            className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='search robots'
            onChange={searchChange} 
            />
        </dl>
    );
}

export default SearchBox