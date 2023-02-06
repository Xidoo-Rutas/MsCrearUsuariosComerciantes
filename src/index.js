const {app, port, express} = require('../src/app')
const databaseConnected = require('../src/database/conexion');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({path:"./env"});

app.use(morgan('dev'));
app.use(cors('*'))
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(port,()=>{
    try {
        databaseConnected();
        console.log('Servidor local corriendo en el puerto', port)
    } catch (error) {
        console.log(error)
    }
});
app.use('/api', require('../src/controller/crearUsuario'))