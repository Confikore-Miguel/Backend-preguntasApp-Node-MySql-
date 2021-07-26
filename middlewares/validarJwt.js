const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const { Usuario } = require('../database/db');

const validarJWT = async(req= request, res = response, next)=>{

    const token = req.header('x-token');
    if ( !token ){
        return res.status(401).json({
            msg:'No hay token en la peticion'
        })
    }
    try {
        const {uid}= jwt.verify( token, process.env.SECRETORPRIVATEKEY );
        //leer usuario que corresponde al uid
        const usuario = await Usuario.findByPk(uid);

        if( !usuario){
            return res.status(401).json({
                msg:'Token no válido - no existe usuario'
            })
        }
        req.usuario= usuario;

        next();
    } catch (e) {
        console.log(e);
        return res.status(401).json({
            msg:'Token no valido'
        })
    }
}


module.exports = {
    validarJWT
}