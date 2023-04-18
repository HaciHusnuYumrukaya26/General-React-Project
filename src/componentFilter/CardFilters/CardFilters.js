import React from "react";
import "./cardfilters.style.css";

const CardFilters = ({monster}) => {
  const {name,id,email}=monster
  return <div className="card-container" key={id}>
    <img className="image" alt={`Monster ${name}`}
     src={`https://robohash.org/${id}?set=set${id}&size=180x180`}/>
    <h2>{name}</h2>
    <p>{email}</p>
  </div>;
};

export default CardFilters;
