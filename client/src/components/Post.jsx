import React, { useState, useEffect } from "react";
import "../styles/Post.css";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, postDogs } from "../redux/actions";

const handleValidate = (inputs) => {
  let errors = {};
  if (!inputs.name) errors.name = "Escriba el nombre";

  if (!inputs.heightMin || !inputs.heightMax)
    errors.height = "Escriba la altura mínima y máxima";
  if (!inputs.weightMin || !inputs.weightMax)
    errors.weight = "Escriba el peso mínimo y máximo";

  if (!inputs.lifeSpan) errors.lifeSpan = "Escriba los años de vida";
  if (!inputs.temperaments) errors.temperaments = "Elija temperamento/s";
  if (!inputs.image) errors.image = "Coloque el link de una imagen";
  return errors;
};

const Post = () => {
  const temperament = useSelector((state) => state.temperament);
  console.log(temperament);
  const dispatch = useDispatch();

  const [button, setButton] = useState(true);

  const initialState = {
    name: "",
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax: "",
    lifeSpan: "",
    temperaments: [],
    image: "",
  };

  const [form, setForm] = useState(initialState);
  const [error, setError] = useState(initialState);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  useEffect(() => {
    if (
      form.name.length > 0 &&
      form.heightMin.length > 0 &&
      form.heightMax.length > 0 &&
      form.weightMin.length > 0 &&
      form.weightMax.length > 0 &&
      form.lifeSpan.length > 0
    )setButton(false);
    else setButton(true);
  }, [form, setButton]);

  const handleTemperaments = (e) => {
    setForm({
      ...form,
      temperaments: [...form.temperaments, e.target.value],
    });
  };
  const handleDelete = (e) => {
    setForm({
      ...form,
      temperaments: form.temperaments.filter(
        (temperament) => temperament !== e
      ),
    });
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError(
      handleValidate({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    setError(handleValidate(form));
    setForm(true);

    dispatch(postDogs(form));
    alert("La raza fue posteada exitosamente");
    setForm(initialState);
  };

  return (
    <form className="post">
      <h1>Cargá los datos y posteá tu propia raza:</h1>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={form.name}
        onChange={(e) => handleChange(e)}
      />
      <p>{error.name}</p>
      <div className="form__div">
        <input
          className="input__div"
          type="text"
          name="heightMin"
          placeholder="Altura Min"
          value={form.height}
          onChange={(e) => handleChange(e)}
        />

        <input
          className="input__div"
          type="text"
          name="heightMax"
          placeholder="Altura Max"
          value={form.height}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="error__div">
        <p className="error__output">{error.height}</p>
      </div>

      <div className="form__div">
        <input
          className="input__div"
          type="text"
          name="weightMin"
          placeholder="Peso Min"
          value={form.weight}
          onChange={(e) => handleChange(e)}
        />

        <input
          className="input__div"
          type="text"
          name="weightMax"
          placeholder="Peso Max"
          value={form.weight}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="error__div">
        <p className="error__output">{error.weight}</p>
      </div>

      <input
        type="text"
        name="lifeSpan"
        placeholder="Años de vida"
        value={form.lifeSpan}
        onChange={(e) => handleChange(e)}
      />
      <p>{error.lifeSpan}</p>
      <select name="temperaments">
        <option disabled selected>
          Temperamentos
        </option>
        {temperament.map((e) => {
          return (
            <option
              key={e.id}
              value={form.temperaments}
              onChange={(e) => handleTemperaments(e)}
            >
              {e.name}
            </option>
          );
        })}
      </select>
      <p>{error.temperaments}</p>
      <div>
        {form.temperaments.map((e) => (
          <div key={e} onClick={() => handleDelete(e)}>
            <p>{`${e}`}</p>
          </div>
        ))}
      </div>

      <input
        type="text"
        name="image"
        placeholder="Coloque el link de una imagen"
        value={form.image}
        onChange={(e) => handleChange(e)}
      />
      <p>{error.image}</p>
      <button
        className="button__Post"
        type="submit"
        form="form"
        value="button"
        disabled={button}
        onClick={(e) => handleSumbit(e)}
      >
        Postear Raza
      </button>
    </form>
  );
};

export default Post;
