

const permitirRol = ( ...role ) =>{
    return (req, res, next)=>{
        if ( !req.usuario){
            return res.status(500).json({
                mgs:'Se quiere verificar el rol sin antes validar el token primero'
            })
        }
        if ( !role.includes(req.usuario.rol_id)){
            return res.status(401).json({
                msg:`El rol no tiene permitido realizar esta accion`
            })
        }
        next();
    }
} 

module.exports={
    permitirRol
}