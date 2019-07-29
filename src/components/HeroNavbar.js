import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const HeroNavbar = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext);
    const icon = darkMode
        ? "fas fa-radiation fa-lg has-text-warning"
        : "fas fa-radiation fa-lg has-text-dark";
    return (
        <div className="hero-head">
            <div className="container">
                <header className="navbar">
                    <div className="navbar-brand">
                        <span className="navbar-item">
                            <h1 className="is-size-4">NKL</h1>
                        </span>
                    </div>
                    <div className="navbar-item">
                        <span className="icon" onClick={toggleTheme}>
                            <i className={icon} />
                        </span>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default HeroNavbar;
