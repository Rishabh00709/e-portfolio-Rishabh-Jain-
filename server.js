const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const dotenv = require('dotnev');

dotenv.config();

let initialPath = path.join(__dirname,"public");
let app = express();

app.use(express.static(initialPath));
app.use(express.json());
app.get('/',(req,res) =>{
    res.sendFile(path.join(initialPath,"index.html"));

})

app.post('/mail',(req,res)=>{
    const { firstname,lastname,email,msg} = req.body;

    const transport = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user: process.env.EMAIL,
            pass:process.env.PASSWORD
        }
    })

    const mailOptions ={
        from: 'enter sender email here',
        to: 'enter reciever mail here',
        subject: 'portfolio',
        text : 'first name: $(firstname),\nLast name: ${lastname},\nEmail:${email},\n Message:${msg}'
    }
    transporter.sendMail(mailOptions,(err,result) => {
        if(err)
        {
            console.log(err);
            res.json('opps! it seems like error occured')

        }
        else{
            res.json('thanks for emailing.will reply asap')
        }
    })
})
app.listen('3000', () => {
    console.log('listening.........');
})


//contact form

const contactBtn = document.querySelector('.contact-btn');
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const msg = document.querySelector('.message');

contactBtn.addEventListener('click', () => {
    if(firstName.value.length && lastName.value.length && email.value.length && msg.value.length)
    {
        fetch('/mail' , {
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(
                {
                    firstname: firstName.value,
                    lastname: lastName.value,
                    email: email.value,
                    msg : msg.value,

                }
            )
        })
        .then(res => res.json())
        .then(data =>
            {
                alert(data);
            })
    }

})
