import { Component, input } from '@angular/core';
import { TechnicalSkills } from '../../interfaces/technicalskills-interface';

@Component({
  selector: 'app-technical-skill-card',
  imports: [],
  templateUrl: './technical-skill-card.html',
  styleUrl: './technical-skill-card.css',
})
export class TechnicalSkillCard {
  info = input.required<TechnicalSkills>();

  isHovered = false;
  onHover(state: boolean) {
    this.isHovered = state;
  }

  baseCardCSS ="flex flex-row w-[400px] h-[100px] rounded-xl border-1";
  hoveredCSS = this.baseCardCSS + " bg-gray-100"
  regularCSS = this.baseCardCSS + " bg-white"
}
