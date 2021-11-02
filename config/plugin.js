'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  // token 的插件
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  // 模板
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
};
