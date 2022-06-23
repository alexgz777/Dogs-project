const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
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
  const { name, height, weight, lifeSpan, temperament } = req.body;
  postDogs(name, height, weight, lifeSpan, temperament)
    .then(() => res.status(200).send("La raza ha sido posteada existosamente"))
    .catch((error) => {
      console.error(error);
      res.status(400).send(`La raza no ha podido ser posteada`);
    });
});

module.exports = router;
