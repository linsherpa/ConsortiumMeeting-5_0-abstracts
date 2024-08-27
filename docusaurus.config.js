// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "PPNMR Abstracts",
    tagline: "Praktische Probleme der Kernresonanzspektroskopie",
    favicon: "img/favicon.ico",

    url: "https://your-docusaurus-site.example.com",
    baseUrl: "/ppnmr-abstracts/",

    onBrokenLinks: "warn",
    onBrokenMarkdownLinks: "warn",

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
                    sidebarPath: "./sidebars.js",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                logo: {
                    alt: "My Site Logo",
                    src: "img/ppnmr_weblogo.svg",
                    srcDark: "img/ppnmr_weblogo_dark.svg",
                },

                items: [
                    {
                        to: "docs/intro",
                        label: "Start",
                    },
                    {
                        href: "https://www.uni-frankfurt.de/132222728/PPNMR_2024",
                        label: "PPNMR 2024",
                    },
                ],
            },
            footer: {
                style: "dark",
                copyright: `Copyright © ${new Date().getFullYear()} bei den jeweiligen Autor/innen. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
