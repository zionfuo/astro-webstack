export type Lang = 'zh' | 'en';

export const siteUrl = 'https://webstack.cc';

/** 界面文案全部取自原站点，未新增或改写内容。 */
export const ui = {
  zh: {
    homeTitle: 'WebStack.cc - 设计师网址导航',
    aboutTitle: '关于网站 - WebStack.cc',
    description:
      '有一段时间我发现我的收藏夹越来越多，很难找到某个不常用的网站。所以就有了这个网站，这里收集的基本都是我自己浏览器收藏夹里的网站，我平时用的相对比较多的一些都在这里。',
    currentLang: 'Chinese',
    currentFlag: '/assets/images/flags/flag-cn.png',
    otherLang: 'English',
    otherFlag: '/assets/images/flags/flag-us.png',
    otherPath: '/en/',
    github: 'GitHub',
    about: '关于本站♥︎',
    aboutHeading: '关于网站',
    aboutParagraphs: [
      '有一段时间我发现我的收藏夹越来越多，很难找到某个不常用的网站。所以就有了这个网站，这里收集的基本都是我自己浏览器收藏夹里的网站，我平时用的相对比较多的一些都在这里。',
      '如果你也是设计师，如果你也正好喜欢设计，那希望这个网站能给你带来一些作用。',
    ],
    footerDesignBy: 'design by',
  },
  en: {
    homeTitle: 'WebStack.cc - 设计师网址导航',
    aboutTitle: 'About Website - WebStack.cc',
    description:
      'For a while, I found that my bookmarks were getting more and more, and it was difficult to find an infrequently used website. So I created this website. The websites collected here are basically from my browser bookmarks.',
    currentLang: 'English',
    currentFlag: '/assets/images/flags/flag-us.png',
    otherLang: 'Chinese',
    otherFlag: '/assets/images/flags/flag-cn.png',
    otherPath: '/cn/',
    github: 'GitHub',
    about: 'About ♥︎',
    aboutHeading: 'About Website',
    aboutParagraphs: [
      'For a while, I found that my bookmarks were getting more and more, and it was difficult to find an infrequently used website. So I created this website. The websites collected here are basically from my browser bookmarks, and some of the ones I use relatively more often are here.',
      'If you are also a designer, if you also happen to like design, then I hope this website can bring you some benefits.',
    ],
    footerDesignBy: 'design by',
  },
} as const;

export function baseUrlFor(lang: Lang): string {
  return lang === 'en' ? '/en' : '/cn';
}

/** 生成成对的语言版本路径，供 canonical / hreflang 使用。 */
export function alternatePaths(path: string): { zh: string; en: string } {
  if (path.startsWith('/en')) {
    return { zh: path.replace(/^\/en/, '/cn'), en: path };
  }
  if (path.startsWith('/cn')) {
    return { zh: path, en: path.replace(/^\/cn/, '/en') };
  }
  return { zh: '/cn/', en: '/en/' };
}
