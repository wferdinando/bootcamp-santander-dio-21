import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  stocks: Stock[] = [];

  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.getStock();
  }

  public getStock() {
    this.service.getStocks().subscribe({
      next: (res) => { this.stocks = res },
      error: (err) => { console.log(err) }
    });
  }


}
