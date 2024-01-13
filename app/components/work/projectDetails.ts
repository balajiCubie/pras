import {
    SiCplusplus,
    SiFramer,
    SiFlask,
    // SiGithub,
    //  SiNeovim,
    SiPython,
    SiYaml,
    
    SiBootstrap,
    SiGoogleanalytics,
    SiOpenai,
    SiSelenium,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    // SiTypescript,
    SiZig
} from "react-icons/si";
import { FcSynchronize } from "react-icons/fc";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Flask Bot",
        description:
            "Explore OpenAI-Flask-Chat, a Flask-based chatbot integrating OpenAI's GPT for intelligent conversations.",
        technologies: [SiFlask, SiOpenai,SiBootstrap,SiGoogleanalytics],
        techNames: ["Flask", "Open AI", "Boostrap", "Googe analytics"],
        techLinks: ["https://flask.palletsprojects.com/en/3.0.x/", "https://openai.com/", "https://getbootstrap.com/", "https://analytics.google.com/"],
        github: "https://github.com/PrakashMahesh2729/OpenAI-Flask-Chat",
        demo: "https://github.com/PrakashMahesh2729/OpenAI-Flask-Chat",
        image: "/projects/openAi1.jpg",
        available: true,
    },
    {
        id: 1,
        name: "LinkedIn Applier",
        description:
            "Python script dedicated to professionals and job seekers looking to expand their network on LinkedIn.",
        technologies: [SiSelenium, SiPython, SiYaml, FcSynchronize],
        techNames: ["Selenium", "Python", "Yaml","Rinbow CSV"],
        // selenium, yaml, rainbow csv, python
        techLinks: ["https://selenium-python.readthedocs.io/", "https://www.python.org/", "https://yaml.org/", "https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv"],
        github: "https://github.com/PrakashMahesh2729/LinkedIN-Apply-Connect-Bot",
        demo: "https://github.com/PrakashMahesh2729/LinkedIN-Apply-Connect-Bot",
        image: "/projects/LinkedIN.jpg",
        available: true,
    },
    {
        id: 2,
        name: "Coming Soon",
        description:
            "I'm currently working on a couple of projects. I'll update this section as soon as I'm done.",
        technologies: [SiZig],
        techNames: ["Zig"],
        techLinks: ["https://www.ziglang.org/"],
        github: "https://github.com/nuIIpointerexception/",
        demo: "https://github.com/nuIIpointerexception/",
        image: "/projects/construction.webp",
        available: false,
    },
];
