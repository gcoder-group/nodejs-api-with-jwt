var express = require('express');
var router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const accountController = require('../controllers/accountController');

router.use(authMiddleware.authenticate);


/* dashboard route */
router.post('/dashboard', (req,res)=>{
    return res.json('dashboard')
});

/* brand route */
router.get('/brands',accountController.brands);

router.get('/models',accountController.models);

router.get('/varients',accountController.varients);


module.exports = router;
