
module.exports=  {
  development:{
    username:process.env.USER_NAME_DB || "root",
    password:process.env.PASSWORD_DB || 'ejemploX',
    database:process.env.DATABSE_DB || "dataBase",
    host:process.env.HOST_DB || 'localhost',
    dialect:process.env.DIALECT || "mysql",
    define:{
      timestamps:false,
      //genera clave foreaneas de este tipo user_id en ves de userId
    }
  }
  }


