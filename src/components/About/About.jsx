import { Fragment } from "react";
import { Link } from "react-router-dom";
//import NavBar from "../NavBar/NavBar";
import styles from "./About.module.css";
import myPhoto from "../../assets/eber.jpg";
import javascript from "../../assets/SVG/Ljavascript.png";
import css from "../../assets/SVG/Lcss.png";
import html from "../../assets/SVG/Lhtml.png";
import java from "../../assets/SVG/Ljava.png";
import jquery from "../../assets/SVG/Ljquery.png";
import react from "../../assets/SVG/Lreact.png";
import redux from "../../assets/SVG/Lredux.png";
import postgres from "../../assets/SVG/postgres.png";
import sequelize from "../../assets/SVG/sequelize-logo.png";
import nodejs from "../../assets/SVG/nodejs.png";
import github from "../../assets/SVG/github.png";
import linkedin from "../../assets/SVG/linkedin.png";

export default function About() {
  return (
    <div>
      <Fragment>
        {/* <div className={styles.navbar}>
          <NavBar />
        </div> */}
        <div className={styles.mainConteinerAbout}>
          <div className={styles.home}>
            <Link to="/home">Regresar</Link>
          </div>

          <div className={styles.imageDiv}>
            <img src={myPhoto} alt="Eberson Palomino" />
          </div>
          <h3 className={styles.nombredev}>
            <div className={styles.dev}>
              Developed &lt;<i className={styles.diag}>/</i>&gt;
            </div>
            <br />
            Eberson Palomino Aguilar
          </h3>
          <h4 className={styles.titlestack}>Full Stack Developer</h4>
          <br />
          <label className={styles.tituloconocimientos}>
            {" "}
            Mis conocimientos{" "}
          </label>
          <div className={styles.boxlenguajes}>
            <div className={styles.scrollbarh}>
              <img className={styles.lenguajes} src={html} alt="html" />
              <img className={styles.lenguajes} src={css} alt="css" />
              <img
                className={styles.lenguajes}
                src={javascript}
                alt="javascript"
              />
              <img className={styles.lenguajes} src={java} alt="java" />
              <img className={styles.lenguajes} src={jquery} alt="jquery" />
              <img className={styles.lenguajes} src={react} alt="reactredux" />
              <img className={styles.lenguajes} src={redux} alt="redux" />
              <img className={styles.lenguajes} src={postgres} alt="postgres" />
              <img
                className={styles.lenguajes}
                src={sequelize}
                alt="sequelize"
              />
              <img className={styles.lenguajes} src={nodejs} alt="nodejs" />

              {/* <p className={styles.skills}>
            Skills: CSS, HTML, JavaScript, SQL, React.js, Redux, Sequelize,
            Express.
          </p> */}
            </div>
          </div>
          <br />
          <div className={styles.links}>
            <h3>Mi Contacto:</h3>
            <div className={styles.linksItems}>
              <a
                href="https://github.com/lordeber15"
                target="_blank"
                rel="noreferrer"
              >
                <p>
                  <img src={github} alt="Github" />
                  <a
                    href="https://github.com/lordeber15"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </p>
              </a>
              <a
                href="https://www.linkedin.com/in/eberpalomino/"
                target="_blank"
                rel="noreferrer"
              >
                <p>
                  <img src={linkedin} alt="LinkedIn" />
                  <a
                    href="https://www.linkedin.com/in/eberpalomino/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </p>
              </a>

              {/* <p>
                <a
                  href="http://www.google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mi Sitio Web
                </a>
              </p> */}
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
}
