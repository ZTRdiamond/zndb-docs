// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const organizationName = "zanixongroup";
const projectName = "zanixon.db";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ZanixonDB",
  tagline: "A simple JSON database with ease use, You can use this database for your small games based on nodejs or you can use this database for other usage.",
  url: `https://zanixongroup.github.io/zanixon.db`,
  baseUrl: `/`,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/zn-logo.png",
  // GitHub Pages adds a trailing slash by default that I don't want
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "id",
    locales: ["id"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js")
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "ZanixonDB",
        logo: {
          alt: "zn-logo",
          src: "img/zn-logo-nobg.png",
        },
        items: [
          {
            type: "doc",
            docId: "introduction",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: `https://github.com/${organizationName}/zanixon.db`,
            label: "GitHub",
            position: "left",
          },
          {
            href: `https://trakteer.id/zanixongroup`,
            label: "Support Us",
            position: "left"
          }
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "/docs/introduction",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Our Whatsapp Channel",
                href: "https://whatsapp.com/channel/0029VaFOXjs7tkj2OGoypH1V",
              },
            ],
          },
          {
            title: "Others",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: `https://github.com/${organizationName}`,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zanixon Group, All right reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
