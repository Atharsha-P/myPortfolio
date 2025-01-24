import React from 'react';
import './Contact.css'; // Importing the CSS file

function Contact() {
  return (
    <section id="contact">
      <div className="dialog-box">
        <h2>Contact Me</h2>
        <p>You can reach me at: <a href="mailto:atharsha.p2023ai-ds@sece.ac.in">atharsha.p2023ai-ds@sece.ac.in</a> | 8870455742</p>
        <p>
          Connect with me on 
          <a href="https://www.linkedin.com/in/atharsha-p-/" target="_blank" rel="noopener noreferrer"> LinkedIn</a> | 
          Follow me on 
          <a href="https://github.com/Atharsha-P" target="_blank" rel="noopener noreferrer"> GitHub</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
