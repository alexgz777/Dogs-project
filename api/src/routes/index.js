const { Router } = require("express");
const router = Router();
const {
  getDogs,
  getDogsByName,
  getDogsById,
  getTemperaments,
  postDogs,
} = require("../controllers/index.js");

router.get("/dogs", async (req, res) => {
  const { name } = req.query;
  if (name) {
    getDogsByName(name)
      .then((data) => res.status(200).send(data))
      .catch((error) => {
        console.error(error);
        res.status(400).send(`No hemos encontrado la raza ${name}`);
      });
  } else {
    getDogs()
      .then((data) => res.status(200).send(data))
      .catch((error) => {
        console.error(error);
        res.status(400).send(error);
      });
  }
});
router.get("/dogs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  getDogsById(id)
    .then((data) => res.status(200).send(data))
    .catch((error) => {
      console.error(error);
      res.status(400).send(`No hemos encontrado la raza que buscas`);
    });
});
router.get("/temperaments", (req, res) => {
  getTemperaments()
    .then((data) => res.status(200).send(data))
    .catch((error) => {
      console.error(error);
      res.status(400).send(`No hemos encontrado los temperamentos`);
    });
});
router.post("/dogs", (req, res) => {
  const {
    name,
    heightMin,
    heightMax,
    weightMin,
    weightMax,
    lifeSpan,
    image,
    temperaments,
  } = req.body;

  const height = [];
  height.push(heightMin, heightMax);
  const weight = [];
  weight.push(weightMin, weightMax);

  postDogs(name, height, weight, lifeSpan, image, temperaments)
    .then((data) => res.status(200).send(data))
    .catch((error) => {
      console.error(error);
      return res.status(400).send(`La raza no ha podido ser posteada`);
    });
});

module.exports = router;
