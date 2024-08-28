// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "NFDI4Chem CM5.0 Abstracts",
    tagline: "NFDI4Chem Consortium Meeting 5.0 in Halle, 10./11.09.2024",
    favicon: "img/favicon.ico",

    url: "https://nfdi4chem.github.io/",
    baseUrl: "/ConsortiumMeeting-5_0-abstracts/",

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
                    alt: "NFDI4Chem Logo",
                    src: "img/nfdi4chem-logo.svg",
                    srcDark: "img/nfdi4chem-logo-dark.svg",
                },

                items: [
                    {
                        to: "docs/intro",
                        label: "Start",
                    },
                    {
                        href: "https://www.nfdi4chem.de/",
                        label: "NFDI4Chem Consortium Meeting 5.0 in Halle, 10./11.09.2024",
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
