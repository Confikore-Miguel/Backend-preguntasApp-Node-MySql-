const bcrypyjs = require('bcryptjs')
const { Usuario } = require("../database/db");
const {generarJWT} = require('../helpers/generarJwt')

// const prueba = async( req, res )=>{

//     const usuarios = await Voto.findAll({
//         include:[
//             {
//                 model:Respuesta,
//                 as: 'respuestas',
//                 attributes:['contenido','correcta']
//             },
//             {
//                 model:Pregunta,
//                 as: 'pregunta',
//                 attributes:['contenido','categoria_id'],
//                 where:{
//                     categoria_id:4
//                 }
//             },
//         ],
//         attributes:['usuario_id'],
//         where:{
//             usuario_id:1
//         }
//     })

//     res.json({
//         mgs:'Hola todo',
//         usuarios
//     })
// }
const crearUsuario = async( req, res )=>{
    try {
    const body = req.body;
    console.log(body);
    const salt = bcrypyjs.genSaltSync();
    body.password = bcrypyjs.hashSync(body.password, salt);
    
    const {id}= await Usuario.create(body);
    const token = await generarJWT(id);
    return res.json({
        mgs:'Usuario creado',
        ok:true,
        token
    })
    } catch (e) {   
        console.log(e);
        return res.status(500).json({msg:'Hable con el administrador'})
    }
}
const allUsuarios = async( req, res )=>{
    try {
    const usuarios = await Usuario.findAll();
    return res.json({
        ok:true,
        usuarios
    })
    } catch (e) {   
        console.log(e);
        return res.status(500).json({msg:'Hable con el administrador'})
    }
}
const oneUsuario = async( req, res )=>{
    try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);
    return res.json({
        ok:true,
        usuario
    })
    } catch (e) {   
        console.log(e);
        return res.status(500).json({msg:'Hable con el administrador'})
    }
}
const editarUsuario = async( req, res )=>{
    try {

    const { id } = req.params;
    const { password, ...resto} = req.body;
    
    await Usuario.update(resto,{
        where:{
            id
        }
    });
    return res.json({
        mgs:'Se ha actualizado la informacion',
        ok:true
    })
    } catch (e) {   
        console.log(e);
        return res.status(500).json({msg:'Hable con el administrador'})
    }
}



module.exports = { 
    crearUsuario,
    editarUsuario,
    allUsuarios,
    oneUsuario
}