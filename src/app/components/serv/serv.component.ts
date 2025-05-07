import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-serv',
  imports: [],
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
