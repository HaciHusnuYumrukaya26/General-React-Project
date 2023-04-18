import React from "react";
import styles from "./styles.module.css";
const Popular = () => {
  const products = [
    {
      name: "Tiles and Porcelians",
      image:
        "https://woodmart.xtemos.com/megamarket/wp-content/uploads/sites/6/2022/04/tiles-and-porcelain.png.webp",
      count: 13,
    },
    {
      name: "Tiles and Porcelians",
      image:
        "https://woodmart.xtemos.com/megamarket/wp-content/uploads/sites/6/2022/04/tiles-and-porcelain.png.webp",
      count: 20,
    },
    {
      name: "Tiles and Porcelians",
      image:
        "https://woodmart.xtemos.com/megamarket/wp-content/uploads/sites/6/2022/04/tiles-and-porcelain.png.webp",
      count: 16,
    },
    {
      name: "Tiles and Porcelians",
      image:
        "https://woodmart.xtemos.com/megamarket/wp-content/uploads/sites/6/2022/04/tiles-and-porcelain.png.webp",
      count: 24,
    },
    {
      name: "Tiles and Porcelians",
      image:
        "https://woodmart.xtemos.com/megamarket/wp-content/uploads/sites/6/2022/04/tiles-and-porcelain.png.webp",
      count: 18,
    },
    {
      name: "Tiles and Porcelians",
      image:
        "https://woodmart.xtemos.com/megamarket/wp-content/uploads/sites/6/2022/04/tiles-and-porcelain.png.webp",
      count: 20,
    },
    {
      name: "Tiles and Porcelians",
      image:
        "https://woodmart.xtemos.com/megamarket/wp-content/uploads/sites/6/2022/04/tiles-and-porcelain.png.webp",
      count: 10,
    },
    {
      name: "Tiles and Porcelians",
      image:
        "https://woodmart.xtemos.com/megamarket/wp-content/uploads/sites/6/2022/04/tiles-and-porcelain.png.webp",
      count: 14,
    },
    {
      name: "Tiles and Porcelians",
      image:
        "https://woodmart.xtemos.com/megamarket/wp-content/uploads/sites/6/2022/04/tiles-and-porcelain.png.webp",
      count: 17,
    },
    {
      name: "Tiles and Porcelians",
      image:
        "https://woodmart.xtemos.com/megamarket/wp-content/uploads/sites/6/2022/04/tiles-and-porcelain.png.webp",
      count: 15,
    },
    {
      name: "Tiles and Porcelians",
      image:
        "https://woodmart.xtemos.com/megamarket/wp-content/uploads/sites/6/2022/04/tiles-and-porcelain.png.webp",
      count: 12,
    },
    {
      name: "Tiles and Porcelians",
      image:
        "https://woodmart.xtemos.com/megamarket/wp-content/uploads/sites/6/2022/04/tiles-and-porcelain.png.webp",
      count: 20,
    },
  ];
  return (
    <div>
      <div className="container-xxl pb-5">
        <h1 className="p-3">Popular Categories</h1>
        <div className={styles.popularList}>
          {products.map((product) => (
            <div className={styles.popularListBox}>
              <img className={styles.Image} src={product.image} alt="resim" />
              <h5>{product.name}</h5>
              <span>{product.count} products</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.containerbg}>
        <div className="container-xxl">
          <div className={styles.popularList}>
            <div className={styles.popularListBox2}>
              <h2>Full Secured</h2>
              <p>
                We use a customized application specifically designed a testing
                gnose to keep away for people.
              </p>
            </div>
            <div className={styles.popularListBox2}>
              <h2>Full Secured</h2>
              <p>
                We use a customized application specifically designed a testing
                gnose to keep away for people.
              </p>
            </div>
            <div className={styles.popularListBox2}>
              <h2>Full Secured</h2>
              <p>
                We use a customized application specifically designed a testing
                gnose to keep away for people.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl pt-5">
      <h2 className="text-center">Shop by Popular Parts</h2>
        <div className={styles.popularList}>
          <button className={styles.buttons}>Bunper(5)</button>
          <button className={styles.buttons}>Bunper(5)</button>
          <button className={styles.buttons}>Bunper(5)</button>
          <button className={styles.buttons}>Bunper(5)</button>
          <button className={styles.buttons}>Bunper(5)</button>
          <button className={styles.buttons}>Bunper(5)</button>
          <button className={styles.buttons}>Bunper(5)</button>
          <button className={styles.buttons}>Bunper(5)</button>
          <button className={styles.buttons}>Bunper(5)</button>
          <button className={styles.buttons}>Bunper(5)</button>
        </div>
      </div>
    </div>
  );
};

export default Popular;
