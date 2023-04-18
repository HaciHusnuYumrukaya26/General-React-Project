import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
const RouterNav = () => {
  return (
    <div className={styles.navdiv}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contant">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/fetch">Fetch</NavLink>
        </li>
        <li>
          <NavLink to="/effect">Effect</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Formik</NavLink>
        </li>
        <li>
          <NavLink to="/memocallback">useMemo-Callback</NavLink>
        </li>
        <li>
          <NavLink to="/context">Context</NavLink>
        </li>
        <li>
          <NavLink to="/colors">Colors</NavLink>
        </li>
        <li>
          <NavLink to="/cardproduct">Product</NavLink>
        </li>
        <li>
          <NavLink to="/filter">Filter</NavLink>
        </li>
        <li>
          <NavLink to="/randomnumber">Random Number</NavLink>
        </li>
        <li>
          <NavLink to="/shopping">Shopping</NavLink>
        </li>
        <li>
          <NavLink to="/XOX">XOX Oyunu</NavLink>
        </li>
        <li>
          <NavLink to="/scroll">Scroll Bar</NavLink>
        </li>
        <li>
          <NavLink to="/galleryfilter">Gallery-Filter</NavLink>
        </li>
        <li>
          <NavLink to="/incometracker">İncome Tracker</NavLink>
        </li>
        <li>
          <NavLink to="/tictactoe">Tic Tac Toe</NavLink>
        </li>
        <li>
          <NavLink to="/todoreact">Todo React</NavLink>
        </li>
        <li>
          <NavLink to="/reactderslericontext">ReactDersleri Context</NavLink>
        </li>
        <li>
          <NavLink to="/todocontext">Todo Context</NavLink>
        </li>
        <li>
          <NavLink to="/money">Para Harcama</NavLink>
        </li>
        <li>
          <NavLink to="/animation">Animasyon Deneme</NavLink>
        </li>
        <li>
          <NavLink to="/todofark">Todo Farkli</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default RouterNav;
