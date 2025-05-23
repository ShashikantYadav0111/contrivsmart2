import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
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
