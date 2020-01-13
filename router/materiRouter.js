const materiController = require('../controller/materiController')

module.exports = app => {
    app.post('/materi',materiController.tambahMateri)
    app.get('/materi',materiController.tampilMateri)
    app.get('/materi/:id',materiController.detailMateri)
    app.delete('/materi/:id',materiController.hapusMateri)
    app.put('/materi/:id',materiController.editMateri)
}