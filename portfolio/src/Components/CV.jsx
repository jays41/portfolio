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
        <>
            <div>My CV</div>
            <button onClick={handleDownload}>Download File</button>
        </>
    )
}

export default CV