import { Component, input } from '@angular/core';
import { TechnicalSkills } from '../interfaces/technicalskills-interface';
@Component({
  selector: 'app-certificate-card',
  imports: [],
  templateUrl: './certificate-card.html',
  styleUrl: './certificate-card.css',
})
export class CertificateCard {
  info = input.required<TechnicalSkills>();
}
