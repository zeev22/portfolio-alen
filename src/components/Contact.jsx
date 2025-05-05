import { useState } from "react";
import contactImg from "../assets/connect.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      setButtonText("Send");
      let result = await response.json();
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        setStatus({ success: true, message: 'Message sent successfully' });
      } else {
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      }
    } catch (error) {
      setButtonText("Send");
      setStatus({ success: false, message: 'Network error, please try again later.' });
    }
  };

  return (
    <section className="contact-container" id="connect">
      <div className="content-wrapper">
        <div className="image-col">
          <TrackVisibility>
            {({ isVisible }) =>
              <img
                className={isVisible ? "animate__animated animate__zoomIn contact-image" : "contact-image"}
                src={contactImg}
                alt="Contact Us"
                onError={(e) => { e.target.src = '/fallback-image.svg'; }}
              />
            }
          </TrackVisibility>
        </div>
        <div className="form-col">
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn contact-form-container" : "contact-form-container"}>
                <h2 className="intro-title">Get in Touch</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group half">
                      <input
                        type="text"
                        value={formDetails.firstName}
                        placeholder="First Name"
                        onChange={(e) => onFormUpdate('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group half">
                      <input
                        type="text"
                        value={formDetails.lastName}
                        placeholder="Last Name"
                        onChange={(e) => onFormUpdate('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group half">
                      <input
                        type="email"
                        value={formDetails.email}
                        placeholder="Email Address"
                        onChange={(e) => onFormUpdate('email', e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group half">
                      <input
                        type="tel"
                        value={formDetails.phone}
                        placeholder="Phone No."
                        onChange={(e) => onFormUpdate('phone', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group full">
                      <textarea
                        rows="6"
                        value={formDetails.message}
                        placeholder="Message"
                        onChange={(e) => onFormUpdate('message', e.target.value)}
                        required
                        className="message-field"
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group full text-center">
                      <button type="submit"><span>{buttonText}</span></button>
                    </div>
                    {status.message && (
                      <div className="form-group full text-center">
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            }
          </TrackVisibility>
        </div>
      </div>
    
    </section>
  );
};

export default Contact;