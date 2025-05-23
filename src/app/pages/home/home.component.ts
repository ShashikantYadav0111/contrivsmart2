import { Component, OnInit } from '@angular/core';
import { ServComponent } from "../../components/serv/serv.component";
import { MsmeComponent } from "../../components/msme/msme.component";
import { ClientsComponent } from "../clients/clients.component";
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterModule } from '@angular/router';
declare var particlesJS: any;
@Component({
  selector: 'app-home',
  imports: [ServComponent, MsmeComponent, ClientsComponent,FooterComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    particlesJS.load('particles-js', 'particles-config.json', function () {
      console.log('Particles.js config loaded');
    });
  
    }
  
}
