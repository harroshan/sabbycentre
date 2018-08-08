const route = require('express').Router()
const session = require('express-session')

route.get('/',(req,res) =>{
    req.session.destroy((err) => {
        if(err) throw err

        res.redirect('/login')
    })
})

module.exports = route