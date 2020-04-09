// .vuepress/config.js
module.exports = {
    title: '消失的烟雨',
    description: '我来自广东，是一条伪前端的咸鱼，只会cv操作，但我有梦想，其实在梦里都实现了！',
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['meta', { name: 'author', content:'消失的烟雨' }],  
      ['meta', { name: 'keywords', content:'消失的烟雨,伪前端的咸鱼' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['link', { rel: 'apple-touch-icon', href: 'images/icons/icon-152x152.png' }],
      // ['link', { rel: 'mask-icon', href: 'images/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
      ['meta', { name: 'msapplication-TileImage', content: 'images/icons/icon-144x144.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }]            
    ],
 
    themeConfig: {
      logo: 'assets/img/logo.png',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/about' },      
        { text: '前端', 
          ariaLabel: '内部下拉链接',
          items: [
            { text: 'html', link: '/view/web/html/' },
            { text: 'css', link: '/view/web/css/' },
            { text: 'js', link: '/view/web/js/' }
          ]  
        },   
        { text: '生活', 
          ariaLabel: '内部下拉链接',
          items: [
            { text: '美食', link: '/view/life/foods/' },
            { text: '娱乐', link: '/view/life/play/' },
            { text: '梦想', link: '/view/life/dream/' }
          ]  
        },            
        {
          text: '驻扎的部落',
          ariaLabel: '外部部下拉链接',
          items: [
            { text: '简书', link: 'https://www.jianshu.com/u/ffa465719c53' },
            { text: '掘金', link: 'https://juejin.im/user/5df5d3f4f265da33f718b434' }
          ]
        },               
        { text: '代码仓库', 
          ariaLabel: '外部部下拉链接',
          items: [
            { text: 'Github', link: 'https://github.com/roferjack/docs' },
            { text: 'Gitee', link: 'https://gitee.com/rofer_ky/docs' }
          ]
        },
        { text: '简历', link: '/resume' },          
        { text: 'Record', link: '/record' },
      ],
      sidebar: 'auto', 
      //数组方式创建侧边栏
      // sidebar: [
      //     '',
      //     'about',
      //     {
      //       title: 'css',
      //       path: '/css/',
      //       collapsable: false,
      //       sidebarDepth: 1,
      //       children: [
      //           '/css/a',
      //           '/css/b'                
      //       ]

      //     }
      // ]
          //对象方式创建侧边栏
      sidebar: {
          '/view/web/html/': [
            '',
            'html-4',
            'html-5',


         ],          
          '/view/web/css/': [
              '',
              'css-vue',
              'css-react',
              'css-select'


          ],   
          '/view/web/js/': [
            '',
            'promise',
            'this',
            'work'


          ],  
          
          '/view/life/dream/': [
            '',
            'a',
            'b',


          ],
          '/view/life/play/': [
            '',
            'a',
            'b',


          ],
          '/view/life/foods/': [
            '',
            'a',
            'b',


          ],                              

      },
      lastUpdated: '更新时间', // string | boolean       
    },
    
    base: '/docs/',
    plugins: [
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
          clientId: '3832d279cf1fe2e81bbd',
          clientSecret: 'b2bcfda013c1d894b4696ed87fbfbd8ce7703f80',
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
          'ga': 'UA-163182007-1'
        }
      ],
    ]


  }