import React from "react";
import Vishal from "./Vishal.jpg";
import TextEffect from "../Homepage/TextEffect";
import Resume from "./Vishal-Virani-Resume.pdf"
// import Demo from "../Demo";

const AboutPage = () => {
  return (
    <>
      <div className="lg:flex lg:justify-center lg:items-start lg:py-16 lg:gap-20 py-20 ">
        {/* Image */}
        <div className="lg:w-80 lg:mr-8 mb-8 lg:mb-0 mx-5 ">
          <img
            src={Vishal}
            className="w-full rounded pt-5"
            alt="Vishal Virani"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-10  px-5">
          <h1 className="text-4xl lg:text-6xl font-bold text-center lg:text-left">
            Vishal <span className="text-orange-400">Virani</span>
          </h1>

          <TextEffect />

          <hr className="" />

          <p className="text-sm lg:text-base text-center lg:text-left">
            My name is <span className="text-orange-400">Vishal Virani</span>.
            <br />
            I'm very passionate and dedicated to my work. With 20 years
            <br />
            experience as a professional graphic WebDevelopment, I have acquired
            the
            <br />
            skills and knowledge.
          </p>

          <div className="flex justify-center lg:justify-start">
            <a href={Resume} download>
              <button className="px-4 py-2 text-base lg:text-xl bg-white text-black border-none cursor-pointer transition-all duration-300 hover:box-shadow-lg hover:text-orange-500 hover:shadow-md hover:shadow-yellow-400/40 font-semibold">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
