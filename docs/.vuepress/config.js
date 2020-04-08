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
        { text: '简历', link: '/resume' },        
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
          selector: '.theme-container img',
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
      ]
    ]


  }