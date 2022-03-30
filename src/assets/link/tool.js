import tsImg from './../image/ic-ts.png'
import githubImg from './../image/github.png'
import mdnImg from './../image/ic-mdn.png'
import leetcodeImg from './../image/ic-leetcode.png'
import JPEGImagerlImg from './../image/JPEGImager.png'
import clogImg from './../image/clog.png'
import psImg from './../image/ps.png'
import menuicon from './menuicon.js'
import tbImg from './../image/tb.png'

/* 常用推荐 */
const linkData = {
    name: '常用推荐',
    data: [{
            title: 'Colg',
            tips: '中国的网游类综合站点',
            img: clogImg,
            url: 'https://bbs.colg.cn/forum.php',
        },
        {
            title: '贴吧',
            tips: '百度贴吧，以兴趣主题聚合志同道合者的互动平台',
            img: tbImg,
            url: 'https://tieba.baidu.com/',
        },
        {
            title: '知乎',
            tips: '高质量问答社区',
            img: 'https://imgsrc.baidu.com/forum/pic/item/6709c93d70cf3bc71923c096d200baa1cd112aac.jpg',
            url: 'https://www.zhihu.com/',
        },
        {
            title: 'Github',
            tips: '世界上最大的代码托管平台',
            img: githubImg,
            url: 'https://github.com/',
        },
        {
            title: 'Vercel',
            tips: '最好用的网站托管服务平台',
            img: 'https://avatars.githubusercontent.com/u/14985020?s=200&v=4',
            url: 'https://vercel.com/',
        },
        {
            title: 'Gitee',
            tips: '码云，国内的开源社区~',
            img: 'https://pic3.zhimg.com/v2-77b1a31dc62d9e00abd0ea6cdaba5c83_xll.jpg',
            url: 'https://gitee.com/',
        },
    ],
}

import zzgjImg from './../image/zzgj.png'
import iocnfontImg from './../image/iocnfont.png'

/* 常用工具 */
const toolLink = {
    name: '常用工具',
    icon: menuicon.toolIcon,
    data: [{
            title: 'iconfont',
            tips: '丰富的矢量图标库',
            img: iocnfontImg,
            url: 'https://www.iconfont.cn/',
        },
        {
            title: 'JSON在线校验格式化工具',
            tips: 'JSON在线解析(双击自动格式化) ',
            img: JPEGImagerlImg,
            url: 'https://www.bejson.com/explore/index_new/',
        },
        {
            title: '百度文库免费下载工具',
            tips: '百度文库免费下载，可以导出包括ppt、word、excel等多个格式的文档资源。',
            img: 'https://www.cxyhub.com/wp-content/uploads/2021/06/icon.png',
            url: 'https://www.cxyhub.com/all/tool/2894/',
        },
        {
            title: '在线进制转换',
            tips: '支持在2~36进制之间进行任意转换，支持浮点型',
            url: 'https://tool.oschina.net/hexconvert',
        },
        {
            title: 'MD5加密工具',
            tips: 'MD5加密是一种知名的不可逆的加密算法，在密码存储领域里被广泛使用',
            url: 'https://tool.liumingye.cn/md5/',
        },
        {
            title: '站长工具',
            tips: '站长工具是站长的必备工具。经常上站长工具可以了解SEO数据变化。',
            img: zzgjImg,
            url: 'https://tool.chinaz.com/',
        },
        {
            title: '图片压缩工具',
            tips: '图片压缩工具',
            img: JPEGImagerlImg,
            url: 'https://www.bejson.com/ui/compress_img/',
        },
        {
            title: '线上PS',
            tips: 'Photopea | Online Photo Editor',
            img: psImg,
            url: 'https://www.photopea.com/',
        },
        {
            title: 'PDF转换器',
            tips: '线上支持Pdf转Word,Word转Pdf等功能。',
            url: 'http://www.pdfdo.com/pdf-to-word.aspx',
        },
    ],
}

/* 磁力搜索 */
const btLink = {
    name: '磁力搜索',
    icon: menuicon.btIcon,
    data: [{
            img: 'https://www.no404.vip/wp-content/uploads/2020/02/bt1207.png',
            title: 'BT1207',
            tips: '资源多，更新快的磁力链接搜索引擎',
            url: 'https://bt1207ei.xyz/',
        },
        {
            img: 'https://www.no404.vip/wp-content/uploads/2020/02/laowang.png',
            title: '老王磁力',
            tips: '索引了全球最新最热门的BT种子信息和磁力链接',
            url: 'https://laowangfi.xyz/',
        },
        {
            img: 'https://www.no404.vip/wp-content/uploads/2020/02/skrbt.png',
            title: 'SkrBT',
            tips: '全银河系资源最丰富的种子搜索网站',
            // tags: ['磁力搜素'],
            url: 'https://skrbtei.xyz/',
        },
    ],
}

/* 常用CSS工具 */
const cssLink = {
    name: '常用CSS工具',
    icon: menuicon.cssIcon,
    data: [{
            title: 'Animista',
            tips: '在线有大量CSS动画网络应用程序。',
            tags: ['CSS动画'],
            url: 'https://animista.net/',
        },
        {
            title: 'Hover',
            tips: '一组CSS3驱动的悬停效果，可应用于链接、按钮、徽标、SVG、特色图像等',
            tags: ['CSS动画'],
            url: 'http://ianlunn.github.io/Hover/',
        },
        {
            title: 'Animation-tool',
            tips: '前端动画工具',
            tags: ['CSS动画'],
            url: 'https://www.w3cways.com/css3-animation-tool',
        },
        {
            title: 'Less',
            tags: ['CSS扩展'],
            tips: 'Less 是一门向后兼容的 CSS 扩展语言。',
            img: 'https://avatars.githubusercontent.com/u/3538330?s=200&v=4',
            url: 'https://less.bootcss.com/',
        },
        {
            title: 'Sass',
            tags: ['CSS扩展'],
            tips: '世界上最成熟、最稳定、最强大的专业级CSS扩展语言。',
            img: 'https://avatars.githubusercontent.com/u/317889?s=200&v=4',
            url: 'https://www.sass.hk/',
        },
    ],
}

/* 常用库及框架 */
const webLink = {
    name: '常用库及框架',
    icon: menuicon.jsIcon,
    data: [{
            title: 'React',
            tags: ['框架'],
            tips: '用于构建用户界面的 JavaScript 库',
            img: 'https://img.doit.com.cn/uploadpic/2013/1223/9211991.png',
            url: 'https://zh-hans.reactjs.org/',
        },
        {
            title: 'Vue',
            tags: ['框架'],
            tips: 'Vue是一套用于构建用户界面的渐进式框架。',
            img: 'https://avatars.githubusercontent.com/u/6128107?s=200&v=4',
            url: 'https://cn.vuejs.org/',
        },
        {
            title: 'Angular',
            tags: ['框架'],
            tips: 'AngularJS是一个应用设计框架与开发平台。',
            img: 'https://avatars.githubusercontent.com/u/139426?s=200&v=4',
            url: 'https://angular.cn/',
        },
        {
            title: 'Flutter',
            tags: ['移动端'],
            tips: '可以快速在iOS和Android上构建高质量的原生用户界面。',
            img: 'https://avatars.githubusercontent.com/u/14101776?s=200&v=4',
            url: 'https://flutterchina.club/docs/',
        },
        {
            title: 'React Native',
            tags: ['移动端'],
            tips: '使用 React 来创建 Android 和 iOS 的原生应用',
            img: 'https://img.doit.com.cn/uploadpic/2013/1223/9211991.png',
            url: 'https://www.react-native.cn/',
        },
        {
            title: 'Taro',
            tags: ['移动端'],
            tips: '一个开放式跨端跨框架解决方案。',
            img: 'https://avatars.githubusercontent.com/u/30794937?s=200&v=4',
            url: 'https://taro-docs.jd.com/taro/',
        },
        {
            title: 'Uni-app',
            tags: ['移动端'],
            tips: '一个使用Vue.js开发所有前端应用的框架.',
            img: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/9a952c80-6080-11eb-a16f-5b3e54966275.png',
            url: 'https://uniapp.dcloud.io/',
        },
        {
            title: 'Vuepress',
            tags: ['博客'],
            tips: '在 Markdown 中使用 Vue 组件,又可以使用 Vue 来开发自定义主题。',
            img: 'https://avatars.githubusercontent.com/u/6128107?s=200&v=4',
            url: 'https://vuepress.vuejs.org/zh/',
        },
        {
            title: 'NuxtJS',
            tags: ['框架'],
            tips: 'NuxtJS 让你构建你的下一个 Vue.js 应用程序变得更有信心。',
            img: 'https://avatars.githubusercontent.com/u/23360933?s=200&v=4',
            url: 'https://www.nuxtjs.cn/',
        },
        {
            title: 'Redux',
            tags: ['状态管理'],
            tips: 'Redux 是 JavaScript 应用程序的状态容器，提供可预测的状态管理。',
            img: 'https://www.reduxjs.cn/img/redux.svg',
            url: 'https://www.reduxjs.cn/',
        },
        {
            title: 'Vuex',
            tags: ['状态管理'],
            tips: 'Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式 + 库。',
            img: 'https://avatars.githubusercontent.com/u/6128107?s=200&v=4',
            url: 'https://vuex.vuejs.org/zh/',
        },
        {
            title: 'Hexo',
            tags: ['博客'],
            tips: 'Hexo 是一个快速、简洁且高效的博客框架。',
            img: 'https://avatars.githubusercontent.com/u/6375567?s=200&v=4',
            url: 'https://hexo.io/zh-cn/',
        },
        {
            title: 'NodeJS',
            tags: ['服务端'],
            tips: 'Node.js 是运行在服务端的 JavaScript。',
            img: 'https://avatars.githubusercontent.com/u/9950313?s=200&v=4',
            url: 'http://nodejs.cn/',
        },
        {
            title: 'Deno',
            tags: ['服务端'],
            tips: 'Deno是一个 JavaScript/TypeScript 的运行时,默认使用安全环境执行代码,有着卓越的开发体验。',
            img: 'https://avatars.githubusercontent.com/u/42048915?s=200&v=4',
            url: 'https://deno.js.cn/',
        },
        {
            title: 'Lodash',
            tags: ['JS工具库'],
            tips: 'Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。',
            img: 'https://avatars.githubusercontent.com/u/2565403?s=200&v=4',
            url: 'https://www.lodashjs.com/',
        },
        {
            title: 'TypeScript',
            tags: ['JS工具库'],
            tips: 'JavaScript的超集。',
            img: tsImg,
            url: 'https://www.tslang.cn/index.html',
        },
    ],
}

import zkxgnImg from './../image/zkxgn.png'
/* 学习 */
const webStudy = {
    name: '学习',
    icon: menuicon.studyIcon,
    data: [{
            title: '新概念每日一练',
            tags: ['ZK'],
            tips: '刷题',
            img: zkxgnImg,
            url: 'http://learn.lsyvip.com/',
            // user:"513723199712185178"
        },
        {
            title: 'ES6 入门教程',
            tags: ['ES6'],
            tips: '全面介绍 ECMAScript 6 新引入的语法特性。',
            img: 'https://pic3.zhimg.com/v2-19fd33c5a591cc2eedfaa089075e73c8_1440w.jpg',
            url: 'https://es6.ruanyifeng.com/',
        },
        {
            title: 'MDN',
            tips: 'MDN Web Docs 是一个提供 Web 技术和促进 Web 技术软件的不断发展的学习平台',
            img: mdnImg,
            url: 'https://developer.mozilla.org/zh-CN/docs/Web',
        },
        {
            title: 'Youzack',
            tags: ['英语精听'],
            tips: '英语听力精听、背单词',
            url: 'https://www.youzack.com/',
        },
        {
            title: 'LeetCode',
            tips: '海量技术面试资源',
            img: leetcodeImg,
            url: 'https://leetcode-cn.com/',
        },
    ],
}

/* 前端UI库 */
const webUi = {
    name: '前端UI库',
    icon: menuicon.uiIcon,
    data: [{
            title: 'Element-UI',
            tags: ['UI'],
            tips: 'Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库',
            img: 'https://avatars.githubusercontent.com/u/23526893?s=70&v=4',
            url: 'https://element.eleme.cn/#/zh-CN',
        },
        {
            title: 'Ant Design of React',
            tags: ['UI'],
            tips: '是基于 Ant Design 设计体系的 React UI 组件库',
            img: 'https://avatars.githubusercontent.com/u/12101536?s=200&v=4',
            url: 'https://ant.design/docs/react/introduce-cn',
        },
        {
            title: 'Ant Design of Vue',
            tags: ['UI'],
            tips: '这里是 Ant Design 的 Vue 实现，开发和服务于企业级后台产品。',
            img: 'https://avatars.githubusercontent.com/u/32120805?s=200&v=4',
            url: 'https://ant.design/docs/react/introduce-cn',
        },
        {
            title: 'Vant',
            tags: ['UI'],
            tips: '轻量、可靠的移动端 Vue 组件库',
            img: 'https://img.yzcdn.cn/vant/logo.png',
            url: 'https://vant-contrib.gitee.io/vant/',
        },
        {
            title: 'iView',
            tags: ['UI'],
            tips: '一套基于 Vue.js 的高质量UI 组件库',
            img: 'https://avatars.githubusercontent.com/u/20693613?s=200&v=4',
            url: 'http://v1.iviewui.com/',
        },
        {
            title: 'Bootstrap',
            tags: ['UI'],
            tips: '用于开发响应式布局、移动设备优先的 WEB 项目。',
            img: 'https://avatars.githubusercontent.com/u/2918581?s=200&v=4',
            url: 'https://v3.bootcss.com/',
        },
    ],
}

/* 前端打包工具 */
const webBuild = {
    name: '常用打包工具',
    icon: menuicon.buildIcon,
    data: [{
            title: 'Webpack',
            tips: 'webpack 是一个现代 JavaScript 应用程序的静态模块打包器。',
            img: 'https://avatars.githubusercontent.com/u/2105791?s=200&v=4',
            url: 'https://www.webpackjs.com/',
        },
        {
            title: 'Gulp',
            tips: '用自动化构建工具增强你的工作流程',
            img: 'https://avatars.githubusercontent.com/u/6200624?s=200&v=4',
            url: 'https://www.gulpjs.com.cn/',
        },
    ],
}

/* 面试相关 */
const interview = {
    name: '面试相关',
    icon: menuicon.interviewIcon,
    data: [{
        title: '前端面试宝典',
        tips: '前端面试基础知识、面试准备、面试题~',
        img: 'https://gw.alipayobjects.com/zos/bmw-prod/501b3e5b-8924-45cd-95ee-4c7470570204.svg',
        url: 'https://gxaedu.yuque.com/books/share/010981b8-858b-4b0a-96e9-e0bd7da1b0ed/ul5f8d',
    }, ],
}

export default [
    linkData,
    toolLink,
    cssLink,
    webLink,
    webStudy,
    webUi,
    webBuild,
    btLink,
    interview,
]