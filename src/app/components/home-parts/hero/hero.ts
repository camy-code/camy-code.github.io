import { Component, input } from '@angular/core';
import { InfoService } from '../../../services/info-service';
import { ColorService } from '../../../services/color-service';

import { LandpageInterface } from '../../../interfaces/landpage-interface';

import { GithubLOGO } from '../../github-logo/github-logo';

@Component({
  selector: 'app-hero',
  imports: [GithubLOGO],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  info = input.required<LandpageInterface>();

  icons = [{name:"git", logo:""} , {name:"email", logo:""}];
}
