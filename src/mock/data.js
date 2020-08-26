import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Jason Fiammetta's Portfolio", // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "I'm",
  name: 'Jason Fiammetta',
  subtitle: 'I want to help.',
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: "I'm a software developer.",
  paragraphTwo:
    'I graduated from Northeastern University in 2019 with a BS in Computer Science and Mathematics.',
  paragraphThree: 'I enjoy solving puzzles and creating things.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'paintbrush.jpg',
    title: 'Avant Gallery',
    info: 'An art gallery that allows users to post their artwork for the world to see.',
    info2: 'Using AWS, React and React Bootstrap, JavaScript, Axios',
    url: 'https://drag-on-drop.github.io/Avant-Gallery-Client/',
    repo: 'https://github.com/Drag-on-Drop/Avant-Gallery-Client/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Forums R Us',
    info: 'A place for users to post forum topics and chat with one another.',
    info2: 'Using JavaScript, Handlebars, HTML/CSS, JQuery and AJAX',
    url: 'https://jasonfiammetta.github.io/Forum-Client/',
    repo: 'https://github.com/jasonfiammetta/Forum-Client', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Tournament Bracket',
    info: 'A tool for tournament directors to create brackets',
    info2: 'Using Python, Django, JavaScript, and PostgreSQL',
    url: 'https://jasonfiammetta.github.io/Tournament-Client/',
    repo: 'https://github.com/jasonfiammetta/Tournament-Client', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'You can reach me at jason.fiammetta@gmail.com',
  btn: 'Email me',
  email: 'jason.fiammetta@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jasonfiammetta/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jasonfiammetta',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
