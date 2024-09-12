import React from 'react';
import './SearchBar.style.css';
import search_icon from '../../assets/search_icon.svg';

function SearchBar(props) {

    return (
        <div className='input-container'>
            <input
                type="text"
                id="searchText"
                placeholder="Search a City"
                value={props.searchTextInput}
                onChange={(text) => {
                    props.handleChange(text.target.value);
                }}
                onKeyDown={(e) => {
                    console.log(e)
                    props.onKeyDownHandler(e.key);
                }}
            />
            <img className="search-icon" src={search_icon} />
        </div>
    )
}

export default SearchBar;