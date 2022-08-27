const { S3Client } = require('@aws-sdk/client-s3');
const multerS3 = require('multer-s3');
const path = require('path');

const s3Client = new S3Client({
  region: 'us-east-1',
  endpoint: 'http://127.0.0.1:9000',
  forcePathStyle: true,
});

const imageStorage = multerS3({
  s3: s3Client,
  bucket: 'audiovisualizer',
  acl: 'public-read',
  metadata(req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key(req, file, cb) {
    const formattedFileName = `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`;
    cb(null, formattedFileName);
  },
});

module.exports = {
  imageStorage,
};
