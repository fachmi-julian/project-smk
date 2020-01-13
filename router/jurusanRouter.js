const jurusanCOntroller = require('../controller/jurusanController')
const uploadJurusan = require('../middleware/upload/upload_jurusan')

module.exports = app => {
    app.post('/jurusan',uploadJurusan.jurusan,jurusanCOntroller.tambahJurusan)
    app.get('/jurusan',jurusanCOntroller.tampilJurusan)
    app.get('/jurusan/:id',jurusanCOntroller.detailJurusan)
}