const express = require('express')
const hbs = require('hbs')
const app = express()
const session = require('express-session')

hbs.registerPartials('./views/partials')

app.set('view engine','hbs')
port = process.env.PORT || 4000
app.use(express.json())
app.use(express.urlencoded({extended  : true}))
app.use('/', express.static(__dirname + '/public'))

app.use(session({
    resave : false,
    saveUninitialize : false,
    secret : 'Hided'
}))

app.use('/a/d/min', require('./routes/admin'))

app.use('/notice', require('./routes/notice'))

app.use('/register', require('./routes/register'))

app.use('/logout',require('./routes/logout'))

app.get('/',(req,res) => {
    res.redirect('/home')
})

app.get('/home',(req,res) => {
    res.render('home')
})

app.get('/testimonial', (req,res)=>{
    res.render('testimonial')
})

app.use('/login', require('./routes/login'))

app.get('/result',(req,res) => {
    res.render('result')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.listen(port, () => console.log('Server started'))
