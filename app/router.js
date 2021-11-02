'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/123', controller.home.homeSendMail);
  router.get('/register', controller.register.index);
  router.resources('register', '/register', controller.register);
  router.post('/login', controller.login.login);
};
