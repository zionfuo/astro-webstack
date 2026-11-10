import type { Lang } from '../lib/i18n';

export interface NavGroup {
  id: string;
  icon: string;
  title: Record<Lang, string>;
  /** 页面上对应的分区 id，顺序与内容区一致 */
  sections: string[];
}

/**
 * 侧栏分组沿用了原 Sidebar 的四组名称。
 * 原版子项锚点与页面 section id 并不对应（英文版尤其明显），
 * 这里直接引用 sections 数据的 id，保证每个菜单项都能跳到真实分区。
 */
export const navGroups: NavGroup[] = [
  {
    id: 'inspiration',
    icon: 'lightbulb',
    title: { zh: '灵感采集', en: 'Inspiration' },
    sections: [
      'recommended',
      'recommended-2',
      'information',
      'product',
      'ui-inspiration',
      'web-inspiration',
    ],
  },
  {
    id: 'resources',
    icon: 'thumbs-up',
    title: { zh: '素材资源', en: 'Resources' },
    sections: [
      'icon',
      'logo-design',
      'graphic-design',
      'ui-design',
      'sketch',
      'fonts',
      'mockup',
      'free-photos',
      'ppt',
      'creative-graphics',
    ],
  },
  {
    id: 'tools',
    icon: 'diamond',
    title: { zh: '常用工具', en: 'Tools' },
    sections: [
      'user-interface',
      'motion-design',
      'colors',
      'online-tools',
      'chrome-plug-ins',
    ],
  },
  {
    id: 'learn',
    icon: 'pencil',
    title: { zh: '学习教程', en: 'Learn' },
    sections: [
      'design-guidelines',
      'video-tutorial',
      'design-article',
      'design-fm',
      'ux',
      'ued-team',
    ],
  },
];
