var express = require('express');
var router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const carPreferencesController = require('../controllers/carPreferencesController');

router.use(authMiddleware.authenticate);

router.get('/',carPreferencesController.index)

router.post('/',carPreferencesController.store)

router.get('/:id/edit',carPreferencesController.edit)

router.get('/:id/editByUserId',carPreferencesController.editByUserId)

router.put('/:id',carPreferencesController.update)


router.delete('/:id',carPreferencesController.destroy)



module.exports = router;
