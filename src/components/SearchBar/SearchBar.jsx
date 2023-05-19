import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsByName } from "../../redux/actions";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const [dogState, setDogsState] = useState("");
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    if (dogState.length === 0) {
      return alert("Please input a name to start the search");
    } else {
      dispatch(getDogsByName(dogState));
      setDogsState("");
    }
  }

  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Buscar"
        className={styles.searchInput}
        value={dogState}
        onChange={(e) => setDogsState(e.target.value)}
      />
      <button
        type="submit"
        className={styles.searchButton}
        onClick={handleClick}
      ></button>
    </div>
  );
}
