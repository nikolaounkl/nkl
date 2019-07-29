import React, {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

const HeroNavbar = () => {
    const {darkMode, toggleTheme} = useContext(ThemeContext);
    const icon = darkMode ? "fas fa-sun fa-lg" : "fas fa-moon fa-lg";
    return (
        <div className="hero-head">
            <header className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <span className="navbar-item"><h1 className="is-size-4">NKL</h1></span>
                    </div>
                    <div id="navbarMenuHeroC" className="navbar-menu">
                        <div className="navbar-end">
                            <span className="navbar-item">
                                <button onClick={toggleTheme} className="button is-dark" href="#" rel="noopener noreferrer">
                                    <span className="icon has-text-warning">
                                        <i className={icon}></i>
                                    </span>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default HeroNavbar
