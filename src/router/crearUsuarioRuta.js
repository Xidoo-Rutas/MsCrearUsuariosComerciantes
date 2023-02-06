const { Router } = require('express');
const insertUsuario = require('../controller/crearUsuario')
const validacionDeDatos = require('../database/validator/validator');

// import all controllers
// import SessionController from './app/controllers/SessionController';

const route = Router();

// Add routes
route.post('/crear', validacionDeDatos, insertUsuario);

// routes.get('/', SessionController.store);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = route;
