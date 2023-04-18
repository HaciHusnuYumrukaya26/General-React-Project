import React,{useState} from "react";
import styles from "../pages/styles.module.css";
import { send } from "../socketApi";

const Palette = () => {
    const [color,setColor]=useState("");
  return <div className={styles.palette}>
    <input type="color" value={color} onChange={(e)=>setColor(e.target.value)}/>
    <button  onClick={()=>send(color)}>Click</button>
    {color}
  </div>;
};

export default Palette;
