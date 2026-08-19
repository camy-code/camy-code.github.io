import { Component } from '@angular/core';
import { MenuInterface } from '../../../interfaces/menu-interface';


@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

   menuItems: Array<MenuInterface> = [
      { title: 'Home', link: '#hero-section'}, 
      { title: 'Projects', link: '#project-section' },
      { title: 'Technical skills', link: '#techskill-section' },
      {title: 'Certificates', link: '#certificates-section'},
      { title: 'Contact', link: '#contact-section' },
    ];
}
