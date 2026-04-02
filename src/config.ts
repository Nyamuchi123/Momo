import type {
    SiteConfig,
    ProfileConfig,
    LicenseConfig
} from "./types/config"

import type { FriendLink } from "./types/friend"

export const siteConfig: SiteConfig = {
    title: "Nyamuchi の blog",
    subTitle: "Blog",

    favicon: "/favicon/favicon.ico", // Path of the favicon, relative to the /public directory

    pageSize: 6, // Number of posts per page
    toc: {
        enable: true,
        depth: 3 // Max depth of the table of contents, between 1 and 4
    },
    blogNavi: {
        enable: true // Whether to enable blog navigation in the blog footer
    },
    comments: {
        enable: true, // Whether to enable comments
        backendUrl: "https://api-momo.motues.top" // Backend URL for comments
    }
}

export const profileConfig: ProfileConfig = {
    avatar: "assets/avatar.webp", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    name: "Nyamuchi",
    description: "こんにちにゃむにゃむ〜♪",
    indexPage: "https://blog.nyamuchi.us.ci/",
    startYear: 2026
}

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const friendLinkConfig: FriendLink[] = [
    {
        name: 'haruki🐻',
        avatar: 'https://haruki.sakiko.top/avatar/48dfdd36-6e3a-4de2-b497-d003c1cbaa2e.jpeg',
        url: 'https://haruki.sakiko.top/#/',
        description: '可怜的孩子 不再胆怯'
    },
    //{
        //name: 'Astro',
       // avatar: 'https://avatars.githubusercontent.com/u/44914786',
       // url: 'https://astro.build',
       // description: 'Build fast websites, faster.'
    //}
    // Add more friend links here
]