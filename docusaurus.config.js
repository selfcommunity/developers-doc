// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SelfCommunity Developers',
  tagline: 'Build amazing community solutions powered by the SelfCommunity platform',
  url: 'https://developers.selfcommunity.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
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
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Developers',
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
            docId: 'apireference/intro',
            position: 'right',
            label: 'Api Reference',
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
                to: '/docs/api',
              },
              {
                label: 'API Reference',
                to: '/docs/apireference',
              },
              {
                label: 'Webhooks',
                to: '/docs/webhooks',
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
