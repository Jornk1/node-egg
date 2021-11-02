'use strict';

const Controller = require('egg').Controller;
class RegisterController extends Controller {

  async index() {
    try {
      const userList = await this.ctx.service.user.getUserList();
      this.ctx.body = {
        code: 20000,
        message: true,
        data: userList,
      };
    } catch (error) {
      this.ctx.body = {
        code: 30000,
        message: false,
      };
    }
  }
  async new() {
    this.ctx.body = `
            <form method='post' action='/register'>
               <input name='username'>
               <input name='password'>
                <button>添加</button>
            </form>
        `;
  }
  async create() {
    try {
      const body = this.ctx.request.body;
      await this.ctx.service.user.createUser(body);
      this.ctx.body = {
        code: 20000,
        message: true,
      };
    } catch (error) {
      this.ctx.body = {
        code: 30000,
        data: '失败',
      };
    }
  }
}

module.exports = RegisterController;
