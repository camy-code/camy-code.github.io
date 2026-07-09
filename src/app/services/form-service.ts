import { Service } from '@angular/core';
import { ContactInterface } from '../interfaces/contact-interface';
import { console } from 'inspector';
@Service()
export class FormService {

    sendMessage(data:ContactInterface): boolean {
        let form_status: boolean = true;

        // console.log("Still need to do");
        // console.log("Sending data with from "  + data.fullName);

        return form_status;
    }
}