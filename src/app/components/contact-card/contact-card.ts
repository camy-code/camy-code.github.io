import { Component, inject } from '@angular/core';
import { ContactInterface } from '../../interfaces/contact-interface';

import {FormGroup, FormControl} from "@angular/forms"
import {ReactiveFormsModule} from '@angular/forms';

import { NgClass } from '@angular/common';

import { FormService } from '../../services/form-service';

@Component({
  selector: 'app-contact-card',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.css',
})
export class ContactCard {
  error_message: string = 'Some sample error message';

    formService = inject(FormService);

    subjectOption = [
      {"text": "Select an option", value:null},
      {"text":"Freelance Project", value:"project"},
      {"text":"Tutoring", value:"tutor"},
      {"text":"Other", value:"other"}
    ]
    placeHolderValues = {
          fullName:"John doe",
    email:"john@example.com",
    Subject:this.subjectOption[0],
    Other:"What is the subject of your message?",
    message:["Enter your message here",
      "Tell me about your project idea.",
      "Tell me about what you would like to learn.",
      "Elaborate on your the subject here."
    ]
    }

    contactForm = new FormGroup({
      fullName:new FormControl(''),
      email:new FormControl(''),
      Subject:new FormControl(null),
      message:new FormControl('')
    });

    
    
    onSubmit(): void {
      // TODO: check if the data is clean
      const contactValues: ContactInterface = {
        fullName: this.contactForm.value.fullName ?? '',
        email: this.contactForm.value.email ?? '',
        Subject: this.contactForm.value.Subject ?? '',
        message: this.contactForm.value.message ?? ''
      };

      console.log("Contact Values: ", contactValues);

      // Data cleaning

      let form_status: boolean = this.formService.sendMessage(contactValues);
      if (form_status) { // a successful send
        // TODO
      } else { // an error send
          // TODO
      }

    }
}
