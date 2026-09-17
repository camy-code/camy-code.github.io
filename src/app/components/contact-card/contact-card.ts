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
 
  // We will update these once you send
error_send = signal(false);
success_send = signal(false);
failed_send = signal(false)

// This is to flag which fields need work

    formService = inject(FormService);

    subjectOption = [
      {"text": "Select an option", value:''},
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
      Subject:new FormControl('', [Validators.required]),
      message:new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(500)])
    });

    

    
    
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

      if (this.contactForm.valid) {
        console.log("Send away")
        let val = this.formService.sendMessage(contactValues);
        if (val == true) {
          this.success_send.set(true); // This means we got a success
        } else {
          this.error_send.set(true);
          console.log("Some error")
        }
      } else {
        console.log("Something fishy is going on")
        this.failed_send.set(true)
      }

    }
}
