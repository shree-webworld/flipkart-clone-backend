
import express from "express";
import asyncHandler from "express-async-handler";
import signinController from "../controllers/signinController.js";

const router = new express.Router();


router.get("/api/signin", asyncHandler(signinController) );
router.post("/api/signin", asyncHandler(signinController) );



export default router;
