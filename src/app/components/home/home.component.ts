import { Component } from '@angular/core';
import { MainCardComponent } from './home-components/main-card/main-card.component';
import { SmallCardComponent } from './home-components/small-card/small-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainCardComponent, SmallCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
