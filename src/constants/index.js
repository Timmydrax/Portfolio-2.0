import project1 from "../assets/projects/project-one.png";
import project2 from "../assets/projects/project-two.png";
import project3 from "../assets/projects/project-three.png";
import project4 from "../assets/projects/project-four.png";
import project5 from "../assets/projects/project-five.png";

export const HERO_CONTENT = `I’m a frontend engineer who started this journey a little over a year ago and I’ve been hooked ever since. I love bringing ideas to life with React, TypeScript, Tailwind, and Framer Motion, crafting websites that feel smooth, look sharp, and actually make sense to use. Whether I’m debugging late at night or fine-tuning animations, I’m always chasing that ‘wow, this feels nice’ moment.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Dec 2024 - Present",
    role: "Frontend Team Lead",
    company: "Curamap",
    description: ` I serve as the Frontend Team Lead, guiding the development of user-focused interfaces that bring our product vision to life. I collaborate closely with designers, backend developers, and product managers to turn ideas into smooth, responsive web experiences using technologies like React, TypeScript, and Tailwind CSS. Beyond coding, I support the team through code reviews, task planning, and ensuring best practices in UI consistency, performance, and accessibility.`,
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    year: "Mar 2023 - Present",
    role: "Web Designer & UI Designer",
    company: "Maseev Inisible Digitals",
    description: `I craft clean, user-friendly designs that balanced visual appeal with usability. My role focuses on creating responsive, accessible interfaces that support both user needs and business goals.`,
    technologies: ["Figma", "Wordpress", "Hostinger", "Google Ads"],
  },
  {
    year: "Mar 2024 - Apr 2024",
    role: "Wordpress Developer",
    company: "Kenrow Digital Marketing Agency",
    description: `As a contract WordPress Developer at Kenrow Digitals, I built and customized responsive websites, delivering user-friendly designs and ensuring performance, accessibility, and SEO best practices.`,
    technologies: ["Wordpress", "Hostinger", "GoogleAds"],
  },
];

export const PROJECTS = [
  {
    title: "Sabitalk Web app.",
    image: project1,
    description:
      "Sabitalk is a language-learning web app that helps users explore Nigerian languages like Yoruba, Igbo, and Hausa—making it easy to go from everyday phrases to cultural expressions. The frontend is built with React, React Router, and CSS Modules, featuring user authentication (including Google login), personalized profiles, and a fully responsive design for all devices.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "React-router"],
    link: "https://sabitalk.vercel.app",
  },
  {
    title: "BasketBall Scoreboard App",
    image: project2,
    description:
      "This project is a web-based basketball scoreboard with enhanced functionalities beyond basic scorekeeping. It includes features like starting a new game, highlighting the leading team, a period counter, a foul counter, and a timer.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://timmydrax.github.io/basketball-scoreboard/",
  },
  {
    title: "Todo App",
    image: project3,
    description:
      "This project is a React-based web application that interacts with the Todo API to fetch and manage todos. The application is designed with user-friendly features such as pagination, search, filtering, nested routes, and error handling, all while adhering to best practices for UI design and accessibility.",
    technologies: ["HTML", "CSS", "React", "TypeScript"],
    link: "https://second-semester-examination.netlify.app/",
  },
  {
    title: "Scissors",
    image: project4,
    description:
      "A sleek URL shortening solution designed to optimize user experience and strengthen brand identity. This tool allows users to personalize links using custom slugs, branded URLs, and domain customization. Built with HTML and CSS, it features a clean, responsive interface focused on usability and engagement.",
    technologies: ["HTML", "CSS"],
    link: "https://timmydrax.github.io/CSS-assignments/Assignment-6/",
  },
  {
    title: "Cryptified",
    image: project5,
    description:
      "A simple and interactive password generator built with HTML, CSS, and JavaScript. This app allows users to generate random passwords with customizable length and options to include symbols and numbers. It also features a copy-on-click function for easy password copying.",
    technologies: ["HTML", "Tailwind", "JavaScript"],
    link: "https://cryptified.netlify.app/",
  },
];

export const CONTACT = {
  address: "Satellite Town,\u00A0Amuwo-Odofin,\u00A0Lagos. ",
  phoneNo: "+234 9036 716 225 ",
  email: "timmydrax@gmail.com",
};
