const multer = require('multer');
const { imageStorage } = require('../config/multer');

const imageUploader = multer({
  storage: imageStorage,
  limits: {
    fileSize: 10000000, // 10000000 Bytes = 10 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      // upload only png and jpg format
      return cb(new Error('Please upload an Image'));
    }
    cb(undefined, true);
  },
});

module.exports = {
  imageUploader,
};
