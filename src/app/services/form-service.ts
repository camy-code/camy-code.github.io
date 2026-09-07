import { Service } from '@angular/core';
import { ContactInterface } from '../interfaces/contact-interface';
import { console } from 'inspector';
@Service()
export class FormService {

    sendMessage(data:ContactInterface): boolean {
        let form_status: boolean = true;

       // console.log("TODO gotta connect and API to send")
        
        return false;
    }
}