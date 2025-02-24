import React from "react";
import "../About.css";
import { NavLink } from "react-router-dom";

// Import Assets
import AboutIcon from '../assets/me.png';
import HtmlIcon from '../assets/html.svg';
import CssIcon from '../assets/css.svg';
import JsIcon from '../assets/js.svg';
import KotlinIcon from '../assets/kotlin.svg';
import PhpIcon from '../assets/php.svg';
import CanvaIcon from '../assets/canva.svg';
import FigmaIcon from '../assets/figma.svg';
import PsIcon from '../assets/Ps.svg';
import CookIcon from '../assets/cook.png';
import CraftIcon from '../assets/craft.png';
import HobbiesIcon from '../assets/hobbies.svg';

const About = () => {
    return (
        <>
            <div className="navbar">
                <NavLink className="title" to="/">Portfolio</NavLink>
                <ul className="menuItems">
                    <li><NavLink to="/Hero">Home</NavLink></li>
                    <li><NavLink to="#projects">Projects</NavLink></li>
                    <li><NavLink to="#contact">Contact</NavLink></li>
                </ul>
            </div>

         
            <section className="about-container">
              
                <div className="intro-container">
                    <div className="intro-left">
                        <img src={AboutIcon} alt="Me working" className="intro-image" />
                    </div>
                    <div className="intro-right">
                        <h2 className="intro-title">About Me</h2>
                        <p className="intro-description">
                        Hi! I'm <strong>Alen Rose C. Dumalagan</strong>, a <strong>BSIT student at Western Mindanao State University</strong> and an aspiring <strong>UI/UX designer</strong> and <strong>frontend developer</strong>. I'm currently exploring the intersection of design and technology, striving to create visually appealing and user-friendly digital experiences.
                        </p>
                    </div>
                </div>

              
                <div className="skills-container">
                    <h3 className="section-title">Technical Skills</h3>
                    <div className="skills-grid">                  
                        <div className="skill-card">
                            <h4>UI/UX Design</h4>
                            <p>Creating stylish and user-friendly interfaces with accessibility in mind, using tools like Figma, Photoshop, and Canva.</p>
                            <div className="designer-icons">
                                <img src={CanvaIcon} alt="Canva" className="icon" />
                                <img src={FigmaIcon} alt="Figma" className="icon" />
                                <img src={PsIcon} alt="Photoshop" className="icon" />
                            </div>
                        </div>
                        
                        <div className="skill-card">
                            <h4>Frontend & Backend Development</h4>
                            <p>I build responsive and dynamic web applications, utilizing my experience with HTML, CSS, JavaScript, Kotlin, and PHP to create seamless digital experiences.</p>
                            <div className="frontend-icons">
                                <img src={HtmlIcon} alt="HTML" className="icon" />
                                <img src={CssIcon} alt="CSS" className="icon" />
                                <img src={JsIcon} alt="JavaScript" className="icon" />
                                <img src={KotlinIcon} alt="Kotlin" className="icon" />
                                <img src={PhpIcon} alt="PHP" className="icon" />
                            </div>
                        </div>
                    </div>
                    
                    <h3 className="section-title">Other Skills & Interests</h3>
                    <div className="skills-grid">
                        <div className="skill-card">
                            <h4>Baking & Cooking</h4>
                            <p>Passionate about experimenting with flavors and creating delicious dishes.</p>
                            <div className="personal-icons">
                                <img src={CookIcon} alt="Cooking" className="icon" />
                            </div>
                        </div>
                        <div className="skill-card">
                            <h4>Crafting</h4>
                            <p>Enjoy creating handmade crafts and DIY projects as a creative space.</p>
                            <div className="personal-icons">
                                <img src={CraftIcon} alt="Crafting" className="icon" />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="skills-container">
                    <h3 className="section-title">Career Goals</h3>
                    <div className="skills-grid">
                        <div className="skill-card">
                            <h4>Short-Term Goals</h4>
                            <p>Master UI/UX design and frontend development to build impactful projects and gain industry experience.</p>
                        </div>
                        <div className="skill-card">
                            <h4>Long-Term Goals</h4>
                            <p>Combine my tech skills and passion for baking to open a cozy, traditional café that becomes a beloved community hub.</p>
                        </div>
                    </div>
                </div>

                <div className="personal-touch-container">
                    <h3 className="section-title">Personal Touch</h3>
                    <div className="personal-touch-content">
                        <div className="personal-text">
                            <h4>Life Beyond Tech</h4>
                            <p>You'll probably find me in the kitchen, experimenting with new recipes or baking something sweet. Cooking is my little escape. It’s like designing, but with flavors instead of colors. I also love getting lost in a good movie or series, and music is a huge part of my life.</p>
                            <p><strong>Fun Fact:</strong> I can’t fall asleep without some kind of audio playing. Whether it’s music, an audiobook, or a podcast, complete silence just feels off.</p>
                        </div>
                        <div className="personal-image">
                            <img src={HobbiesIcon} alt="Hobbies" className="hobbies-icon" />
                        </div>
                    </div>
                </div>

                 <div className="cta-container">
                    <h3 className="section-title">Let's Work Together</h3>
                    <p className="section-text">
                        Interested in collaborating or discussing a project? Feel free to reach out! I'm always open to new opportunities and conversations.
                    </p>
                    <NavLink to="#contact" className="cta-button">Get in Touch</NavLink>
                </div>
            </section>
        </>
    );
};

export default About;
