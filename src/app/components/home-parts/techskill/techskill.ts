import { Component,input } from '@angular/core';

import { TechnicalSkills } from '../../../interfaces/technicalskills-interface';
import { TechnicalSkillCard } from '../../technical-skill-card/technical-skill-card';

@Component({
  selector: 'app-techskill',
  imports: [TechnicalSkillCard],
  templateUrl: './techskill.html',
  styleUrl: './techskill.css',
})
export class Techskill {
  infoArr = input.required<Array<TechnicalSkills>>();
}
