import React from 'react'

const ContactForm = () => {
  return (
    <section className="section" id="ContactForm">
        <h2>Contact Me</h2>
        <form>
            <div>
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
    </section>
  )
}

export default ContactForm