import { Component, inject, signal } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private breakpointObserver = inject(BreakpointObserver)

  isMobile = signal(false)

  constructor() {
     this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      // Update signal when screen size crosses threshold
      this.isMobile.set(result.matches);
    });
  }
}
