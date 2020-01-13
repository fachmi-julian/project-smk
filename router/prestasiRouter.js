const prestasiController = require('../controller/prestasiController')
const uploadPrestasi = require('../middleware/upload/upload_prestasi')
const hapusPrestasi = require('../middleware/delete_image/delete_prestasi')

module.exports = app => {
    app.post('/prestasi',uploadPrestasi.prestasi,prestasiController.tambahPrestasi)
    app.get('/prestasi',prestasiController.tampilPrestasi)
    app.get('/prestasi/:id',prestasiController.detailPrestasi)
    app.delete('/prestasi/:id',hapusPrestasi.delete,prestasiController.hapusPrestasi)
    app.put('/prestasi/:id',hapusPrestasi.delete,uploadPrestasi.prestasi,prestasiController.editPrestasi)
}