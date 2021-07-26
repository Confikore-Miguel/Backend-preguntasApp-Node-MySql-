const express = require('express');
const cors = require('cors');
const { connection } = require('../database/db');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT ;
        this.paths= {
            auth:'/api/auth',
            user :'/api/user',
            rol :'/api/rol',
            categoria :'/api/categoria',
            pregunta :'/api/pregunta',
            respuesta :'/api/respuesta',
            voto :'/api/voto',
        }
        // middlewares
        this.middleware();
        //Rutas del app
        this.routes();
    }
    middleware(){
        //Cors
        this.app.use( cors() );
        //Parseo y lectura
        this.app.use( express.json() );
        //Direcctorio publico
        this.app.use( express.static('./public'))
    }
    routes(){
        this.app.use( this.paths.auth, require('../routes/auth.routes'));
        this.app.use( this.paths.user, require('../routes/usuario.routes'));
        this.app.use( this.paths.rol, require('../routes/rol.routes'));
        this.app.use( this.paths.categoria, require('../routes/categoria.routes'));
        this.app.use( this.paths.pregunta, require('../routes/pregunta.routes'));
        this.app.use( this.paths.respuesta, require('../routes/respuesta.routes'));
        this.app.use( this.paths.voto, require('../routes/voto.routes'));
    }

    listen(){
        this.app.listen( this.port ,() =>{
            console.log('LocalHost :', process.env.PORT);
            connection.sync({force:false}).then(()=>{
                console.log('Se ha establecido la conexion :3');
            })
        });
    }
}
module.exports= Server;