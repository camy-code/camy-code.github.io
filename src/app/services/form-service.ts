import { Service } from '@angular/core';
import { ContactInterface } from '../interfaces/contact-interface';

import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Service()
export class FormService {

    serviceID = "service_7276vra"
    templateID = "template_ywdxev3"
    publicKey = "sTkyYY4uK0me1oEbS"

    async sendMessage(data: ContactInterface) {
  try {
    await emailjs.send(
      this.serviceID,
      this.templateID,
      {
         name: data.fullName,
    email: data.email,
    subject: data.Subject,
    message: data.message
      },
      {
        publicKey: this.publicKey
      }
    );

    return true;
  } catch (error) {
    console.log('Failed to send:', error);
    return false;
  }
}
}