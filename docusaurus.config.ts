import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type { ScalarConfig } from "@x-delfino/docusaurus-scalar";

const config: Config = {
  title: "nodoc",
  tagline: "documenting the undocumented",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://nodoc.cloud",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "dolphinsec", // Usually your GitHub org/user name.
  projectName: "nodoc", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "@x-delfino/docusaurus-scalar", {
        nav: {
          categoryFromPath: false
        },
        route: {
          route: '/'
        },
        paths: [
          {
            path: "./specifications",
            include: ["**/openapi.{json,yml,yaml}"],
          }
        ]
      }
    ]
  ],

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true
    },
    navbar: {
      title: "nodoc",
      logo: {
        alt: "nodoc site logo",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "https://github.com/dolphinsec/nodoc",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://www.postman.com/dolphinlabs",
          label: "Postman",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Dolphin Labs Ltd.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
