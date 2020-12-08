const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'angelo.keirsebilck1@telenet.be',
        subject: 'Welcome to the task manager app!',
        text: `Welcome again ${name}.`
    });
};

const sendDeleteAccount = (email, name) => {
    sgMail.send({
        to: email,
        from: 'angelo.keirsebilck1@telenet.be',
        subject: 'We feel sorry you were not happy with the app.',
        text: `Sorry again ${name}.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendDeleteAccount
}