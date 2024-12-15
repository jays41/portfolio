import React from 'react';
import './Base.css';
import info from './Info.json'

const About = () => {

    return (
        <div>
            <header>
                <h1>{info.name}</h1>
                <p className="contact-info">
                    {info.email} | {info.mobile}
                </p>
            </header>

            <div className="container">

                
            </div>
        </div>
    );
}

export default About;
