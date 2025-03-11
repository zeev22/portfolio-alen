import React, { useState } from "react";
import profilePic from "../assets/profile.png";
import MenuBtn from "../assets/menu.png";
import "../Hero.css";
import { Link, NavLink } from "react-router-dom";

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    };

    return (
        <>
            <section className="hero-container">
                <div className="navbar">
                    <a className="title" href="/">Portfolio</a>
                    <div className="menu">
                        <img
                            className="menuBtn"
                            src={MenuBtn}
                            alt="Menu-Button"
                            onClick={toggleMenu}
                        />
                        <ul className={`menuItems ${isMenuOpen ? 'active' : ''}`}>
                            <li>
                                <NavLink
                                    to="/About"
                                    onClick={toggleMenu}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    onClick={toggleMenu}
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    onClick={toggleMenu}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="hero-content">
                    <h1 className="hero-title">Hi, I'm Alen</h1>
                    <p className="hero-description">
                        I'm a passionate Frontend Developer with experience in creating responsive and user-friendly websites. My focus is on building engaging web experiences that are not only visually appealing but also functional and efficient.
                    </p>
                    <NavLink to="/about" className="hero-contactBtn">
                        Learn More About Me
                    </NavLink>
                </div>

                <img
                    className="hero-img"
                    src={profilePic}
                    alt="Hero Image of me"
                />
                <div className="hero-topBlur" />
                <div className="hero-bottomBlur" />
            </section>
        </>
    );
}

export default Hero;