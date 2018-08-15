const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const upload = multer();
const { catchErrors } = require('../handlers/errorHandlers');

// root route
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

// using multer to handle the file uploads
// https://github.com/expressjs/multer
router.post("/file", upload.single('upfile'), (req, res) => {
  res.json({
    fileName: req.file.originalname,
    size: req.file.size
  });
});

module.exports = router;