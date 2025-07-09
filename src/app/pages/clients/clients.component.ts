import { Component } from '@angular/core';
import { ClientCardComponent } from "../../components/client-card/client-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  imports: [ClientCardComponent,CommonModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {

  clients = [
  {
    name: 'Shiva Technologies',
    logo: './shiva.jpeg',
    testimonial: 'The team was highly responsive and delivered a clean, professional website on time. Very satisfied with their service and support!',
    rating: '⭐⭐⭐⭐',
    siteLink: 'https://www.shivatechnologies.com/'
  },
  {
    name: 'Unlisted Equities Ltd',
    logo: './ue.png',
    testimonial: 'They understood our business needs and created a seamless, modern platform. The SEO boost we got was a huge bonus!',
    rating: '⭐⭐⭐⭐⭐',
    siteLink: 'https://unlisted-equities.netlify.app/'
  },
  // {
  //   name: 'Grp Careers',
  //   logo: './grp.png',
  //   testimonial: 'Excellent communication and attention to detail. The final site exceeded our expectations in both design and usability.',
  //   rating: '⭐⭐⭐⭐',
  //   siteLink: 'https://grp-careers.netlify.app/'
  // }
];
}
