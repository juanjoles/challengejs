const operation = require("../controllers/operation.controller.js")
var router = require("express").Router();



router.get('/', operation.select);

router.get('/', (req, res) => {
    res.render('home');
});
router.get('/create', (req, res) => {
    res.render('create');
});
router.post('/create', operation.create);

router.get('/select', operation.finAllType);

router.get('/select', (req, res) => {
    res.render('select')
});

router.post('/eliminar/:id', operation.delete);

router.get('/editar/:id', operation.findOneRegister );

router.put('/ver/:id',operation.update);



module.exports = router;