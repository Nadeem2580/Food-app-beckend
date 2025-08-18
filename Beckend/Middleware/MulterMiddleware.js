// import multer from "multer";
// import { CloudinaryStorage } from "multer-storage-cloudinary";
// import cloudinary from "../configue/Cloudnary.js";
// import path from "path"; // Required for file extension



// function uploadMiddleware(folderName) {
// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: (req, file) => {
//     const folderPath = `${folderName.trim()}`;
//     const fileExtension = path.extname(file.originalname).substring(1);
//     const publicId = `${file.fieldname}-${Date.now()}`;

//     return {
//       folder: folderPath,
//       public_id: publicId,
//       format: fileExtension,
//     };
//   },
// });

// return multer({ storage }); // ✅ Return CloudinaryStorage here
// }

// const upload = uploadMiddleware("restaurants");
// export default upload;

// import multer from "multer";
// const storage = multer.memoryStorage({
//   destination: "./upload",
//   filename: (req, file, callBacksFunc) => {
//     // callBacksFunc(error(forcefully) :Boolean , fileName  )
//     callBacksFunc(false, `${new Date().getTime()} - ${file.originalname}`);
//   },
// });

// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 10 * 1024 * 1024,
//   },
// });
// const upload = multer({storage:multer.diskStorage({})})


// const storage = multer.memoryStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./upload");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });
import multer from "multer";
const storage = multer.memoryStorage()
const upload = multer({ storage: storage });





export default upload;
