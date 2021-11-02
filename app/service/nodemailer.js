'use strict';

const Service = require('egg').Service;
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'qq',
    secureConnection: true,
    port: 465,
    auth: {
        user: '1473690092@qq.com',
        pass: 'fhrqexazprbygdbh',
    },
});


class nodemailerService extends Service {
    async sendMail(eamil, subject, text, html) {
        const mailOptions = {
            from: '1473690092@qq.com',
            to: eamil,
            subject: subject,
            text: text,
            html: html,
        };
        try {
            await transporter.sendMail(mailOptions);
            return true;
        } catch (err) {
            return false;
        }
    }
}

module.exports = nodemailerService;