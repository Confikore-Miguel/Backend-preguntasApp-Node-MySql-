const {Categoria} = require("../database/db");


const crearCategoria= async(req, res )=>{

    try {
        const {nom_categoria} = req.body;
        const data = {
            nom_categoria,
            usuario_id:req.usuario.id
        }
        const categoria = await Categoria.create(data);
        return res.json({ok:true,categoria});    

    } catch (e) {
        console.log(e);
        return res.status(500).json({msg:'Hable con el administrador'});
    }
}
const editarCategoria= async(req, res )=>{
    try {
        const { id } = req.params;
        const body = req.body;
        const categoria = await Categoria.update(body,{
            where:{
                id
            }
        });
        return res.json({ok:true,categoria});    

    } catch (e) {
        console.log(e);
        return res.status(500).json({msg:'Hable con el administrador'});
    } 
}
const obtenerCategoriasPorCreador= async(req, res )=>{
    try {
        const [ total , categorias ] = await Promise.all([
            Categoria.count(),
            Categoria.findAll({where:{usuario_id:req.usuario.id}})
        ])
        return res.json({ok:true,total,categorias});    

    } catch (e) {
        console.log(e);
        return res.status(500).json({msg:'Hable con el administrador'});
    }  
}
const obtenerCategorias= async(req, res )=>{
    try {
        const [ total , categorias ] = await Promise.all([
            Categoria.count(),
            Categoria.findAll()
        ])
        return res.json({ok:true,total,categorias});    

    } catch (e) {
        console.log(e);
        return res.status(500).json({msg:'Hable con el administrador'});
    }  
}
const deleteCategoria= async(req, res )=>{
    try {
        const { id } = req.params;
        // bien podria crear estados y cambiar el estado a false
        const categoria = await Categoria.destroy({
            where:{
                id
            }
        })
        return res.json({msg:'Categoria eliminada',categoria})    
    } catch (e) {
        console.log(e);
        return res.status(500).json({msg:'Hable con el administrador'});
    }
}

module.exports={
    crearCategoria,
    editarCategoria,
    obtenerCategoriasPorCreador,
    obtenerCategorias,
    deleteCategoria
}