import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-client-card',
  imports: [],
  templateUrl: './client-card.component.html',
  styleUrl: './client-card.component.scss'
})
export class ClientCardComponent {
  @Input()clientDetails:any={}

}
