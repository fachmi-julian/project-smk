const Admin = require('../model/m_admin')
const cloudinary = require('cloudinary')

module.exports = {
    detailAdmin: async (req, res) => {
        const { id } = req.params
        const data = await Admin.findOne({_id: id})        
        res.send(data)
    },
    addAdmin: async (req,res) => {
        cloudinary.v2.uploader.upload(req.file.path)
        .then((result) => {
            const admin = new Admin({            
                "nm_admin": req.body.nm_admin,                         
                "email": req.body.email,
                "password": req.body.password,                
                "foto_admin":result.url,
                "public_id":result.public_id                
            })      
            const data = admin.save()
            console.log(result)
            res.send(JSON.stringify(`Data Berhasil Di Simpan`))                   
        })
    
    },
    viewAdmin: async (req,res) => {
        const data = await Admin.find();
        res.send(JSON.stringify(data));
    },
    editAdmin: async (req,res) => {                 
        const {id} = req.params;
        const data = await Admin.updateOne({_id:id},req.body)
        res.send(JSON.stringify("data berhasil di update"))  
    },
    deleteAdmin: async (req,res) => {
        const {id} = req.params
        const data = await Admin.deleteOne({_id:id},req.body)
        res.send(JSON.stringify("data berhasil di hapus"))
        
        
    }
       
}