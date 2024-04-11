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

router.post('/pdf', upload.single('file'), async (req, res) => {
  try {
    // Aquí puedes guardar la información del archivo en la base de datos usando Knex.js
    const {filename, path } = req.file;
    await knex('pdfs').insert({
      filename: filename+".pdf",
      path: path
    });
    res.status(200).send('PDF subido y registrado en la base de datos');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al subir el PDF y registrar en la base de datos');
  }
});
module.exports = router;