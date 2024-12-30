const express = require("express");
const router = express.Router()
const ProductController = require('../controllers/ProductController');
const authMiddleware = require("../middlewares/authMiddleware");
const upload = require("../middlewares/multerMiddleware");

router.post('/create', authMiddleware, upload, ProductController.createProduct)
router.put('/update/:id', authMiddleware, ProductController.updateProduct)
router.get('/get-detail/:id', ProductController.getDetailProduct)
router.delete('/delete/:id', ProductController.deleteProduct)
router.get('/get-all', ProductController.getAllProduct)

module.exports = router