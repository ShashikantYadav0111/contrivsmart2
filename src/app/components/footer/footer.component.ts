import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  contactDetails = {
    email:'contact@contrivsmart.com',
    phone1:'+91 93199 11470',
    phone2:'+91 80813 82025'
  }
}
