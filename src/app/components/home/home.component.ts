import { Component, OnInit } from '@angular/core';
import { MainCardComponent } from './home-components/main-card/main-card.component';
import { SmallCardComponent } from './home-components/small-card/small-card.component';
import { HomeService } from './home.service';
import { Products } from '../../interfaces/products';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainCardComponent, SmallCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  products: Products[] = [];
  colors: string[] = ['#FF8B64', '#55C2E6', '#FF5E7D', '#FF8B64', '#55C2E6', '#F1C75B', '#7335D2', '#F1C75B', '#4BCF82', '#7335D2'];
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getProducts();
    this.products = this.homeService.products$.getValue();
  }
}
