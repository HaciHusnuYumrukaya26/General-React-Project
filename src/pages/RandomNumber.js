import React, { useState } from "react";

const RandomNumber = () => {
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const [random, setRandom] = useState();

  const changeMax = (e) => {
    setMax(Number(e.target.value));
  };

  const changeMin = (e) => {
    setMin(Number(e.target.value));
  };

  const generateRandom = () => {
    setRandom(Math.floor(Math.random() * (max - min + 1) + min));
  };

  return (
    <div>
      <div className="container mt-5 p-3 border border-1 border-secondary bg-secondary text-white rounded">
        <h1>Random Number</h1>
        <p>Random Number:{random}</p>
        <input
          type="number"
          className="form-control mb-2"
          placeholder="enter a min number"
          onChange={changeMin}
        />
        <input
          type="number"
          className="form-control mb-2"
          placeholder="enter a max number"
          onChange={changeMax}
        />
        <button
          onClick={generateRandom}
          className="btn btn-success border border-1 border-dark p-2"
        >
          Give a random number
        </button>
      </div>
    </div>
  );
};

export default RandomNumber;
