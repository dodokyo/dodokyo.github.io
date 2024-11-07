// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DoDo(도도)의 FE 개발",
  tagline: "프론트엔드(Frontend) 취업/공부 고민 상담 신청",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://dodokyo.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "dodokyo", // Usually your GitHub org/user name.
  projectName: "dodokyo.github.io", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-GY41PYRR94",
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: "daily",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      metadata: [
        {
          name: "keywords",
          content:
            "frontend, 취업가이드, 개발자 취업, 포트폴리오, 코테 공부, 개발자 현실, 프론트 개발자",
        },
        {
          name: "naver-site-verification",
          content: "a4d2f190e70b852a558130ddef9d13395f6668f9",
        },
        {
          name: "msvalidate.01",
          content: "FD2B428ECA4CE6FB9656F0DECA32DC04",
        },
      ],
      navbar: {
        title: "DODO",
        logo: {
          alt: "dodo Logo",
          src: "img/coding-lupine-logo-dark-circle.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "employment",
            position: "left",
            label: "🍶취업 핸드북",
          },
          {
            type: "docSidebar",
            sidebarId: "employmentCC",
            position: "left",
            label: "📒취업 상담소",
          },
          {
            type: "docSidebar",
            sidebarId: "freeLectures",
            position: "left",
            label: "🍭무료강의",
          },
          {
            type: "docSidebar",
            sidebarId: "nextHandbook",
            position: "left",
            label: "🎧 NextJS YT Music 클론코딩",
          },
          // {
          //   type: "docSidebar",
          //   sidebarId: "dockerHandbook",
          //   position: "left",
          //   label: "🏗️ Docker 핸드북",
          // },
          {
            type: "docSidebar",
            sidebarId: "nextjsSupa",
            position: "left",
            label: "🔋Supa NextJS",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://www.youtube.com/@codingLupine",
            label: "코딩루팡 Youtube",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "취업상담신청",
                to: "/docs/fe-employment/google-forms",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "코딩루팡 Youtube",
                href: "https://www.youtube.com/@codingLupine",
              },
              // {
              //   label: "Discord",
              //   href: "https://discordapp.com/invite/docusaurus",
              // },
              // {
              //   label: "Twitter",
              //   href: "https://twitter.com/docusaurus",
              // },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DoDo(도도), Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "VIL6JH1PHB",
        // Public API key: it is safe to commit it
        apiKey: "08d20bbdd5a2bee98e351e483ef4e929",
        indexName: "dodokyoio",
        // Optional: see doc section below
        // contextualSearch: true,
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: "external\\.com|domain\\.com",
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: "/docs/", // or as RegExp: /\/docs\//
        //   to: "/",
        // },
        // Optional: Algolia search parameters
        // searchParameters: {},
        // Optional: path for search page that enabled by default (`false` to disable it)
        // searchPagePath: "search",
        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        // insights: false,
      },
    }),
};

module.exports = config;
