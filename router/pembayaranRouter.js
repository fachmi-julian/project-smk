const pembayranController = require('../controller/pembayaranContoller')

module.exports = app => {
    app.post('/pembayaran',pembayranController.tambahPembayaran)
    app.get('/pembayaran',pembayranController.tampilPembayaran)
    app.get('/pembayaran/:nis',pembayranController.detailPembayaran)
    app.delete('/pembayaran/:id',pembayranController.hapusPembayaran)
}