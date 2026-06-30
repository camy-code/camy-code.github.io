import { Component } from '@angular/core';

import { Certificates } from '../../components/home-parts/certificates/certificates';
import { Contact } from '../../components/home-parts/contact/contact';
import { Hero } from '../../components/home-parts/hero/hero';
import { Project } from '../../components/home-parts/project/project';
import { Techskill } from '../../components/home-parts/techskill/techskill';

@Component({
  selector: 'app-home',
  imports: [Certificates, Contact, Hero, Project, Techskill],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
