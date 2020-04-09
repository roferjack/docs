module.exports =  [
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
    { text: 'Record',
      ariaLabel: '内部下拉链接',
      items: [
        { text: '自定义组件', link: '/view/record/customizeComponent/' },
        { text: '项目的坑', link: '/view/record/designProject/' },
      ] 
    },
  ]