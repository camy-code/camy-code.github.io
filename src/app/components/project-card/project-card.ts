import { Component, input } from '@angular/core';

import { ProjectInterface } from '../../interfaces/projects-interface';
@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  info = input.required<ProjectInterface>();

  isHovered = false;

  onHover(state:boolean):void {
    this.isHovered = state;
    console.log("WE GOT HOVERED")
  }

}
