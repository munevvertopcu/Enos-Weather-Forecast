import React from 'react';
import './Header.style.css';
import logo from '../../assets/logo.svg';

function Header() {
    return (
        <div className='header-container'>
            <h2 className='header-text'>Enos Weather Forecaster</h2>
            <img src ={logo}/>
        </div>
    )
}

export default Header;