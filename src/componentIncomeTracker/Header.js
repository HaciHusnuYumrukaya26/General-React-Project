import React from 'react'
import styles from "./styles.module.css";

function Header({totalIncome}) {
  return (
    <header>
        <h1>Income Tracker</h1>
        <div className={styles["total-income"]}>{totalIncome} TL</div>
    </header>
  )
}

export default Header