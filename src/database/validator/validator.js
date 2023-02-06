//validador
const {check, validationResult} = require('express-validator');


const validacionDeDatos = [
    check('usuarioNombre').exists().not().isEmpty().trim(),
    check('usuarioApellidos').exists().not().isEmpty().trim(),
    check('usuarioImagenProfile').exists().not().isEmpty().trim(),
    check('usuarioFechaBorn').exists().not().isEmpty().trim(),
    check('usuarioTel').exists().not().isEmpty().trim().isLength({min:10, max:10}).withMessage('el telefono debe contener 10 digitos'),
    check('usuarioCorreo').exists().not().isEmpty().trim(),
    check('usuarioContrasena').exists().not().isEmpty().trim(),

    (req, res, next) => {
        try {
            validationResult(req).throw();
            return next();
        } catch (error) {
            res.status(403);
            res.send({errors: error.array()});
        }
    }
];

module.exports = validacionDeDatos;