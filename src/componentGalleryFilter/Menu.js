import styles from "./styles.module.css";
import React from 'react'

export default function Menu({items}) {
  return (
    <div className={styles["section-center"]}>
        {items.map((item)=>{
            const {id,title,img,desc,price} = item;
            return(
                <article key={id} className={styles["menu-item"]}>
                    <img src={img} alt={title} className={styles.photo} />
                    <div className={styles["item-info"]}>
                        <header>
                            <h4>{title}</h4>
                            <h4 className={styles.price}>{price} TL</h4>
                        </header>
                        <p className={styles["item-text"]}>{desc}</p>
                    </div>
                </article>
            )
        })}
    </div>
  )
}