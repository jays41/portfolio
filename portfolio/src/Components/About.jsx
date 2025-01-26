import React from 'react';
import './Base.css';
import info from '../Info.json'

const About = () => {

    return (
        <section className="section" id="About">
            <header>
                <h1>{info.name}</h1>
            </header>

            <div className="description">
                <p>{info.description}</p>
            </div>
        </section>
    );
}

export default About;
