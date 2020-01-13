const kontakKamiSchema = require('../model/m_kontakKami')

exports.tambahKontakKami = async (req,res) => {
    const kontakKami = new kontakKamiSchema(req.body)
    const data = await kontakKami.save()
    res.send(JSON.stringify(`Pesan Terkirim`))
}

exports.tampilKontakKami = async (req,res) => {
    const data = await kontakKamiSchema.find(req.body)
    res.send(JSON.stringify(data)) 
}