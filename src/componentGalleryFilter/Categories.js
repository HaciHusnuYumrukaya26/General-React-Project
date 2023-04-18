import React from 'react';
import styles from "./styles.module.css";

export default function Categories({categories,filterItems ,activeCategory}) {
  return (
    <div className={styles["btn-container"]}>
      {categories.map((category,index)=>{
        return(
          <button
          type='button'
          className={styles[`${activeCategory === category ? "filter-btn active" : "filter-btn"}`]}
          key={index}
          onClick={()=>filterItems(category)}
          >{category}</button>
        )
      })}
    </div>
  )
}