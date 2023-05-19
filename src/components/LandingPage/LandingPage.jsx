import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "../LandingPage/LandingPage.module.css";
import logo from "../../assets/SVG/logo.svg";

export default function LandingPage() {
  return (
    <Fragment>
      <div className={styles.hero}>
        <img className={styles.logodog} src={logo} alt="logodogs" />
        <h1 className={styles.title}>Bienvenido a la API de DOG'S</h1>
        <Link to="/home">
          <button className={styles.bubblyButton}>Ingresar Ahora</button>
        </Link>
      </div>
    </Fragment>
  );
}
