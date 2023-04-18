import React,{useState} from 'react'
import styles from "./styles.module.css";

import Menu from "./Menu";
import items from "./data";
import Categories from "./Categories";
const allCategories = ["all", ...new Set(items.map((item) => item.category))]; //all categories like adana mersin tarsus
const Gallery = () => {
  const [menuItems, setMenuItems] = useState(items); //tatil bölgelerimiz
  const [activeCategory, setActiveCategory] = useState(""); //adana mı , mersin mi kategori
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className={styles.holiday}>
        <div className={styles.title}>
          <h2>Swimming Places in Cukurova</h2>
          <div className={styles.underline}></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
          setCategories={setCategories}
        />

        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default Gallery