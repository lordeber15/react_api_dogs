import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { postDog, getTemperamentsList } from "../../redux/actions/index";
import styles from "./DogCreation.module.css";

function validateForm(input) {
  let errors = {};

  // NAME
  if (!input.name) {
    errors.name = "You must type a name";
  } else {
    errors.name = "";
  }

  // WEIGHTS
  if (!input.weight_min) {
    // weight min
    errors.weight_min = "Type a valid minimal weight number";
  } else if (!/\d{1,2}/gi.test(input.weight_min)) {
    errors.weight_min = "Weight must have min values. Example: '25'";
  } else {
    errors.weight_min = "";
  }
  if (!input.weight_max) {
    // weight max
    errors.weight_max = "Type a valid maxim weight number";
  } else if (!/\d{1,2}/gi.test(input.weight_max)) {
    errors.weight_max = "Weight must have max values. Example: '25'";
  } else {
    errors.weight_max = "";
  }
  // HEIGHTS
  if (!input.height_min) {
    // height min
    errors.height_min = "Type a valid minimal height number";
  } else if (!/\d{1,2}/gi.test(input.height_min)) {
    errors.height_min = "Height must have min values. Example: '25'";
  } else {
    errors.height_min = "";
  }
  if (!input.height_max) {
    // height max
    errors.height_max = "Type a valid maxim height number";
  } else if (!/\d{1,2}/gi.test(input.height_max)) {
    errors.height_max = "Height must have max values. Example: '25'";
  } else {
    errors.height_max = "";
  }
  return errors;
}

export default function DogCreation() {
  const dispatch = useDispatch();
  const history = useHistory();
  const temperament = useSelector((state) => state.temperaments).sort(function (
    a,
    b
  ) {
    if (a < b) return -1;
    else return 1;
  });
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    image: "",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max: "",
    life_span: "",
    temperament: [],
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validateForm({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelect(e) {
    setInput({
      ...input,
      temperament: [...input.temperament, e.target.value],
    });
  }

  function handleDelete(el) {
    setInput({
      ...input,
      temperament: input.temperament.filter((temp) => temp !== el),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !errors.name &&
      !errors.image &&
      !errors.weight_min &&
      !errors.height_min &&
      !errors.weight_max &&
      !errors.height_max
    ) {
      alert("Your dog has been created successfully");
      dispatch(postDog(input));
      setInput({
        name: "",
        image: "",
        height_min: "",
        weight_min: "",
        height_max: "",
        weight_max: "",
        life_span: "",
        temperament: [],
      });
    } else {
      return alert("Something went wrong. Please try again.");
    }
    history.push("/home");
  }

  useEffect(() => {
    dispatch(getTemperamentsList());
  }, [dispatch]);

  return (
    <Fragment>
      <div className={styles.mainContainerCreation}>
        <div>
          <h2>Crear Nuevo Dog</h2>
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.Section}>
              <div className={styles.form__group}>
                <input
                  type="text"
                  value={input.name}
                  name="name"
                  className={styles.form__field}
                  placeholder="Grand Canadian Bulldog"
                  onChange={(e) => handleChange(e)}
                  required
                />
                <div>
                  <p className={styles.error}>{errors.name}</p>
                </div>
                <label className={styles.form__label}>Nombre</label>
              </div>
            </div>
            <div className={styles.Section}>
              <div className={styles.form__group}>
                <input
                  type="url"
                  value={input.image}
                  className={styles.form__field}
                  name="image"
                  placeholder="http://miimgenenlaweb.com"
                  onChange={(e) => handleChange(e)}
                />
                <div>
                  <p className={styles.error}>{errors.image}</p>
                </div>
                <label className={styles.form__label}>URL de imagen</label>
              </div>
            </div>
            <div className={styles.Section}>
              <h4>Altura</h4>
              <div className={styles.form__group}>
                <input
                  type="number"
                  value={input.height_min}
                  className={styles.form__field}
                  name="height_min"
                  placeholder="20"
                  onChange={(e) => handleChange(e)}
                  required
                />
                <div>
                  <p className={styles.error}>{errors.height_min}</p>
                </div>
                <label className={styles.form__label}>Min 20</label>
              </div>
              <div className={styles.form__group}>
                <input
                  type="number"
                  value={input.height_max}
                  name="height_max"
                  className={styles.form__field}
                  placeholder="50"
                  onChange={(e) => handleChange(e)}
                  required
                />
                <div>
                  <p className={styles.error}>{errors.height_max}</p>
                </div>
                <label className={styles.form__label}>Max 50</label>
              </div>
            </div>
            <div className={styles.Section}>
              <h4>Peso</h4>
              <div className={styles.form__group}>
                <input
                  type="number"
                  value={input.weight_min}
                  className={styles.form__field}
                  name="weight_min"
                  placeholder="15"
                  onChange={(e) => handleChange(e)}
                  required
                />
                <div>
                  <p className={styles.error}>{errors.weight_min}</p>
                </div>
                <label className={styles.form__label}>Min 15</label>
              </div>
              <div className={styles.form__group}>
                <input
                  type="number"
                  value={input.weight_max}
                  className={styles.form__field}
                  name="weight_max"
                  placeholder="32"
                  onChange={(e) => handleChange(e)}
                  required
                />
                <div>
                  <p className={styles.error}>{errors.weight_max}</p>
                </div>
                <label className={styles.form__label}>Max 32</label>
              </div>
            </div>
            <div className={styles.Section}>
              <div className={styles.form__group}>
                <input
                  type="text"
                  value={input.life_span}
                  className={styles.form__field}
                  name="life_span"
                  placeholder="12 - 15 years"
                  onChange={(e) => handleChange(e)}
                />
                <label className={styles.form__label}>Esperanza de Vida</label>
              </div>
            </div>
            <div className={styles.Section}>
              <label>Temperamentos</label>
              <select
                onChange={(e) => handleSelect(e)}
                className={styles.styled_select}
              >
                {temperament.map((temp) => {
                  return (
                    <option key={temp} name={temp}>
                      {temp}
                    </option>
                  );
                })}
              </select>
              <div className={styles.sidebar_box}>
                <h4>Seleccionaste los temperamentos:</h4>
                {input.temperament.map((el) => (
                  <div
                    onClick={() => handleDelete(el)}
                    key={el}
                    className={styles.selectedItems}
                  >
                    <p>{el}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.buttonSection}>
              <Link to="/home">
                <button className={styles.buttonCancel}>Cancelar</button>
              </Link>
              <button className={styles.button} type="submit">
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
