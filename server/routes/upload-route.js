const knex = require("../db.js");
const express = require('express');
const multer = require('multer');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage ,limits: { fieldSize: 25 * 1024 * 1024 }
})

router.post('/pdf', upload.single('file'), (req, res) => {
  // Verifica si se ha subido un archivo
  /*
  console.log(req)
  console.log(req.body)
  if (!req.file) {
    return res.status(400).send('No se ha subido ningún archivo');
  }

  // Obtiene el nombre del archivo y el path donde se almacenó
  const filename = req.file.originalname;
  const path = req.file.path;
  knex('pdfs')
    .insert({ filename, path })
    .then(() => {
      res.status(200).send('PDF subido y registrado en la base de datos');
    })
    .catch((error) => {
      console.error('Error al insertar en la base de datos:', error);
      res.status(500).send('Error al guardar en la base de datos');
    });
    */
    res.status(200).send('PDF subido y registrado en la base de datos');
});
module.exports = router;