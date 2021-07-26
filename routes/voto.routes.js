const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validarJwt');

const { crearVoto, 
        obtenerVotos, 
        obtenerVoto } = require('../controllers/voto.controller');

const router = Router();

router.post('/',[
    validarJWT,
    check('correctas','Correctas es obligatorio').not().isEmpty(),
    check('incorrectas','Incorrectas es obligatorio').not().isEmpty(),
    check('categoria_id','El id de la categoria es obligatorio').not().isEmpty(),
    validarCampos
],crearVoto);

router.get('/:id_categoria',[
    validarJWT,
    check('id_categoria','El id de la categoria es obligatorio').not().isEmpty(),
    validarCampos
],obtenerVotos);

router.get('/:id_categoria/:usuario_id',[
    validarJWT,
    check('id_categoria','El id de la categoria es obligatorio').not().isEmpty(),
    check('usuario_id','El id del usuario es obligatorio').not().isEmpty(),
    validarCampos
],obtenerVoto);


module.exports= router;