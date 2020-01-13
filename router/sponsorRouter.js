const sponsorController = require('../controller/sponsorController')
const sponsorUpload = require('../middleware/upload/upload._sponsor')
const sponsorDelete = require('../middleware/delete_image/delete_sponsor')

module.exports = app => {   
    app.post('/sponsor',sponsorUpload.sponsor,sponsorController.tambahSponsor);
    app.get('/sponsor',sponsorController.tampilSponsor)
    app.get('/sponsor/:id',sponsorController.detailSponsor)
    app.put('/sponsor/:id',sponsorDelete.delete,sponsorUpload.sponsor,sponsorController.editSponsor)
    app.delete('/sponsor/:id',sponsorDelete.delete,sponsorController.hapusSponsor)
    
}