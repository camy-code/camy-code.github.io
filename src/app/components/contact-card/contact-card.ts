import { Component } from '@angular/core';
import { ContactInterface } from '../../interfaces/contact-interface';

import {FormGroup, FormControl} from "@angular/forms"
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact-card',
  imports: [],
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.css',
})
export class ContactCard {
    //   fullName:string,
    // email:string,
    // Subject:string,
    // Other?:string,
    // message:string
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
      Subject:new FormControl('red river red river'),
      Other:new FormControl(''),
      message:new FormControl('')
    });

    onSubmit():void {
      console.log("Here is the form value");
      // TODO
      console.log(this.contactForm.value);
    }
}
