const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Felvin Search Blog",
  tagline: "Your search box is now an app store",
  url: "https://blog.felvin.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  // These are used in deploying the site to GitHub pages
  // https://docusaurus.io/docs/deployment#deploying-to-github-pages
  trailingSlash: false,
  organizationName: "felvin-search", // Usually your GitHub org/user name.
  projectName: "blog", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/felvin-search/blog/edit/master/",
          routeBasePath: "/", // Set this value to '/'.
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
        title: "Felvin Search",
        logo: {
          alt: "Felvin Search logo",
          src: "img/favicon-32x32.png",
        },
        items: [
          {
            href: "https://docs.felvin.com",
            label: "Docs",
            position: "left",
          },
          {
            href: "https://felvin.com",
            label: "felvin.com",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "About us",
            items: [
              {
                label: "About",
                to: "https://docs.felvin.com/company/about-us",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/FelvinSearch",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Docs",
                to: "https://docs.felvin.com",
              },
              {
                label: "GitHub (Instant Apps)",
                href: "https://github.com/felvin-search/instant-apps",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
