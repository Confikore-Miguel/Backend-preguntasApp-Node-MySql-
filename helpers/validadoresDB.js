const { Usuario,Categoria } = require('../database/db')

const existEmail = async( correo= '')=>{

    const exist = await Usuario.findOne({ where:{email:correo}});
        if ( exist && exist.email === correo){
            console.log(exist,'DENTRO');
            throw new Error(`El correo '${ correo }' ya esta registrado `);
        } 
} 
const existCateogria = async( categoria= '')=>{

    const exist = await Categoria.findOne({ where:{nom_categoria:categoria}});
    
        if ( exist && exist.nom_categoria === categoria ){
            throw new Error(`La categoria '${ categoria }' ya esta registrado `);
        } 
} 
module.exports = {
     existEmail,
     existCateogria
}