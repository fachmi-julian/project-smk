const testiController = require('../controller/testiContoller')
const uploadTesti = require('../middleware/upload/upload_testimoni')
const hapus = require('../middleware/delete_image/delete_testimoni')

module.exports = app => {
    app.post('/testimoni',uploadTesti.testimoni,testiController.tambahTestimoni)
    app.get('/testimoni',testiController.tampilTestimoni)
    app.put('/testimoni/:id',hapus.delete,uploadTesti.testimoni,testiController.editTestimoni)
    app.delete('/testimoni/:id',hapus.delete,testiController.hapusTestimoni)
    app.get('/testimoni/:id',testiController.detailTestimoni)
    
}