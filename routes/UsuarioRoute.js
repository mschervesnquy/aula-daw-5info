const express = require("express");
const router = express.Router();
const UsuarioController = require("../controller/UsuarioController");

router.get("/add", UsuarioController.abreadd);
router.post("/add", UsuarioController.add);

router.get("/lst", UsuarioController.lst);
router.post("/lst", UsuarioController.filtro);

router.get("/edt/:id", UsuarioController.abreedt);
router.post("/edt/:id", UsuarioController.edt);

router.get("/del/:id", UsuarioController.deleta);

module.exports = router;
