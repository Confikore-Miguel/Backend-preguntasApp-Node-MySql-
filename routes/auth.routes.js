const { Router } = require('express');
const { check } = require('express-validator');
const { login, renovar, accesoRol } = require('../controllers/auth.controller');
const { validarCampos} = require('../middlewares/validar-campos');
const { permitirRol } = require('../middlewares/validar-rol');
const { validarJWT} = require('../middlewares/validarJwt');

const router = Router();

router.post('/',[
    check('email','El correo es obligatorio').not().isEmpty(),
    check('password','El password es obligatorio').not().isEmpty(),
    validarCampos
],login)

router.get('/renovar',[
    validarJWT,
    validarCampos
],renovar);

router.get('/permitir-rol',[
    validarJWT,
    permitirRol(1),
    validarCampos
],accesoRol);

module.exports= router;