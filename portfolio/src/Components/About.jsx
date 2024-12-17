import React from 'react';
import './Base.css';
import info from '../Info.json'

const About = () => {

    return (
        <section className="section" id="About">
            <header>
                <h1>{info.name}</h1>
                <p className="contact-info">
                    {info.email} | {info.mobile}
                </p>
            </header>

            <div className="container">
                <p>Description...</p>
            </div>
        </section>
    );
}

export default About;
