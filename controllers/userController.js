const db = require('../database/models')

module.exports = {
    prueba: function(req, res) {
        db.User.findAll()
        .then(function(result) {
            return res.json(result)
        })
    },
    create: function(req, res) {
        db.User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        .then(function(result){
            return res.status(200).send('usuario creado con exito')
        })
        .catch(function(error) {
            return res.send(error)
        })
    }
}