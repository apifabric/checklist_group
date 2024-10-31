import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './UserReward-card.component.html',
  styleUrls: ['./UserReward-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.UserReward-card]': 'true'
  }
})

export class UserRewardCardComponent {


}