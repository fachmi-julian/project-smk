const hapus = require('../../model/m_fasilitas');
const cloudinary = require('cloudinary')

module.exports = {
  delete: async (req,res,next) => {
    cloudinary.config({
      cloud_name: 'ddyqecch9',
      api_key: '998688522633124',
      api_secret: 'Qr-edPCg7hlz7IeRtgZaevwVpGA'
    })
    const url = await hapus.findById(req.params.id)
    const oldData = url.public_id
    cloudinary.v2.uploader.destroy(oldData)
    console.log(oldData)
    next() 
  }
}