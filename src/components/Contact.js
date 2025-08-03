import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();

  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs
      .sendForm(
        "service_lb7zx6d",    
        "template_fepiq5d",   
        formRef.current,
        "v95jMuqkfN1hX8uf1"   
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setButtonText("Send");
          formRef.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("Failed to send. Try again later.");
          setButtonText("Send");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Hey there!</h2>
      <p className="description">
        Collab? Code? Coffee? Compliments? Whatever you're here for, my inbox is open (and yes, it accepts memes too). <br />
        Drop me a message and I'll get back to you as soon as possible!
      </p>

      <div className="contact-info">
        <div className="info-item">
          <FaEnvelope className="icon" />
          <div>
            <strong>Email</strong>
            <p>swizaljanice100@gmail.com</p>
          </div>
        </div>
        <div className="info-item">
          <FaGithub className="icon" />
          <div>
            <strong>GitHub</strong>
            <p>Swizaljanice</p>
          </div>
        </div>
        <div className="info-item">
          <FaLinkedin className="icon" />
          <div>
            <strong>LinkedIn</strong>
            <p>Swizal Dsouza</p>
          </div>
        </div>
      </div>

      <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="email"
            name="from_email"
            placeholder="Enter Your Email"
            required
          />
          <input
            type="text"
            name="from_name"
            placeholder="Enter Your Name"
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="What's up?"
          rows="5"
          required
        ></textarea>
        <button type="submit">{buttonText}</button>
        {status && <p className="status-message">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
