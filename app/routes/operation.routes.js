const operation = require("../controllers/operation.controller.js")
var router = require("express").Router();



router.get('/home', operation.select);

router.get('/home', (req, res) => {
    res.render('home');
});
router.get('/create', (req, res) => {
    res.render('create');
});
router.post('/operation', operation.create);


module.exports = router;