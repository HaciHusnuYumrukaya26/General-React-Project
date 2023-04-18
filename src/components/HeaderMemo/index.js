import React from "react";

const HeaderMemo = ({ number, increment }) => {
  return (
    <div>
      HeaderMemo-{number}
      <br />
      <button onClick={increment}>Click</button>
    </div>
  );
};

export default React.memo(HeaderMemo);
