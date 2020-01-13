const adminController = require('../controller/adminController')
const upload = require('../middleware/upload/upload_admin')
const deleteImage = require('../middleware/delete_image/delete_slider') 


module.exports = app => {   
    app.post('/admin',upload.uploadAdmin,adminController.addAdmin);
    app.get('/admin',adminController.viewAdmin)
    app.get('/admin/:id',adminController.detailAdmin)
    app.put('/admin/:id',deleteImage.delete,deleteImage.edit,adminController.editAdmin)
    app.delete('/admin/:id',deleteImage.delete,adminController.deleteAdmin)
}