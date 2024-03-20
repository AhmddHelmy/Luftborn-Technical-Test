import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private url = environment.apiURL;
  constructor(private HttpClient: HttpClient) { }

  getProducts() {
    return this.HttpClient.get(this.url);
  }
}
