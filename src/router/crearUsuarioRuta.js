const { Router } = require('express');

// import all controllers
// import SessionController from './app/controllers/SessionController';

const route = Router();

// Add routes
route.post('/', (req, res)=>{
    res.send('hola')
})
// routes.get('/', SessionController.store);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = route;
