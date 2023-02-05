
import express from "express";
import asyncHandler from "express-async-handler";
import {productsController} from "../controllers/productsController.js";
import {productsByIDController} from "../controllers/productsByIDController.js";


const router = new express.Router();


router.get("/api/products", asyncHandler(productsController) );
router.get("/api/products/:id", asyncHandler(productsByIDController) );

// router.post("/api/signin", asyncHandler(signinController) );



export default router;
