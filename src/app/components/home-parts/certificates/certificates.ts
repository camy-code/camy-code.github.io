import { Component , input} from '@angular/core';
import { TechnicalSkills } from '../../../interfaces/technicalskills-interface';
import { CertificateCard } from '../../../certificate-card/certificate-card';
@Component({
  selector: 'app-certificates',
  imports: [CertificateCard],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css',
})
export class Certificates {
  infoArr = input.required<Array<TechnicalSkills>>();
}
