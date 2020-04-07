// .vuepress/config.js
module.exports = {
    title: '消失的烟雨',
    description: '我来自广东，是一条伪前端的咸鱼，只会cv操作，但我有梦想，其实在梦里都实现了！',
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['meta', { name: 'author', content:'消失的烟雨' }],  
      ['meta', { name: 'keywords', content:'消失的烟雨,伪前端的咸鱼' }]      
    ],
    themeConfig: {
      logo: '/assets/img/logo.png',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/about' },
        { text: '简历', link: '/resume' },        
        { text: '前端', 
          ariaLabel: '内部下拉链接',
          items: [
            { text: 'html', link: '/view/html/' },
            { text: 'css', link: '/view/css/' },
            { text: 'js', link: '/view/js/' }
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
          '/view/html/': [
            '',
            'a',
            'b',


         ],          
          '/view/css/': [
              '',
              'a',
              'b',


          ],   
          '/view/js/': [
            '',
            'a',
            'b',


          ],              

      },
      lastUpdated: '更新时间', // string | boolean       
    },
    
    base: '/docs/'

  }