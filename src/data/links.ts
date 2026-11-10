/**
 * WebStack 站点数据。
 * 由 src/pages/{en,cn}/index.astro 一次性抽取，之后卡片内容只在这里维护。
 * rows 保留原页面每行卡片的分组，避免重排导致版式变化。
 * zhOnly 条目来自原中文首页，仅在中文版展示；logo 为 null 时使用文字占位。
 */
export interface LinkItem {
  name: string;
  url: string;
  logo: string | null;
  desc: string;
  /** 与跳转地址不同的 tooltip 文案（保留原站行为） */
  tooltip?: string;
  /** 原模板残留的空标签占位 */
  badge?: boolean;
  /** 仅在中文版展示 */
  zhOnly?: boolean;
}

export interface LinkSection {
  id: string;
  title: string;
  /** 中文版分区标题，未配置的沿用英文原标题 */
  titleZh?: string;
  icon: string;
  rows: LinkItem[][];
}

export const sections: LinkSection[] = [
  {
    "id": "recommended",
    "title": "Recommended",
    "icon": "linecons-tag",
    "rows": [
      [
        {
          "name": "Dribbble",
          "url": "https://dribbble.com/",
          "logo": "/assets/images/logos/dribbble.png",
          "desc": "全球UI设计师作品分享平台。"
        },
        {
          "name": "Behance",
          "url": "https://behance.net/",
          "logo": "/assets/images/logos/behance.png",
          "desc": "Adobe旗下的设计师交流平台，来自世界各地的设计师在这里分享自己的作品。"
        },
        {
          "name": "UI中国",
          "url": "https://www.ui.cn/",
          "logo": "/assets/images/logos/uicn.png",
          "desc": "图形交互与User Interface交流、作品展示、学习平台。"
        },
        {
          "name": "站酷",
          "url": "https://www.zcool.com.cn/",
          "logo": "/assets/images/logos/zcool.png",
          "desc": "中国人气设计师互动平台"
        }
      ],
      [
        {
          "name": "Pinterest",
          "url": "https://www.pinterest.com/",
          "logo": "/assets/images/logos/pinterest.png",
          "desc": "全球美图收藏采集站",
          "badge": true
        },
        {
          "name": "花瓣",
          "url": "https://huaban.com/",
          "logo": "/assets/images/logos/huaban.png",
          "desc": "收集灵感,保存有用的素材",
          "badge": true
        },
        {
          "name": "Medium",
          "url": "https://medium.com/",
          "logo": "/assets/images/logos/medium.png",
          "desc": "高质量Design Article",
          "badge": true
        },
        {
          "name": "优设",
          "url": "https://www.uisdc.com/",
          "logo": "/assets/images/logos/uisdc.png",
          "desc": "设计师交流学习平台",
          "badge": true
        }
      ],
      [
        {
          "name": "Producthunt",
          "url": "https://www.producthunt.com/",
          "logo": "/assets/images/logos/producthunt.png",
          "desc": "发现新鲜有趣的产品",
          "badge": true
        },
        {
          "name": "Youtube",
          "url": "https://www.youtube.com/",
          "logo": "/assets/images/logos/youtube.png",
          "desc": "全球最大的学习分享平台",
          "badge": true
        },
        {
          "name": "Google",
          "url": "https://www.google.com/",
          "logo": "/assets/images/logos/google.png",
          "desc": "全球最大的UI学习分享平台",
          "badge": true
        }
      ]
    ],
    "titleZh": "常用推荐"
  },
  {
    "id": "recommended-2",
    "title": "Recommended",
    "icon": "linecons-tag",
    "rows": [
      [
        {
          "name": "阿里云",
          "url": "https://www.aliyun.com/minisite/goods?userCode=xtct5egx&share_source=copy_link",
          "logo": "/assets/images/logos/aliyun.png",
          "desc": "200块买台云服务器吧",
          "tooltip": "https://www.aliyun.com/"
        },
        {
          "name": "Medjed AI",
          "url": "https://medjed.ai/",
          "logo": "/assets/images/logos/medjedai.svg",
          "desc": "FAST, SCALABLE NEOCLOUD FOR AI"
        },
        {
          "name": "SS梯子",
          "url": "https://www.link360.top/",
          "logo": "/assets/images/logos/ss-kexueshangwang.png",
          "desc": "SS梯子-科学上网（实惠，但是不太稳）",
          "tooltip": "https://www.link360.top"
        },
        {
          "name": "设计周刊",
          "url": "https://www.shejizhoukan.com/",
          "logo": "/assets/images/logos/shejizhoukan.png",
          "desc": "最新设计资讯（良心推荐）"
        }
      ]
    ],
    "titleZh": "常用推荐"
  },
  {
    "id": "information",
    "title": "Information",
    "icon": "linecons-tag",
    "rows": [
      [
        {
          "name": "雷锋网",
          "url": "https://www.leiphone.com/",
          "logo": "/assets/images/logos/leiphone.png",
          "desc": "人工智能和智能硬件领域的互联网科技媒体"
        },
        {
          "name": "36kr",
          "url": "https://36kr.com/",
          "logo": "/assets/images/logos/36kr.png",
          "desc": "创业资讯、科技新闻"
        },
        {
          "name": "数英网",
          "url": "https://www.digitaling.com/",
          "logo": "/assets/images/logos/digitaling.png",
          "desc": "数字媒体及职业招聘网站"
        },
        {
          "name": "猎云网",
          "url": "https://www.lieyunwang.com/",
          "logo": "/assets/images/logos/lieyunwang.png",
          "desc": "互联网创业项目推荐和创业创新资讯"
        }
      ],
      [
        {
          "name": "人人都是产品经理",
          "url": "https://www.woshipm.com/",
          "logo": "/assets/images/logos/woshipm.png",
          "desc": "产品经理、产品爱好者学习交流平台"
        },
        {
          "name": "互联网早读课",
          "url": "https://www.zaodula.com/",
          "logo": "/assets/images/logos/zaodula.png",
          "desc": "互联网行业深度阅读与学习平台"
        },
        {
          "name": "产品壹佰",
          "url": "https://www.chanpin100.com/",
          "logo": "/assets/images/logos/chanpin100.png",
          "desc": "为产品经理爱好者提供最优质的产品资讯、原创内容和相关视频课程"
        },
        {
          "name": "PMCAFF",
          "url": "https://www.pmcaff.com/",
          "logo": "/assets/images/logos/pmcaff.png",
          "desc": "中国第一产品经理人气组织，专注于研究互联网产品"
        }
      ],
      [
        {
          "name": "爱运营",
          "url": "https://www.iyunying.org/",
          "logo": "/assets/images/logos/iyunying.png",
          "desc": "网站运营人员学习交流，专注于网站产品运营管理、淘宝运营。"
        },
        {
          "name": "鸟哥笔记",
          "url": "https://www.niaogebiji.com/",
          "logo": "/assets/images/logos/niaogebiji.png",
          "desc": "移动互联网第一干货平台"
        },
        {
          "name": "古田路9号",
          "url": "https://www.gtn9.com/",
          "logo": "/assets/images/logos/gtn9.png",
          "desc": "国内专业品牌创意平台"
        },
        {
          "name": "优阁网",
          "url": "https://www.uigreat.com/",
          "logo": "/assets/images/logos/uigreat.png",
          "desc": "UI设计师学习交流社区"
        }
      ]
    ]
  },
  {
    "id": "product",
    "title": "Product",
    "icon": "linecons-tag",
    "rows": [
      [
        {
          "name": "Producthunt",
          "url": "https://www.producthunt.com/",
          "logo": "/assets/images/logos/producthunt.png",
          "desc": "发现新鲜有趣的产品",
          "badge": true
        },
        {
          "name": "NEXT",
          "url": "https://next.36kr.com/posts",
          "logo": "/assets/images/logos/NEXT.png",
          "desc": "不错过任何一个新产品"
        },
        {
          "name": "少数派",
          "url": "https://sspai.com/",
          "logo": "/assets/images/logos/sspai.png",
          "desc": "高品质数字消费指南"
        },
        {
          "name": "利器",
          "url": "https://liqi.io/",
          "logo": "/assets/images/logos/liqi.png",
          "desc": "创造者和他们的工具"
        }
      ],
      [
        {
          "name": "Today",
          "url": "https://today.itjuzi.com/",
          "logo": "/assets/images/logos/today.png",
          "desc": "为身边的新产品喝彩"
        },
        {
          "name": "小众软件",
          "url": "https://faxian.appinn.com/",
          "logo": "/assets/images/logos/appinn.png",
          "desc": "在这里发现更多有趣的应用"
        }
      ]
    ]
  },
  {
    "id": "ui-inspiration",
    "title": "UI Inspiration",
    "icon": "linecons-tag",
    "rows": [
      [
        {
          "name": "Pttrns",
          "url": "https://www.pttrns.com/",
          "logo": "/assets/images/logos/Pttrns.png",
          "desc": "Check out the finest collection of design patterns, resources, mobile apps and inspiration"
        },
        {
          "name": "Collect UI",
          "url": "https://collectui.com/",
          "logo": "/assets/images/logos/CollectUI.png",
          "desc": "Daily inspiration collected from daily ui archive and beyond."
        },
        {
          "name": "UI uigreat",
          "url": "https://ui.uigreat.com/",
          "logo": "/assets/images/logos/uiuigreat.png",
          "desc": "APP界面截图参考"
        },
        {
          "name": "Android Niceties",
          "url": "https://androidniceties.tumblr.com/",
          "logo": "/assets/images/logos/AndroidNiceties.png",
          "desc": "A collection of screenshots encompassing some of the most beautiful looking Android apps."
        }
      ]
    ]
  },
  {
    "id": "web-inspiration",
    "title": "WEB Inspiration",
    "icon": "linecons-tag",
    "rows": [
      [
        {
          "name": "Awwwards",
          "url": "https://www.awwwards.com/",
          "logo": "/assets/images/logos/awwwards.png",
          "desc": "Awwwards are the Website Awards that recognize and promote the talent and effort of the best developers, designers and web agencies in the world."
        },
        {
          "name": "CSS Design Awards",
          "url": "https://www.cssdesignawards.com/",
          "logo": "/assets/images/logos/CSSDesignAwards.png",
          "desc": "Website Awards & Inspiration - CSS Gallery"
        },
        {
          "name": "The FWA",
          "url": "https://thefwa.com/",
          "logo": "/assets/images/logos/fwa.png",
          "desc": "FWA - showcasing innovation every day since 2000"
        },
        {
          "name": "Ecommercefolio",
          "url": "https://www.ecommercefolio.com/",
          "logo": "/assets/images/logos/Ecommercefolio.png",
          "desc": "Only the Best Ecommerce Design Inspiration"
        }
      ],
      [
        {
          "name": "Lapa",
          "url": "https://www.lapa.ninja/",
          "logo": "/assets/images/logos/Lapa.png",
          "desc": "The best landing page design inspiration from around the web."
        },
        {
          "name": "Reeoo",
          "url": "https://reeoo.com/",
          "logo": "/assets/images/logos/reeoo.png",
          "desc": "web design inspiration and website gallery"
        },
        {
          "name": "Designmunk",
          "url": "https://designmunk.com/",
          "logo": "/assets/images/logos/designmunk.png",
          "desc": "Best Homepage Design Inspiration"
        },
        {
          "name": "Best Websites Gallery",
          "url": "https://bestwebsite.gallery/",
          "logo": "/assets/images/logos/BWG.png",
          "desc": "Website Showcase Inspiration | Best Websites Gallery"
        }
      ],
      [
        {
          "name": "Pages",
          "url": "https://www.pages.xyz/",
          "logo": "/assets/images/logos/pages.png",
          "desc": "Curated directory of the best Pages"
        },
        {
          "name": "SiteSee",
          "url": "https://sitesee.co/",
          "logo": "/assets/images/logos/SiteSee.png",
          "desc": "SiteSee is a curated gallery of beautiful, modern websites collections."
        },
        {
          "name": "Site Inspire",
          "url": "https://www.siteinspire.com/",
          "logo": "/assets/images/logos/siteInspire.png",
          "desc": "A CSS gallery and showcase of the best web design inspiration."
        },
        {
          "name": "WebInspiration",
          "url": "https://web.uedna.com/",
          "logo": "/assets/images/logos/WebInspiration.png",
          "desc": "网页设计欣赏,全球顶级网页设计"
        }
      ],
      [
        {
          "name": "navnav",
          "url": "https://navnav.co/",
          "logo": "/assets/images/logos/navnav.png",
          "desc": "A ton of CSS, jQuery, and JavaScript responsive navigation examples, demos, and tutorials from all over the web."
        },
        {
          "name": "Really Good UX",
          "url": "https://www.reallygoodux.io/",
          "logo": "/assets/images/logos/ReallyGoodUX.png",
          "desc": "A library of screenshots and examples of really good UX. Brought to you by"
        }
      ]
    ]
  },
  {
    "id": "icon",
    "title": "Icon",
    "icon": "linecons-tag",
    "rows": [
      [
        {
          "name": "Iconfinder",
          "url": "https://www.iconfinder.com",
          "logo": "/assets/images/logos/Iconfinder.png",
          "desc": "2,100,000+ free and premium vector icons."
        },
        {
          "name": "iconfont",
          "url": "https://www.iconfont.cn/",
          "logo": "/assets/images/logos/iconfont.png",
          "desc": "阿里巴巴矢量图标库"
        },
        {
          "name": "iconmonstr",
          "url": "https://iconmonstr.com/",
          "logo": "/assets/images/logos/iconmonstr.png",
          "desc": "Free simple icons for your next project"
        },
        {
          "name": "Icon Archive",
          "url": "https://www.iconarchive.com/",
          "logo": "/assets/images/logos/iconarchive.png",
          "desc": "Search 590,912 free icons"
        }
      ],
      [
        {
          "name": "FindIcons",
          "url": "https://findicons.com/",
          "logo": "/assets/images/logos/FindIcons.png",
          "desc": "Search through 300,000 free icons"
        },
        {
          "name": "IcoMoonApp",
          "url": "https://icomoon.io/app/",
          "logo": "/assets/images/logos/IcoMoonApp.png",
          "desc": "Icon Font, SVG, PDF & PNG Generator"
        },
        {
          "name": "easyicon",
          "url": "https://www.easyicon.net/",
          "logo": "/assets/images/logos/easyicon.png",
          "desc": "PNG、ICO、ICNS格式图标搜索、图标下载服务"
        },
        {
          "name": "flaticon",
          "url": "https://www.flaticon.com/",
          "logo": "/assets/images/logos/flaticon.png",
          "desc": "634,000+ Free vector icons in SVG, PSD, PNG, EPS format or as ICON FONT."
        }
      ],
      [
        {
          "name": "UICloud",
          "url": "https://ui-cloud.com/",
          "logo": "/assets/images/logos/UICloud.png",
          "desc": "The largest user interface design database in the world."
        },
        {
          "name": "Material icons",
          "url": "https://material.io/icons/",
          "logo": "/assets/images/logos/Materialicons.png",
          "desc": "Access over 900 material system icons, available in a variety of sizes and densities, and as a web font."
        },
        {
          "name": "Font Awesome Icon",
          "url": "fontawesomeicon",
          "logo": "/assets/images/logos/fontawesomeicon.png",
          "desc": "The complete set of 675 icons in Font Awesome"
        },
        {
          "name": "ion icons",
          "url": "https://ionicons.com/",
          "logo": "/assets/images/logos/ionicons.png",
          "desc": "The premium icon font for Ionic Framework."
        }
      ],
      [
        {
          "name": "Simpleline Icons",
          "url": "https://simplelineicons.com/",
          "logo": "/assets/images/logos/simplelineicons.png",
          "desc": "Simple line Icons pack"
        }
      ]
    ]
  },
  {
    "id": "logo-design",
    "title": "Logo Design",
    "icon": "linecons-tag",
    "rows": [
      [
        {
          "name": "Iconsfeed",
          "url": "https://www.iconsfeed.com/",
          "logo": "/assets/images/logos/iconsfeed.png",
          "desc": "iOS icons gallery"
        },
        {
          "name": "iOS Icon Gallery",
          "url": "https://iosicongallery.com/",
          "logo": "/assets/images/logos/iosicongallery.png",
          "desc": "Showcasing beautiful icon designs from the iOS App Store"
        },
        {
          "name": "World Vector Logo",
          "url": "https://worldvectorlogo.com/",
          "logo": "/assets/images/logos/worldvectorlogo.png",
          "desc": "Brand logos free to download"
        },
        {
          "name": "Instant Logo Search",
          "url": "https://instantlogosearch.com/",
          "logo": "/assets/images/logos/InstantLogoSearch.png",
          "desc": "Search & download thousands of logos instantly"
        }
      ]
    ]
  },
  {
    "id": "graphic-design",
    "title": "Graphic Design",
    "icon": "linecons-tag",
    "rows": [
      [
        {
          "name": "freepik",
          "url": "https://www.freepik.com/",
          "logo": "/assets/images/logos/freepik.png",
          "desc": "More than a million free vectors, PSD, photos and free icons."
        },
        {
          "name": "wallhalla",
          "url": "https://wallhalla.com/",
          "logo": "/assets/images/logos/wallhalla.png",
          "desc": "Find awesome high quality wallpapers for desktop and mobile in one place."
        },
        {
          "name": "365PSD",
          "url": "https://365psd.com/",
          "logo": "/assets/images/logos/365PSD.png",
          "desc": "Free PSD & Graphics, Illustrations"
        },
        {
          "name": "Medialoot",
          "url": "https://medialoot.com/",
          "logo": "/assets/images/logos/Medialoot.png",
          "desc": "Free & Premium Design Resources — Medialoot"
        }
      ],
      [
        {
          "name": "千图网",
          "url": "https://www.58pic.com/",
          "logo": "/assets/images/logos/qiantu.png",
          "desc": "专注免费设计素材下载的网站"
        },
        {
          "name": "千库网",
          "url": "https://588ku.com/",
          "logo": "/assets/images/logos/qianku.png",
          "desc": "免费png图片背景素材下载"
        },
        {
          "name": "我图网",
          "url": "https://www.ooopic.com/",
          "logo": "/assets/images/logos/wotu.png",
          "desc": "我图网,提供图片素材及模板下载,专注正版设计作品交易"
        },
        {
          "name": "90设计",
          "url": "https://90sheji.com/",
          "logo": "/assets/images/logos/90sheji.png",
          "desc": "电商设计（淘宝美工）千图免费淘宝素材库"
        }
      ],
      [
        {
          "name": "昵图网",
          "url": "https://www.nipic.com/",
          "logo": "/assets/images/logos/nipic.png",
          "desc": "原创素材共享平台"
        },
        {
          "name": "懒人图库",
          "url": "https://www.lanrentuku.com/",
          "logo": "/assets/images/logos/lanrentuku.png",
          "desc": "懒人图库专注于提供网页素材下载"
        },
        {
          "name": "素材搜索",
          "url": "https://so.ui001.com/",
          "logo": "/assets/images/logos/sousucai.png",
          "desc": "设计素材搜索聚合"
        },
        {
          "name": "PS饭团网",
          "url": "https://psefan.com/",
          "logo": "/assets/images/logos/psefan.png",
          "desc": "不一样的设计素材库！让自己的设计与众不同！"
        }
      ],
      [
        {
          "name": "素材中国",
          "url": "https://www.sccnn.com/",
          "logo": "/assets/images/logos/sccnn.png",
          "desc": "免费素材共享平台"
        }
      ]
    ]
  },
  {
    "id": "ui-design",
    "title": "UI Design",
    "icon": "linecons-tag",
    "rows": [
      [
        {
          "name": "Freebiesbug",
          "url": "https://freebiesbug.com/",
          "logo": "/assets/images/logos/freebiesbug.png",
          "desc": "Hand-picked resources for web designer and developers, constantly updated."
        },
        {
          "name": "Freebie Supply",
          "url": "https://freebiesupply.com/",
          "logo": "/assets/images/logos/freebiesupply.png",
          "desc": "Free Resources For Designers"
        },
        {
          "name": "云瑞",
          "url": "https://www.yrucd.com/",
          "logo": "/assets/images/logos/yrucd.png",
          "desc": "优秀设计资源的分享网站"
        },
        {
          "name": "Designmodo",
          "url": "https://designmodo.com/",
          "logo": "/assets/images/logos/Designmodo.png",
          "desc": "Web Design Blog and Shop"
        }
      ],
      [
        {
          "name": "稀土区",
          "url": "https://xituqu.com/",
          "logo": "/assets/images/logos/xituqu.png",
          "desc": "优质设计开发资源分享"
        },
        {
          "name": "ui8",
          "url": "https://ui8.net/",
          "logo": "/assets/images/logos/ui8.png",
          "desc": "UI Kits, Wireframe Kits, Templates, Icons and More"
        },
        {
          "name": "uplabs",
          "url": "https://www.uplabs.com/",
          "logo": "/assets/images/logos/uplabs.png",
          "desc": "Daily resources for product designers & developers"
        },
        {
          "name": "UIkit.me",
          "url": "https://www.uikit.me/",
          "logo": "/assets/images/logos/uikitme.png",
          "desc": "最便捷新鲜的uikit资源下载网站"
        }
      ],
      [
        {
          "name": "Fribbble",
          "url": "https://www.fribbble.com/",
          "logo": "/assets/images/logos/Fribbble.png",
          "desc": "Free PSD files and other free design resources by Dribbblers."
        },
        {
          "name": "PrincipleRepo",
          "url": "https://principlerepo.com/",
          "logo": "/assets/images/logos/PrincipleRepo.png",
          "desc": "Free, High Quality Principle Resources"
        }
      ]
    ]
  },
  {
    "id": "sketch",
    "title": "Sketch",
    "icon": "linecons-tag",
    "rows": [
      [
        {
          "name": "Sketch",
          "url": "https://sketchapp.com/",
          "logo": "/assets/images/logos/Sketch.png",
          "desc": "The digital design toolkit"
        },
        {
          "name": "Sketch Measure",
          "url": "https://utom.design/measure/",
          "logo": "/assets/images/logos/SketchMeasure.png",
          "desc": "Friendly user interface offers you a more intuitive way of making marks."
        },
        {
          "name": "Sketch App Sources",
          "url": "https://www.sketchappsources.com/",
          "logo": "/assets/images/logos/sketchappsources.png",
          "desc": "Free design resources and plugins - Icons, UI Kits, Wireframes, iOS, Android Templates for Sketch"
        },
        {
          "name": "Sketch.im",
          "url": "https://www.sketch.im/",
          "logo": "/assets/images/logos/sketchIm.png",
          "desc": "Sketch 相关资源汇聚"
        }
      ],
      [
        {
          "name": "Sketch Hunt",
          "url": "https://sketchhunt.com/",
          "logo": "/assets/images/logos/sketchhunt.png",
          "desc": "Sketch Hunt is an independent blog sharing gems in learning, plugins & design tools for fans of Sketch app."
        },
        {
          "name": "Sketch中文网",
          "url": "https://www.sketchcn.com/",
          "logo": "/assets/images/logos/sketchcn.png",
          "desc": "分享最新的Sketch中文手册"
        },
        {
          "name": "Awesome Sketch Plugins",
          "url": "https://awesome-sket.ch/",
          "logo": "/assets/images/logos/AwesomeSketchPlugins.png",
          "desc": "A collection of really useful Sketch plugins."
        },
        {
          "name": "Sketchcasts",
          "url": "https://www.sketchcasts.net/",
          "logo": "/assets/images/logos/sketchcasts.png",
          "desc": "Learn Sketch Train your design skills with a weekly video tutorial"
        }
      ]
    ]
  },
  {
    "id": "fonts",
    "title": "Fonts",
    "icon": "linecons-tag",
    "rows": [
      [
        {
          "name": "Google Font",
          "url": "https://fonts.google.com/",
          "logo": "/assets/images/logos/googlefont.png",
          "desc": "Making the web more beautiful, fast, and open through great typography"
        },
        {
          "name": "Typekit",
          "url": "https://typekit.com/",
          "logo": "/assets/images/logos/typekit.png",
          "desc": "Quality fonts from the world’s best foundries."
        },
        {
          "name": "方正字库",
          "url": "https://www.foundertype.com/",
          "logo": "/assets/images/logos/Fondertype.png",
          "desc": "方正字库官方网站"
        },
        {
          "name": "字体传奇网",
          "url": "https://ziticq.com/",
          "logo": "/assets/images/logos/ziticq.png",
          "desc": "中国首个字体品牌设计师交流网"
        }
      ],
      [
        {
          "name": "私藏字体",
          "url": "https://sicangziti.com/",
          "logo": "/assets/images/logos/sicangziti.png",
          "desc": "优质字体免费下载站"
        },
        {
          "name": "Fontsquirrel",
          "url": "https://www.fontsquirrel.com/",
          "logo": "/assets/images/logos/fontsquirrel.png",
          "desc": "FREE fonts for graphic designers"
        },
        {
          "name": "Urban Fonts",
          "url": "https://www.urbanfonts.com/",
          "logo": "/assets/images/logos/UrbanFonts.png",
          "desc": "Download Free Fonts and Free Dingbats."
        },
        {
          "name": "Lost Type",
          "url": "https://www.losttype.com/",
          "logo": "/assets/images/logos/losttype.png",
          "desc": "Lost Type is a Collaborative Digital Type Foundry"
        }
      ],
      [
        {
          "name": "FONTS2U",
          "url": "https://fonts2u.com/",
          "logo": "/assets/images/logos/fonts2u.png",
          "desc": "Download free fonts for Windows and Macintosh."
        },
        {
          "name": "Fontex",
          "url": "https://www.fontex.org/",
          "logo": "/assets/images/logos/fontex.png",
          "desc": "Free Fonts to Download + Premium Typefaces"
        },
        {
          "name": "FontM",
          "url": "https://fontm.com/",
          "logo": "/assets/images/logos/FontM.png",
          "desc": "Free Fonts"
        },
        {
          "name": "My Fonts",
          "url": "https://www.myfonts.com/",
          "logo": "/assets/images/logos/MyFonts.png",
          "desc": "Fonts for Print, Products & Screens"
        }
      ],
      [
        {
          "name": "Da Font",
          "url": "https://www.dafont.com/",
          "logo": "/assets/images/logos/dafont.png",
          "desc": "Archive of freely downloadable fonts."
        },
        {
          "name": "OnlineWebFonts",
          "url": "https://www.onlinewebfonts.com/",
          "logo": "/assets/images/logos/OnlineWebFonts.png",
          "desc": "WEB Free Fonts for Windows and Mac / Font free Download"
        },
        {
          "name": "Abstract Fonts",
          "url": "https://www.abstractfonts.com/",
          "logo": "/assets/images/logos/abstractfonts.png",
          "desc": "Abstract Fonts (13,866 free fonts)"
        },
        {
          "name": "Typewolf",
          "url": "https://typewolf.com/",
          "logo": null,
          "desc": "字体和排版灵感分享平台，展示各种优秀的字体组合和排版设计。",
          "zhOnly": true
        }
      ]
    ],
    "titleZh": "排版灵感"
  },
  {
    "id": "mockup",
    "title": "Mockup",
    "icon": "linecons-tag",
    "rows": [
      [
        {
          "name": "MockupZone",
          "url": "https://mockup.zone/",
          "logo": "/assets/images/logos/MockupZone.png",
          "desc": "Mockup Zone is an online store where you can find free and premium PSD mockup files to show your designs in a professional way."
        },
        {
          "name": "Dunnnk",
          "url": "https://dunnnk.com/",
          "logo": "/assets/images/logos/Dunnnk.png",
          "desc": "Generate Product Mockups For Free"
        },
        {
          "name": "Graphberry",
          "url": "https://www.graphberry.com/",
          "logo": "/assets/images/logos/graphberry.png",
          "desc": "Free design resources, Mockups, PSD web templates, Icons"
        },
        {
          "name": "Threed",
          "url": "https://threed.io/",
          "logo": "/assets/images/logos/threed.png",
          "desc": "Generate 3D Mockups right in your Browser"
        }
      ],
      [
        {
          "name": "Mockup World",
          "url": "https://free.lstore.graphics/",
          "logo": "/assets/images/logos/mockupworld.png",
          "desc": "The best free Mockups from the Web"
        },
        {
          "name": "Lstore",
          "url": "https://free.lstore.graphics/",
          "logo": "/assets/images/logos/lstore.png",
          "desc": "Exclusive mindblowing freebies for designers and developers"
        },
        {
          "name": "pixeden",
          "url": "https://www.pixeden.com/",
          "logo": "/assets/images/logos/pixeden.png",
          "desc": "free web resources and graphic design templates."
        },
        {
          "name": "For Graphic TM",
          "url": "https://forgraphictm.com/",
          "logo": "/assets/images/logos/forgraphictm.png",
          "desc": "High Quality PSD Mockups for Graphic Designers."
        }
      ]
    ]
  },
  {
    "id": "free-photos",
    "title": "Free Photos",
    "icon": "linecons-tag",
    "rows": [
      [
        {
          "name": "Unsplash",
          "url": "https://unsplash.com/",
          "logo": "/assets/images/logos/unsplash.png",
          "desc": "Beautiful, free photos."
        },
        {
          "name": "visualhunt",
          "url": "https://visualhunt.com/",
          "logo": "/assets/images/logos/visualhunt.png",
          "desc": "100% Free High Quality Photos"
        },
        {
          "name": "librestock",
          "url": "https://librestock.com/",
          "logo": "/assets/images/logos/librestock.png",
          "desc": "65,084 high quality do-what-ever-you-want stock photos"
        },
        {
          "name": "pixabay",
          "url": "https://pixabay.com/",
          "logo": "/assets/images/logos/pixabay.png",
          "desc": "可在任何地方使用的免费图片和视频"
        }
      ],
      [
        {
          "name": "SplitShire",
          "url": "https://www.splitshire.com/",
          "logo": "/assets/images/logos/SplitShire.png",
          "desc": "Free Stock Photos and Videos for commercial use."
        },
        {
          "name": "StockSnap",
          "url": "https://stocksnap.io/",
          "logo": "/assets/images/logos/StockSnap.png",
          "desc": "Beautiful free stock photos"
        },
        {
          "name": "albumarium",
          "url": "https://albumarium.com/",
          "logo": "/assets/images/logos/albumarium.png",
          "desc": "The best place to find & share beautiful images"
        },
        {
          "name": "myphotopack",
          "url": "https://myphotopack.com/",
          "logo": "/assets/images/logos/myphotopack.png",
          "desc": "A free photo pack just for you. Every month."
        }
      ],
      [
        {
          "name": "Notaselfie",
          "url": "https://notaselfie.com/",
          "logo": "/assets/images/logos/notaselfie.png",
          "desc": "Photos that happen along the way. You can use the images anyway you like. Have fun!"
        },
        {
          "name": "papers",
          "url": "https://papers.co/",
          "logo": "/assets/images/logos/papers.png",
          "desc": "Wallpapers Every Hour!Hand collected :)"
        },
        {
          "name": "stokpic",
          "url": "https://stokpic.com/",
          "logo": "/assets/images/logos/stokpic.png",
          "desc": "Free Stock Photos For Commercial Use"
        },
        {
          "name": "55mm",
          "url": "https://55mm.co/visuals",
          "logo": "/assets/images/logos/55mm.png",
          "desc": "Use our FREE photos to tell your story!"
        }
      ],
      [
        {
          "name": "thestocks",
          "url": "https://thestocks.im/",
          "logo": "/assets/images/logos/thestocks.png",
          "desc": "Use our FREE photos to tell your story!"
        },
        {
          "name": "freenaturestock",
          "url": "https://freenaturestock.com/",
          "logo": "/assets/images/logos/freenaturestock.png",
          "desc": "Exclusive mindblowing freebies for designers and developers"
        },
        {
          "name": "negativespace",
          "url": "https://negativespace.co/",
          "logo": "/assets/images/logos/negativespace.png",
          "desc": "Beautiful, High-Resolution Free Stock Photos"
        },
        {
          "name": "gratisography",
          "url": "https://gratisography.com/",
          "logo": "/assets/images/logos/gratisography.png",
          "desc": "Free high-resolution pictures you can use on your personal and commercial projects, free of copyright restrictions."
        }
      ],
      [
        {
          "name": "imcreator",
          "url": "https://imcreator.com/free",
          "logo": "/assets/images/logos/imcreator.png",
          "desc": "A curated collection of free web design resources, all for commercial use."
        },
        {
          "name": "lifeofpix",
          "url": "https://www.lifeofpix.com/",
          "logo": "/assets/images/logos/lifeofpix.png",
          "desc": "Free high resolution photography"
        },
        {
          "name": "skitterphoto",
          "url": "https://skitterphoto.com/",
          "logo": "/assets/images/logos/skitterphoto.png",
          "desc": "Free Stock Photos for Creative Professionals"
        },
        {
          "name": "mmtstock",
          "url": "https://mmtstock.com/",
          "logo": "/assets/images/logos/mmtstock.png",
          "desc": "Free photos for commercial use"
        }
      ],
      [
        {
          "name": "skitterphoto",
          "url": "https://skitterphoto.com/",
          "logo": "/assets/images/logos/skitterphoto.png",
          "desc": "a place to find, show and share public domain photos"
        },
        {
          "name": "magdeleine",
          "url": "https://magdeleine.co/browse/",
          "logo": "/assets/images/logos/magdeleine.png",
          "desc": "HAND-PICKED FREE PHOTOS FOR YOUR INSPIRATION"
        },
        {
          "name": "jeshoots",
          "url": "https://jeshoots.com/",
          "logo": "/assets/images/logos/jeshoots.png",
          "desc": "New Free Photos & Mockups in to your Inbox!"
        },
        {
          "name": "hdwallpapers",
          "url": "https://www.hdwallpapers.net",
          "logo": "/assets/images/logos/hdwallpapers.png",
          "desc": "High Definition Wallpapers & Desktop Backgrounds"
        }
      ],
      [
        {
          "name": "publicdomainarchive",
          "url": "https://publicdomainarchive.com/",
          "logo": "/assets/images/logos/publicdomainarchive.png",
          "desc": "New 100% Free Stock Photos. Every. Single. Week."
        }
      ]
    ]
  },
  {
    "id": "ppt",
    "title": "PPT",
    "icon": "linecons-tag",
    "rows": [
      [
        {
          "name": "OfficePLUS",
          "url": "https://www.officeplus.cn/Template/Home.shtml",
          "logo": "/assets/images/logos/officeplus.png",
          "desc": "OfficePLUS，微软Office官方在线模板网站！"
        },
        {
          "name": "优品PPT",
          "url": "https://www.ypppt.com/",
          "logo": "/assets/images/logos/ypppt.png",
          "desc": "高质量的模版，而且还有PPT图表，PPT背景图等资源"
        },
        {
          "name": "PPT+",
          "url": "https://www.pptplus.cn/",
          "logo": "/assets/images/logos/pptplus.png",
          "desc": "PPT加直播、录制和分享—PPT+语音内容分享平台"
        },
        {
          "name": "PPTMind",
          "url": "https://www.pptmind.com/",
          "logo": "/assets/images/logos/pptmind.png",
          "desc": "分享高端ppt模板与keynote模板的数字作品交易平台"
        }
      ],
      [
        {
          "name": "tretars",
          "url": "https://www.tretars.com/ppt-templates",
          "logo": "/assets/images/logos/tretars.png",
          "desc": "The best free Mockups from the Web"
        },
        {
          "name": "5百丁",
          "url": "https://ppt.500d.me/",
          "logo": "/assets/images/logos/500d.png",
          "desc": "中国领先的PPT模板共享平台"
        }
      ]
    ]
  },
  {
    "id": "creative-graphics",
    "title": "Creative Graphics",
    "icon": "linecons-tag",
    "rows": [
      [
        {
          "name": "photoshop",
          "url": "https://www.adobe.com/cn/products/photoshop.html",
          "logo": "/assets/images/logos/photoshop.png",
          "desc": "Photoshop不需要解释"
        },
        {
          "name": "Affinity Designer",
          "url": "https://affinity.serif.com/",
          "logo": "/assets/images/logos/AffinityDesigner.png",
          "desc": "专业创意软件"
        },
        {
          "name": "Illustrator",
          "url": "https://www.adobe.com/cn/products/illustrator/",
          "logo": "/assets/images/logos/Illustrator.png",
          "desc": "矢量图形和插图。"
        },
        {
          "name": "indesign",
          "url": "https://www.adobe.com/cn/products/indesign.html",
          "logo": "/assets/images/logos/INDESIGN .png",
          "desc": "页面设计、布局和出版。"
        }
      ],
      [
        {
          "name": "cinema-4d",
          "url": "https://www.maxon.net/en/products/cinema-4d/overview/",
          "logo": "/assets/images/logos/cinema4d.png",
          "desc": "Cinema 4D is the perfect package for all 3D artists who want to achieve breathtaking results fast and hassle-free."
        },
        {
          "name": "3ds-max",
          "url": "https://www.autodesk.com/products/3ds-max/overview",
          "logo": "/assets/images/logos/3dsmax.png",
          "desc": "3D modeling, animation, and rendering software"
        },
        {
          "name": "Blender",
          "url": "https://www.blender.org/",
          "logo": "/assets/images/logos/blender.png",
          "desc": "Blender is the free and open source 3D creation suite."
        }
      ]
    ]
  },
  {
    "id": "user-interface",
    "title": "User Interface",
    "icon": "linecons-tag",
    "rows": [
      [
        {
          "name": "Sketch",
          "url": "https://sketchapp.com/",
          "logo": "/assets/images/logos/sketchapp.png",
          "desc": "The digital design toolkit"
        },
        {
          "name": "Adobe XD",
          "url": "https://www.adobe.com/products/xd.html",
          "logo": "/assets/images/logos/ADOBEXDCC.png",
          "desc": "Introducing Adobe XD. Design. Prototype. Experience."
        },
        {
          "name": "invisionapp",
          "url": "https://www.invisionapp.com/",
          "logo": "/assets/images/logos/invisionapp.png",
          "desc": "Powerful design prototyping tools"
        },
        {
          "name": "marvelapp",
          "url": "https://marvelapp.com/",
          "logo": "/assets/images/logos/marvelapp.png",
          "desc": "Simple design, prototyping and collaboration"
        }
      ],
      [
        {
          "name": "Muse CC",
          "url": "https://creative.adobe.com/zh-cn/products/download/muse",
          "logo": "/assets/images/logos/MuseCC.png",
          "desc": "无需利用编码即可进行网站设计。"
        },
        {
          "name": "figma",
          "url": "https://www.figma.com/",
          "logo": "/assets/images/logos/figma.png",
          "desc": "Design, prototype, and gather feedback all in one place with Figma."
        }
      ]
    ]
  },
  {
    "id": "motion-design",
    "title": "Motion Design",
    "icon": "linecons-tag",
    "rows": [
      [
        {
          "name": "Adobe After Effects CC",
          "url": "https://www.adobe.com/cn/products/aftereffects/",
          "logo": "/assets/images/logos/AdobeAfterEffectsCC.png",
          "desc": "电影般的视觉效果和动态图形。"
        },
        {
          "name": "principle",
          "url": "https://principleformac.com/",
          "logo": "/assets/images/logos/principle.png",
          "desc": "Animate Your Ideas, Design Better Apps"
        },
        {
          "name": "flinto",
          "url": "https://www.flinto.com/",
          "logo": "/assets/images/logos/flinto.png",
          "desc": "Flinto is a Mac app used by top designers around the world to create interactive and animated prototypes of their app designs."
        },
        {
          "name": "framer",
          "url": "https://framer.com/",
          "logo": "/assets/images/logos/framer.png",
          "desc": "Design everything from detailed icons to high-fidelity interactions—all in one place."
        }
      ],
      [
        {
          "name": "ProtoPie",
          "url": "https://www.protopie.cn/",
          "logo": "/assets/images/logos/protopie.png",
          "desc": "高保真交互原型设计"
        }
      ]
    ]
  },
  {
    "id": "colors",
    "title": "Colors",
    "icon": "linecons-tag",
    "rows": [
      [
        {
          "name": "khroma",
          "url": "https://khroma.co/generator/",
          "logo": "/assets/images/logos/khroma.png",
          "desc": "Khroma is the fastest way to discover, search, and save color combos you'll want to use."
        },
        {
          "name": "uigradients",
          "url": "https://uigradients.com",
          "logo": "/assets/images/logos/uigradients.png",
          "desc": "Beautiful colored gradients"
        },
        {
          "name": "gradients",
          "url": "https://gradients.io/",
          "logo": "/assets/images/logos/gradients.png",
          "desc": "Curated gradients for designers and developers"
        },
        {
          "name": "Coolest",
          "url": "https://webkul.github.io/coolhue/",
          "logo": "/assets/images/logos/Coolest.png",
          "desc": "Coolest handpicked Gradient Hues for your next super ⚡ amazing stuff"
        }
      ],
      [
        {
          "name": "webgradients",
          "url": "https://webgradients.com/",
          "logo": "/assets/images/logos/webgradients.png",
          "desc": "WebGradients is a free collection of 180 linear gradients that you can use as content backdrops in any part of your website."
        },
        {
          "name": "grabient",
          "url": "https://www.grabient.com/",
          "logo": "/assets/images/logos/grabient.png",
          "desc": "2017 Grabient by unfold"
        },
        {
          "name": "thedayscolor",
          "url": "https://www.thedayscolor.com/",
          "logo": "/assets/images/logos/thedayscolor.png",
          "desc": "The daily color digest"
        },
        {
          "name": "flatuicolors",
          "url": "https://flatuicolors.com/",
          "logo": "/assets/images/logos/flatuicolors.png",
          "desc": "Copy Paste Color Pallette from Flat UI Theme"
        }
      ],
      [
        {
          "name": "coolors",
          "url": "https://coolors.co/",
          "logo": "/assets/images/logos/coolors.png",
          "desc": "The super fast color schemes generator!"
        },
        {
          "name": "colorhunt",
          "url": "https://www.colorhunt.co/",
          "logo": "/assets/images/logos/colorhunt.png",
          "desc": "Beautiful Color Palettes"
        },
        {
          "name": "Adobe Color CC",
          "url": "https://color.adobe.com/zh/create/color-wheel",
          "logo": "/assets/images/logos/AdobeColorCC.png",
          "desc": "Create color schemes with the color wheel or browse thousands of color combinations from the Color community."
        },
        {
          "name": "flatuicolorpicker",
          "url": "https://www.flatuicolorpicker.com/",
          "logo": "/assets/images/logos/flatuicolorpicker.png",
          "desc": "Best Flat Colors For UI Design"
        }
      ],
      [
        {
          "name": "trianglify",
          "url": "https://qrohlf.com/trianglify-generator/",
          "logo": "/assets/images/logos/trianglify.png",
          "desc": "Trianglify Generator"
        },
        {
          "name": "klart",
          "url": "https://klart.co/colors/",
          "logo": "/assets/images/logos/klart.png",
          "desc": "Beautiful colors and designs to your inbox every week"
        },
        {
          "name": "vanschneider",
          "url": "https://www.vanschneider.com/colors",
          "logo": "/assets/images/logos/vanschneider.png",
          "desc": "Color Claim was created in 2012 by Tobias van Schneider with the goal to collect & combine unique colors for my future projects."
        },
        {
          "name": "Adobe Color",
          "url": "https://color.adobe.com/",
          "logo": null,
          "desc": "Adobe旗下的配色工具，提供多种配色方案生成和分享功能。",
          "zhOnly": true
        }
      ],
      [
        {
          "name": "Color Hunt",
          "url": "https://colorhunt.co/",
          "logo": "/assets/images/logos/colorhunt.png",
          "desc": "精选配色方案分享平台，用户可以浏览、收藏和分享各种配色方案。",
          "zhOnly": true
        },
        {
          "name": "Paletton",
          "url": "https://paletton.com/",
          "logo": null,
          "desc": "专业的配色工具，提供详细的色彩理论和配色方案生成功能。",
          "zhOnly": true
        }
      ]
    ],
    "titleZh": "配色灵感"
  },
  {
    "id": "online-tools",
    "title": "Online Tools",
    "icon": "linecons-tag",
    "rows": [
      [
        {
          "name": "tinypng",
          "url": "https://tinypng.com/",
          "logo": "/assets/images/logos/tinypng.png",
          "desc": "Optimize your images with a perfect balance in quality and file size."
        },
        {
          "name": "goqr",
          "url": "https://goqr.me/",
          "logo": "/assets/images/logos/goqr.png",
          "desc": "create QR codes for free (Logo, T-Shirt, vCard, EPS)"
        },
        {
          "name": "ezgif",
          "url": "https://ezgif.com",
          "logo": "/assets/images/logos/ezgif.png",
          "desc": "simple online GIF maker and toolset for basic animated GIF editing."
        },
        {
          "name": "Android 9 patch",
          "url": "https://inloop.github.io/shadow4android/",
          "logo": "/assets/images/logos/Android9patch.png",
          "desc": "Android 9-patch shadow generator fully customizable shadows"
        }
      ],
      [
        {
          "name": "screen sizes",
          "url": "https://screensiz.es/",
          "logo": "/assets/images/logos/screensizes.png",
          "desc": "Viewport Sizes and Pixel Densities for Popular Devices"
        },
        {
          "name": "svgomg",
          "url": "https://jakearchibald.github.io/svgomg/",
          "logo": "/assets/images/logos/svgomg.png",
          "desc": "SVG在线压缩平台"
        },
        {
          "name": "稿定抠图",
          "url": "https://www.gaoding.com",
          "logo": "/assets/images/logos/gaoding.png",
          "desc": "免费在线抠图软件,图片快速换背景-抠白底图"
        }
      ]
    ]
  },
  {
    "id": "chrome-plug-ins",
    "title": "Chrome Plug-ins",
    "icon": "linecons-tag",
    "rows": [
      [
        {
          "name": "wappalyzer",
          "url": "https://www.wappalyzer.com/",
          "logo": "/assets/images/logos/wappalyzer.png",
          "desc": "Identify technology on websites"
        },
        {
          "name": "Panda",
          "url": "https://usepanda.com/",
          "logo": "/assets/images/logos/usepanda.png",
          "desc": "A smart news reader built for productivity."
        },
        {
          "name": "sizzy",
          "url": "https://sizzy.co/",
          "logo": "/assets/images/logos/sizzy.png",
          "desc": "A tool for developing responsive websites crazy-fast"
        },
        {
          "name": "csspeeper",
          "url": "https://csspeeper.com/",
          "logo": "/assets/images/logos/csspeeper.png",
          "desc": "Smart CSS viewer tailored for Designers."
        }
      ],
      [
        {
          "name": "insight",
          "url": "https://insight.io/",
          "logo": "/assets/images/logos/insight.png",
          "desc": "IDE-like code search and navigation, on the cloud"
        },
        {
          "name": "mustsee",
          "url": "https://mustsee.earth/",
          "logo": "/assets/images/logos/mustsee.png",
          "desc": "Discover the world's most beautiful places at every opened tab."
        }
      ]
    ]
  },
  {
    "id": "design-guidelines",
    "title": "Design Guidelines",
    "icon": "linecons-tag",
    "rows": [
      [
        {
          "name": "Design Guidelines",
          "url": "https://designguidelines.co/",
          "logo": "/assets/images/logos/designguidelines.png",
          "desc": "Design Guidelines — The way products are built."
        },
        {
          "name": "Awesome design systems",
          "url": "https://github.com/alexpate/awesome-design-systems",
          "logo": "/assets/images/logos/awesome_design_systems.png",
          "desc": "A collection of awesome design systems"
        },
        {
          "name": "Material Design",
          "url": "https://material.io/guidelines/",
          "logo": "/assets/images/logos/Material_Design.png",
          "desc": "Introduction - Material Design"
        },
        {
          "name": "Human Interface Guidelines",
          "url": "https://developer.apple.com/ios/human-interface-guidelines",
          "logo": "/assets/images/logos/human_interface_guidelines.png",
          "desc": "Human Interface Guidelines iOS"
        }
      ],
      [
        {
          "name": "Photoshop Etiquette",
          "url": "https://viggoz.com/photoshopetiquette/",
          "logo": "/assets/images/logos/photoshopetiquette.png",
          "desc": "PS礼仪-WEB设计指南"
        }
      ]
    ]
  },
  {
    "id": "video-tutorial",
    "title": "Video Tutorial",
    "icon": "linecons-tag",
    "rows": [
      [
        {
          "name": "Photoshop Lady",
          "url": "https://www.photoshoplady.com/",
          "logo": "/assets/images/logos/PhotoshopLady.png",
          "desc": "Your Favourite Photoshop Tutorials in One Place"
        },
        {
          "name": "doyoudo",
          "url": "https://doyoudo.com/",
          "logo": "/assets/images/logos/doyoudo.png",
          "desc": "创意设计软件学习平台"
        },
        {
          "name": "没位道",
          "url": "https://www.c945.com/web-ui-tutorial/",
          "logo": "/assets/images/logos/web_ui_tutorial.png",
          "desc": "WEB UI免费视频公开课"
        },
        {
          "name": "慕课网",
          "url": "https://www.imooc.com/",
          "logo": "/assets/images/logos/imooc.png",
          "desc": "程序员的梦工厂（有UI课程）"
        }
      ]
    ]
  },
  {
    "id": "design-article",
    "title": "Design Article",
    "icon": "linecons-tag",
    "rows": [
      [
        {
          "name": "优设网",
          "url": "https://www.uisdc.com/",
          "logo": "/assets/images/logos/uisdc.png",
          "desc": "设计师交流学习平台"
        },
        {
          "name": "Web Design Ledger",
          "url": "https://webdesignledger.com",
          "logo": "/assets/images/logos/webdesignledger.png",
          "desc": "Web Design Blog"
        },
        {
          "name": "Medium",
          "url": "https://medium.com/",
          "logo": "/assets/images/logos/medium.png",
          "desc": "Read, write and share stories that matter"
        }
      ]
    ]
  },
  {
    "id": "design-fm",
    "title": "Design FM",
    "icon": "linecons-tag",
    "rows": [
      [
        {
          "name": "UX Coffee",
          "url": "https://uxcoffee.co/",
          "logo": "/assets/images/logos/uxcoffee.png",
          "desc": "《UX Coffee 设计咖》是一档关于用户体验的播客节目。我们邀请来自硅谷和国内的学者和职人来聊聊「产品设计」、「用户体验」和「个人成长」。"
        },
        {
          "name": "Anyway.FM",
          "url": "https://anyway.fm/",
          "logo": "/assets/images/logos/anyway.png",
          "desc": "设计杂谈 • UI 设计师 JJ 和 Leon 主播的设计播客"
        },
        {
          "name": "异能电台",
          "url": "https://www.yineng.fm",
          "logo": "/assets/images/logos/yineng.png",
          "desc": "将全宇宙设计师的故事讲给你听。"
        }
      ]
    ]
  },
  {
    "id": "ux",
    "title": "UX",
    "icon": "linecons-tag",
    "rows": [
      [
        {
          "name": "Little Big Details",
          "url": "https://littlebigdetails.com/",
          "logo": "/assets/images/logos/littlebigdetails.png",
          "desc": "Little Big Details is a curated collection of the finer details of design, updated every day."
        },
        {
          "name": "Smashing Magazine",
          "url": "https://www.smashingmagazine.com/category/user-experience",
          "logo": "/assets/images/logos/smashingmagazine.png",
          "desc": "Below you’ll find the best tips to take not only your UX design process but also the experiences you craft to the next level."
        },
        {
          "name": "nngroup",
          "url": "https://www.nngroup.com/articles/",
          "logo": "/assets/images/logos/nngroup.png",
          "desc": "Evidence-Based User Experience Research, Training, and Consulting"
        },
        {
          "name": "Boxes and Arrows",
          "url": "https://boxesandarrows.com/",
          "logo": "/assets/images/logos/boxesandarrows.png",
          "desc": "Boxes and Arrows is devoted to the practice, innovation, and discussion of design; including graphic design, interaction design, information architecture and the design of business."
        }
      ],
      [
        {
          "name": "UX Design Weekly",
          "url": "https://uxdesignweekly.com/",
          "logo": "/assets/images/logos/uxdesignweekly.png",
          "desc": "get a hand picked list of the best user experience design links every week."
        },
        {
          "name": "UX Ren",
          "url": "https://uxren.cn/",
          "logo": "/assets/images/logos/uxren.png",
          "desc": "用户体验人的专业社区"
        }
      ]
    ]
  },
  {
    "id": "ued-team",
    "title": "UED Team",
    "icon": "linecons-tag",
    "rows": [
      [
        {
          "name": "Airbnb Design",
          "url": "https://airbnb.design",
          "logo": "/assets/images/logos/AirbnbDesign.png",
          "desc": "Airbnb Design"
        },
        {
          "name": "Facebook Design",
          "url": "https://facebook.design/",
          "logo": "/assets/images/logos/FacebookDesign.png",
          "desc": "Facebook Design"
        },
        {
          "name": "Google Design",
          "url": "https://design.google/",
          "logo": "/assets/images/logos/GoogleDesign.png",
          "desc": "Google Design"
        },
        {
          "name": "eico design",
          "url": "https://eicodesign.com/",
          "logo": "/assets/images/logos/eico.png",
          "desc": "数字化咨询与产品专家"
        }
      ],
      [
        {
          "name": "nice design",
          "url": "https://www.niceui.cn/",
          "logo": "/assets/images/logos/niceui.png",
          "desc": "nicedesign奈思设计是领先的用户体验设计与互联网品牌建设公司"
        },
        {
          "name": "腾讯CDC",
          "url": "https://cdc.tencent.com/",
          "logo": "/assets/images/logos/cdc.png",
          "desc": "腾讯CDC关注于互联网视觉设计、UX、用户研究、前端开发。"
        },
        {
          "name": "TGideas",
          "url": "https://tgideas.qq.com/",
          "logo": "/assets/images/logos/tgideas.png",
          "desc": "TGideas隶属于腾讯公司互动娱乐业务系统的专业推广类设计团队"
        },
        {
          "name": "ISUX",
          "url": "https://isux.tencent.com/",
          "logo": "/assets/images/logos/isux.png",
          "desc": "腾讯社交用户体验设计部"
        }
      ],
      [
        {
          "name": "MXD",
          "url": "https://mxd.tencent.com/",
          "logo": "/assets/images/logos/mxd.png",
          "desc": "腾讯MIG无线互联网事业群设计团队"
        },
        {
          "name": "Aliued",
          "url": "https://www.aliued.com/",
          "logo": "/assets/images/logos/aliued.png",
          "desc": "阿里巴巴国际UEDTeam"
        },
        {
          "name": "U一点",
          "url": "https://www.aliued.cn/",
          "logo": "/assets/images/logos/aliuedcn.png",
          "desc": "阿里巴巴（中国站）用户体验设计部博客U一点设计 UEDTeam"
        },
        {
          "name": "网易uedc",
          "url": "https://uedc.163.com/",
          "logo": "/assets/images/logos/uedc.png",
          "desc": "网易用户体验设计中心（User Experience Design Center）"
        }
      ],
      [
        {
          "name": "百度用户体验中心",
          "url": "https://ued.baidu.com/",
          "logo": "/assets/images/logos/uedbaidu.png",
          "desc": "百度用户体验中心"
        },
        {
          "name": "京东设计中心",
          "url": "https://jdc.jd.com/",
          "logo": "/assets/images/logos/jdc.png",
          "desc": "京东设计中心"
        },
        {
          "name": "百度企业产品用户体验中心",
          "url": "https://eux.baidu.com/",
          "logo": "/assets/images/logos/euxbaidu.png",
          "desc": "百度企业产品用户体验中心"
        },
        {
          "name": "携程设计委员会",
          "url": "https://ued.ctrip.com/",
          "logo": "/assets/images/logos/ctrip.png",
          "desc": "携程设计委员会-Ctrip Design Committee"
        }
      ]
    ]
  }
];
