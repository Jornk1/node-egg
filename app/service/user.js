'use strict';

const Service = require('egg').Service;
const md5 = require('md5-nodejs');
class UserService extends Service {
  // 查看所有账号
  async getUserList() {
    try {
      const userList = await this.app.model.User.findAll();
      return userList;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  // 账号添加
  async createUser(body) {
    const user = { username: body.username, password: md5(body.password) };
    try {
      console.log(user);
      await this.app.model.User.create(user);
      return true;
    } catch (error) {
      return false;
    }
  }

  async login(username, password) {
    try {

      const passwordMd5 = md5(password);
      const user = await this.app.model.User.findOne({
        where: {
          username,
        },
      });
      if (user) {
        const psd = user.dataValues.password;
        const usr = user.dataValues.username;
        if (username === usr && passwordMd5 === psd) {
          const token = this.app.jwt.sign({
            username,
          }, this.app.config.jwt.secret);
          return token;
        }
        return false;

      }
      return false;

    } catch (error) {
      return false;
    }
  }
}

module.exports = UserService;
