import { Component } from '@angular/core';
import { MenuInterface } from '../../../interfaces/menu-interface';

// Logo imports
import { GithubLOGO } from '../../logos/github-logo/github-logo';
import { EmailLOGO } from '../../logos/email-logo/email-logo';
import { LinkdinLOGO } from "../../logos/linkdin-logo/linkdin-logo";

import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [NgComponentOutlet],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

 logoIcons = [
    {name:"git", logo: GithubLOGO},
    {name:"email", logo: EmailLOGO},
    {name:"linkdin", logo: LinkdinLOGO}
  ];


}
