'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async login() {
    try {
      const body = this.ctx.request.body;
      const token = await this.ctx.service.user.login(body.username, body.password);
      if (token) {
        this.ctx.body = {
          code: 20000,
          message: true,
          token,
        };
      } else {
        this.ctx.body = {
          code: 40000,
          message: false,
        };
      }
    } catch (error) {
      this.ctx.body = {
        code: 40000,
        message: false,
      };
    }
  }
  async new() {
    this.ctx.body = `
            <form method='post' action='/login'>
               <input name='username'>
               <input name='password'>
                <button>登录</button>
            </form>
        `;
  }
}


module.exports = LoginController;
