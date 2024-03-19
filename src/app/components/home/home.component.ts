import { Component } from '@angular/core';
import { MainCardComponent } from './home-components/main-card/main-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
