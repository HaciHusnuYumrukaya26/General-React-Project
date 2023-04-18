import React from "react";
import "./searchBox.styles.css";
const SearchBox = ({ className, placeholder, onChangeHandler }) => {
  return (
    <div>
      <input
        type="search"
        placeholder={placeholder} 
        className={`searchBox ${className}`}
        onChange={onChangeHandler}
      ></input>
    </div>
  );
};

export default SearchBox;
