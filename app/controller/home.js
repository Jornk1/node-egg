'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '响应成功！';
  }

  async homeSendMail() {
    let str = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += str[Math.floor(Math.random() * 36)];
    }
    const { ctx } = this;
    const email = '1870067218@qq.com';
    const subject = '测试文件！';
    const text = '这是一封测试邮件！';
    const html = `
    <h1>验证码：<a>${code}</a></h1>
    `;
    const has_send = await this.service.nodemailer.sendMail(email, subject, html);
    if (has_send) {
      ctx.body = '发送成功！';
      return;
    }
    ctx.body = '发送失败！';
    
  }
}

module.exports = HomeController;
