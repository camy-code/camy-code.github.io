import { Service } from '@angular/core';

// Import the interfaces
import { LandpageInterface } from '../interfaces/landpage-interface';
import { ProjectInterface } from '../interfaces/projects-interface';
import { TechnicalSkills } from '../interfaces/technicalskills-interface';

@Service()
export class InfoService {
  landingPageInfo: LandpageInterface = {
    imgURL:
      'https://pbs.twimg.com/media/GhybPXwaoAA-5KD.jpg',
    altIMG: 'A picture of me!',
    title: 'Computer Scientist',
    greeting: 'Hello! I am Cam!',
    spiel:
      'I’m a computer scientist with a growing passion for front-end design and a focus on building thoughtful, visually engaging experiences. Lately, I’ve been interested in creating practical, user-friendly solutions for individuals and businesses in less tech-focused industries.',
  };

  technicalSkills: Array<TechnicalSkills> = [
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Angular_icon.svg/250px-Angular_icon.svg.png',
    color: '#DD0031',
    title: 'Angular',
    description: 'A TypeScript framework for building scalable single-page web applications.'
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Firebase_icon.svg/250px-Firebase_icon.svg.png',
    color: '#FFCA28',
    title: 'Firebase',
    description: 'A backend platform for authentication, databases, hosting, and cloud services.'
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/250px-Python-logo-notext.svg.png',
    color: '#3776AB',
    title: 'Python',
    description: 'A versatile programming language for web development, automation, and data science.'
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/330px-Tailwind_CSS_Logo.svg.png',
    color: '#06B6D4',
    title: 'Tailwind CSS',
    description: 'A utility-first CSS framework for creating responsive user interfaces.'
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/250px-Octicons-mark-github.svg.png',
    color: '#181717',
    title: 'GitHub',
    description: 'A platform for hosting, managing, and collaborating on Git repositories.'
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/250px-Typescript_logo_2020.svg.png',
    color: '#3178C6',
    title: 'TypeScript',
    description: 'A typed superset of JavaScript that enhances code reliability and maintainability.'
  }
];

  projects: Array<ProjectInterface> = [
    {
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/960px-Tailwind_CSS_Logo.svg.png',
       altIMG: 'Tailwind logo to change later',
      demoURL: 'https://www.google.com/?client=safari',
      title: 'Coming soon',
      desc: 'Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon Coming soon',
      techUsed: [this.technicalSkills[0], this.technicalSkills[1]]
    }
  ];

  certificates:Array<TechnicalSkills> = [
    {
      logo: './../../assets/coding.svg',
      color: '#FFCA28',
      title: 'Coming soon',
      description: 'We are learning something new....'
    }
  ]

  getLandingPageInfo(): LandpageInterface {
    return this.landingPageInfo;
  }

  getTechnicalSkills(): Array<TechnicalSkills> {
    return this.technicalSkills;
  }

  getProjects(): Array<ProjectInterface> {
    return this.projects;
  }

  getCertificates(): Array<TechnicalSkills> {
    return this.certificates;
  }
}
