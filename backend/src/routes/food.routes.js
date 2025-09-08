const express = require('express');
const foodController = require('../controllers/food.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();
const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage(),
})

/* POST /api/food/ [PROTECTED] */
router.post('/',
    authMiddleware.authFoodPartnerMiddleware,
    upload.single("video"),
    foodController.createfood)

/* GET /api/food/ [PROTECTED] */

router.get('/',

authMiddleware.authUserMiddleware,
foodController.getFoodItems)


module.exports = router