import React from "react";
// import ServiceSlider from "./ServiceSlider";
// import ServiceSli from "./ServiceSli";
import "../Style.css";
// import WebDevelopment from "../Service/software_4224716.svg";
// import AppDev from "../Service/computer_6639296.svg";
// import WEbdesign from "../Service/television_2958427.svg";
import ServiceSli from "./ServiceSli";

const ServicePage = () => {
  return (
    <>
      <p className="text-6xl font-bold text-center py-20">Service</p>

      <div className="flex flex-col md:flex-row lg:flex-row gap-8 px-10 box-container">
        {ServiceSli.map((val, index) => {
          return (
            <div key={index} className="box">
              <img src={val.img} alt="" className="m-auto max-h-20"/>
              <h1 className="text-2xl font-bold  py-10 text-center text-black">
                {val.h1}
              </h1>
              <p className="text-xl text-left text-black">{val.p}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ServicePage;
