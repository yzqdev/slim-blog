/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1570612395695_7299';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: '123456',
      // database
      database: 'react_blog',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  config.security = {
　　　　csrf: {enable: false },
　　　　domainWhiteList: [ '*' ]
　　};

  config.cors = {
    origin:  function(ctx) { //设置允许来自指定域名请求
      const whiteList = ['http://localhost:7800','http://localhost:4000']; //可跨域白名单
      let url = ctx.header.referer.substr(0,ctx.header.referer.length - 1);
      if(whiteList.includes(url)){
        return url //注意，这里域名末尾不能带/，否则不成功，所以在之前我把/通过substr干掉了
      }
      return 'http://localhost::3000' //默认允许本地请求3000端口可跨域
    },
    credentials: true,  //允许Cook可以跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
    };

    //长文本设置
    config.bodyParser = {
      enable: true,
      encoding: 'utf8',
      formLimit: '5024kb',
      jsonLimit: '5024kb',
      strict: true,
      // @see https://github.com/hapijs/qs/blob/master/lib/parse.js#L8 for more options
      queryString: {
        arrayLimit: 100,
        depth: 5,
        parameterLimit: 1000,
      },

    }

  return {
    ...config,
    ...userConfig,
  };
};


