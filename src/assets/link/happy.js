import biliImg from './../image/bilibili.png'
import yinhuaImg from './../image/yinhua.png'
import txImg from './../image/txmh.png'
import biliMhImg from './../image/bilibilimange.png'
import youxiaImg from './../image/youxia.png'
import epicImg from './../image/epic.png'
import originImg from './../image/origin.png'
import ZLibraryImg from './../image/ZLibrary.png'
import ebookImg from './../image/ebook.png'

/* ACG社区 */
const manhuaData = {
    name: 'ACG社区',
    data: [{
            title: '哔哩哔哩',
            tags: ['视频'],
            tips: '- ( ゜- ゜)つロ 乾杯~ - ',
            img: biliImg,
            url: 'https://www.bilibili.com/',
        },
        {
            title: 'AcFun',
            tags: ['视频'],
            tips: 'AcFun弹幕视频网，简称“A站”.',
            img: 'https://ss0.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3831121515,712354576&fm=26&gp=0.jpg',
            url: 'https://www.acfun.cn/',
        },

        {
            title: '樱花动漫',
            tags: ['视频'],
            tips: '有上万集高清晰画质的在线动漫',
            img: yinhuaImg,
            url: 'http://www.imomoe.live/',
        },
        {
            title: '腾讯漫画',
            tags: ['漫画'],
            tips: '最大正版动漫网站,连载众多原创国漫。',
            img: txImg,
            url: 'https://ac.qq.com/',
        },
        {
            title: '哔哩哔哩漫画',
            tags: ['漫画'],
            tips: 'bilibili运营的正版漫画软件。',
            img: biliMhImg,
            url: 'https://manga.bilibili.com/',
        },
        {
            title: '布卡漫画',
            tags: ['漫画'],
            tips: '老牌的漫画网站~',
            img: 'https://pic3.zhimg.com/80/v2-3fbb52cc212493da2940c180228384b5_qhd.jpg',
            url: 'http://www.buka.cn/',
        },
        {
            // img: 'https://www.no404.vip/wp-content/uploads/2020/02/bt1207.png',
            title: '土豪漫画',
            tags: ['漫画', '免费'],
            tips: '免费漫画在线看,各类日本漫画,国产漫画,韩国漫画等海内外知名漫画在线观看.',
            url: 'https://www.tuho123.com/',
        },
        {
            title: '琉璃神社',
            tags: ['视频', 'H漫画'],
            tips: '琉璃神社是一个分享最新最酷的ACG同人作品资讯社团,在这里你能找到很多欢乐。',
            img: 'https://imgsa.baidu.com/forum/pic/item/aec379310a55b319e2125aeb46a98226cefc1740.jpg',
            url: 'https://www.liuli.cz/wp/',
        },
        {
            title: 'Mox.moe',
            tags: ['漫画', '下载'],
            tips: '高清Kindle格式漫画下载,支持推送漫画到kindle设备。',
            url: 'https://mox.moe/',
        },
    ],
}

/* 音乐相关 */
const musicData = {
    name: '音乐相关',
    data: [{
            img: 'https://bizaladdin-image.baidu.com/0/pic/1455484060_685827087_-310145699.jpg',
            title: '网易云',
            tips: '网易云音乐是一款专注于发现与分享的音乐产品',
            url: 'https://music.163.com/',
        },
        {
            img: 'https://bizaladdin-image.baidu.com/0/pic/2138999253_739995401_-1931658075.jpg',
            title: '酷狗音乐',
            tips: '酷狗音乐在线正版音乐网站,为您提供酷狗音乐播放器下载 、在线音乐试听下载,提供听书、长音频、电台、听小说和MV播放服务。',
            url: 'https://www.kugou.com/',
        },
        {
            img: 'https://zhengxin-pub.bj.bcebos.com/financepic/79f8460416371429d998df7c8088e879_fullsize.jpg',
            title: '咪咕音乐',
            tips: '咪咕音乐是一家音乐综合服务提供商。',
            url: 'https://music.migu.cn/v3',
        },

        {
            title: 'MyFreeMp3',
            tips: 'Free Music Downloads 320Kbps Songs MOBILE',
            url: 'http://tool.liumingye.cn/music/?page=searchPage',
        },
        {
            title: '音乐直链搜索',
            tips: '特制多站合一音乐搜索解决方案',
            url: 'https://music.liuzhijin.cn/',
        },
    ],
}

/* 书籍相关 */
const bookData = {
    name: '书籍相关',
    data: [{
            title: '鸠摩搜索',
            tags: ['下载'],
            tips: '鸠摩图书下载~',
            img: 'https://www2.jiumodiary.com/images/front/eleps.png',
            url: 'https://www.jiumodiary.com/',
        },
        {
            title: 'Z-Library',
            tags: ['下载'],
            tips: '全球最大的数字图书馆',
            img: ZLibraryImg,
            url: 'https://zh.booksc.xyz/',
        },
        {
            title: '知识库',
            tags: ['下载'],
            tips: '收集了海量书籍资源的网站',
            img: 'https://book.zhishikoo.com/wp-content/uploads/2019/09/logo.png',
            url: 'https://book.zhishikoo.com/',
        },

        {
            title: 'Lorefree',
            tags: ['下载'],
            tips: '国内比较慢的图书网站~',
            img: ebookImg,
            url: 'https://ebook2.lorefree.com/',
        },
    ],
}

/* 游戏相关 */
const gameData = {
    name: '游戏相关',
    data: [{
            img: 'https://bizaladdin-image.baidu.com/0/pic/-389184942_-2058906930_854960486.jpg',
            title: 'Steam',
            tips: 'Steam is the ultimate destination for playing',
            tags: ['平台'],
            url: 'https://store.steampowered.com/',
        },
        {
            img: youxiaImg,
            title: '游侠网',
            tips: '中国的单机游戏门户',
            tags: ['免费'],
            url: 'https://www.ali213.net/',
        },
        {
            img: 'https://imgsa.baidu.com/forum/pic/item/b90e7bec54e736d18efb66569a504fc2d4626980.jpg',
            title: '3DM',
            tips: '三大妈游戏网',
            tags: ['免费'],
            url: 'https://www.3dmgame.com/',
        },
        {
            title: 'Epic',
            tags: ['平台'],
            tips: '提供丰富优质的正版PC游戏',
            img: epicImg,
            url: 'https://www.epicgames.com/store/zh-CN/',
        },
        {
            title: 'Origin',
            tags: ['平台'],
            tips: 'origin 游戏社交平台',
            img: originImg,
            url: 'https://www.origin.com/hkg/zh-tw/store',
        },
        {
            title: '可利特调',
            tags: ['小助手'],
            tips: '愿神计算器',
            url: 'https://genshin.pub/',
        },
        {
            title: 'DNF计算器',
            tags: ['小助手'],
            tips: '计算装备伤害的工具~',
            url: 'https://gitee.com/i_melon/DNFCalculating',
        },
    ],
}

export default [manhuaData, musicData, bookData, gameData]