import React, { Fragment } from "react";
import Logo from "../../assets/SVG/logo.svg";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar() {
  return (
    <Fragment>
      <div className={styles.nav}>
        <div className={styles.TitleAndSearchBar}>
          <div className={styles.logoAndTitle}>
            <Link to="/home">
              <img
                id="logoHenry"
                src={Logo}
                alt="icono alternativo"
                className={styles.logo}
              />
            </Link>
            <div>
              <h1>API Dog's</h1>
            </div>
          </div>
          <div>
            <SearchBar />
          </div>
        </div>
        <div className={styles.aboutNavButton}>
          <Link to="/about">Acerca de mi</Link>
        </div>
      </div>
    </Fragment>
  );
}
