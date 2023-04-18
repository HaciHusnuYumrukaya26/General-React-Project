import React, { useState, useEffect } from "react";
import Counter from "../components/Counter";

const Effect = () => {
  const [number, setNumber] = useState(0);
	const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    console.log("state güncelledik");
  }, [number]);

  return (
    <div>
      <h1>{number}</h1>
      <button
        className="btn btn-secondary"
        onClick={() => setNumber(number + 1)}
      >
        Click
      </button>
      <br />
      {isVisible && <Counter />}

      <br />

      <button onClick={() => setIsVisible(!isVisible)}>Toggle Counter</button>
    </div>
  );
};

export default Effect;
