const {Respuesta, Pregunta} = require("../database/db");


const crearRespuesta= async(req, res )=>{

    try {
        const {contenido,correcta,pregunta_id} = req.body;
        const data={
            contenido,
            correcta,
            pregunta_id
        }
        await  Respuesta.create(data);
        return res.json({ok:true,msg:'Respuesta creada'});    

    } catch (e) {
        console.log(e);
        return res.status(500).json({msg:'Hable con el administrador'});
    }
}
const editarRespuesta= async(req, res )=>{
    try {
        const { id } = req.params;
        const body = req.body;
        const respuesta = await Respuesta.update(body,{
            where:{
                id
            }
        });
        return res.json({ok:true,respuesta});    

    } catch (e) {
        console.log(e);
        return res.status(500).json({msg:'Hable con el administrador'});
    } 
}
const obtenerRespuestas= async(req, res )=>{
    try {
        const { pregunta_id } = req.params;
        const [ total , respuestas ] = await Promise.all([
            Respuesta.count(),
            Respuesta.findAll({
                include:[{
                    model:Pregunta,
                    as:'pregunta',
                    attributes:['contenido']
                }],
                attributes:['contenido','correcta','id'],
                where:{
                    pregunta_id
                }
            })
        ])
        return res.json({ok:true,total,respuestas});    

    } catch (e) {
        console.log(e);
        return res.status(500).json({msg:'Hable con el administrador'});
    }  
}
const deleteRespuesta= async(req, res )=>{
    try {
        const { id } = req.params;
        // bien podria crear estados y cambiar el estado a false
        const respuesta = await Respuesta.destroy({
            where:{
                id
            }
        })
        return res.json({msg:'Respuesta eliminada',respuesta})    
    } catch (e) {
        console.log(e);
        return res.status(500).json({msg:'Hable con el administrador'});
    }
}

module.exports={
    crearRespuesta,
    editarRespuesta,
    obtenerRespuestas,
    deleteRespuesta
}