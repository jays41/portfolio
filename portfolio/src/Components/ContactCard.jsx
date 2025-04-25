// import React, { useState } from 'react';
// import { motion } from 'framer-motion'; 
// import emailjs from '@emailjs/browser';
import './ContactCard.css';

const ContactCard = () => {
    // const [expanded, setExpanded] = useState(false);
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     message: '',
    // });
    // const [status, setStatus] = useState('');

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     emailjs.send(
    //         import.meta.env.VITE_EMAILJS_SERVICE_ID,
    //         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    //         formData,
    //         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    //     )
    //     .then((response) => {
    //         console.log('SUCCESS!', response.status, response.text);
    //         setStatus('Message sent successfully!');
    //         setFormData({ name: '', email: '', message: '' }); // Reset form
    //     })
    //     .catch((err) => {
    //         console.error('FAILED...', err);
    //         setStatus('Failed to send message. Please try again.');
    //     });
    // };

    return (
        <div className="relative flip-card">
            {/* <div className={`absolute flip-card-inner ${expanded ? 'flipped' : ''}`}>
                <button className="flip-card-front" onClick={() => setExpanded(true)}>
                    <h3>Contact Me</h3>
                    <p>(Click me!)</p>
                </button>

                <div className="flip-card-back">
                    <form onSubmit={handleSubmit}>
                        <div className="mt-5">
                            <p>
                                <label htmlFor="name">Name: </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </p>
                            <p>
                                <label htmlFor="email">Email: </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </p>
                            <p>
                                <label htmlFor="message">Message: </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </p>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                    {status && <p className="status-message">{status}</p>}
                </div>
            </div>
            <div className={`absolute flip-card-inner2 ${expanded ? 'flipped2' : ''}`}>
                <button className="flip-card-front" onClick={() => setExpanded(true)}>
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
                    hidden: { opacity: 0, x: 0, y: 125 },
                    visible: { opacity: 1, x: 327, y: 125 },
                }}
            >
                <button className="ccbutton mt-5" onClick={() => { setExpanded(false); }}>&lt;</button>
            </motion.div> */}
        </div>
    );
};

export default ContactCard;
