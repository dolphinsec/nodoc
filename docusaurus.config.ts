import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type { ScalarConfig } from "@x-delfino/docusaurus-scalar";

const config: Config = {
  title: "nodoc",
  tagline: "documenting undocumented interfaces",
  favicon: "img/favicon.svg",

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
        withDefaultFonts: false,
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
      items: [
        {
          href: "https://www.postman.com/dolphinlabs",
          className: "icon--postman navbar--icon-link",
          "aria-label": "Postman collection",
          position: "right",
        },
        {
          href: "https://github.com/dolphinsec/nodoc",
          className: "icon--github navbar--icon-link",
          "aria-label": "GitHub repository",
          position: "right",
        }
      ],
    },
    footer: {
      logo: {
        alt: "dolphin labs logo",
        src: "./img/dolphin_labs_black.svg",
        srcDark: "./img/dolphin_labs_green.svg",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Dolphin Labs Ltd.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
