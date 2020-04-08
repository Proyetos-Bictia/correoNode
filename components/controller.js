const nodemailer = require('nodemailer')

async function sendEmail(body){

    if(!body.email || !body.message || !body.subject){
        return Promise.reject('faltan campos por llenar')
    }

    const { email, message , subject } = body
    contentHTML = `
    <h1>Information YourDriver</h1>
    <ul>
        <li>Mr, Ms: ${email}</li>
    </ul>

    <p>${message}</p>
    `

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'yourdriverusa@gmail.com',
            pass: 'Valentino10'
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const info = await transporter.sendMail({
        from: 'yourdriverusa@gmail.com',
        to: email,
        subject: subject,
        html: contentHTML
    })
    return info;
}


module.exports = {
    sendEmail,
}