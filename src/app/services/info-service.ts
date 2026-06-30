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

  // TODO later for pictures
  technicalSkills: Array<TechnicalSkills> = [
  {
    logo: 'assets/logos/angular.svg',
    color: '#DD0031',
    title: 'Angular',
    description: 'A powerful TypeScript-based framework for building scalable, single-page web applications.'
  },
  {
    logo: 'assets/logos/firebase.svg',
    color: '#FFCA28',
    title: 'Firebase',
    description: 'A backend platform providing authentication, databases, hosting, cloud functions, and analytics.'
  },
  {
    logo: 'assets/logos/python.svg',
    color: '#3776AB',
    title: 'Python',
    description: 'A versatile programming language used for web development, automation, data science, and AI.'
  },
  {
    logo: 'assets/logos/tailwindcss.svg',
    color: '#06B6D4',
    title: 'Tailwind CSS',
    description: 'A utility-first CSS framework for rapidly building modern, responsive user interfaces.'
  },
  {
    logo: 'assets/logos/github.svg',
    color: '#181717',
    title: 'GitHub',
    description: 'A platform for version control, collaboration, and hosting Git repositories.'
  },
  {
    logo: 'assets/logos/typescript.svg',
    color: '#3178C6',
    title: 'TypeScript',
    description: 'A strongly typed superset of JavaScript that improves code quality and developer productivity.'
  }
];

  projects: Array<ProjectInterface> = [
    {
      imgURL: '',
      demoURL: '',
      title: '',
      desc: '',
      techUsed: []
    }
  ];

  getLandingPageInfo(): LandpageInterface {
    return this.landingPageInfo;
  }

  getTechnicalSkills(): Array<TechnicalSkills> {
    return this.technicalSkills;
  }

  getProjects(): Array<ProjectInterface> {
    return this.projects;
  }
}
