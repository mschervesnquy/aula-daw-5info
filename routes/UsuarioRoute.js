const express = require("express");
const router = express.Router();
const UsuarioController = require("../controller/UsuarioController");

const upload = require("../config/upload");

router.get("/add", UsuarioController.abreadd);
router.post("/add", upload.single("foto"), UsuarioController.add);

router.get("/lst", UsuarioController.lst);
router.post("/lst", UsuarioController.filtro);

router.get("/edt/:id", UsuarioController.abreedt);
router.post("/edt/:id", upload.single("foto"), UsuarioController.edt);

router.get("/del/:id", UsuarioController.deleta);

module.exports = router;
