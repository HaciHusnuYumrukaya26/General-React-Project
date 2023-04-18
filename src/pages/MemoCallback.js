import React, { useState, useCallback } from "react";
import HeaderMemo from "../components/HeaderMemo";

const MemoCallback = () => {
  const [number, setNumber] = useState(0);
  // const [text, setText] = useState("");

  const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1);
  }, []);

  return (
    <div>
      <HeaderMemo increment={increment} />
      <hr />
      <h1>{number}</h1>
      {/* <button onClick={()=>setNumber(number+1)}>Click</button> */}
      {/* <input value={text} onChange={({ target }) => setText(target.value)} /> */}
    </div>
  );
};

export default MemoCallback;
