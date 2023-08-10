import { 
    web, 
    reactjs, 
    backend, 
    creator,
    css,
    docker,
    figma,
    git,
    html,
    javascript,
    mongodb,
    nodejs,
    redux,
    tailwind,
    typescript,
    threejs,
    youTube
    } from '../public/assets'
  
    
  
  
  export const navLinks = [
      {
        id: "about",
        title: "About",
      },
      {
        id: "work",
        title: "Work",
      },
      {
        id: "contact",
        title: "Contact",
      },
    ];
  
    const services = [
      {
        title: "Web Deveopler",
        icon: web,
      },
      {
        title: "React.js Deveopler",
        icon: reactjs,
      },
      {
        title: "Backend Deveopler",
        icon: backend,
      },
      {
        title: "Content Creator",
        icon: creator,
      },
    ]
  
    const experiences = [
      {
        title: "React.js Developer",
        company_name: "Tech Company",
        icon: web,
        iconBg: "red",
        date: "March 2020 - April 2022",
        points: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore", 
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore", 
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore", 
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
        ] 
      },
      {
        title: "React.js Developer",
        company_name: "Tech Company",
        icon: web,
        iconBg: "red",
        date: "March 2020 - April 2022",
        points: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore", 
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore", 
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore", 
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
        ] 
      },
      {
        title: "React.js Developer",
        company_name: "Tech Company",
        icon: web,
        iconBg: "red",
        date: "March 2020 - April 2022",
        points: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore", 
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore", 
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore", 
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
        ] 
      }
      ,{
        title: "React.js Developer",
        company_name: "Tech Company",
        icon: web,
        iconBg: "red",
        date: "March 2020 - April 2022",
        points: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore", 
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore", 
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore", 
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
        ] 
      }
    ];
  
    const technologies = [
      {
        name: "HTML 5",
        icon: html,
      },
      {
        name: "CSS 3",
        icon: css,
      },
      {
        name: "JavaScript",
        icon: javascript,
      },
      {
        name: "TypeScript",
        icon: figma,
      },
      {
        name: "React JS",
        icon: reactjs,
      },
      {
        name: "Redux Toolkit",
        icon: redux,
      },
      {
        name: "Tailwind CSS",
        icon: tailwind,
      },
      {
        name: "Node JS",
        icon: nodejs,
      },
      {
        name: "MongoDB",
        icon: mongodb,
      },
      {
        name: "Three JS",
        icon: threejs,
      },
      {
        name: "Git",
        icon: figma,
      },
      {
        name: "Figma",
        icon: git,
      },
      {
        name: "Docker",
        icon: docker,
      },
    ];
  
    const projects = [
      {
        name: "YouTube Clone",
        description: "Full functioning YouTube clone using Rapid API",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient"
          },
          {
            name: "rapidapi",
            color: "green-text-gradient"
          },
          {
            name: "tailwind",
            color: "pink-text-gradient"
          },
        ],
        image: youTube,
        source_code_link: "https://github.com/"
      },
      {
        name: "YouTube Clone",
        description: "Full functioning YouTube clone using Rapid API",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient"
          },
          {
            name: "rapidapi",
            color: "green-text-gradient"
          },
          {
            name: "tailwind",
            color: "pink-text-gradient"
          },
        ],
        image: youTube,
        source_code_link: "https://github.com/"
      },
      {
        name: "YouTube Clone",
        description: "Full functioning YouTube clone using Rapid API",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient"
          },
          {
            name: "rapidapi",
            color: "green-text-gradient"
          },
          {
            name: "tailwind",
            color: "pink-text-gradient"
          },
        ],
        image: youTube,
        source_code_link: "https://github.com/"
      }
    ]
  
    export { services, experiences, technologies, projects }