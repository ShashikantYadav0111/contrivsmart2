import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-contact',
  imports: [FormsModule, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
   contact = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    console.log('Contact Form Data:', this.contact);
    // You can add API call here
  }
} 
