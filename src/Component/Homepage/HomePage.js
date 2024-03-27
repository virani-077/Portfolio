import React, { useEffect } from "react";
import TextEffect from "./TextEffect";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <div className="py-20 flex flex-col gap-10 justify-center items-center h-screen w-full">
        <h1 className="text-7xl font-bold text-center " data-aos="fade-right">
          Vishal <span className="text-orange-400">Virani</span>
        </h1>
        <TextEffect />
        <div className="flex justify-center">
          <Link to="contect">
            <button
              className="px-4 py-2 text-xl bg-white text-black border-none cursor-pointer transition-all duration-300 hover:box-shadow-lg hover:text-orange-500 hover:shadow-md hover:shadow-yellow-400/40 font-semibold"
              data-aos="fade-up"
            >
              Contect Me
            </button>
          </Link>
          {/* <input type="color" /> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
