import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Reward-card.component.html',
  styleUrls: ['./Reward-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Reward-card]': 'true'
  }
})

export class RewardCardComponent {


}