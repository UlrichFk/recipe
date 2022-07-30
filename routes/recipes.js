const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const recipeCtrl = require('../controllers/recipes');

router.get('/get&limit=:limit', auth, recipeCtrl.getAnyMoreRecipe);
router.post('/create', auth, recipeCtrl.createRecipe);
router.put('/update/:recipeid', auth, recipeCtrl.updateRecipe);
router.delete('/delete/:recipeid', auth, recipeCtrl.deleteRecipe);

module.exports = router;
