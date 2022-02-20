const logotext = "MTF";
const meta = {
    title: "Megan Teubner-Foster",
    description:
        "Hi! I'm Megan Teubner-Foster, a Technical Writer and Full Stack Web Developer.",
};

const introdata = {
    title: "Hi! I'm Megan - ",
    animated: {
        first: "I love helping people",
        second: "I'm passionate about technical writing",
        third: "I'm here to have fun coding'",
    },
    description:
        "Thanks for stopping by!",
    your_img_url: "https://raw.githubusercontent.com/mteubnerfoster/mtf-react-portfolio/main/src/assets/photos/megan.jpg",
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
            "The high-level planning, execution, promotion, and on-going management of the content lifecycle to support key business initiatives. Essentially, it’s your brand’s game plan for driving traffic, leads, engagement, sales, and other business outcomes through content.",
    },
    {
        title: "Technical Writing and Knowledge Base Management",
        description:
            "Any form of communication that exhibits the following characteristics: (1) communicating technical or specialized topics, such as computer applications, medical procedures, or environmental regulations; (2) communicating by using technology, such as web pages, help files, or social media sites; or (3) providing instructions about how to do something, regardless of how technical the task is. Knowledge management (KM) is the process of identifying, organizing, storing and disseminating information within an organization.",
    },
    {
        title: "Process Improvement",
        description:
            "The business practice of identifying, analyzing and improving existing business processes to optimize performance, meet best practice standards or simply improve quality and the user experience for customers and end-users.",
    },
];

const dataportfolio = [
    {
        img: "https://raw.githubusercontent.com/mteubnerfoster/mtf-react-portfolio/main/src/assets/photos/jate.JPG",
        description:
            "JATE (Just Another Text Editor): A PWA Text Editor that runs in a browser.",
        link: "https://mtf-jate.herokuapp.com/",
    },

    {
        img: "https://raw.githubusercontent.com/mteubnerfoster/mtf-react-portfolio/main/src/assets/photos/jointefforthomepage.jpg",
        description:
            "Joint Effort: This app assists users in choosing a cannabis dispensary and a food truck near one another.",
        link: "https://joint-effort-kohmm.herokuapp.com/",
    },

    {
        img: "https://raw.githubusercontent.com/mteubnerfoster/mtf-react-portfolio/main/src/assets/photos/tech-blog-photo.jpg",
        description:
            "MTF Tech Blog: A CMS-style blog similar to a Wordpress site, where developers publish blog posts and comment on others' posts.",
        link: "https://mtf-tech-blog.herokuapp.com/",
    },

    {
        img: "https://raw.githubusercontent.com/mteubnerfoster/mtf-react-portfolio/main/src/assets/photos/employeetracker.jpg",
        description:
            "Employee Tracker: A Content Management System (CMS) application that allows non-developers to easily view and interact with information stored in databases.",
        link: "https://github.com/mteubnerfoster/employee-tracker",
    },

    {
        img: "https://raw.githubusercontent.com/mteubnerfoster/mtf-react-portfolio/main/src/assets/photos/exampleteamprofile.jpg",
        description:
            "Team Profile Generator: A command-line interface application that creates a team profile webpage featuring summaries of team members.",
        link: "https://github.com/mteubnerfoster/team-profile-generator",
    },

    {
        img: "https://raw.githubusercontent.com/mteubnerfoster/mtf-react-portfolio/main/src/assets/photos/express-note-taker.jpg",
        description:
            "Express Note Taker: A note taking application that allows users to enter and save notes.",
        link: "https://lit-sea-95005.herokuapp.com/",
    },

    {
        img: "https://raw.githubusercontent.com/mteubnerfoster/mtf-react-portfolio/main/src/assets/photos/weather-dashboard.jpg",
        description:
            "Weather Dashboard: A weather dashboard that displays cities' weather forecasts.",
        link: "https://mteubnerfoster.github.io/weather-dashboard/",
    },

    {
        img: "https://raw.githubusercontent.com/mteubnerfoster/mtf-react-portfolio/main/src/assets/photos/work-day-scheduler.jpg",
        description:
            "Work Day Scheduler: A calendar application that allows users to enter and save events for each hour of their work day, starting at 8am and ending at 5pm.",
        link: "https://mteubnerfoster.github.io/work-day-scheduler/",
    },
];

const contactConfig = {
    YOUR_EMAIL: "mteubnerfoster@gmail.com",
    YOUR_PHONE: "217.816.3997",
    description:
        "You can find my contact information here.",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
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