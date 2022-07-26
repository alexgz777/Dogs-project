const { Dog, Temperament } = require("../db");
const fetch = require("cross-fetch");
const { default: axios } = require("axios");

let url = "https://api.thedogapi.com/v1/breeds";

let getDogsApi = async () => {
  let dogs = await axios.get(url).then((res) => res.data);
  return dogs.map((e) => {
    return {
      id: e.id,
      name: e.name,
      height: e.height.metric,
      weight: e.weight.metric,
      lifeSpan: e.lifeSpan,
      image: e.image.url,
      temperament: e.temperament,
      created: false,
    };
  });
};
let getDogsDb = async () => {
  return await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};
let getDogs = async () => {
  let api = await getDogsApi();
  let db = await getDogsDb();
  return [...api, ...db];
};

let getDogsByName = (name) => {
  let dogs = fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );
    })
    .catch((error) => {
      console.error(error);
    });
  return dogs;
};
let getDogsById = (id) => {
  let dogs = fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data.filter((e) => e.id === id);
    })
    .catch((error) => {
      console.error(error);
    });
  return dogs;
};
let getTemperaments = () => {
  let temperaments = [];
  let dogs = fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.map((e) => {
        temperaments.push(e.temperament);
      });
      let temperament = temperaments.flat().join().split(",");
      const addTemperament = () => {
        temperament.forEach((e) => {
          Temperament.findOrCreate({
            where: { name: e },
          });
        });
      };
      addTemperament();
    })
    .then(() => {
      const findTemperaments = Temperament.findAll();
      return findTemperaments;
    })
    .catch((error) => {
      console.error(error);
    });
  return dogs;
};
let postDogs = async (name, height, weight, lifeSpan, image, temperaments) => {
  try {
    let dog = await Dog.create({ name, height, weight, lifeSpan, image });
    let temp = await Temperament.findAll({
      where: {
        name: temperaments,
      },
    });
    dog.addTemperament(temp);
    return "La raza ha sido posteada exitosamente";
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  getDogs,
  getDogsByName,
  getDogsById,
  getTemperaments,
  postDogs,
};
