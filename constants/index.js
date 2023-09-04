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
    youTube,
    threads,
    nextjs,
    sanity
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
        title: "React.js",
        icon: reactjs,
      },
      {
        title: "Tailwindcss",
        icon: tailwind,
      },
      {
        title: "Next.js",
        icon: nextjs,
      },
      {
        title: "Sanity",
        icon: sanity,
      },
    ]
  
    const experiences = [
      {
        title: "Student",
        company_name: "Western Texas College",
        icon: web,
        iconBg: "#6E6E6E",
        date: "November 2012 - July 2015",
        points: [
          "Graduated Summa cum Laude with an Associate Degree in Computer Maintenance and Repair from Texas Western College. My dedication to academic excellence reflects my commitment to mastering computer maintenance and repair skills.", 
          "Completed a comprehensive curriculum covering computer maintenance and repair, equipping me with a strong foundation in hardware and software troubleshooting, system diagnostics, and hardware component replacement.", 
          "Gained practical, hands-on experience during my coursework, which included disassembling and reassembling computer systems, diagnosing hardware and software issues, and implementing effective repair solutions.", 
          "Demonstrated a passion for continuous learning and skill improvement, evident in my pursuit of specialized coursework in computer maintenance and repair. This educational background positions me as a knowledgeable and skilled professional in the field."
        ] 
      },
      {
        title: "Microcomputer Support Specialist",
        company_name: "Daniel Computer Recovery",
        icon: web,
        iconBg: "#0D5BE1",
        date: "Feburary 2014 - July 2014",
        points: [
          "Distinguished between computers for scrapping and those suitable for refurbishment, demonstrating a keen eye for evaluating hardware conditions and potential for reuse.", 
          "Conducted rigorous testing on desktops and laptops by subjecting them to burn tests. This quality assurance process ensured the reliability and performance of the refurbished devices.", 
          "Developed programming skills using VB.NET in Visual Studio 2010 and 2012. These experiences equipped me with the ability to create custom solutions and automate tasks, contributing to enhanced productivity.", 
          "Acquired proficiency in database management through hands-on experience with SQL Server Management Studio 2008 and 2012. This knowledge empowered me to maintain data accuracy and optimize data storage and retrieval processes."
        ] 
      },
      {
        title: "Computer Programmer",
        company_name: "Daniel Computer Recovery",
        icon: web,
        iconBg: "#F2A41E",
        date: "August 2014 - Feburary 2018",
        points: [
          "As a key team member, I played a pivotal role in developing desktop applications tailored to the factory's specific needs. These applications streamlined various processes, enhancing efficiency and productivity.", 
          "Collaborated closely with a senior programmer to implement new features and resolve software bugs. This collaborative effort ensured the software's functionality and improved the user experience.", 
          "Managed the factory's database using SQL Server Management Studio 2008, meticulously maintaining data accuracy and currency. This data integrity was crucial in supporting the factory's operations.", 
          "Contributed significantly to the company's noble mission of refurbishing and donating computer devices to schools in need. My work directly contributed to bridging the digital divide and promoting educational equity by enabling students to access technology resources."
        ] 
      },
      ,{
        title: "Student",
        company_name: "Univerity of the People",
        icon: web,
        iconBg: "#5BE10D",
        date: "November 2020 - November 2024",
        points: [
          "Proficient in a range of programming languages, including Python, Java, JavaScript, and TypeScript. These languages have been integral in developing various software applications and projects.", 
          "Experienced in utilizing modern frameworks like React, Node.js, Next.js, and Tailwind CSS to create dynamic and responsive web applications. These frameworks have enabled me to build user-friendly interfaces and optimize web performance.", 
          "Skilled in working with diverse database technologies such as SQL Server Management Studio, MongoDB, SQLite, and Sanity. Proficiency in database management facilitates efficient data storage, retrieval, and analysis in software projects.", 
          "Engaged in a comprehensive study of computer engineering, encompassing computer architecture, computer networks, application design, and project management. This knowledge base allows me to approach software development from both a technical and strategic perspective, ensuring robust and well-structured solutions."
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
        name: "Threads Clone",
        description: "Full functioning Threads clone built on Next.js community feature",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient"
          },
          {
            name: "Next.js",
            color: "green-text-gradient"
          },
          {
            name: "tailwind",
            color: "pink-text-gradient"
          },
        ],
        image: threads,
        source_code_link: "https://github.com/dannyCSStudent/threads-clone"
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