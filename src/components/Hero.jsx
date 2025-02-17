import React from "react";
import profilePic from "../assets/profile.png";
import "../Hero.css";

const Hero = () => {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar">
                <a className="title" href="/">Portfolio</a>
                <ul className="menuItems">
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            {/* Hero Section */}
            <section className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">Hi, I'm Alen</h1>
                    <p className="hero-description">
                        I'm a passionate Frontend Developer with experience in creating responsive and user-friendly websites. My focus is on building engaging web experiences that are not only visually appealing but also functional and efficient.
                    </p>
                    <a href="mailto:dumalaganale22@gmail.com" className="hero-contactBtn" >Contact Me</a>
                </div>
                <img className="hero-img" src={profilePic} alt="Hero Image of me" />
                <div className="hero-topBlur" />
                <div className="hero-bottomBlur" />
            </section>
        </>
    );
}

export default Hero;
