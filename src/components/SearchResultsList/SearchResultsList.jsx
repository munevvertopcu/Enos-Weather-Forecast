import React from 'react';
import './SearchResultsList.style.css';

function SearchResultsList({ weatherData, handleClick }) {
    
    return (
        <div className='results-list' onClick={handleClick}>
            {weatherData?.location?.name}
        </div>
    )
}



export default SearchResultsList;