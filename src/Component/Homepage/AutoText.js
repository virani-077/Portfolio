import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Autotext = () => {
  const { Text } = useTypewriter({
    words: [" Developer", " Designer", " PhotoGrapher"],
    loop: {},
  });
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-bold">
        I' Am a <span className="text-red-600">{Text}</span>
        <span>
          <Cursor />
        </span>
      </h1>
    </div>
  );
};

export default Autotext;
