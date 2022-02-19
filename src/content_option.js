const logotext = "Megan Teubner-Foster";
const meta = {
    title: "Megan Teubner-Foster",
    description:
        "I’m Megan Teubner-Foster Technical Writer _ Full Stack Web Developer, currently working in the greater Seattle area",
};

const introdata = {
    title: "I’m Megan Teubner-Foster",
    animated: {
        first: "I love coding",
        second: "I write process documentation",
        third: "I develop websites, content strategies, and knowledge bases",
    },
    description:
        "Check out my info below",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d", //update with photo of me
};

const dataabout = {
    title: "about me",
    aboutme:
        "I started out in retail and after moving from the cornfields of central Illinois to the Emerald City, I began working in the tech industry as a customer support agent. From there, I found and fell in love with the world of Technical Writing. It combines two things I enjoy immensely: writing and helping people. Now, I'm taking that next step in my career and adding web development to my toolbox.",
};
const worktimeline = [
    {
        jobtitle: "Merchandising Operations Assistant - Commercial",
        where: "AG Consulting Partners, Inc (Microsoft)",
        date: "Jan 2022 - Present",
    },
    {
        jobtitle: "Content Project Manager",
        where: "Mackin Talent (Meta/Oculus)",
        date: "Aug 2019 - Jan 2022",
    },
    {
        jobtitle: "Technical Writer",
        where: "Securitas Security Services USA, Inc (Microsoft)",
        date: "Jun 2018 - Jun 2019",
    },
    {
        jobtitle: "Communications Manager",
        where: "Insight Global (Microsoft)",
        date: "Dec 2016 - May 2018",
    },
    {
        jobtitle: "Senior Knowledge Management Specialist",
        where: "TEKsystems (Microsoft)",
        date: "Oct 2014 - Dec 2016",
    },
];

const skills = [
    {
        name: "HTML",
        value: 90,
    },
    {
        name: "CSS",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "GraphQL",
        value: 70,
    },
];

const services = [
    {
        title: "Content Strategy",
        description:
            "Content strategy is the high-level planning, execution, promotion, and on-going management of the content lifecycle to support key business initiatives. Essentially, it’s your brand’s game plan for driving traffic, leads, engagement, sales, and other business outcomes through content.",
    },
    {
        title: "Technical Writing and Knowledge Base Management",
        description:
            "Technical Writing is any form of communication that exhibits one or more of the following characteristics: (1) communicating about technical or specialized topics, such as computer applications, medical procedures, or environmental regulations; (2) communicating by using technology, such as web pages, help files, or social media sites; or (3) providing instructions about how to do something, regardless of how technical the task is. Knowledge management (KM) is the process of identifying, organizing, storing and disseminating information within an organization.",
    },
    {
        title: "Process Improvement",
        description:
            "Process improvement involves the business practice of identifying, analyzing and improving existing business processes to optimize performance, meet best practice standards or simply improve quality and the user experience for customers and end-users.",
    },
];

const dataportfolio = [
    {
        img: "https://picsum.photos/400/?grayscale", //update photo
        desctiption:
            "JATE (Just Another Text Editor): A PWA Text Editor that runs in a browser.",
        link: "https://mtf-jate.herokuapp.com/",
    },

    {
        img: "https://picsum.photos/400/300/?grayscale", //update photo
        desctiption:
            "Book Search Engine: A full MERN stack book search engine application.",
        link: "https://github.com/mteubnerfoster/book-search-engine", //update URL once deployed
    },

    {
        img: "https://picsum.photos/400/700/?grayscale", //update photo
        desctiption:
            "Joint Effort: This app assists users in choosing a cannabis dispensary and a food truck near one another so that they can pick up both in a fast and efficient manner.",
        link: "https://joint-effort-kohmm.herokuapp.com/",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale", //update photo
        desctiption:
            "MTF Tech Blog: A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.",
        link: "https://mtf-tech-blog.herokuapp.com/",
    },

    {
        img: "https://picsum.photos/400/300/?grayscale", //update photo
        desctiption:
            "Employee Tracker: A Content Management System (CMS) application that allows non-developers to easily view and interact with information stored in databases.",
        link: "https://github.com/mteubnerfoster/employee-tracker",
    },

    {
        img: "https://picsum.photos/400/?grayscale", //update photo
        desctiption:
            "Team Profile Generator: A command-line interface application that allows the user to easily create a team profile webpage that features summaries of their team members.",
        link: "https://github.com/mteubnerfoster/team-profile-generator",
    },

    {
        img: "https://picsum.photos/400/550/?grayscale", //update photo
        desctiption:
            "Express Note Taker: A note taking application that allows users to enter and save notes.",
        link: "https://lit-sea-95005.herokuapp.com/",
    },

    {
        img: "https://picsum.photos/400/?grayscale", //update photo
        desctiption:
            "Weather Dashboard: A weather dashboard that displays cities' weather forecasts.",
        link: "https://mteubnerfoster.github.io/weather-dashboard/",
    },

    {
        img: "https://picsum.photos/400/700/?grayscale", //update photo
        desctiption:
            "Work Day Scheduler: A calendar application that allows users to enter and save events for each hour of their work day, starting at 8am and ending at 5pm.",
        link: "https://mteubnerfoster.github.io/work-day-scheduler/",
    },
];

const contactConfig = {
    YOUR_EMAIL: "mteubnerfoster@gmail.com",
    YOUR_PHONE: "217.816.3997",
    YOUR_SERVICE_ID: "default_service",
    description:
        "You can find my contact information here.",
};

const socialProfiles = {
    github: "https://github.com/mteubnerfoster",
    linkedin: "https://linkedin.com/in/mteubnerfoster",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialProfiles,
    logotext,
};