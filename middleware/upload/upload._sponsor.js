const multer = require('multer')
const cloudinary = require('cloudinary')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'public/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const Upload = multer({storage})
cloudinary.config({
    cloud_name: 'ddyqecch9',
    api_key: '998688522633124',
    api_secret: 'Qr-edPCg7hlz7IeRtgZaevwVpGA'
})
exports.sponsor = Upload.single('image_sponsor')

