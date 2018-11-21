const route = require('express').Router()
const nodemailer = require('nodemailer')

route.get('/',(req,res) => {
    res.render('registration')
})

route.post('/', (req,res) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'sabbystudycentrestudents@gmail.com',
               pass: 'sabbysir'
           }
    });
    maillist = `${req.body.email},harroshanmakkar@gmail.com`
    const mailOptions = {
        from: 'sabbystudycentrestudents@gmail.com', // sender address
        to: `${maillist}`, // list of receivers
        subject: 'Enrollment done', // Subject line
        html: `Hi ${req.body.firstname} 
        ${req.body.lastname}! ${''} ${''}
        Welcome to Sabby with your opted course:- 
        ${req.body.course}.
        Seeing your bright future We will move ahead`
        // plain text body
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    });
    res.redirect('/')
})
module.exports = route
