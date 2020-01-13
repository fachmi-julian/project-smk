const cloudinary = require('cloudinary')

exports.cld = () => {
    cloudinary.config({
        cloud_name: 'ddyqecch9',
        api_key: '998688522633124',
        api_secret: 'Qr-edPCg7hlz7IeRtgZaevwVpGA'
    })
}


// exports.uploads = (file) =>{
//     return new Promise(resolve => {
//         cloudinary.uploader.upload(file, (result) =>{
//             resolve({url: result.url,
//                  id: result.public_id})
//         }, {resource_type: "auto"})
//     })
// }