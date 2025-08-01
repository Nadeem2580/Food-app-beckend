import express from "express";
import {
  uploadImageContoller,
} from "../Controller/Controller.js";
import upload from "../Middleware/MulterMiddleware.js";
import authMiddleware from "../Middleware/authCheck.js";

const uploadImage = express.Router();

uploadImage.post(
  "/upload-image",
   upload.single("Image"),authMiddleware,
  uploadImageContoller
);





export default uploadImage;
