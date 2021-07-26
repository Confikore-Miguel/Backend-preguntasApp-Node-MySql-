const bcrytjs = require('bcryptjs');

const {Usuario} = require('../database/db');
const { generarJWT } = require('../helpers/generarJwt');


const login = async (req, res= response)=>{

    const { email, password }= req.body;

    try {
        //Verificar si el email existe
        const usuario = await Usuario.findOne({
            where:{email},
            attributes:['name','last_name','email','password','id']
        });

        if( !usuario ){
            return res.status(400).json({
                msg:'Usuario/Password no son correctos email'
            })
        }
        //Verificar la constraseña
        const validPassword= bcrytjs.compareSync(password, usuario.password);
        if (!validPassword ){
            return res.status(400).json({
                msg:'Usuario/Password no son correctos'
            })
        }
        const data ={ 
            id:usuario.id,
            name:usuario.name,
            last_name:usuario.last_name,
            email:usuario.email
        }
        //Generar el JSON WEB TOKEN JWT
        const token = await generarJWT(usuario.id);
        return res.json({
            data,
            token
        })
        
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            msg:'Hable con el administrador'
        })
    }
}
const renovar= async(req, res )=>{
    try {
        const { name, last_name ,id,rol_id } = req.usuario;
        const token = await generarJWT(id);
        return res.json({ ok:true,name,last_name,token,rol_id })
    } catch (error) {
        console.log(error);
    }
}

const accesoRol=async(req,res)=>{
    try {
        return res.json({ok:true,msg:'Usuario permitido'});
    } catch (e) {
        console.log(e);
        return res.status(500).json({msg:'Hable con el administrador'});
    }
}

module.exports={
    login,
    renovar,
    accesoRol
}