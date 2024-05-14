import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycby6yLfmm7p1CrvqT1oPhfju93ArsVxyiT6LsSXiOabmcyi-OgLlgECngbUCAudPkvpT/exec";

  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const msg = document.getElementById("msg");

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        form.reset();
        setTimeout(() => {
          setSuccessMessage("");
        }, 10000); // 10 seconds
      } else {
        console.log("error", response.statusText);
      }
    } catch (error) {
      console.error("Error!", error.message);
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-screen">
        <div className="pb-8 mt-16 w-full flex flex-col justify-center items-center mx-auto">
          <h3 className="text-4xl pb-2 font-bold inline border-b-4 border-gray-400">
            Contact Me
          </h3>
          <h3 className="mt-6">
            Submit the form below to get in touch with me
          </h3>
        </div>

        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              data-aos="slide-up"
              data-aos-duration="500"
              required
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 m-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              data-aos="slide-up"
              data-aos-duration="700"
              required
              type="email"
              name="email"
              placeholder="Enter your e-mail"
              className="p-2 m-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              data-aos="fade-in"
              data-aos-duration="900"
              name="message"
              required
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 m-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-0"
            >
              Let's Talk
            </button>
          </form>
        </div>
        <div id="msg" className="text-white">
          {successMessage}
        </div>
      </div>
    </div>
  );
};

export default Contact;
