
const { Rol } = require('../database/db')

const obtenerRoles = async(req, res )=>{
    try {
        const roles = await Rol.findAll()
        return res.json({
            ok:true,
            roles
        })
    } catch (e) {
        console.log(e);
        return res.status(500).json({msg:'Hable con el adminitrador'});
    }

}

module.exports={ 
    obtenerRoles
}