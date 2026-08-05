export type ProjectName =
    | "Pixelix"
    | "Ferienhaus Lustenau"
    | "Veritate"
    | "Zahn Leitner"
    | "Socialfolio"
    | "Daily Tasks"
    | "Together"
    | "Github Release Stats"
    | "Ghostbyte Library";

export interface ProjectData {
    id: ProjectName;
    name: string;
    image: string;
    logo: string;
    categoryKey: string;
    descriptionKey: string;
    link: string;
}

export interface ResolvedProjectData extends Omit<ProjectData, "categoryKey" | "descriptionKey"> {
    category: string;
    description: string;
}

export const PROJECTS: ProjectData[] = [
    {
        id: "Pixelix",
        name: "Pixelix",
        image: "/img/projects/pixelix_screenshot.webp",
        logo: "/img/projects/pixelix_logo.webp",
        categoryKey: "mobile_application",
        descriptionKey: "pixelix_description",
        link: "/work/pixelix",
    },
    {
        id: "Ferienhaus Lustenau",
        name: "Ferienhaus Lustenau",
        image: "/img/projects/ferienhaus_lustenau_screenshot.png",
        logo: "/img/projects/pixelix_logo.webp",
        categoryKey: "website",
        descriptionKey: "ferienhaus_lustenau_description",
        link: "/work/ferienhaus-lustenau",
    },
    {
        id: "Veritate",
        name: "Veritate Website",
        image: "/img/projects/veritate_screenshot.webp",
        logo: "/img/projects/veritate_logo.webp",
        categoryKey: "website",
        descriptionKey: "veritate_description",
        link: "/work/veritate",
    },
    {
        id: "Zahn Leitner",
        name: "Zahn Leitner Website",
        image: "/img/projects/doris_leitner_screenshot.png",
        logo: "/img/projects/veritate_logo.webp",
        categoryKey: "website",
        descriptionKey: "zahn_leitner_description",
        link: "/work/zahn-leitner",
    },
    {
        id: "Socialfolio",
        name: "Socialfolio",
        image: "/img/projects/socialfolio_screenshot.webp",
        logo: "/img/projects/socialfolio_logo.svg",
        categoryKey: "web_app",
        descriptionKey: "socialfolio_description",
        link: "/work/socialfolio",
    },
    {
        id: "Daily Tasks",
        name: "Daily Tasks",
        image: "/img/projects/dailytasks_screenshot.webp",
        logo: "/img/projects/dailytasks_logo.webp",
        categoryKey: "android_application",
        descriptionKey: "daily_tasks_description",
        link: "/work/daily-tasks",
    },
    {
        id: "Together",
        name: "Together",
        image: "/img/projects/together_screenshot.webp",
        logo: "/img/projects/together_logo.webp",
        categoryKey: "web_app",
        descriptionKey: "together_description",
        link: "/work/together",
    },
    {
        id: "Github Release Stats",
        name: "Github Release Stats",
        image: "/img/projects/github_release_stats_screenshot.webp",
        logo: "/img/projects/github_release_stats_logo.svg",
        categoryKey: "web_app",
        descriptionKey: "github_release_stast_description",
        link: "/work/github-release-stats",
    },
    {
        id: "Ghostbyte Library",
        name: "Ghostbyte Library",
        image: "/img/projects/ghostbyte_library_screenshot.webp",
        logo: "/img/projects/ghostbyte_library_logo.webp",
        categoryKey: "resource_hub",
        descriptionKey: "library_description",
        link: "/work/ghostbyte-library",
    },
];