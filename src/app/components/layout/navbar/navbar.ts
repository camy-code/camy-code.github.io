import { Component, inject, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {NgClass} from '@angular/common';
import { MenuInterface } from '../../../interfaces/menu-interface';

import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private breakpointObserver = inject(BreakpointObserver);

  isMobile = signal(false);
  isMenuOpen = signal(false);
  

  menuItems: Array<MenuInterface> = [
   // { title: 'Home', link: '#hero-section'}, 
    { title: 'Projects', link: '#project-section' },
    { title: 'Technical skills', link: '#techskill-section' },
    {title: 'Certificates', link: '#certificates-section'},
    { title: 'Contact', link: '#contact-section' },
  ];

  constructor() {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe((result) => {
      // Update signal when screen size crosses threshold
      this.isMobile.set(result.matches);
      this.isMenuOpen.set(false); // Close menu when switching to mobile view
    });
  }

  // Time to add the close click thing
  @HostListener('document:click',['$event'])
  onDocumentClick(event:MouseEvent){
    const target = event.target as HTMLElement;
    

    if (!target.closest('nav') && this.isMobile() == true && this.isMenuOpen() == true) {
      //console.log("Nav was not touched!")
      this.isMenuOpen.set(false)
    }
  }
}
