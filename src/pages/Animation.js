import React from "react";
import styles from "./animation.module.css";
import { NavLink } from "react-router-dom";
const Animation = () => {
  return (
    <div className={styles.animation}>
      <div className={styles.box}></div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand" href="#">
            Navbar
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <span className="nav-link active" aria-current="page" href="#">
                  Home
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" href="#">
                  Link
                </span>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </span>
                <ul className="dropdown-menu">
                  <li>
                    <span className="dropdown-item" href="#">
                      Action
                    </span>
                  </li>
                  <li>
                    <span className="dropdown-item" href="#">
                      Another action
                    </span>
                  </li>
                  <li>
                    <span className="dropdown-item" href="#">
                      Something else here
                    </span>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <span className="nav-link disabled">Disabled</span>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className={styles.navmenu}>
        <div>Logo</div>
        <div>
          <ul>
            <li>
              <NavLink to="/animation">Home</NavLink>
            </li>
            <li>
              <NavLink to="/animation">Anasayfa</NavLink>
            </li>
            <li>
              <NavLink to="/animation">Hakkımızda</NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.searchbox}>
          <input type="text" placeholder="ara"/>
          <button className={styles.btnara}>Ara</button>
        </div>
      </div>
    </div>
  );
};

export default Animation;
