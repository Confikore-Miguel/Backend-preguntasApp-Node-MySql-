const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validarJwt');

const { crearPregunta,
        obtenerPreguntas, 
        editarPregunta, 
        deletePregunta, 
        obtenerPregunta} = require('../controllers/pregunta.controller');

    
const router = Router();

router.post('/',[
    validarJWT,
    check('contenido','El contenido es obligatorio').not().isEmpty(),
    check('categoria_id','El id de la categoria es obligatorio').not().isEmpty(),
    validarCampos
],crearPregunta );

router.get('/:categoria_id',[
    validarJWT,
    validarCampos
],obtenerPreguntas);

router.get('/pregunta-id/:id',[
    validarJWT,
    validarCampos
],obtenerPregunta);

router.put('/:id',[
    validarJWT,
    check('id','El id es obligatorio'),
    validarCampos
],editarPregunta);

router.delete('/:id',[
    validarJWT,
    check('id','El id es obligatorio'),
    validarCampos
],deletePregunta);


module.exports= router;