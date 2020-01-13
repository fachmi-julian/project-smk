const kontakKamiController = require('../controller/kontakKamiContoller')

module.exports = app => {
    app.post('/kontak-kami',kontakKamiController.tambahKontakKami)
    app.get('/kontak-kami',kontakKamiController.tampilKontakKami)
}