/*
    Ruta:/api/regionales
*/

const { Router } = require('express');
const { consultarRegionales, consultarRegionalBogota } = require('../controllers/regional');

const router = Router();

router.get('/', consultarRegionales); //ejecuta la raiz, arranque

router.get('/regionales/', consultarRegionales);

router.get('/bogota/', consultarRegionalBogota); //ejecuta la raiz, arranque

module.exports = router;