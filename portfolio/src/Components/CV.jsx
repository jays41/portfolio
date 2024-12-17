import React from 'react'
import download from "downloadjs";

const CV = () => {

    const handleDownload = () => {
        const url = 'src/CV.pdf';
        const fileName = 'CV';
        fetch(url)
        .then((response) => response.blob())
        .then((blob) => download(blob, fileName))
        .catch((err) => console.error('Download failed', err));
    }

    return (
        <section className="section" id="CV">
            <h2>My CV</h2>
            <button onClick={handleDownload}>Download File</button>
        </section>
    )
}

export default CV