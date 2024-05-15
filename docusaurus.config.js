// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;
const glob = require('glob');
const globs = require('glob-all');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SelfCommunity Developers',
  tagline: 'Build amazing Community solutions powered by the SelfCommunity platform',
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
    // {
    //   href: 'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined',
    // },
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
          customCss: [require.resolve('./src/css/custom.css'), require.resolve('./node_modules/@selfcommunity/react-theme-default/lib/cjs/styles/reset.css'), require.resolve('./node_modules/@selfcommunity/react-theme-default/lib/cjs/fonts/community-icons.css')],
        },
      }),
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        id:'api-services',
        entryPoints: globs.sync(['./sdk/community-js/packages/api-services/src/types/*.ts', './sdk/community-js/packages/api-services/src/services/*/index.ts']),
        tsconfig: './sdk/community-js/packages/api-services/tsconfig.json',
        out: 'docs/sdk/community-js/api-services/API_Reference',
        readme: 'none',
        excludeExternals: true,
        outputFileStrategy: "members",
        membersWithOwnFile: ["Class", "Enum", "Interface", "TypeAlias", "Function"],
        propertiesFormat: "table",
        enumMembersFormat: "table",
        parametersFormat: "table",
        typeDeclarationFormat: "table",
        textContentMappings: {
          "title.indexPage": "API Reference",
          "title.memberPage": "{name}",
          "label.index": "",
        },
        sidebar: {
          pretty: true
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
        id:'react-core',
        entryPoints: globs.sync(['./sdk/community-js/packages/react-core/src/components/provider/*/index.tsx', './sdk/community-js/packages/react-core/src/components/router/index.tsx', './sdk/community-js/packages/react-core/src/hooks/*.ts', './sdk/community-js/packages/react-core/src/types/*.ts']),
        tsconfig: './sdk/community-js/packages/react-core/tsconfig.json',
        out: 'docs/sdk/community-js/react-core/API_Reference',
        readme: 'none',
        excludeExternals: true,
        outputFileStrategy: "modules",
        propertiesFormat: "table",
        enumMembersFormat: "table",
        parametersFormat: "table",
        typeDeclarationFormat: "table",
        textContentMappings: {
          "title.indexPage": "API Reference",
          "title.memberPage": "{name}",
          "label.index": "",
        },
        sidebar: {
          pretty: true
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
        id:'react-ui',
        entryPoints: glob.sync('./sdk/community-js/packages/react-ui/src/components/*/index.tsx'),
        tsconfig: './sdk/community-js/packages/react-ui/tsconfig.json',
        out: 'docs/sdk/community-js/react-ui/component_API',
        readme: 'none',
        excludeExternals: true,
        outputFileStrategy: "modules",
        propertiesFormat: "table",
        enumMembersFormat: "table",
        parametersFormat: "table",
        typeDeclarationFormat: "table",
        textContentMappings: {
          "title.indexPage": "Component API",
          "title.memberPage": "{name}",
          "label.index": "",
        },
        sidebar: {
          pretty: true
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
        id:'react-templates',
        entryPoints:  glob.sync('./sdk/community-js/packages/react-templates/src/components/*/index.tsx'),
        tsconfig: './sdk/community-js/packages/react-templates/tsconfig.json',
        out: 'docs/sdk/community-js/react-templates/Component API',
        readme: 'none',
        excludeExternals: true,
        outputFileStrategy: "modules",
        parametersFormat: "table",
        textContentMappings: {
          "title.indexPage": "Component API",
          "title.memberPage": "{name}",
          "label.index": "",
        },
        sidebar: {
          pretty: true
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
        id:'types',
        entryPoints: glob.sync('./sdk/community-js/packages/types/src/*/index.ts'),
        tsconfig: './sdk/community-js/packages/types/tsconfig.json',
        out: 'docs/sdk/community-js/types/Reference',
        readme: 'none',
        excludeExternals: true,
        textContentMappings: {
          "title.indexPage": "Reference",
          "title.memberPage": "{name}",
          "label.index": "",
        },
        propertiesFormat: "table",
        enumMembersFormat: "table",
        parametersFormat: "table",
        typeDeclarationFormat: "table",
        sidebar: {
          pretty: true
        },
        validation: {
          "notExported": true
        },
        plugin:['typedoc-plugin-rename-defaults'],
      },
    ],
    // [
    //   'docusaurus-plugin-typedoc',
    //   {
    //     id:'utils',
    //     entryPoints: glob.sync('./sdk/community-js/packages/utils/src/*/index.ts'),
    //     tsconfig: './sdk/community-js/packages/utils/tsconfig.json',
    //     out: 'sdk/community-js/utils/Reference',
    //     readme: 'none',
    //     excludeExternals: true,
    //     sidebar: {
    //       categoryLabel: 'API Reference',
    //       position: 0,
    //       indexLabel: 'Introduction'
    //     },
    //     validation: {
    //       "notExported": true
    //     },
    //     plugin:['typedoc-plugin-rename-defaults'],
    //   },
    // ],
    () => ({
      configureWebpack(config, isServer) {
        return {
          externals : { canvas: {} },
        };
      },
    }),
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
                label: 'Community JS',
                docId: 'sdk/community-js/intro',
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
                to: '/docs/sdk/community-js/intro',
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
