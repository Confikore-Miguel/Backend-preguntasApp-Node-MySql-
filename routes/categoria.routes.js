const { Router } = require('express');
const { check } = require('express-validator');

const { crearCategoria, 
        obtenerCategorias, 
        editarCategoria, 
        deleteCategoria, 
        obtenerCategoriasPorCreador
        } = require('../controllers/categoria.controller');
        
const { existCateogria } = require('../helpers/validadoresDB');

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validarJwt');

    
const router = Router();

router.post('/',[
        validarJWT,
        check('nom_categoria','El nombre de la categoria es obligatoria').not().isEmpty(),
        check('nom_categoria').custom(existCateogria),
        validarCampos
],crearCategoria);

router.get('/categorias-creador',[
        validarJWT,
        validarCampos
],obtenerCategoriasPorCreador);

router.get('/',[
        validarJWT,
        validarCampos
],obtenerCategorias);

router.put('/:id',[
        validarJWT,
        check('id','El id es obligatorio').not().isEmpty(),
        validarCampos
],editarCategoria);

router.delete('/:id',[
        validarJWT,
        check('id','El id es obligatorio').not().isEmpty(),
        validarCampos
],deleteCategoria );


module.exports= router;