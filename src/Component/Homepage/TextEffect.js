import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TextEffect = () => {
  return (
    <div>
      <p className="text-3xl font-bold text-center lg:text-left">
        I' Am a{" "}
        <span className="text-orange-400">
          <Typewriter
            words={[
              "< Front-End-Developer ",
              "< Web Developer ",
              "< Freelancer ",
              "< Full-Stake Developer ",
            ]}
            loop={4}
            cursor
            cursorStyle="/>"
            typeSpeed={100}
            deleteSpeed={40}
            delaySpeed={1200}
          />
        </span>
      </p>
    </div>
  );
};

export default TextEffect;
