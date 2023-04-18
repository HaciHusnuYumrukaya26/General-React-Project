import React,{useState} from "react";

const Count = () => {
    const [count,setCount]=useState(0);
    const azalt=()=>{
        setCount(count-1);
    }
  return <div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Arttır</button>
    <button onClick={azalt}>Azalt</button>

  </div>;
};

export default Count;
