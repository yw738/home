import menuicon from "./../image/menuicon.js";
/* ACG社区 */
const manhuaData = {
  title: "ACG社区",
  icon: menuicon.manhuaIcon,
  children: [
    {
      title: "哔哩哔哩",
      tags: ["视频"],
      tips: "- ( ゜- ゜)つロ 乾杯~ - ",
      img: "https://bizaladdin-image.baidu.com/0/pic/288929568_-302461403_433714833.jpg",
      url: "https://www.bilibili.com/",
    },
    {
      title: "AcFun",
      tags: ["视频"],
      tips: "AcFun弹幕视频网，简称“A站”.",
      img: "https://ss0.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3831121515,712354576&fm=26&gp=0.jpg",
      url: "https://www.acfun.cn/",
    },

    {
      title: "腾讯漫画",
      tags: ["漫画"],
      tips: "最大正版动漫网站,连载众多原创国漫。",
      img: "https://cdn.jsdelivr.net/gh/yw738/hometc/img/txmh.png",
      url: "https://ac.qq.com/",
    },
    {
      title: "哔哩哔哩漫画",
      tags: ["漫画"],
      tips: "bilibili运营的正版漫画软件。",
      img: "https://cdn.jsdelivr.net/gh/yw738/hometc/img/bilibilimange.png",
      url: "https://manga.bilibili.com/",
    },

    {
      title: "琉璃神社",
      tags: ["视频", "H漫画"],
      tips: "琉璃神社是一个分享最新最酷的ACG同人作品资讯社团,在这里你能找到很多欢乐。",
      img: "https://imgsa.baidu.com/forum/pic/item/aec379310a55b319e2125aeb46a98226cefc1740.jpg",
      url: "www.hacg.icu",
    },
    {
      title: "Mox.moe",
      tags: ["漫画", "下载"],
      tips: "高清Kindle格式漫画下载,支持推送漫画到kindle设备。",
      url: "https://mox.moe/",
    },
    {
      title: "mangabz",
      tags: ["漫画"],
      tips: "看漫画,需要梯子",
      img: "https://cdn.jsdelivr.net/gh/yw738/hometc/img/logo_mangabz.jpg",
      url: "http://www.mangabz.com/",
    },
    {
      title: "包子漫画",
      tags: ["漫画"],
      url: "https://baozimh.org/",
    },
  ],
};

/* 我爱看视频 */
const videoData = {
  title: "生活",
  icon: menuicon.videoIcon,
  children: [
    /* 音乐相关 */
    {
      title: "听音乐",
      icon: menuicon.musicIcon,
      children: [
        {
          img: "https://bizaladdin-image.baidu.com/0/pic/1455484060_685827087_-310145699.jpg",
          title: "网易云",
          tips: "网易云音乐是一款专注于发现与分享的音乐产品",
          url: "https://music.163.com/",
        },
        {
          img: "https://bizaladdin-image.baidu.com/0/pic/2138999253_739995401_-1931658075.jpg",
          title: "酷狗音乐",
          tips: "酷狗音乐在线正版音乐网站,为您提供酷狗音乐播放器下载 、在线音乐试听下载,提供听书、长音频、电台、听小说和MV播放服务。",
          url: "https://www.kugou.com/",
        },
        {
          img: "https://zhengxin-pub.bj.bcebos.com/financepic/79f8460416371429d998df7c8088e879_fullsize.jpg",
          title: "咪咕音乐",
          tips: "咪咕音乐是一家音乐综合服务提供商。",
          url: "https://music.migu.cn/v3",
        },

        {
          title: "MyFreeMp3",
          tips: "Free Music Downloads 320Kbps Songs MOBILE",
          url: "http://tool.liumingye.cn/music/?page=searchPage",
        },
        {
          title: "音乐直链搜索",
          tips: "特制多站合一音乐搜索解决方案",
          url: "https://music.liuzhijin.cn/",
        },
      ],
    },
    // 影视
    {
      title: "影视",
      children: [
        {
          title: "樱花动漫",
          tags: ["视频"],
          tips: "有上万集高清晰画质的在线动漫",
          url: "http://www.imomoe.live/",
        },
        {
          title: "低端影视(备用链接)",
          tips: "强烈推荐,片源画质好，不会有任何枪版或者带韩文硬字幕之类的渣画质版本，不会使用删减版",
          url: "https://ddys.mov/",
        },
        {
          title: "低端影视",
          tips: "同上",
          url: "https://ddys.love/",
        },
        {
          title: "茶杯狐",
          tips: "查影视资源",
          url: "https://cupfox.app/",
        },
        {
          title: "不太灵影视",
          tips: "电视上app收费的时候 他都有了",
          url: "https://www.7bt0.com/",
        },
        {
          title: "iqiyis影院",
          tags: ["电影"],
          tips: "iqiyis 影院每天搜集互联网最新电影和电视剧，为广大用户免费提供无广告在线观看电影和电视剧服务，及时收录最新、最热、最全的电影大片,高清正版免费看。",
          img: "https://tuostudy.upnb.top/wp-content/uploads/2024/11/1732358228608.png",
          url: "https://iqiyis.com",
        },
        {
          title: "豌豆Pro",
          tags: ["电影"],
          tips: "【聚合搜索引擎】一个电影资源分享网站，旨在为用户提供高质量的影片资源。该网站的特点包括影片更新速度快、播放速度快、无广告以及提供高画质的影片",
          img: "https://tuostudy.upnb.top/wp-content/uploads/2024/12/1734243971629.png",
          url: "https://wdoo.net",
        },
        {
          title: "注视影视",
          tags: ["电影"],
          tips: "兴趣使然",
          img: "https://tuostudy.upnb.top/wp-content/uploads/2024/03/1995b-www.lgyy.vip.png",
          url: "https://gaze.run",
        },

        {
          title: "在线之家",
          tags: ["电影"],
          tips: "努力打造在线之家为最好的海外热门影视剧在线观看站点!",
          img: "https://tuostudy.upnb.top/wp-content/uploads/2024/03/d054b-www.zxzjhd.com.png",
          url: "https://www.zxzjhd.com",
        },

        {
          title: "热播之家",
          tags: ["电影"],
          tips: "高清影视在线",
          img: "https://pic.imgdb.cn/item/661565e768eb935713aefa32.png",
          url: "https://rebozj.pro",
        },
        {
          title: "7080影视搜",
          tags: ["电影"],
          tips: "一个简单的影视搜索",
          img: "https://tuostudy.upnb.top/wp-content/uploads/2024/03/3f050-7080.wang.png",
          url: "https://7080.wang",
        },
        {
          title: "xmxone",
          tags: ["电影"],
          tips: "xmxone聚合全网高清影视在线观看、下载，实时聚合全网优质影视资源，同时支持在线、下载和字幕。电影、电视剧、动漫、综艺、记录片应有尽有。",
          img: "https://tuostudy.upnb.top/wp-content/uploads/2024/03/b937c-www.xmxone.cn.png",
          url: "https://www.xmxone.cn",
        },

        {
          title: "影猫仓库",
          tags: ["电影"],
          tips: "免费观影第一站",
          img: "https://tuostudy.upnb.top/wp-content/uploads/2024/03/b8ee4-ymck.pro.png",
          url: "https://ymck.pro",
        },
        {
          title: "影搜",
          tags: ["电影"],
          tips: "影视搜索-全网海量影片数据",
          img: "https://pic.imgdb.cn/item/65f47e449f345e8d03dbb2fb.png",
          url: "https://xn--p3tv7h.com",
        },
        {
          title: "橘子动漫",
          tags: ["电影"],
          tips: "橘子动漫",
          img: "https://tuostudy.upnb.top/wp-content/uploads/2024/12/1734244334027.png",
          url: "https://www.jzacg.com",
        },
        {
          title: "NT动漫",
          tags: ["电影"],
          tips: "NT动漫，专注的动漫的网站，立志为广大动漫迷提供一个在线看动漫的好平台。",
          img: "https://tuostudy.upnb.top/wp-content/uploads/2024/12/1734244074622.png",
          url: "http://www.ntdm9.com",
        },
        {
          title: "搜片",
          tags: ["电影"],
          tips: "【聚合影搜搜素引擎】搜片.com 聚合全网影片，你想看的全都找得到！每天搜集最新电影、电视剧、在线观看网址、蓝光高清正版免费看！",
          img: "https://tuostudy.upnb.top/wp-content/uploads/2024/12/1734244001370.png",
          url: "https://soupian.pro",
        },
        {
          title: "电影猎手",
          tags: ["电影"],
          tips: "电影猎手 app，安卓 ios 一应俱全，独家线路，高清影视，永久免费不卡顿，还有积分福利",
          img: "https://tuostudy.upnb.top/wp-content/uploads/2024/12/1734444885897.png",
          url: "https://dyls1.club",
        },
        {
          title: "88影视",
          tags: ["电影"],
          tips: "88影视",
          img: "https://tuostudy.upnb.top/wp-content/uploads/2024/12/1734244492165.png",
          url: "https://www.88tvs.cn",
        },

        {
          title: "绝对影视",
          tags: ["电影"],
          tips: "每日提供最新鲜的电影，电视剧，动画更新，支持电脑和移动设备的超清画质在线观看影视剧体验",
          img: "https://tuostudy.upnb.top/wp-content/uploads/2024/12/1734244412374.png",
          url: "https://www.jdys.art",
        },
        {
          title: "柯南影视",
          tags: ["电影"],
          tips: "柯南影视",
          img: "https://tuostudy.upnb.top/wp-content/uploads/2024/12/1734244439062.png",
          url: "https://www.knvod.com",
        },

        {
          title: "麦田影院",
          tags: ["电影"],
          tips: "麦田影院",
          img: "https://tuostudy.upnb.top/wp-content/uploads/2024/07/1721886997466.png",
          url: "https://www.mtyy1.com",
        },

        {
          title: "LIBVIO影视",
          tags: ["电影"],
          tips: "LIBVIO影视",
          img: "https://tuostudy.upnb.top/wp-content/uploads/2024/07/1721885787047.png",
          url: "https://iioo.me",
        },

        {
          title: "侠客影视",
          tags: ["电影"],
          tips: "侠客影视",
          img: "https://tuostudy.upnb.top/wp-content/uploads/2023/04/微信截图_20230403090445.png",
          url: "http://xkys.link",
        },
      ],
    },
    // 图片
    {
      title: "图片",
      icon: menuicon.musicIcon,
      children: [
        {
          title: "3g壁纸",
          tags: ["壁纸"],
          tips: "壁纸网站",
          url: "https://www.3gbizhi.com/",
        },
        {
          title: "美图集",
          tips: "壁纸网站",
          url: "https://photo.ihansen.org/",
        },
      ],
    },
    // 书籍相关
    {
      title: "书籍相关",
      icon: menuicon.bookIcon,
      children: [
        {
          title: "鸠摩搜索",
          tags: ["下载"],
          tips: "鸠摩图书下载~",
          img: "https://www2.jiumodiary.com/images/front/eleps.png",
          url: "https://www.jiumodiary.com/",
        },
        {
          title: "Z-Library",
          tags: ["下载"],
          tips: "全球最大的数字图书馆",
          img: "https://cdn.jsdelivr.net/gh/yw738/hometc/img/ZLibrary.png",
          url: "https://z-library.sk/",
        },
        {
          title: "知识库",
          tags: ["下载"],
          tips: "收集了海量书籍资源的网站",
          img: "https://cdn.jsdelivr.net/gh/yw738/hometc/img/zsklogo.png",
          url: "https://book.zhishikoo.com/",
        },
      ],
    },
  ],
};

/* 游戏相关 */
const gameData = {
  title: "游戏相关",
  icon: menuicon.gameIcon,
  children: [
    {
      title: "热门",
      children: [
        {
          title: "switch520",
          tags: ["switch", "下载"],
          tips: "下载pc、switch等学习版游戏~",
          img: "https://cdn.jsdelivr.net/gh/yw738/hometc/img/switchLogo.png",
          url: "https://www.gamer520.com/",
        },
        {
          img: "https://cdn.jsdelivr.net/gh/yw738/hometc/img/youxia.png",
          title: "游侠网",
          tips: "中国的单机游戏门户",
          tags: ["免费"],
          url: "https://www.ali213.net/",
          private: true,
        },
        {
          img: "https://imgsa.baidu.com/forum/pic/item/b90e7bec54e736d18efb66569a504fc2d4626980.jpg",
          title: "3DM",
          tips: "三大妈游戏网",
          tags: ["免费"],
          url: "https://www.3dmgame.com/",
          private: true,
        },

        {
          title: "NGA",
          tags: ["论坛"],
          tips: "NGA是国内专业的游戏玩家社区",
          img: "https://cdn.jsdelivr.net/gh/yw738/hometc/img/nga.png",
          url: "https://bbs.nga.cn/",
        },
        {
          title: "吾爱破解",
          tags: ["论坛", "下载"],
          tips: "破解论坛，可以找一些资源",
          url: "https://www.52pojie.cn/",
        },
        {
          title: "rutracker",
          tags: ["下载"],
          tips: "直达网盘链接,获取rutracker的操作文档",
          url: "https://pan.baidu.com/s/1pRfuzZIaWBex3a8J6z3LCA?pwd=bnx8",
        },
        {
          title: "BYRUTOR",
          tags: ["下载"],
          tips: "俄罗斯下载网站，需要FQ",
          url: "https://byrutgame.org/",
        },

        {
          title: "元神私服",
          tags: ["私服"],
          tips: "github 元神割草机",
          url: "https://github.com/Grasscutters/Grasscutter",
        },
        {
          title: "元神私服工具",
          tags: ["私服"],
          tips: "github 元神割草机 修改器",
          url: "https://github.com/jie65535/GrasscutterCommandGenerator",
        },
      ],
    },
    {
      title: "DNF",
      children: [
        {
          title: "心悦俱乐部",
          tips: "用钱创造快乐~",
          tags: ["DNF"],
          img: "https://cdn.jsdelivr.net/gh/yw738/hometc/img/xinyue.png",
          url: "https://xinyue.qq.com/act/a20210317dnf/index_pc.html",
        },
        {
          title: "Colg",
          tips: "中国的网游类综合站点",
          img: "https://cdn.jsdelivr.net/gh/yw738/hometc/img/clog.png",
          url: "https://bbs.colg.cn/forum.php",
        },
        {
          title: "无名空岛",
          tips: "无名空岛 | 一个与DNF有缘的小岛",
          tags: ["DNF", "配装"],
          url: "https://www.skycity.top:8016/dictionary?from=toplink",
        },
        {
          title: "纸娃娃系统",
          tags: ["DNF"],
          tips: "DNF 纸娃娃时装模拟系统",
          url: "https://avatar.kritsu.net/",
        },
        {
          title: "dnf404",
          tags: ["补丁"],
          tips: "dnf",
          url: "http://dnf404.com/",
        },
      ],
    },
    {
      title: "WOW",
      children: [
        {
          title: "猎人宠物工具",
          tips: "wow宠物大全",
          tags: ["WOW", "宝宝"],
          url: "https://www.wow-petopia.com/classic/abilities.php#bite",
        },
        {
          title: "有爱论坛",
          tags: ["WOW", "论坛"],
          tips: "wow 下载私服的地方",
          url: "https://uiwow.com/forum.php?mod=viewt",
        },
        {
          title: "wow head",
          tags: ["论坛"],
          tips: "窝窝头。需要翻墙",
          url: "https://www.wowhead.com/",
        },
        {
          title: "60数据库",
          tags: ["论坛"],
          tips: "60版本数据库",
          url: "https://60.dvg.cn/?npc=12129",
        },
        {
          title: "藏宝海湾",
          tags: ["平台"],
          tips: "逍遥335",
          url: "https://www.iopq.net",
        },
      ],
    },
    {
      title: "平台",
      children: [
        {
          img: "https://bizaladdin-image.baidu.com/0/pic/-389184942_-2058906930_854960486.jpg",
          title: "Steam",
          tips: "Steam is the ultimate destination for playing",
          tags: ["平台"],
          url: "https://store.steampowered.com/",
        },
        {
          title: "Epic",
          tags: ["平台"],
          tips: "提供丰富优质的正版PC游戏",
          img: "https://cdn.jsdelivr.net/gh/yw738/hometc/img/epic.png",
          url: "https://www.epicgames.com/store/zh-CN/",
        },
        {
          title: "Origin",
          tags: ["平台"],
          tips: "origin 游戏社交平台",
          img: "https://cdn.jsdelivr.net/gh/yw738/hometc/img/origin.png",
          url: "https://www.origin.com/hkg/zh-tw/store",
        },
      ],
    },
    // 模拟器
    {
      title: "模拟器",
      icon: menuicon.gameIcon,
      children: [
        {
          title: "GBA线上模拟器",
          tags: ["GBA"],
          tips: "同人作品，网页版的模拟器，可以玩GBA游戏。",
          img: "",
          url: "https://gba.44670.org/",
        },

        {
          title: "老男人游戏网",
          tags: ["下载"],
          tips: "老游戏下载库，包含GBA、PSP、NDS等游戏资源。",
          img: "https://cdn.jsdelivr.net/gh/yw738/hometc/img/oldman.png",
          url: "https://www.oldmanemu.net/",
        },
        {
          title: "老男人游戏网配套论坛",
          tags: ["论坛"],
          tips: "这是资源站 | 老男人游戏网 的配套论坛",
          img: "https://cdn.jsdelivr.net/gh/yw738/hometc/img/oldman.png",
          url: "https://bbs.oldmanemu.net/",
        },
      ],
    },
  ],
};
const otherLink = {
  icon: menuicon.interviewIcon,
  title: "其他推荐",
  children: [
    {
      title: "外链网站",
      children: [
        {
          title: "Tuostudy",
          tips: "其他导航站点",
          url: "https://tuostudy.upnb.top/",
        },
      ],
    },
  ],
};
export default [manhuaData, videoData, gameData, otherLink];
