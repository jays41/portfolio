import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import './ContactCard.css';

const ContactCard = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="relative flip-card">
        <div className={`absolute flip-card-inner ${expanded ? 'flipped' : ''}`}>
            <button className="flip-card-front" onClick={() => setExpanded(true)}>
                <h3>Contact Me</h3>
                <p>(Click me!)</p>
            </button>

            <div className="flip-card-back">
                <form>
                    <div className="mt-5">
                        <p>
                            <label htmlFor="name">Name: </label>
                            <input type="text" id="name" name="name" required />
                        </p>
                        <p>
                            <label htmlFor="email">Email: </label>
                            <input type="email" id="email" name="email" required />
                        </p>
                        <p>
                            <label htmlFor="message">Message: </label>
                            <textarea id="message" name="message" required></textarea>
                        </p>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        <div className={`absolute flip-card-inner2 ${expanded ? 'flipped2' : ''}`}>
            <button className=" flip-card-front" onClick={() => setExpanded(true)}>
                <h3>Contact Me</h3>
                <p>(Click me!)</p>
            </button>

            <div className="flip-card-back">
                <form>
                    <div>
                        
                        <p>to fill</p>
                        
                    </div>
                </form>
            </div>
        </div>
        <motion.div
            initial="hidden"
            whileInView={expanded ? "visible" : "hidden"}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: expanded ? 1 : 0, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: 0, y: 125},
                visible: { opacity: 1, x: 327, y: 125 },
            }}
            >
            <button className="ccbutton mt-5" onClick={()=>{setExpanded(false)}}>&lt;</button>
        </motion.div>
        </div>
    );
};

export default ContactCard;
