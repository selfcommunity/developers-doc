// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const glob = require('glob');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SelfCommunity Developers',
  tagline: 'Build amazing community solutions powered by the SelfCommunity platform',
  url: 'https://developers.selfcommunity.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'SelfCommunity', // Usually your GitHub org/user name.
  projectName: 'developers-doc', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/selfcommunity/developers-doc/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        id:'sc-core',
        entryPoints: glob.sync('../../WebstormProjects/community-ui/packages/sc-core/src/components/**/index.tsx'),
        tsconfig: '../../WebstormProjects/community-ui/packages/sc-core/tsconfig.json',
        out: 'sdk/community-ui/sc-core/API Reference',
        readme: 'none',
        excludeExternals: true,
        sidebar: {
          categoryLabel: 'API Reference',
          position: 0,
          indexLabel: 'Introduction'
        },
        validation: {
          "notExported": true
        },
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id:'sc-ui',
        entryPoints: glob.sync('../../WebstormProjects/community-ui/packages/sc-ui/src/components/*/index.tsx'),
        exclude: ['../../WebstormProjects/community-ui/packages/sc-ui/src/components/FollowCategoryButton/*/index.tsx', '../../WebstormProjects/community-ui/packages/sc-ui/src/components/FollowUserButton/*/index.tsx', '../../WebstormProjects/community-ui/packages/sc-ui/src/components/ConnectionUserButton/*/index.tsx'],
        tsconfig: '../../WebstormProjects/community-ui/packages/sc-ui/tsconfig.json',
        out: 'sdk/community-ui/sc-ui/component_API',
        readme: 'none',
        excludeExternals: true,
        sidebar: {
          categoryLabel: 'Component API',
          position: 0,
          indexLabel: 'Introduction'
        },
        validation: {
          "notExported": true
        },
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id:'sc-templates',
        entryPoints:  glob.sync('../../WebstormProjects/community-ui/packages/sc-templates/src/components/*/index.tsx'),
        tsconfig: '../../WebstormProjects/community-ui/packages/sc-templates/tsconfig.json',
        out: 'sdk/community-ui/sc-templates/Component API',
        readme: 'none',
        excludeExternals: true,
        sidebar: {
          categoryLabel: 'API Reference',
          position: 0,
          indexLabel: 'Introduction'
        },
        validation: {
          "notExported": true
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
          },
      navbar: {
        title: '',
        logo: {
          alt: 'SelfCommunity Developers',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'api/intro',
            position: 'right',
            label: 'Api Docs',
          },
          {
            type: 'doc',
            docId: 'apireference/v2/intro',
            position: 'right',
            label: 'Api Reference',
          },
          {
            type: 'doc',
            docId: 'webhooks/intro',
            position: 'right',
            label: 'Webhook',
          },
          {
            type: 'doc',
            docId: 'sdk/community-ui/intro',
            position: 'right',
            label: 'SDK',
          },
          {
            href: 'https://github.com/selfcommunity',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          }
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'API Docs',
                to: '/docs/api/intro',
              },
              {
                label: 'API Reference',
                to: '/docs/apireference/v2/intro',
              },
              {
                label: 'Webhooks',
                to: '/docs/webhooks/intro',
              },
              {
                label: 'SDK',
                to: '/docs/sdk/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/selfcommunity',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/selfcommunity/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://selfcommunity.com/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/selfcommunity',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Quentral s.r.l.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
