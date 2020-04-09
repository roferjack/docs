const pluginSecret  = require('./secret')
module.exports =[
    ['vuepress-plugin-nprogress'],
    [
      'vuepress-plugin-zooming',
      {
        selector: '.theme-container img',//这个是类选择器
        delay: 1000,
        options: {
          bgColor: 'black',
          zIndex: 10000,
        },
      },

    ],
    ['@vuepress/back-to-top'],
    ['@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ],
    ['@vssue/vuepress-plugin-vssue',{
        // 设置 `platform` 而不是 `api`
        platform: 'github-v4',
  
        // 其他的 Vssue 配置
        owner: 'roferjack',
        repo: 'docs',
        clientId: pluginSecret.clientId,
        clientSecret: pluginSecret.clientSecret,
        autoCreateIssue: true,
        locale: 'zh'
      }, 
    ],
    // ['@vssue/vuepress-plugin-vssue',{//这是gitee的设置，由于官方原因暂时搁置
    //   // 设置 `platform` 而不是 `api`
    //   platform: 'gitee',

    //   // 其他的 Vssue 配置
    //   owner: 'roferky',
    //   repo: 'docs',
    //   clientId: '7a9e527474205a97bb83a3b2005e0c7d7f1793f6f3790c4b53289b5947a608de',
    //   clientSecret: '2103b48d4fd688d4ebaeb498b9d440d2506e463f14e710cf41d95485a7231145',
    //   autoCreateIssue: true,
    //   locale: 'zh'
    //  }, 
    // ]
    [
      '@vuepress/google-analytics',
      {
        'ga': pluginSecret.ga
      }
    ],
  ]