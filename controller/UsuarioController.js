const Usuario = require("../model/Usuario");

function abreadd(req, res) {
  res.render("usuario/add.ejs");
}
function add(req, res) {
  var usuario = new Usuario();
  usuario.nome = req.body.nome;
  usuario.email = req.body.email;
  usuario.senha = req.body.senha;
  usuario.foto = req.body.foto;
  usuario.save(function (err, result) {
    if (err) {
      res.send("Aconteceu o seguinte erro: " + err);
    } else {
      res.send("Seus dados foram inseridos com sucesso!");
    }
  });
}
function lst(req, res) {
  Usuario.find({}).then(function (usuarios) {
    res.render("usuario/lst.ejs", { Usuarios: usuarios });
  });
}
function filtro(req, res) {
  var pesquisa = req.body.pesquisa;
  Usuario.find({ nome: new RegExp(pesquisa, "i") }).then(function (usuarios) {
    res.render("usuario/lst.ejs", { Usuarios: usuarios });
  });
}
function abreedt(req, res) {
  Usuario.findById(req.params.id).then(function (usuairo) {
    res.render("usuario/edt.ejs", { Ùsuario: usuario });
  });
}
function edt(req, res) {
  var usuario = new Usuario();
  usuario.nome = req.body.nome;
  usuario.email = req.body.email;
  usuario.senha = req.body.senha;
  usuario.foto = req.body.foto;
  usuario.save(function (err, result) {
    if (err) {
      res.send("Aconteceu o seguinte erro: " + err);
    } else {
      res.send("Seus dados foram inseridos com sucesso!");
    }
  });
}
function deleta(req, res) {
  Usuario.findByIdAndDelete(req.params.id).then(function (valor) {
    res.redirect("/usuario/lst");
  });
}

module.exports = { abreadd, add, lst, filtro, abreedt, edt, deleta };
