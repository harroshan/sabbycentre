const route = require('express').Router()
const {db} = require('../models/notice')
const {Content} = require('../models/notice')

route.get('/',async (req,res) => {
    await Content.findAll().then((cont) =>{
        contents = []
        cont.forEach((content) =>{
            contents.push({
                content : content.dataValues.content,
                id : content.dataValues.id, 
                class : content.dataValues.class,
                fileName : content.dataValues.fileName
            })
        })
    })
    await res.render('notice',{contents})
})
route.get('#class12', async (req,res)=>{
    await Content.findAll({
        where : {class : 12}
    }).then((cont) =>{
        class12 = []
        cont.forEach((content) =>{
            class12.push({content : content.dataValues.content, id : content.dataValues.id, fileName : content.dataValues.fileName})
        })
    })
    res.render('notice',{class12})
})

module.exports = route