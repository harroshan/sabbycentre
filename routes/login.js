const route = require('express').Router()

const admin = {
    "abc@xyz.com" : {
        password : "hello123"
    },
    "def@xyz.com" : {
        password : "hello456"
    },
    "admin@admin.com" : {
        password: "admin"
    }
}

route.get('/', (req,res) => {
    res.render('login')
})

route.post('/',async (req,res) => {
    const user = await admin[req.body.email]

    if(!user){
        res.redirect('/login')
    }
    if(user.password === req.body.password){
        req.session.useremail = req.body.email
        return res.redirect('/a/d/min')
    }
    else{res.redirect('/login')}
})

module.exports = route
