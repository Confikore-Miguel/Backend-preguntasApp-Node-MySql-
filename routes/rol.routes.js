const { Router } = require('express');
const { obtenerRoles } = require('../controllers/rol.controller');

const router = Router();

router.get('/',obtenerRoles)

module.exports= router;