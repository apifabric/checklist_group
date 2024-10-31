import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './DailyGoal-card.component.html',
  styleUrls: ['./DailyGoal-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.DailyGoal-card]': 'true'
  }
})

export class DailyGoalCardComponent {


}