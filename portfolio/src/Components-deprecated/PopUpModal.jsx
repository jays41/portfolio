import React from 'react';
import './Modal.css';

const PopUpModal = ({ expanded, setExpanded, heading, description, tags=[], link='' }) => {

    return (
        <div className="modal-overlay" onClick={()=>setExpanded(false)}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <h3 style={{color: "purple", marginBottom: '15px'}}>{heading}</h3>
                <p style={{color: "black"}}>{description}</p>
                <button onClick={()=>setExpanded(false)} style={{ marginTop: '25px', backgroundColor: 'purple' }}>Close</button>
            </div>
        </div>
)};

export default PopUpModal