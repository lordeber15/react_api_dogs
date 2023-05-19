import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteDetails, getDetails } from "../../redux/actions/index";
import styles from "./DogDetail.module.css";
import tinyDog from "../../assets/SVG/raza.svg";
import heart from "../../assets/SVG/salud.svg";
import scale from "../../assets/SVG/peso.svg";
import bone from "../../assets/SVG/altura.svg";

export default function DogDetail(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(props.match.params.id));
    return () => dispatch(deleteDetails());
  }, [dispatch, props.match.params.id]);

  const myDog = useSelector((state) => state.details);

  return (
    <Fragment>
      {myDog ? (
        <div key={myDog.id} className={styles.bodix}>
          <div className={styles.mainContainer}>
            <h2 className={styles.mainTitle}>{myDog.name}</h2>
            <img src={myDog.image} alt={myDog.name} className={styles.image} />
            <div className={styles.detailsContainer}>
              {myDog.breed_group ? (
                <div className={styles.breed_group}>
                  <div className={styles.imageSection}>
                    <img
                      src={tinyDog}
                      alt="a tiny svg dog"
                      className={styles.detailsSVG}
                    />
                  </div>
                  <div className={styles.infoSection}>
                    <h3>Razas: </h3>
                    <p>{myDog.breed_group}</p>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className={styles.life_span}>
                <div className={styles.imageSection}>
                  <img
                    src={heart}
                    alt="a tiny svg dog"
                    className={styles.detailsSVG}
                  />
                </div>
                <div className={styles.infoSection}>
                  <h3>Esperanza de Vida: </h3>
                  <p>{myDog.life_span}</p>
                </div>
              </div>
              <div className={styles.weights}>
                <div className={styles.imageSection}>
                  <img
                    src={scale}
                    alt="a tiny svg dog"
                    className={styles.detailsSVG}
                  />
                </div>
                <div className={styles.infoSection}>
                  <h3>Peso: </h3>
                  <p>Min: {myDog.weight_min}</p>
                  <p>Max: {myDog.weight_max}</p>
                </div>
              </div>
              <div className={styles.heights}>
                <div className={styles.imageSection}>
                  <img
                    src={bone}
                    alt="a tiny svg bone"
                    className={styles.detailsSVG}
                  />
                </div>
                <div className={styles.infoSection}>
                  <h3>Altura: </h3>
                  <p>Min: {myDog.height_min}</p>
                  <p>Max: {myDog.height_max}</p>
                </div>
              </div>
              <br />
              <div className={styles.temperament}>
                <div className={styles.infoSection}>
                  {
                    <div>
                      <h3>Temperamentos: </h3>
                      <p>
                        {myDog.createdInDB
                          ? myDog.temperaments.map((el) => el.name).join(", ")
                          : myDog.temperament}
                      </p>
                    </div>
                  }
                </div>
              </div>
            </div>
            <Link to="/home">
              <button className={styles.button}>Regresar</button>
            </Link>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </Fragment>
  );
}
