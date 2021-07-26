const {Pregunta, Categoria, Respuesta} = require("../database/db");

const crearPregunta= async(req, res )=>{

    try {
        const {contenido,categoria_id} = req.body;
        const data={
            contenido,
            categoria_id,
            usuario_id:req.usuario.id
        }
        const pregunta = await  Pregunta.create(data);
        return res.json({ok:true,pregunta});    

    } catch (e) {
        console.log(e);
        return res.status(500).json({msg:'Hable con el administrador'});
    }
}
const editarPregunta= async(req, res )=>{
    try {
        const { id } = req.params;
        const body = req.body;
        const pregunta = await Pregunta.update(body,{
            where:{
                id
            }
        });
        return res.json({ok:true,pregunta});    

    } catch (e) {
        console.log(e);
        return res.status(500).json({msg:'Hable con el administrador'});
    } 
}
const obtenerPreguntas= async(req, res )=>{
    try {
        const { categoria_id } = req.params
        const [ total , preguntas ] = await Promise.all([
            Pregunta.count(),
            Pregunta.findAll({
                include:[{
                    model:Categoria,
                    as:'categoria',
                    attributes:['nom_categoria']
                },{
                    model:Respuesta,
                    as:'respuestas',
                    attributes:['contenido','correcta']
                }],
                attributes:['contenido','id'],
                where:{
                    categoria_id
                }
            })
        ])
        return res.json({ok:true,total,preguntas});    

    } catch (e) {
        console.log(e);
        return res.status(500).json({msg:'Hable con el administrador'});
    }  
}
const obtenerPregunta= async(req, res )=>{
    try {
        const { id } = req.params
        const pregunta = await Pregunta.findAll({
                include:[{
                    model:Categoria,
                    as:'categoria',
                    attributes:['nom_categoria']
                },{
                    model:Respuesta,
                    as:'respuestas',
                    attributes:['contenido','correcta']
                }],
                attributes:['contenido','id'],
                where:{
                    id
                }
            })
  
        return res.json({ok:true,pregunta});    

    } catch (e) {
        console.log(e);
        return res.status(500).json({msg:'Hable con el administrador'});
    }  
}
const deletePregunta= async(req, res )=>{
    try {
        const { id } = req.params;
        // bien podria crear estados y cambiar el estado a false
        const pregunta = await Pregunta.destroy({
            where:{
                id
            }
        })
        return res.json({msg:'Pregunta eliminada',pregunta})    
    } catch (e) {
        console.log(e);
        return res.status(500).json({msg:'Hable con el administrador'});
    }
}

module.exports={
    crearPregunta,
    editarPregunta,
    obtenerPreguntas,
    obtenerPregunta,
    deletePregunta
}