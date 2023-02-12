//conexion
const mongoose = require("mongoose");
require('dotenv').config()

const databaseConnected = () =>{
    mongoose
    .set("strictQuery", true)
    //.connect(process.env.MONGODB_URI)
    .connect('mongodb://127.0.0.1:27017/xidoo');
    .then(() => console.log("Se ha enlazado a la base de datos del servidor"))
    .catch((error) =>console.error("'Ocurrio un error al conectarse a la base de datos del servidor"))
}

module.exports = databaseConnected;
