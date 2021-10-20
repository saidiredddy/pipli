const router = require('express').Router();
const exelFile = require('../controller/exel.controller');
const multer = require('../middleware/multer')

router.post('/upload', multer.single('file'), exelFile.upload);

module.exports = router;