import React, { useState, useEffect } from "react";
import "../styles/Post.css";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, postDogs } from "../redux/actions";

const Post = () => {
  const temperament = useSelector((state) => state.temperament);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const initialState = {
    name: "",
    height: "",
    weight: "",
    lifeSpan: "",
    temperaments: [],
    image: "",
  };

  const [form, setForm] = useState(initialState);
  const [error, setError] = useState({});

  const handleValidate = (inputs) => {
    const errors = {};
    if (!inputs.name) errors.name = "Escriba el nombre";
    if (!inputs.height) errors.height = "Escriba la altura";
    if (!inputs.weight) errors.weight = "Escriba el peso";
    if (!inputs.lifeSpan) errors.lifeSpan = "Escriba los años de vida";
    if (!inputs.temperaments) errors.temperaments = "Elija temperamento/s";
    if (!inputs.image) errors.image = "Coloque el link de una imagen";
    return errors;
  };
  const handleTemperaments = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      temperaments: [...form.temperaments, e.target.value],
    });
  };
  const handleChange = (e) => {
    e.preventDefault();
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
    <form>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={form.name}
        onChange={(e) => handleChange(e)}
      />
      <p>{error.name}</p>
      <input
        type="text"
        name="height"
        placeholder="Altura"
        value={form.height}
        onChange={(e) => handleChange(e)}
      />
      <p>{error.height}</p>
      <input
        type="text"
        name="weight"
        placeholder="Peso"
        value={form.weight}
        onChange={(e) => handleChange(e)}
      />
      <p>{error.weight}</p>
      <input
        type="text"
        name="lifeSpan"
        placeholder="Años de vida"
        value={form.lifeSpan}
        onChange={(e) => handleChange(e)}
      />
      <p>{error.lifeSpan}</p>
      <select name="temperaments" >
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
      <p>{form.temperaments.map(e=>e)}</p>
      <p>{error.temperaments}</p>
      <input
        type="text"
        name="image"
        placeholder="Coloque el link de una imagen"
        value={form.image}
        onChange={(e) => handleChange(e)}
      />
      <p>{error.image}</p>
      <button
        className="buttonPost"
        type="button"
        value="button"
        onClick={(e) => handleSumbit(e)}
      >
        Post Breed
      </button>
    </form>
  );
};

export default Post;

/* const mapStateToProps = (state) => ({ temperament: state.temperament });
class Create extends React.Component {
  constructor(props) {
    super(props);
    = {
      name: "",
      height: "",
      weight: "",
      lifeSpan: "",
      temperaments: "",
      image: "",
    };
  }
  renderTemperaments = () => {
    return temperament.map((e) => {
      return <option key={e.name}>{e.name}</option>;
    });
handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    te({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert("The breed was posted succesfully");
    postDogs(;
    te(;
  };
  render() {
    return (
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="height"
          placeholder="Height"
          value={height}
          onChange={handleChange}
        />
        <input
          type="text"
          name="weight"
          placeholder="Weight"
          value={weight}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lifeSpan"
          placeholder="Life Span"
          value={lifeSpan}
          onChange={handleChange}
        />
        <select
                    multiple
           name="temperaments"
          placeholder="Choose the dog´s temperament"
          value={temperaments}
          onChange={handleChange}
        >
          {Temperaments()}
        </select>
        <input
          type="text"
          name="image"
          placeholder="Paste the link of an image"
          value={image}
          onChange={handleChange}
        />
        <button
          className="buttonPost"
          type="button"
          value="button"
          onClick={Submit}
        >
          Post Breed
        </button>
      </form>
    );
  }
} */
/* const create = connect(mapStateToProps, { getTemperaments, postDogs })(Create);
export default create; */
