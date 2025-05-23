import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import * as AOS from 'aos';

@Component({
  selector: 'app-serv',
  imports: [RouterModule],
  templateUrl: './serv.component.html',
  styleUrl: './serv.component.scss',
})
export class ServComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }

  
  
}
