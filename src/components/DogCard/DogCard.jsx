import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./DogCard.module.css";
export default function DogCard({
  id,
  name,
  image,
  temperament,
  temperaments,
}) {
  if (!temperaments) {
    return (
      <Fragment>
        <Link to={"/dogs/" + id}>
          <div className={styles.nft}>
            <div className={styles.main}>
              <img className={styles.tokenImage} src={image} alt="NFT" />
              <h2 className={styles.name}>{name}</h2>
              {temperament ? (
                <p className={styles.description}>{temperament}</p>
              ) : (
                <br />
              )}
            </div>
          </div>
        </Link>
        {/* <div className={styles.dogCard}>
          <Link to={"/dogs/" + id}>
            <div className={styles.titleArea}>
              <h4 className={styles.dogName}>{name}</h4>
            </div>
            <div className={styles.infoArea}>
              <div className={styles.tempArea}>
                {temperament ? (
                  <h5 className={styles.dogTemp}>{temperament}</h5>
                ) : (
                  <br />
                )}
              </div>
              <div className={styles.imageArea}>
                <img
                  className={styles.dogImage}
                  src={image}
                  alt={`A dog wich is ` + { temperament }}
                  height="140px"
                />
              </div>
            </div>
          </Link>
        </div> */}
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Link to={"/dogs/" + id}>
          <div className={styles.nft}>
            <div className={styles.main}>
              <img className={styles.tokenImage} src={image} alt="NFT" />
              <h2>{name}</h2>
              {temperaments ? (
                <p className={styles.description}>
                  {temperaments.map((temp) => `${temp.name} `).join(", ")}
                </p>
              ) : (
                <br />
              )}
            </div>
          </div>
        </Link>

        {/* <div className={styles.dogCard}>
          <Link to={"/dogs/" + id}>
            <div className={styles.titleArea}>
              <h4 className={styles.dogName}>{name}</h4>
            </div>
            <div className={styles.infoArea}>
              <div className={styles.tempArea}>
                {temperaments ? (
                  <h5 className={styles.dogTemp}>
                    {temperaments.map((temp) => `${temp.name} `).join(", ")}
                  </h5>
                ) : (
                  <br />
                )}
              </div>
              <div className={styles.imageArea}>
                <img
                  className={styles.dogImage}
                  src={image}
                  alt={`A dog`}
                  height="140px"
                />
              </div>
            </div>
          </Link>
        </div> */}
      </Fragment>
    );
  }
}
