import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Stock from '../shared/models/stock-model';

const baseUrl = "https://bootcamp-santander-2021.herokuapp.com/bootcamp";

@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  

  constructor(private http: HttpClient) { }

  public getStocks() : Observable<Stock[]>{
    return this.http.get<Stock[]>(`${baseUrl}/stock`);
  }
}
