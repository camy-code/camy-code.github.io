import { Component, inject } from '@angular/core';
import { ContactInterface } from '../../interfaces/contact-interface';

import {FormGroup, FormControl} from "@angular/forms"
import {ReactiveFormsModule, Validators} from '@angular/forms';

import { NgClass } from '@angular/common';

import { FormService } from '../../services/form-service';

import { signal } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.css',
})
export class ContactCard {
  error_message = signal("");
has_error = signal(false)

// This is to flag which fields need work
name_check = signal(false);
email_check = signal(false);
option_check = signal(false);
msg_check = signal(false);

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
      fullName:new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      email:new FormControl('', [Validators.required, Validators.email]),
      Subject:new FormControl(null, [Validators.required]),
      message:new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(500)])
    });

    constructor() {

    }

    
    
    onSubmit(): void {
      // TODO: check if the data is clean
      const contactValues: ContactInterface = {
        fullName: this.contactForm.value.fullName ?? '',
        email: this.contactForm.value.email ?? '',
        Subject: this.contactForm.value.Subject ?? 'null',
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
