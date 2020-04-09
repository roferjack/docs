// .vuepress/config.js
const headConifg = require('./config/headConfig');
const pluginConfig = require('./config/pluginConfig');
const navConfig = require('./config/navConfig');
const sidebarConfig = require('./config/sidebarConfig');
module.exports = {
    title: '消失的烟雨',
    description: '我来自广东，是一条伪前端的咸鱼，只会cv操作，但我有梦想，其实在梦里都实现了！',
    head: headConifg,
    themeConfig: {
      logo: 'assets/img/logo.png',
      nav: navConfig,
      sidebar: 'auto', 
      sidebar: sidebarConfig,
      lastUpdated: '更新时间', // string | boolean       
    },
    
    base: '/docs/',
    plugins: pluginConfig,


  }