const logotext = "{BW}";
const meta = {
    title: "{Brian Ward}",
    description: "I'm {Brian Ward}, a technologist and cybersecurity enthuist.",
};

const introdata = {
    title: "Hi, I'm {Brian Ward}",
    animated: {
        first: "Technologist",
        second: "Cybersecurity Engineer",
        third: "Ethical Hacker",
        fourth: "Programmer",
        fifth: "Compliance Manager",
        sixth: "Threat Analyst",
        // add more if you'd like but make sure to update /src/pages/home/index.js Line 29
    },
    description: "Dedicated cybersecurity professional with an insatiable curiosity for unraveling the complexities of our securing our digital world.",
    your_img_url: "https://raw.githubusercontent.com/bvvard/bvvard.github.io/refs/heads/main/assets/images/animated-headshot.png",
};

const dataabout = {
    title: "Who am I?",
    aboutme: "Cybersecurity professional with multiple years of experience advising organizations and leading teams for developing and securing enterprise-wide IT infrastructures. Tireless work ethic with the attention to detail of a trained cyber analyst. Proven track record of enhancing processes and improving operating procedures to increase efficiency and quality of service to organizations. Talented ability to translate complex security technique into operational business value.",
};
const worktimeline = [{
        jobtitle: "Incident Response Manager, Cybersecurity",
        where: "Andover Corporation",
        date: "2022-Present",
    },
    {
        jobtitle: "IT Security Engineer II",
        where: "Andover Corporation",
        date: "2022-2024",
    },
    {
        jobtitle: "IT Engineering Technician I",
        where: "Andover Corporation",
        date: "2022",
    },
    {
        jobtitle: "Cybersecurity Engineer, Shadow XP",
        where: "BMCS, Hanscom AFB",
        date: "2019",
    },
    {
        jobtitle: "Contractor",
        where: "Flawless, LLC",
        date: "2018-2021",
    },
];

const skills = [{
        name: "Python",
    },
    
    {
        name: "Robotics",
    },
    
    {
        name: "SIEM",
    },
    
    {
        name: "CI/CD",
    },

    {
        name: "Powershell",
    },

    {
        name: "Network Engineering",
    },

    {
        name: "Penetration Testing",
    },

    {
        name: "Linux",
    },
];

const dataportfolio = [{
        img: "https://www.therobotreport.com/wp-content/uploads/2023/12/SWIFTI-CRB-1300-Machine-Tending-featured.jpg",
        description: "Programmed our GoFa ABB Collaborative Robotic Arm to automate technician roles.",
        link: "#",
        class: "portfolio-image"
    },
    {
        img: "https://habrastorage.org/webt/br/tg/br/brtgbria1khg3dg-lpk9z1lag3g.png",
        description: "Architected custom SIEM server grid that serves as our CUI network's threat hunting, enterprise security monitoring, and log management platform.",
        link: "#",
        class: "portfolio-image"
    },
    {
        img: "https://chiefit.me/wp-content/uploads/2023/12/Lenovo-and-Microsoft.jpg",
        description: "Initiated & continue to maintain a flourishing partnership with Mainstay Technologies Information Security division.",
        link: "#",
        class: "portfolio-image"
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "Bottom left",
        link: "#",
        class: "portfolio-image"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbm_5dsU-0nCvCPo7Mn4PPFvlH3vk4muhSWQ&s",
        description: "Partnered our organization with the NSA'S CCC Program; granting us access to state of the art secuirty tools & Slack communication with NSA Analysts.",
        link: "#",
        class: "portfolio-image"
    },
    {
        img: "https://www.bapcs.co.uk/wp-content/uploads/2012/03/virus-removal-london-1.jpg",
        description: "Detected & remediated a critical Zeus Trojan Botnet Virus on our CUI LAN.",
        link: "#",
        class: "portfolio-image"
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "3 down; middle",
        link: "#",
        class: "portfolio-image"
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "Bottom Middle.",
        link: "#",
        class: "portfolio-image"
    },
    {
        img: "https://www.tutorlinux.com.br/wp-content/uploads/2024/04/lamp-1024x652-1.jpg",
        description: "Architected an internal BookStack Web App Wiki platform hosted on Debian 12 Linux server: running Apache2 HTTP Server, with databases managed using MariaDB, with support from PHP and MySQL.",
        link: "https://github.com/bvvard/cybersecurity-wiki",
        class: "portfolio-image"
    },
    {
        img: "https://www.easydynamics.com/wp-content/uploads/2022/05/nist-mep.png",
        description: "Acquired The NH MEP Cybersecurity Grant Award for our organiozation; this influx of capital yielded the ability to bolster our cybersecurity posture; pushing us towards CMMC 2.0 & NIST 800-171 compliance.",
        link: "#",
        class: "portfolio-image"
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
        class: "portfolio-image"
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
        class: "portfolio-image"
    },
];

const contactConfig = {
    YOUR_EMAIL: "contact@brianward.tech",
    description: "Looking forward to hearing from you!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "SERVICE_ID",
    YOUR_TEMPLATE_ID: "TEMPLATE_ID",
    YOUR_USER_ID: "USER_ID (PUBLIC_KEY)",
};

const socialprofils = {
    github: "https://github.com/bvvard",
    linkedin: "https://www.linkedin.com/in/brian-w-7a71b715a/",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
