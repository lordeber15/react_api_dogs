import { React, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getDogs,
  getTemperamentsList,
  filterDogsByTemperament,
  orderByName,
  filterCreated,
  getBreeds,
  getDogsByBreed,
  filterDogsByMAXWeight,
  filterDogsByMINWeight,
  orderByWeight,
} from "../../redux/actions/index";
import styles from "./SideBar.module.css";
import loop from "../../assets/SVG/loop.png";

export default function SideBar() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments).sort(
    function (a, b) {
      if (a < b) return -1;
      else return 1;
    }
  );
  const allDogs = useSelector((state) => state.allDogs);
  const breeds = useSelector((state) => state.breeds);

  const minWeights = allDogs
    .map((el) => el.weight_min)
    .sort(function (a, b) {
      return a - b;
    });
  const allDogsMinWeights = [...new Set(minWeights)];

  const maxWeights = allDogs
    .map((el) => el.weight_max)
    .sort(function (a, b) {
      return a - b;
    });
  const allDogsMaxWeights = [...new Set(maxWeights)];

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperamentsList());
    dispatch(getBreeds());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getDogs());
  }

  function handleClickOrder(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
  }
  function handleClickOrderWeight(e) {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value));
  }
  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value));
  }
  function handleFilteredByTemp(e) {
    e.preventDefault();
    dispatch(filterDogsByTemperament(e.target.value));
  }
  function handleFilteredByBreed(e) {
    e.preventDefault();
    dispatch(getDogsByBreed(e.target.value));
  }
  function handleFilteredMAXWeight(e) {
    e.preventDefault();
    dispatch(filterDogsByMAXWeight(e.target.value));
  }
  function handleFilteredMINWeight(e) {
    e.preventDefault();
    dispatch(filterDogsByMINWeight(e.target.value));
  }
  return (
    <Fragment>
      <div className={styles.side}>
        <div className={styles.sideBarHeader}>
          <h4 className={styles.header}>Buscar por filtros:</h4>
          <div
            className={styles.tooltip}
            onClick={(e) => {
              handleClick(e);
            }}
          >
            <img className={styles.loop} src={loop} alt="loop" />
          </div>
        </div>

        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Ordenar por nombre</h5>
          <select
            onChange={(e) => {
              handleClickOrder(e);
            }}
          >
            <option defaultValue value="all" hidden>
              Ordenar por Nombre
            </option>
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
          </select>
        </div>
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Ordenar por peso</h5>
          <select
            onChange={(e) => {
              handleClickOrderWeight(e);
            }}
          >
            <option defaultValue value="all" hidden>
              Ordenar por Peso
            </option>
            <option value="asc">Más pesado 1º</option>
            <option value="desc">Más ligero 1º</option>
          </select>
        </div>
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Filtrar por Origen</h5>
          <select
            onChange={(e) => {
              handleFilterCreated(e);
            }}
          >
            <option defaultValue value="all">
              Todos los Origenes
            </option>
            <option value="created">BASE DE DATOS</option>
            <option value="inDB">API 🐶</option>
          </select>
        </div>
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Filtrar por Temperamento</h5>
          <select onChange={(e) => handleFilteredByTemp(e)}>
            <option value="all">Todos los Temparamentos</option>
            {temperaments.map((temp) => {
              return (
                <option value={temp} key={temp}>
                  {temp}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Filtrar por raza</h5>
          <select onChange={(e) => handleFilteredByBreed(e)}>
            <option value="all">Todas las razas</option>
            {breeds.map((breed) => {
              return breed ? (
                <option value={breed} key={breed}>
                  {breed}
                </option>
              ) : (
                ""
              );
            })}
          </select>
        </div>
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Filtrar por peso máximo</h5>
          <select onChange={(e) => handleFilteredMAXWeight(e)}>
            <option value="all">Todos los pesos maximos</option>
            {allDogsMaxWeights.map((maxWeight) => {
              return maxWeight ? (
                <option value={maxWeight} key={maxWeight}>
                  {maxWeight} kg
                </option>
              ) : (
                ""
              );
            })}
          </select>
        </div>
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Filtrar por peso mínimo</h5>
          <select onChange={(e) => handleFilteredMINWeight(e)}>
            <option value="all">Todos los pesos minimos</option>
            {allDogsMinWeights.map((minWeight) => {
              return minWeight ? (
                <option value={minWeight} key={minWeight}>
                  {minWeight} kg
                </option>
              ) : (
                ""
              );
            })}
          </select>
        </div>
        <div className={styles.filterSection}>
          <h5 className={styles.filterHeader}>Agregar Nueva Mascota</h5>
          <div className={styles.addDog}>
            <Link to="/newDog/" className={styles.tooltip}>
              <span className={styles.agregardog}>Agregar</span>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
