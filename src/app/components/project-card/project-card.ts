import { Component, input } from '@angular/core';

import { NgClass } from '@angular/common';


import { ProjectInterface } from '../../interfaces/projects-interface';

@Component({
  selector: 'app-project-card',
  imports: [NgClass],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  info = input.required<ProjectInterface>();

  isHovered = false; // could use a signal here later if u wanted to refactor
  baseCardCSS = " relative flex flex-row w-3/4 rounded-xl border-2 mx-auto";

  onHover(state:boolean):void {
    this.isHovered = state;
    
  }


}
