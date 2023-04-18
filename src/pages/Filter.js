import React, { useState, useEffect } from "react";
import CardList from "../componentFilter/CardList/CardList";
import SearchBox from "../componentFilter/SearchBox/SearchBox";
import styles from "./styles.module.css";
const Filter = () => {
  const [monsters, setMonster] = useState([]);
  const [searchField, setSearchField] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonster(users));
  }, []);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredMonster = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className={styles.filterBody}>
      <h1 className={styles.appTitle}>Monster Rolodex</h1>
      <SearchBox
        className="monsterSearchBox"
        placeholder="Search Monsters"
        onChangeHandler={onSearchChange}
      />
      <CardList
       monsters={filteredMonster}
       />
    </div>
  );
};

export default Filter;
