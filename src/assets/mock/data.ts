import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HEADER DATA
export const headerData = {
  navbar: [
    {
      id: nanoid(),
      name: 'About',
      url: 'about',
    },

    {
      id: nanoid(),
      name: 'Experience',
      url: 'experience',
    },
    {
      id: nanoid(),
      name: 'Work',
      url: 'projects',
    },
    {
      id: nanoid(),
      name: 'Contact',
      url: 'contact',
    },
  ],
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  info: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  paragraphFour: '',
};

export const experienceData = [
  {
    id: nanoid(),
    title: 'Frontend Web Developer',
    company: 'Blackbox',
    date: 'APR 2021 - Present',
    info: "Working full time in Blackbox. Blackbox is Australia's largest timelapse provider that deliver user-friendly and high-tech solutions.",
  },
  {
    id: nanoid(),
    title: 'Web Graphic and Developer',
    company: 'RIB Software (formerly Exactal)',
    date: 'FEB 2010 - APR 2021',
    info: 'Working full time in RIB Software. RIB is a pioneering enterprise, committed to driving innovation in the construction and real estate industries.',
  },
  {
    id: nanoid(),
    title: 'Web Designer & Developer',
    company: 'Diggy',
    date: 'SEP - DEC 2009 ( 3 Months )',
    info: '3 months working experience in a leading Internet Marketing Company specialising in SEO, Website Design, Search Engine Marketing and IT Support.',
  },
  {
    id: nanoid(),
    title: 'Web Designer & Developer',
    company: 'Synchromedia Group Pty Ltd',
    date: 'SEP - DEC 2009 ( 3 Months )',
    info: '3 months of working experience in a Brisbane based website specialist company.',
  },
  {
    id: nanoid(),
    title: 'Graphic and Web Designer',
    company: 'Freelance',
    date: 'DEC 2007 - OCT 2008',
    info: 'Clients include JERELLE, Mirror News, E-Design and Ice Monster.',
  },
  {
    id: nanoid(),
    title: 'Graphic Designer',
    company: 'IIM Pty Ltd',
    date: 'JUL 2005 – DEC 2007 & MAY - JUN 2009',
    info: 'Working full time in an innovative marketing company specialising in web development and graphic design.',
  },
];

// PROJECTS DATA
export const projectsData = {
  features: [
    {
      id: nanoid(),
      img: 'blackbox_dashboard.jpg',
      title: 'Blackbox Dashboard',
      info: 'A fast-performing Vue.js web application empowers users and project managers to monitor site cameras quickly and seamlessly. This interactive dashboard is built to capture real-time timelapse data, allowing you to watch your project develop.',
      tech: [
        'Vue 3',
        'Vuex',
        'Vite',
        'Typescript',
        'HTML',
        'Javascript',
        'Sass',
        'Git',
        'd3.js',
        'gsap.js',
        'JWT token',
        'Service Worker (Workbox)',
        'Monorepo (Turborepo)',
        'DevOps',
      ],
      url: 'https://dashboard.black-box.com.au',
      repo: '', // if no repo, the button will not show up
      caseStudy: {
        status: true,
        title: 'Construction Monitoring Web Application',
        videos: [
          // {
          //   id: 'S5rLAbwvTFE',
          //   img: 'dashboard-overview.jpg',
          //   title: 'Blackbox Dashboard - overview',
          // },
          {
            id: 'endR9ErGl1E',
            img: 'dashboard-project.jpg',
            title: 'Blackbox Dashboard - project',
          },
        ],
      },
    },
    {
      id: nanoid(),
      img: 'blackbox.jpg',
      title: 'Blackbox Website',
      info: 'Contributed to enhancing and maintaining the company website using Next.js addressing issues and implementing new features.',
      tech: ['Next.js', 'HTML', 'Javascript', 'Tailwind CSS', 'Git', 'Sanity Headless CMS'],
      url: 'https://www.black-box.com.au/',
      // url: 'https://www.rib-international.com/en/',
      repo: '', // if no repo, the button will not show up
      caseStudy: {
        status: false,
        videos: [],
      },
    },
    {
      id: nanoid(),
      img: 'rib-int.jpg',
      title: 'RIB International Website',
      info: 'A fully customized WordPress CMS website tailored for an enterprise software company dedicated to driving innovation in the construction and real estate sectors.',
      tech: ['PHP', 'HTML', 'Javascript', 'jQuery', 'Vue.js', 'Sass', 'Grunt', 'Git'],
      url: 'https://www.itwocostx.com/',
      // url: 'https://www.rib-international.com/en/',
      repo: '', // if no repo, the button will not show up
      caseStudy: {
        status: false,
        videos: [],
      },
    },
    {
      id: nanoid(),
      img: 'portfolio.jpg',
      title: '4145 Portfolio Website',
      info: 'My portfolio website build using Gatsby, serves as a dynamic showcase of my professional accomplishments, skills and expertise. It provides insight into both my capabilities and the valuable contributions I offer.',
      tech: ['React', 'GraphQL', 'HTML', 'Javascript', 'Sass'],
      url: 'https://4145-portfolio.netlify.app/',
      repo: '', // if no repo, the button will not show up
      caseStudy: {
        status: false,
        videos: [],
      },
    },
  ],
  others: [
    {
      id: nanoid(),
      img: 'rib-software.jpg',
      title: 'Marketing Website',
      info: 'Developed a fully customized WordPress CMS website for RIB ANZ',
      tech: [
        'SugarCRM API',
        'PHP',
        'HTML',
        'Javascript',
        'jQuery',
        'Vue.js',
        'Sass',
        'Gulp',
        'Git',
        'Wordpress CMS',
      ],
      url: 'https://www.rib-software.com.au/',
      repo: '', // if no repo, the button will not show up
    },
    {
      id: nanoid(),
      img: 'itwocostx.jpg',
      title: 'LMS Website',
      info: 'Developed a custom WordPress Learning Management System for costX learning.',
      tech: ['PHP', 'HTML', 'Javascript', 'jQuery', 'Vue.js', 'SASS', 'Gulp', 'Wordpress CMS'],
      url: 'https://training.itwocostx.com/',
      repo: '', // if no repo, the button will not show up
    },
    {
      id: nanoid(),
      img: 'itwocx.jpg',
      title: 'LMS Website',
      info: 'Developed a custom WordPress Learning Management System for RIB CX learning.',
      tech: ['PHP', 'HTML', 'Javascript', 'jQuery', 'Vue.js', 'SASS', 'Gulp', 'Wordpress CMS'],
      url: 'https://training.itwocx.com/',
      repo: '', // if no repo, the button will not show up
    },
    {
      id: nanoid(),
      img: 'tmdb.jpg',
      title: 'Single-page App',
      info: 'Developed a user-friendly single-page app for exploring movies and TV series.',
      tech: ['TMDB API', 'React', 'HTML', 'Javascript', 'Sass'],
      url: 'https://mystifying-poincare-d2e9bf.netlify.app/',
      repo: 'https://github.com/shihjohn/tmdb_api', // if no repo, the button will not show up
    },
    {
      id: nanoid(),
      img: 'techweb.jpg',
      title: 'Techweb Website',
      info: 'Responsible for maintaining a resource center for costX users.',
      tech: ['PHP', 'MySQL', 'HTML', 'Javascript', 'jQuery', 'CSS'],
      url: 'https://techweb.rib-international.com/',
      repo: '', // if no repo, the button will not show up
    },
    {
      id: nanoid(),
      img: 'program.jpg',
      title: 'Icon Set',
      info: 'Created a comprehensive icon set for the costX program.',
      tech: ['Illustrator', 'Photoshop', 'Icofx'],
      url: '',
      repo: '', // if no repo, the button will not show up
    },
  ],
  videos: [
    {
      id: '8rQ3OEhGyJk',
      img: 'itwo-costx-demo.jpg',
      title: 'iTWO costX - Demo Video',
      tech: ['After Effects', 'Camtasia', 'Illustrator', 'Photoshop'],
    },
    {
      id: 'w17fOTlTehY',
      img: 'costx-cloud-demo.jpg',
      title: 'iTWO costX in the Cloud - Demo Video',
      tech: ['After Effects', 'Camtasia', 'Illustrator', 'Photoshop'],
    },
    {
      id: 'CFbwvcxk2rw',
      img: 'itwo-costx-new-features.jpg',
      title: 'iTWO costX 6.9 - New Features Video',
      tech: ['After Effects', 'Camtasia', 'Illustrator', 'Photoshop'],
    },
    {
      id: 'IATbZeKQFos',
      img: 'costx-new-features.jpg',
      title: 'CostX 6.0 - New Features Video',
      tech: ['After Effects', 'Camtasia', 'Illustrator', 'Photoshop'],
    },
  ],
};

// CONTAC}T DATA
export const contactData = {
  cta: "I'm open to any new opportunities.",
  btn: 'Get in Touch',
  email: '9ohn.5hih@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto: 9ohn.5hih@gmail.com',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/john-chih-en-shih/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/shihjohn/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
