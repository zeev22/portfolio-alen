import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profilePic from "../assets/photo.png";
import MenuBtn from "../assets/menu.png";
import "../Hero.css";

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            toggleMenu(); // Close the menu after clicking
        }
    };

    return (
        <section className="hero-container">
            <div className="hero-topBlur" />
            <div className="navbar">
                <a className="title" href="/">Portfolio</a>
                <div className="menu">
                    <img
                        className="menuBtn"
                        src={MenuBtn}
                        alt="Menu Button"
                        onClick={toggleMenu}
                    />
                    <ul className={`menuItems ${isMenuOpen ? 'active' : ''}`}>
                        <li>
                            <a
                                href="#about"
                                onClick={() => { scrollToSection('about'); }}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#experiences"
                                onClick={() => { scrollToSection('experiences'); }}
                            >
                                Experiences
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                onClick={() => { scrollToSection('projects'); }}
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#blog-post2"
                                onClick={() => { scrollToSection('blog-post2'); }}
                            >
                                Blog
                            </a>
                        </li>
                        <li>
                            <div className="menu-end">
                                <div className="social-icons">
                                    <a
                                        href="https://github.com/your-username"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-icon"
                                    >
                                        <FaGithub />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/alen-rose-dumalagan-682812359/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-icon"
                                    >
                                        <FaLinkedin />
                                    </a>
                                </div>
                                <button
                                    onClick={() => { scrollToSection('contact'); }}
                                    className="connectBtn"
                                >
                                    Let's Connect
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="hero-content">
                <h1 className="hero-title">Hi, I'm Alen</h1>
                <p className="hero-description">
                    I'm a passionate Frontend Developer with experience in creating responsive and user-friendly websites. My focus is on building engaging web experiences that are not only visually appealing but also functional and efficient.
                </p>
                <a href="#about" className="hero-contactBtn">
                    Learn More About Me
                </a>
            </div>
            <div className="hero-bottomBlur" />
            <img
                className="hero-img"
                src={profilePic}
                alt="Hero Image of me"
            />
        </section>
    );
};

export default Hero;