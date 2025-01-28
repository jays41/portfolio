import React from 'react'
import download from "downloadjs";
import Jay_Shah_CV from '../Jay_Shah_CV.pdf';

const CV = () => {

    const handleDownload = () => {
        const url = 'src/Jay_Shah_CV.pdf';
        const fileName = 'Jay_Shah_CV';
        fetch(url)
        .then((response) => response.blob())
        .then((blob) => download(blob, fileName))
        .catch((err) => console.error('Download failed', err));
    }

    return (
        <section className="section" id="CV">
            <h2>My CV</h2>
            <button className="btn" onClick={handleDownload}>Download File</button>
            <p>Alternatively, open in the browser
            <a href={Jay_Shah_CV} target="_blank" rel="noreferrer"> here</a>
            </p>
        </section>
    )
}

export default CV