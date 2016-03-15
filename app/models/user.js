// MODEL TODO
var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    email: String,
    pseudo: String,  
    created: {type: Date, default: Date.now},
    updated: {type: Date, default: Date.now},
    password: String,
    password2: String,
    sex: String,
    city: String,
    height: Number,
    shape: String,
    hair: String,
    colorhair: String,
    coloreyes: String,
    from: String,
    img: String,
    interest: String,
    zip: Number,
    yold:{type: Number, min: 18, max: 65}



});

var  User= {

    model: mongoose.model('User', userSchema),

    create: function(req, res) {
        User.model.create({
            email: req.body.email,
            pseudo: req.body.pseudo,
            created: req.body.created,
            //updated: req.body.updated,
            password: req.body.password,
            password2: req.body.password2,
            /*sex: req.body.sex,
            city: req.body.city,
            heigth: req.body.height,
            shape: req.body.shape,
            hair: req.body.hair,
            colorhair: req.body.colorhair,
            coloreyes: req.body.coloreyes,
            from: req.body.from,
            img: req.body.img,
            interest: req.body.interest,
            zip: req.body.zip,
            yold: req.body.yold*/
        }, function(){
            res.sendStatus(200);
        })
    },

    findAll: function(req, res) {
        User.model.find(function (err, data) {
            res.send(data);
        });
    },

    update: function(req, res){
        User.model.findByIdAndUpdate(req.params.id, {
            email: req.body.email,
            pseudo: req.body.pseudo,
            created: req.body.created,
            //updated: req.body.updated,
            password: req.body.password,
            password2: req.body.password2,
            /*sex: req.body.sex,
            city: req.body.city,
            heigth: req.body.height,
            shape: req.body.shape,
            hair: req.body.hair,
            colorhair: req.body.colorhair,
            coloreyes: req.body.coloreyes,
            from: req.body.from,
            img: req.body.img,
            interest: req.body.interest,
            zip: req.body.zip,
            yold: req.body.yold*/
        }, function(){
            res.sendStatus(200);
        })
    },

    delete: function(req, res){
        User.model.findByIdAndRemove(req.params.id, function(){
            res.sendStatus(200);
        })
    } 
}

module.exports = User;
