const controller = require('../controller/controller');
const middleware = require('../middleware/upload')
const hapusSiswa = require('../middleware/delete_image/delete_siswa')
const Murid = require('../model/m_murid')
const multer = require('multer')
const Upload = multer({dest: 'foto-murid/'})

module.exports = app => {

    //==================LOGIN======================//
    // app.post('/add-user',controller.addUser);

    //==================SISWA======================//
    app.post('/siswa',middleware.uploadProfile,controller.addSiswa)
    app.get('/siswa',controller.viewSiswa)
    app.put('/siswa/:id',hapusSiswa.delete,middleware.uploadProfile,controller.editSiswa)
    app.delete('/siswa/:id',hapusSiswa.delete,controller.deleteSiswa)
    app.get('/siswa/:id',controller.detailSiswa)

    //================testupload===================//
    app.post('/murid',Upload.single('foto'),(req,res,next) => {
        const data = new Murid({
            nm_murid:req.body.nm_murid
        })
        data.save()
        res.send(JSON.stringify(req.file.originalname))
    })
}