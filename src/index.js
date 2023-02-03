const {app, port, express} = require('../src/app')
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');

app.use(morgan('dev'));
app.use(cors('*'))
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(port, (req, res) => {
    console.log('corriendo')
})

app.use('/', require('../src/router/crearUsuarioRuta'))