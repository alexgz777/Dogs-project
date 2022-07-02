const { Dog, Temperament } = require("../db");
const fetch = require("cross-fetch");

let url = "https://api.thedogapi.com/v1/breeds";

let getDogs = () => {
  let dogs = fetch(url)
    .then((res) => res.json())
    .catch((error) => {
      console.error(error);
    });
  return dogs;
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
let postDogs = (name, height, weight, lifeSpan, temperament) => {
  let dog = Dog.create({ name, height, weight, lifeSpan });
  let temperaments = Temperament.findAll({
    where: {
      name: temperament,
    },
  })
  /*   .then(() => {
      dog.addTemperament(temperaments);
    }) */
    .catch((error) => {
      console.error(error);
    });
};
module.exports = {
  getDogs,
  getDogsByName,
  getDogsById,
  getTemperaments,
  postDogs,
};
