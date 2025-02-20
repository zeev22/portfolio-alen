import React from "react";
import profilePic from "../assets/profile.png";
import "../Hero.css";


const Hero = () => {
    return (
        <>

            <section className="hero-container">
                <div className="navbar">
                    <a className="title" href="/">Portfolio</a>
                    <ul className="menuItems">
                        <li><a href="#about">About </a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="hero-content">
                    <h1 className="hero-title">Hi, I'm Alen</h1>
                    <p className="hero-description">
                    I'm a passionate <strong>UI/UX designer</strong>  and <strong>frontend developer</strong> in the making. Currently, I'm a student exploring the intersection of design and technology, aiming to create visually appealing and user-friendly digital experiences
                    </p>
                    <a href="#about" className="hero-contactBtn">Contact Me</a>



                </div>

                <img className="hero-img" src={profilePic} alt="Hero Image of me" />
                <div className="hero-topBlur" />
                <div className="hero-bottomBlur" />
            </section>
        </>
    );
}

export default Hero;
