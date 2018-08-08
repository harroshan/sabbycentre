const route = require('express').Router()
const {db} = require('../models/notice')
const {Content} = require('../models/notice')
const multer = require('multer') 

const storage = multer.diskStorage({
    destination : './public/uploads/',
    filename : function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload = multer({
    storage : storage
}).single('uploadfile')

route.get('/',async (req,res) => {
    if( req.session && req.session.useremail){
        await Content.findAll().then((cont) =>{
            contents = []
            cont.forEach((content) =>{
                contents.push({content : content.dataValues.content, id : content.dataValues.id, fileName : content.dataValues.fileName})
            })
        })
        await res.render('admin',{contents})
    }
    else{
        res.redirect('/login')
    }
})

route.post('/',async (req,res) => {
    await upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Content.create({
                content : req.body.content,
                fileName : req.file.originalname,
                class : req.body.class
            })
            res.redirect('/a/d/min')
        }
    })
})

route.post('/delete', async (req,res) =>{
    Content.destroy({
        where : {
            id : req.query['id']
        }
    })
    res.redirect('/a/d/min')
})

module.exports = route