const { Voto, Categoria, Usuario} = require("../database/db");

const crearVoto= async(req, res )=>{
    try {
        const {correctas,incorrectas,categoria_id,tiempo} = req.body;
        const data={
            //TODO: aqui va con el jwt
            usuario_id:req.usuario.id,
            correctas,
            incorrectas,
            categoria_id,
            tiempo
        }
        await  Voto.create(data);
        return res.json({ok:true,msg:'Voto creado'});    
    } catch (e) {
        console.log(e);
        return res.status(500).json({msg:'Hable con el administrador'});
    }
}
const obtenerVotos= async(req, res )=>{
    try {
        const { id_categoria } = req.params;
        const [ total , votos ] = await Promise.all([
            Voto.count(),
            Voto.findAll({
                include:[{
                    model:Categoria,
                    as:'categoria_voto',
                    attributes:['nom_categoria'],
                    where:{
                        id:id_categoria
                    }   
                },{
                    model:Usuario,
                    as:'usuario',
                    attributes:['name','last_name']
                }
                ],
                order:[['incorrectas','ASC']],
                limit:10,
                attributes:['correctas','incorrectas','tiempo']
            })
        ])
        return res.json({ok:true,total,votos});    

    } catch (e) {
        console.log(e);
        return res.status(500).json({msg:'Hable con el administrador'});
    }  
}
const obtenerVoto= async(req, res )=>{
    try {
        const { id_categoria,usuario_id } = req.params;
        const votos = await Voto.findAll({
                include:[{
                    model:Categoria,
                    as:'categoria_voto',
                    attributes:['nom_categoria'],
                    where:{
                        id:id_categoria
                    }
                }],
                where:{
                    usuario_id
                },
                order:[['id','DESC']],
                limit:1,
                attributes:['correctas','incorrectas']
            })
        return res.json({ok:true,votos});    

    } catch (e) {
        console.log(e);
        return res.status(500).json({msg:'Hable con el administrador'});
    }  
}

module.exports={
    crearVoto,
    obtenerVotos,
    obtenerVoto
}