const users= require ("../controllers/users.controllers");
var router = require("express").Router();


router.get('/', (req, res) => {
    res.render('login');
});
router.post('/register', users.create);

router.get('/register',(req,res) =>{
    res.render('register');
});

router.post('/auth', users.select);



module.exports = router;