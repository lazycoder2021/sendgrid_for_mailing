const sgMail = require('@sendgrid/mail');





const sendEmail = async (req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'tksingh2087@gmail.com', // Change to your recipient
        from: 'thilak@thevikalp.com', // Change to your verified sender
        subject: 'Test Mail From My NodeJs App Using SendGrid API',
        text: 'Test Mail From My NodeJs App Using SendGrid API',
        html: '<strong>Test Mail From My NodeJs App Using SendGrid API</strong>',
    };
    const info = await sgMail.send(msg);
    res.json(info);
};

module.exports = sendEmail;
