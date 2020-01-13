const sliderController = require('../controller/sliderContoller')
const sliderUpload = require('../middleware/upload/upload_slider')
const sliderDelete = require('../middleware/delete_image/slider_delete')
const cloudinary = require('../middleware/clodinaryConfig')

module.exports = app => {   
    app.post('/slider',sliderUpload.slider,sliderController.tambahSlider);
    app.get('/slider',sliderController.tampilSlider)
    app.get('/slider/:id',sliderController.detailSlider)
    app.put('/slider/:id',sliderDelete.delete,sliderUpload.slider,sliderController.editSlider)    
    app.delete('/slider/:id',sliderDelete.delete,sliderController.hapusSlider)
}