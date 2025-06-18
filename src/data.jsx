import { FaPaintBrush } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { GiIdea } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  profile3,
  profile4,
  profile5,
  profile6,
  figma,
  css,
  html,
  javascript,
  tailwind,
  bootstrap,
  react,
  emailicon,
  nodejs,
  expressjs,
  sass
} from "./assets";

export const menu = [
  { name: "Home", link: "header" },
  { name: "About", link: "about" },
  { name: "Projects", link: "projects" },
  // { name: "Skill", link: "skills" },
  // { name: "Articles", link: "articles" },
  { name: "Contact", link: "contact" },
];

export const services = [
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush />,
    description: `Crafting visually stunning and user-centric designs that ensure seamless user experiences. 
                  From wireframes to high-fidelity prototypes, I focus on creating intuitive interfaces that 
                  blend creativity and functionality, enhancing engagement and usability.`,
  },
  {
    title: "Web Development",
    icon: <FaCodeCompare />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `Building responsive, dynamic, and high-performance websites tailored to your needs. 
    Using modern technologies like React, Node.js, and more, I ensure your site is optimized 
    for speed, scalability, and accessibility, delivering a robust online presence.`,
  },
  {
    title: "Content Creation",
    icon: <GiIdea />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `Producing compelling digital content that resonates with your audience. From blogs 
                  and technical documentation to engaging website copy, I ensure your brand's message 
                  is clear, impactful, and aligned with your business goals.`,
  },
];

export const projects = [
  {
    title: "Neville Jarvis Portfolio",
    image: project1,
    category: "Website",
    description: `I Have developed a Personal Portfolio Website which is fully responsive .`,
    demoLink: "https://neville-jarvis-portfolio.netlify.app/",
    stacks: [
      {
        name: "HTML",
        logo: html,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
    ],
  },
  {
    title: "Tony Stark Portfolio",
    image: project2,
    category: "Website",
    description: `I Have developed Second Personal Portfolio Website which is fully responsive`,
    demoLink: "https://tony-stark-portfolio.netlify.app/",
    stacks: [
      {
        name: "HTML",
        logo: html,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
    ],
  },
  {
    title: "Hostinger Clone",
    image: project3,
    category: "Website",
    description: `This is a fully responsive clone of the Hostinger web hosting service homepage, developed using HTML, CSS, and JavaScript. The project replicates the core UI/UX of the original Hostinger site, including modern design elements such as hero sections, pricing cards, feature highlights, domain search functionality, and responsive navigation.`,
    demoLink: "https://hostingerredesignweb.netlify.app/",
    stacks: [
      {
        name: "HTML",
        logo: html,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
    ],
  },
  {
    title: "Ai Vision",
    image: project4,
    category: "Website",
    description: `Completed Front-end Project,
 📸 PhotoGraphy Porfolio.
Technology:- HTML, CSS, JavaScript
Features:- responsive design, use flexbox and grid, use media queries, use keyframes, multi page website, CSS Animations`,
    demoLink: "https://aivision.netlify.app/",
    stacks: [
      {
        name: "HTML",
        logo: html,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
    ],
  },
  {
    title: "EduLearn UI Development",
    image: project5,
    category: "Website",
    description: `📖 Educational landing page 
Technologies:- HTML, CSS, JavaScript`,
    demoLink: "https://edulearn-website.netlify.app/",
    stacks: [
      {
        name: "HTML",
        logo: html,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
    ],
  },
  {
    title: "SpaceX Website Development",
    image: project6,
    category: "Website",
    description: `🚀 Spacex Clone Website.
Technology:- HTML, CSS, JavaScript 
Features:- Responsive design, uses flexbox and grid, uses media queries, uses keyframes, multi page website`,
    demoLink: "https://spacex-websiteclone.netlify.app/",
    stacks: [
      {
        name: "HTML",
        logo: html,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
    ],
  },
];

export const skills = [
  {
    title: "UI/UX",
    data: [
      {
        skill: "Figma",
        level: "Experienced",
        logo: figma,
      },
      {
        skill: "ExpressJs",
        level: "Intermediate",
        logo: expressjs,
      },
      {
        skill: "NodeJs",
        level: "Intermediate",
        logo: nodejs,
      },
    ],
  },
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
        logo: html,
      },
      {
        skill: "CSS",
        level: "Experienced",
        logo: css,
      },
      {
        skill: "JavaScript",
        level: "Experienced",
        logo: javascript,
      },
      {
        skill: "Tailwind",
        level: "Intermediate",
        logo: tailwind,
      },
      {
        skill: "Bootstrap",
        level: "Experienced",
        logo: bootstrap,
      },
      {
        skill: "React",
        level: "Experienced",
        logo: react,
      },
      {
        skill: "Sass",
        level: "Intermediate",
        logo: sass,
      },
    ],
  },
];
export const contactInfo = [
  {
    name: "Email",
    value: "yogeshdhande661@gmail.com",
    link: "mailto:yogeshdhande661@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
];
export const socialHandles = [
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/YogeshDhande",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/yogesh-dhande/",
  },
];

export const testimonials = [
  {
    avatar: profile3,
    name: "Samuel Eze",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile4,
    name: "Emmanuel Joseph",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile5,
    name: "Gloria Chiwendu",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile6,
    name: "Precious Stone",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
];
