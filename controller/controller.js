const Model = require('../model/m_login')
const Siswa = require('../model/m_siswa')
const cloudinary = require('cloudinary')


exports.addUser = async (req,res) => {
    const user = new Model(req.body);
    const data = await user.save()
    res.send(JSON.stringify(data))
}
//================SiSWA=================//
// exports.addSiswa = async (req,res) => {
//     cloudinary.v2.uploader.upload(req.file.path)
//     .then((result) => {
//         const siswaSchema = new Siswa({            
//             "nis": req.body.nis,
//             "nm_siswa": req.body.nm_siswa,
//             "tempat_lahir": req.body.tempat_lahir,
//             "tgl_lahir":req.body.tgl_lahir,
//             "alamat": req.body.alamat,            
//             "email": req.body.email,
//             "password": req.body.password,
//             "no_telpon":req.body.no_telpon,
//             "foto_siswa":result.url,
//             "jurusan":req.body.jurusan
//         })      
//         const data = siswaSchema.save()
//         res.send(JSON.stringify(siswaSchema))                   
//     })
    

    // const siswa = new Siswa({
    // "nis": req.body.id_siswa,
    // "nm_siswa": req.body.nm_siswa,
    // "tempat_lahir": req.body.tempat_lahir,
    // "tgl_lahir":req.body.tgl_lahir,
    // "alamat": req.body.alamat,
    // "id_jurusan": req.body.jns_kelamin,
    // "nama_jurusan": req.body.agama,
    // "email": req.body.email,
    // "password": req.body.password,
    // "no_telpon":req.body.no_telpon,
    // "foto_siswa":
    // });
    // const data = await siswa.save();
    // res.send(JSON.stringify(data))
    //console.log(req.body, req.file)
//}

// exports.editSiswa = async (req,res) => {
//     const {id_siswa} = req.params;
//     const data = await Siswa.updateOne({_id_siswa:id_siswa},req.body)
//     res.send(JSON.stringify("data berhasil di update"))
// }

// exports.deleteSiswa = async (req,res) => {
//     const {id_siswa} = req.params;
//     const data = await Siswa.deleteOne({_id_siswa:id_siswa},req.body)
//     res.send(JSON.stringify({"response":data}))
// }

// exports.detailSiswa = async (req,res) => {
//     const {id} = req.params
//     const data = await Siswa.findOne({id})
//     console.log(data)
//     res.send(JSON.stringify({"response":data}))
// }

// exports.detailSiswa = async (req,res) => {
//     const {id} = req.params
//     const data = await Siswa.findOne({_id:id});
    
//     res.send(JSON.stringify(data));
// }

module.exports = {
    detailSiswa: async (req, res) => {
        const { id } = req.params
        const data = await Siswa.findOne({_id: id})
        //.populate('jurusan', 'nama_jurusan')
        res.send(data)
    },
    addSiswa: async (req,res) => {
        cloudinary.v2.uploader.upload(req.file.path)
        .then((result) => {
            const siswaSchema = new Siswa({            
                "nis": req.body.nis,
                "nm_siswa": req.body.nm_siswa,
                "tempat_lahir": req.body.tempat_lahir,
                "tgl_lahir":req.body.tgl_lahir,
                "alamat": req.body.alamat,            
                "email": req.body.email,
                "password": req.body.password,
                "no_telpon":req.body.no_telpon,
                "foto_siswa":result.url,
                "public_id":result.public_id,
                "jurusan":req.body.jurusan,                
            })      
            const data = siswaSchema.save()
            res.send(JSON.stringify("Data Berhasil Di Simpan"))                   
        })
    
    },
    viewSiswa: async (req,res) => {
        const data = await Siswa.find();
        res.send(JSON.stringify(data));
    },
    editSiswa: (req,res) => {
        cloudinary.v2.uploader.upload(req.file.path)
        .then((result) => {
            req.body.foto_siswa=result.url;
            req.body.public_id=result.public_id;
        
            // const {id} = req.params;
            return req.body
        })
        .then((body) => {
            const data = Siswa.updateOne({_id:req.params.id},{$set:body})
            return data
        })
        .then((data)=>{
            res.send(JSON.stringify(data))
        })
        .catch(err => {
            res.send('ga bisa')
        })
    },
    deleteSiswa: async (req,res) => {
        const {id} = req.params;
        const data = await Siswa.deleteOne({_id:id},req.body)
        res.send(JSON.stringify("data berhasil di hapus"))
    }
       
}