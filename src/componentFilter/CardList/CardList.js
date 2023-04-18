import React from "react";
import CardFilters from "../CardFilters/CardFilters";
import "./cardlist.styles.css";
const CardList = ({monsters}) => {
  return <div className="card-list">
    {
      monsters.map((monster)=>{
        return <CardFilters key={monster.id} monster={monster}/>
      })
    }
  </div>;
};

export default CardList;
