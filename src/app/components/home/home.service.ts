import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { Products } from '../../interfaces/products';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  private url = environment.apiURL;
  products$ = new BehaviorSubject<Products[]>([]);
  constructor(private HttpClient: HttpClient) { }

  getProducts() {
    this.HttpClient.get<Products[]>(this.url)
      .subscribe(products => {
        this.products$.next(products);
      });
  }
}
