import React from 'react';
import './Base.css';

const fs = require('fs');
const path = require('path');

// get info object
const infoPath = path.join(__dirname, 'Info.json');
const info = JSON.parse(fs.readFileSync(infoPath, 'utf8'));

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
