// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const glob = require('glob');
const globs = require('glob-all');

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
  stylesheets: [
    // Object format.
    {
      href: 'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined',
    },
  ],

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
        entryPoints: globs.sync(['./sdk/community-ui/packages/sc-core/src/components/provider/*/index.tsx', './sdk/community-ui/packages/sc-core/src/hooks/*.ts', './sdk/community-ui/packages/sc-core/src/types/*.ts']),
        tsconfig: './sdk/community-ui/packages/sc-core/tsconfig.json',
        out: 'sdk/community-ui/sc-core/API_Reference',
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
        plugin:['typedoc-plugin-rename-defaults'],
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id:'sc-ui',
        entryPoints: glob.sync('./sdk/community-ui/packages/sc-ui/src/components/*/index.tsx'),
        tsconfig: './sdk/community-ui/packages/sc-ui/tsconfig.json',
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
        plugin:['typedoc-plugin-rename-defaults'],
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id:'sc-templates',
        entryPoints:  glob.sync('./sdk/community-ui/packages/sc-templates/src/components/*/index.tsx'),
        tsconfig: './sdk/community-ui/packages/sc-templates/tsconfig.json',
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
        plugin:['typedoc-plugin-rename-defaults'],
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
            type: 'dropdown',
            label: 'SDK',
            position: 'right',
            items: [
              {
                type: 'doc',
                label: 'Community UI',
                docId: 'sdk/community-ui/intro',
              }
            ],
          },
          {
            href: 'https://github.com/selfcommunity',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          }
        ],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'EQLEQLRNAX',

        // Public API key: it is safe to commit it
        apiKey: '917e9fd4810e5672dfbc6df451784cb2',

        indexName: 'developers-selfcommunity',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
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
