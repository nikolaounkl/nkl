import React, {useContext} from 'react';
import HeroNavbar from './HeroNavbar';
import {ThemeContext} from '../contexts/ThemeContext';

const Hero = () => {
    const {darkMode} = useContext(ThemeContext);
    const theme = darkMode ? "hero is-dark is-fullheight" : "hero is-light is-fullheight";
    return (
        <section className={theme}>
            <HeroNavbar />
            <div className="hero-body">
                <div className="container has-text-centered">
                    <i className="fas fa-user-astronaut fa-4x"></i>
                    <br/><br/>
                    <h1 className="title">
                        Welcome
                    </h1>
                    <h2 className="subtitle">
                        to my react planet
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Hero
