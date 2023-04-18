import React, { useEffect, useState } from "react";
import Palette from "../componentColors/Palette";
import styles from "./styles.module.css";
import { init, subscribe } from "../socketApi";
const Colors = () => {
  const [activeColor, setActiveColor] = useState("#ffffff");
  useEffect(() => {
    init();
    subscribe((color) => {
      setActiveColor(color);
    });
  }, []);

  return (
    <div className={styles.Colors} style={{ backgroundColor: activeColor }}>
      <Palette  />
    </div>
  );
};

export default Colors;
