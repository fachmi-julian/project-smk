const fasilitasController = require('../controller/fasilitasController')
const uploadFasilitas = require('../middleware/upload/upload_fasilitas')
const hapus = require('../middleware/delete_image/delete_fasilitas')

module.exports = app => {
    app.post('/fasilitas',uploadFasilitas.fasilitas,fasilitasController.tambahFasilitas)
    app.get('/fasilitas',fasilitasController.tampilFasilitas)
    app.get('/fasilitas/:id',fasilitasController.detailFasilitas)
    app.put('/fasilitas/:id',hapus.delete,uploadFasilitas.fasilitas,fasilitasController.editFasilitas)
    app.delete('/fasilitas/:id',hapus.delete,fasilitasController.hapusFasilitas)
}