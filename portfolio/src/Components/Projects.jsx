import React from 'react'
import { useState } from 'react'
import ProjectTile from './ProjectTile';
import Carousel from './Carousel';
import info from '../Info.json'

const Projects = () => {

    const [isShowing, show] = useState(false);

return (
    <section className="section">
        <h2>PERSONAL PROJECTS</h2>
        {isShowing ? <button onClick={() => {show(false)}}>Show</button> : 
        <>
            <p><strong>King’s Capital (King’s Business Club)</strong> - London, Quantitative Trading Associate, October 2024 - Present</p>
            <p>Worked with the Quant department to develop algorithms and execute trades.</p>
            <p>Drafted papers on quantitative strategies, including LSTMs in prediction strategies.</p>
            <p><strong>Financial Dashboard with Stock Predictor</strong></p>
            <p>Developed an LSTM model in TensorFlow to forecast stock prices.</p>
            <p>Built a sentiment analysis tool for evaluating investor sentiment based on news and social media.</p>
            <p>Designed a UI with JavaScript and a backend in Python using Flask.</p>
            <button onClick={() => {show(true)}}>Hide</button>
            <Carousel content={info.projects.personal} />
            <Carousel content={info.projects.kcap} />
            <Carousel content={info.projects.university} />
        </>
        }
    </section>
)
}

export default Projects