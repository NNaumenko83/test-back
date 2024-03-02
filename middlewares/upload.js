const multer = require('multer');

const maxSize = 3 * 1024 * 1024;

const storage = multer.memoryStorage();

const upload = multer({
    storage,
    limits: { fileSize: maxSize },
});

module.exports = upload;

// const multer = require('multer');
// const path = require('path');

// const tempDir = path.join(__dirname, '../', 'temp');

// const multerConfig = multer.diskStorage({
//     destination: tempDir,
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     },
// });

// const upload = multer({ storage: multerConfig });

// module.exports = upload;
