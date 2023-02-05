
import express from "express";
import asyncHandler from "express-async-handler";
import signupController from "../controllers/signupController.js";

const router = new express.Router();


router.get("/api/signup", asyncHandler(signupController) );
router.post("/api/signup", asyncHandler(signupController) );



export default router;
