const express = require("express");
const router = express.Router();
const UsuarioController = require("../controller/UsuarioController");

router.get("/add", UsuarioController.abreadd);
router.post("/add", UsuarioController.add);

router.get("/lst", UsuarioController.lst);
router.post("/lst", UsuarioController.filtro);

router.get("/edt", UsuarioController.abreedt);
router.post("/edt", UsuarioController.edt);

router.get("/del", UsuarioController.deleta);

module.exports = router;
