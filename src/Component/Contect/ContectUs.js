import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

const ContectUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send message via Twilio
      await axios.post("/send-message", formData);
      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      alert(
        "Hello " +
          formData.name +
          " ! Failed to send message. Please try again later."
      );
    }
  };

  return (
    <div className="text-white pt-20 flex justify-center m-5">
      <div className="lg:md:w-3/6 m-auto px-4 bg-neutral-400 rounded-lg">
        <section className="m-4">
          <h2 className="h1-responsive font-bold text-center text-black text-3xl mb-4">
            Contact us
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>

          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-box">
                      <input
                        required
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <label htmlFor="name">Your name</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-box">
                      <input
                        required
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <label htmlFor="email">Your email</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="input-box">
                      <input
                        required
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <label htmlFor="message">Your message</label>
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="4"
                        className="form-control md-textarea w-full text_area rounded-lg"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="text-center lg:text-right text-md-left pt-5">
                  <button className="px-5 py-2 text-base lg:text-xl bg-white text-black rounded-2xl cursor-pointer transition-all duration-300 hover:box-shadow-lg hover:text-orange-500 hover:shadow-md hover:shadow-yellow-400/40 font-semibold">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContectUs;
