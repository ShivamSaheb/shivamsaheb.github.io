var nodemailer = require('nodemailer');

/**
* @param context {WebtaskContext}
*/
module.exports = function (context, cb) {
    console.log('Starting')
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: context.secrets.EMAIL,
            pass: context.secrets.PASS
        }
    });

    var mailOptions = {
        from: 'youremail@gmail.com',
        to: context.secrets.EMAIL,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });


    cb(null, { hello: context.query.name || 'Anonymous' });
};

