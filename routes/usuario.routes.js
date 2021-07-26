const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validarJwt');

const { crearUsuario, 
        editarUsuario,
        allUsuarios,
        oneUsuario,
         } = require('../controllers/usuarios.controller');
const { existEmail } = require('../helpers/validadoresDB');
    
const router = Router();

router.post('/',[
        check('name','El nombre es obligatorio').not().isEmpty(),
        check('last_name','El apellido es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio').not().isEmpty(),
        check('password','La constraseña es obligatoria').not().isEmpty(),
        check('email').custom(existEmail),
        validarCampos
],crearUsuario);

router.put('/:id',[
        validarJWT,
        check('id','El id es obligatorio').not().isEmpty(),
        validarCampos
],editarUsuario);

router.get('/all',[
        validarJWT,
        validarCampos
],allUsuarios);

router.get('/one/:id',[
        validarJWT,
        check('id','El id es obligatorio').not().isEmpty(),
        validarCampos
],oneUsuario);

module.exports= router;