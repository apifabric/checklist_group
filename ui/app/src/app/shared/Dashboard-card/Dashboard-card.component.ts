import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Dashboard-card.component.html',
  styleUrls: ['./Dashboard-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Dashboard-card]': 'true'
  }
})

export class DashboardCardComponent {


}