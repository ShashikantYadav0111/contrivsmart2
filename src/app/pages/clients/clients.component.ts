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

  clients=[
    {
      name:'Shiva Technologies',
      logo:'./shiva.jpeg',
      testimonial:'Amazing Website design and good post work services',
      rating:'⭐⭐⭐⭐',
      siteLink:'https://www.shivatechnologies.com/'
    },
    {
      name:'Unlisted Equities Ltd',
      logo:'./ue.png',
      testimonial:'Amazing Website design and good post work services',
      rating:'⭐⭐⭐⭐⭐',
      siteLink:'https://unlisted-equities.netlify.app/'
    },
    {
      name:'Grp Careers',
      logo:'./grp.png',
      testimonial:'Amazing Website design and good post work services',
      rating:'⭐⭐⭐⭐',
      siteLink:'https://grp-careers.netlify.app/'
    },
  ]
}
