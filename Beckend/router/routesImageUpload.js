import express from "express";
import {
  uploadImageController,
} from "../Controller/Controller.js";
import upload from "../Middleware/MulterMiddleware.js";
import authMiddleware from "../Middleware/authCheck.js";

const uploadImage = express.Router();

uploadImage.post("/upload-image", upload.single("Image"), authMiddleware, uploadImageController);





export default uploadImage;
