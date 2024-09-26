import express from "express"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { brainTreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController,  getSingleProductController, productPhotoController, updateProductController } from "../controllers/productController.js";
import formidable from "express-formidable";
import productModel from "../models/productModel.js";
const router = express.Router()
//routes
router.post('/create-product',requireSignIn,isAdmin,formidable(),createProductController)
//get products by category

//Update product
router.put('/update-product/:pid',requireSignIn,isAdmin,formidable(),updateProductController)
//get products
router.get('/get-product',getProductController)
export default router

//single product
router.get('/get-product/:slug', getSingleProductController)

//get photo
router.get("/product-photo/:pid", productPhotoController, async (req, res) => {
    try {
      const product = await productModel.findById(req.params.productId).select('photo');
      if (product.photo.data) {
        res.set('Content-Type', product.photo.contentType);
        return res.send(product.photo.data);
      }
      res.status(404).send('Photo not found');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching photo');
    }
  });

//delete product 
router.delete('delete-product/:pid',deleteProductController)


//payment routes
//token
router.get('/braintree/token',braintreeTokenController)

//payments
router.post('/braintree/payment',requireSignIn,brainTreePaymentController)