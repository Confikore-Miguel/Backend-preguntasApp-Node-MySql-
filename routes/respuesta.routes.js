const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validarJwt');

const { crearRespuesta,
        editarRespuesta,
        obtenerRespuestas, 
        deleteRespuesta } = require('../controllers/respuesta.controller');
    
const router = Router();

router.post('/',[
    validarJWT,
    check('contenido','El contenido es obligatorio').not().isEmpty(),
    check('correcta','Correcta es obligatorio').not().isEmpty(),
    check('pregunta_id','El id pregunta es obligatorio').not().isEmpty(),
    validarCampos
],crearRespuesta);

router.put('/:id',[
    validarJWT,
    check('id','El id es obligatorio').not().isEmpty(),
    validarCampos
],editarRespuesta);

router.get('/:pregunta_id',[
    validarJWT,
    check('pregunta_id','El id de la respuesta obligatorio').not().isEmpty(),
    validarCampos
],obtenerRespuestas);

router.delete('/:id',[
    validarJWT,
    check('id','El id de la respuesta obligatorio').not().isEmpty(),
    validarCampos
],deleteRespuesta);


module.exports= router;