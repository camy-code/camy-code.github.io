import { Component, input } from '@angular/core';
import { ProjectInterface } from '../../../interfaces/projects-interface';
import { ProjectCard } from '../../project-card/project-card';
@Component({
  selector: 'app-project',
  imports: [ProjectCard],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  infoArr = input.required<Array<ProjectInterface>>();
}
