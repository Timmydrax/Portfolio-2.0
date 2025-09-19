import project1 from "../assets/projects/project-one.png";
import project2 from "../assets/projects/project-two.png";
import project3 from "../assets/projects/project-three.png";
import project4 from "../assets/projects/project-four.png";
import project5 from "../assets/projects/project-five.png";

export const HERO_CONTENT = `I’m a frontend engineer who loves turning ideas into smooth, engaging web experiences. I work with HTML5, CSS3, JavaScript(ES6+), React, TypeScript, Tailwind CSS, and Next.js to build interfaces that not only look great but also feel great to use. Whether I’m debugging late at night or fine-tuning animations, I’m always chasing that little ‘wow, this feels nice’ moment.`;

export const EXPERIENCES = [
  {
    year: "Feb 2025 - Present",
    role: "Frontend Engineer",
    company: "JCITechPlatform",
    description: ` Contributed to frontend development by delivering responsive, user-centric interfaces that aligned with the product vision, enhanced usability, and drove an estimated 15% improvement in user engagement.`,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Next.js",
    ],
  },
  {
    year: "Mar 2024 - Present",
    role: "Web Designer & UI Designer",
    company: "Maseev Inisible Digitals",
    description: `Designed and implemented intuitive, visually appealing UI/UX solutions that enhanced user satisfaction by 10% and significantly improved site navigation and accessibility.`,
    technologies: ["Figma", "Wordpress", "Hostinger"],
  },
];
 
export const PROJECTS = [
  {
    title: "PlanetFall",
    image: project1,
    description:
      "Planetfall is a space-themed word guessing game inspired by Hangman. Instead of losing lives, you lose planets. There are 9 planets in total, and with each wrong guess, one planet gets eliminated. Your mission is to guess the hidden word before all planets are gone — leaving only the last planet standing.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://planetfalls.netlify.app/",
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
