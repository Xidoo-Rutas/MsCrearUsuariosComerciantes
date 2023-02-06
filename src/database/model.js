//modelo
const mongoose = require('mongoose');
const {Schema, model} = require('mongoose');

const usuarios = new Schema({
    usuarioNombre:{
        type: String,
        required: true
    },
    usuarioApellidos:{
        type: String,
        required: true
    },
    usuarioImagenProfile: {
        type: String
    },
    usuarioFechaBorn:{
        type: String,
        required: true
    },
    usuarioTel:{
        type: String,
        required: true
    },
    usuarioCorreo:{
        type: String,
        required: true
    },
    usuarioContrasena:{
        type: String,
        required: true
    }
},
{ versionKey: false }
)

module.exports = model('usuarios', usuarios)